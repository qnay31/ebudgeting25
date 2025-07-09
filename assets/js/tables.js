'use strict';

$(document).ready(function () {
    // table verifikasi program
    $('#verifikasiProgram').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_program.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verProgram",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 7,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#program${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnDelete${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="program${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-program${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Program</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="program" value="${data["verProgram"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="text" class="form-control" name="kategori" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editProgram${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#program${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-program${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnDelete${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_program.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan Berhasil Dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiProgram").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editProgram${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-program${data["verEdit"]} input[name=id]").val();
                            let program = $(".edit-program${data["verEdit"]} input[name=program]").val();
                            let kategori = $(".edit-program${data["verEdit"]} input[name=kategori]").val();
                            let tglPengajuan = $(".edit-program${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-program${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-program${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-program${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-program${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-program${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-program${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-program${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-program${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-program${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-program${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-program${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-program${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-program${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-program${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_program.php",
                                    data: {
                                        inputId: id,
                                        inputProgram: program,
                                        inputKategori: kategori,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiProgram").DataTable().ajax.reload()
                                            $('#program${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 8,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table verifikasi logistik
    $('#verifikasiLogistik').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_logistik.php',
            type: 'GET'
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [3, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#logistik${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnDelLogistik${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="logistik${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-logistik${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLogistik${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#logistik${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-logistik${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnDelLogistik${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_logistik.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiLogistik").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editLogistik${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-logistik${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-logistik${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-logistik${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-logistik${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-logistik${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-logistik${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-logistik${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-logistik${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-logistik${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-logistik${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-logistik${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-logistik${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-logistik${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-logistik${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-logistik${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-logistik${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-logistik${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-logistik${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_logistik.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiLogistik").DataTable().ajax.reload()
                                            $('#logistik${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table verifikasi aset
    $('#verifikasiAset').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_aset.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verJenis",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verQty",
            "render": function (data) {
                return `${data == 0 ? `<div class="text-center">-</div>`:`<div class="text-center">${data} Pcs</center>`}`
            }
        }, {
            "targets": 6,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 8,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#aset${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnDelAset${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </di>
    
                    <!-- Modal -->
                    <div class="modal fade" id="aset${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-aset${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Pengajuan</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="jenis" value="${data["verJenis"]}" readonly>
                                        </div>
                                        
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        ${data["verJenis"] == "Pembangunan" ? `
                                        <input type="hidden" name="qty" value="${data["verQty"]}">` 
                                        : `
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Qty</b></span>
                                            <input type="text" class="form-control rupiah" name="qty" maxlength="11" placeholder="qty perencaan"
                                                onkeypress="return hanyaAngka(event)" autocomplete="off" value="${data["verQty"]}">
                                            <span class="input-group-text" id="basic-addon1"><b>Pcs</b></span>
                                        </div>
                                        <label for="" class="form-label">
                                            <span class="alertQty text-danger"></span>
                                        </label>
                                        `}
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editAset${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#aset${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-aset${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnDelAset${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_aset.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiAset").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editAset${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-aset${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-aset${data["verEdit"]} input[name=pengajuan]").val();
                            let jenis = $(".edit-aset${data["verEdit"]} input[name=jenis]").val();
                            let tglPengajuan = $(".edit-aset${data["verEdit"]} input[name=tglPengajuan]").val()
                            let qty = $(".edit-aset${data["verEdit"]} input[name=qty]").val()
                            let perencanaan = $(".edit-aset${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-aset${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-aset${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-aset${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-aset${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-aset${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (qty == "") {
                                $(".edit-aset${data["verEdit"]} input[name=qty]").focus();
                                $(".edit-aset${data["verEdit"]} input[name=qty]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-aset${data["verEdit"]} input[name=qty]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertQty").html("QTY tidak boleh kosong!");
                                    } else {
                                        $(".edit-aset${data["verEdit"]} input[name=qty]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertQty").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-aset${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-aset${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-aset${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-aset${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-aset${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-aset${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-aset${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-aset${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-aset${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_aset.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputJenis: jenis,
                                        inputTgl: tglPengajuan,
                                        inputQty: qty,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiAset").DataTable().ajax.reload()
                                            $('#aset${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 9,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table verifikasi uang makan 
    $('#verifikasiUangMakan').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_uang_makan.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#uangMakan${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnUangMakan${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="uangMakan${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-uangMakan${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editUangMakan${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#uangMakan${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-uangMakan${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnUangMakan${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_uang_makan.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiUangMakan").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editUangMakan${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-uangMakan${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-uangMakan${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-uangMakan${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-uangMakan${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-uangMakan${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-uangMakan${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-uangMakan${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-uangMakan${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-uangMakan${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-uangMakan${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-uangMakan${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-uangMakan${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-uangMakan${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
                                
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_uang_makan.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiUangMakan").DataTable().ajax.reload()
                                            $('#uangMakan${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table verifikasi gaji 
    $('#verifikasiGaji').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_gaji_karyawan.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#gaji${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnGaji${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="gaji${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-gaji${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editGaji${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#gaji${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-gaji${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnGaji${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_gaji.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiGaji").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editGaji${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-gaji${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-gaji${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-gaji${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-gaji${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-gaji${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-gaji${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-gaji${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-gaji${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-gaji${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-gaji${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-gaji${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-gaji${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-gaji${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-gaji${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-gaji${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-gaji${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-gaji${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-gaji${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_gaji.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiGaji").DataTable().ajax.reload()
                                            $('#gaji${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table biaya lainnya
    $('#verifikasiLainnya').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_biaya_lainnya.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lainnya${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLainnya${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lainnya${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lainnya${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLainnya${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lainnya${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lainnya${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnLainnya${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_lainnya.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiLainnya").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editLainnya${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-lainnya${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-lainnya${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-lainnya${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-lainnya${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-lainnya${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-lainnya${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-lainnya${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lainnya${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lainnya${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-lainnya${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-lainnya${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lainnya${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lainnya${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-lainnya${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-lainnya${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lainnya${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-lainnya${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lainnya${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_lainnya.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiLainnya").DataTable().ajax.reload()
                                            $('#lainnya${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table maintenance
    $('#verifikasiMaintenance').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_maintenance.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: [""]
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#maintenance${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnMaintenance${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="maintenance${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-maintenance${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editMaintenance${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#maintenance${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-maintenance${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnMaintenance${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_maintenance.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiMaintenance").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editMaintenance${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-maintenance${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-maintenance${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-maintenance${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-maintenance${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-maintenance${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-maintenance${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-maintenance${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-maintenance${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-maintenance${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-maintenance${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-maintenance${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-maintenance${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-maintenance${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-maintenance${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-maintenance${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-maintenance${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-maintenance${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-maintenance${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_maintenance.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiMaintenance").DataTable().ajax.reload()
                                            $('#maintenance${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table operasional
    $('#verifikasiOperasional').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_operasional.php',
            type: "GET"
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: [""]
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#operasional${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnOperasional${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="operasional${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-operasional${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editOperasional${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#operasional${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-operasional${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnOperasional${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_operasional.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiOperasional").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editOperasional${data["verEdit"]}").click(function (e) {
                            let id = $(".edit-operasional${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-operasional${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-operasional${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-operasional${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-operasional${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-operasional${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-operasional${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-operasional${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-program${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-operasional${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-operasional${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-operasional${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-operasional${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-operasional${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-operasional${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-operasional${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-operasional${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-operasional${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-operasional${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-operasional${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-operasional${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-operasional${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-operasional${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_operasional.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiOperasional").DataTable().ajax.reload()
                                            $('#operasional${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table paud
    $('#verifikasiPaud').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": 'table_ajax/verifikasi_paud.php',
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: [""]
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#paud${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="#" id="btnPaud${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="paud${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-paud${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editPaud${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#paud${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-paud${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnPaud${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_paud.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiPaud").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editPaud${data["verEdit"]}").click(function (event) {
                            let id = $(".edit-paud${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-paud${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-paud${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-paud${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-paud${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-paud${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-paud${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-paud${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-paud${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-paud${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-paud${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-paud${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-paud${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            
                            } else if (anggaran == "") {
                                $(".edit-paud${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-paud${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-paud${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-paud${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-paud${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_paud.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiPaud").DataTable().ajax.reload()
                                            $('#paud${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            event.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // table jasa
    $('#verifikasiJasa').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": 'table_ajax/verifikasi_jasa.php',
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPosisi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 6,
            data: {
                data: [""]
            },
            "render": function (data) {
                var date = data["verPengajuan"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#jasa${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="#" id="btnJasa${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="jasa${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-jasa${data["verEdit"]}">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                            <input type="hidden" name="id" value="${data["verEdit"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["verKategori"]}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                            <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="perencanaan" class="form-label">Perencanaan</label>
                                            <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["verDeskripsi"]}">
                                            <span class="alertPerencanaan text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="anggaran" class="form-label">Anggaran</label>
                                            <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["verAnggaran"]}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertAnggaran text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editJasa${data["verEdit"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#jasa${data["verEdit"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-jasa${data["verEdit"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        $('#btnJasa${data["verEdit"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                var id = ${data["verEdit"]};
                                $.ajax({
                                    url: 'pages/delete/delete_jasa.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Pengajuan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiJasa").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page input
                        $("#editJasa${data["verEdit"]}").click(function (event) {
                            let id = $(".edit-jasa${data["verEdit"]} input[name=id]").val();
                            let pengajuan = $(".edit-jasa${data["verEdit"]} input[name=pengajuan]").val();
                            let tglPengajuan = $(".edit-jasa${data["verEdit"]} input[name=tglPengajuan]").val()
                            let perencanaan = $(".edit-jasa${data["verEdit"]} input[name=perencanaan]").val()
                            let anggaran = $(".edit-jasa${data["verEdit"]} input[name=anggaran]").val()
                            if(tglPengajuan == "") {
                                $(".edit-jasa${data["verEdit"]} input[name=tglPengajuan]").focus();
                                $(".edit-jasa${data["verEdit"]} input[name=tglPengajuan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-jasa${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                    } else {
                                        $(".edit-jasa${data["verEdit"]} input[name=tglPengajuan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (perencanaan == "") {
                                $(".edit-jasa${data["verEdit"]} input[name=perencanaan]").focus();
                                $(".edit-jasa${data["verEdit"]} input[name=perencanaan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-jasa${data["verEdit"]} input[name=perencanaan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                    } else {
                                        $(".edit-jasa${data["verEdit"]} input[name=perencanaan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertPerencanaan").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (anggaran == "") {
                                $(".edit-jasa${data["verEdit"]} input[name=anggaran]").focus();
                                $(".edit-jasa${data["verEdit"]} input[name=anggaran]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-jasa${data["verEdit"]} input[name=anggaran]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                    } else {
                                        $(".edit-jasa${data["verEdit"]} input[name=anggaran]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-jasa${data["verEdit"]} .alertAnggaran").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/edit_jasa.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglPengajuan,
                                        inputRencana: perencanaan,
                                        inputAnggaran: anggaran
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Pengajuan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Pengajuan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#verifikasiJasa").DataTable().ajax.reload()
                                            $('#jasa${data["verEdit"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
    
                            event.preventDefault()
                        })
                    </script>
                    `
                return edit
            }
        }, {
            "targets": 7,
            data: "verAnggaran",
            "render": function (data) {
                return Capitalize(data);
            }
        }]
    });

    // reload table verifikasi
    $('.verifikasi').one('click', function () {
        $('#verifikasiProgram').DataTable().ajax.reload();
    });

    // relaod verifikasi table program
    $(".tableProgram .reload").click(function () {
        $("#verifikasiProgram").DataTable().ajax.reload()
    })

    $(".verProgram").one('click', function () {
        $("#verifikasiProgram").DataTable().ajax.reload()
    })

    // reload verifikasi table logistik
    $(".tableLogistik .reload").click(function () {
        $("#verifikasiLogistik").DataTable().ajax.reload()
    })

    $(".verLogistik").one('click', function () {
        $("#verifikasiLogistik").DataTable().ajax.reload()
    })

    // reload verifikasi table aset yayasan
    $(".tableAset .reload").click(function () {
        $("#verifikasiAset").DataTable().ajax.reload()
    })

    $(".verAset").one('click', function () {
        $("#verifikasiAset").DataTable().ajax.reload()
    })

    // reload verifikasi table uang makan
    $(".tableUangMakan .reload").click(function () {
        $("#verifikasiUangMakan").DataTable().ajax.reload()
    })

    $(".verMakan").one('click', function () {
        $("#verifikasiUangMakan").DataTable().ajax.reload()
    })

    // reload verifikasi table gaji
    $(".tableGaji .reload").click(function () {
        $("#verifikasiGaji").DataTable().ajax.reload()
    })

    $(".verGaji").one('click', function () {
        $("#verifikasiGaji").DataTable().ajax.reload()
    })

    // reload verifikasi table biaya lainnya
    $(".tableLainnya .reload").click(function () {
        $("#verifikasiLainnya").DataTable().ajax.reload()
    })

    $(".verLain").one('click', function () {
        $("#verifikasiLainnya").DataTable().ajax.reload()
    })

    // reload verifikasi table maintenance
    $(".tableMaintenance .reload").click(function () {
        $("#verifikasiMaintenance").DataTable().ajax.reload()
    })

    $(".verMain").one('click', function () {
        $("#verifikasiMaintenance").DataTable().ajax.reload()
    })

    // reload verifikasi table operasional
    $(".tableOperasional .reload").click(function () {
        $("#verifikasiOperasional").DataTable().ajax.reload()
    })

    $(".verOperasional").one('click', function () {
        $("#verifikasiOperasional").DataTable().ajax.reload()
    })

    // reload verifikasi table paud
    $(".tablePaud .reload").click(function () {
        $("#verifikasiPaud").DataTable().ajax.reload()
    })

    $(".verPaud").one('click', function () {
        $("#verifikasiPaud").DataTable().ajax.reload()
    })

    // reload verifikasi table jasa
    $(".tableJasa .reload").click(function () {
        $("#verifikasiJasa").DataTable().ajax.reload()
    })

    $(".verJasa").one('click', function () {
        $("#verifikasiJasa").DataTable().ajax.reload()
    })

    // table laporan program
    $('#lapProgram').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_program.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapProgram${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDelete${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapProgram${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapProgram${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Program :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="program" value="${data["lapProgram"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="text" class="form-control" name="kategori" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapProgram${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapProgram${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapProgram${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDelete${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delProgram.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapProgram").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuProgram").empty()
                                            $("#listMenuProgram").append(data)
                                            $(".laporanProgram .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuProgram").empty()
                                            $("#listMenuProgram").append(data)
                                            $(".display-pageProgram").css("display", "block")
                                            $(".laporanProgram .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapProgram${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapProgram${data["lapId"]} input[name=id]").val();
                            let program = $(".edit-lapProgram${data["lapId"]} input[name=program]").val();
                            let kategori = $(".edit-lapProgram${data["lapId"]} input[name=kategori]").val();
                            let tglLaporan = $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (pemakaian == "") {
                                $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapProgram${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editProgram.php",
                                    data: {
                                        inputId: id,
                                        inputProgram: program,
                                        inputKategori: kategori,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapProgram").DataTable().ajax.reload()
                                            $('#lapProgram${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapProgram",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 9,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 10,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 11,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 12,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_program${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </di>
                    
                        <div id="dataModal_program${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_program${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan program
                        $('.view_data_program${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_program.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_program${data}").html(data)
                                    $("#dataModal_program${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 13,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/program/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan logistik
    $('#lapLogistik').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_logistik.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapLogistik${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteLogistik${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapLogistik${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapLogistik${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapLogistik${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapLogistik${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapLogistik${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteLogistik${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delLogistik.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapLogistik").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuLogistik").empty()
                                            $("#listMenuLogistik").append(data)
                                            $(".laporanLogistik .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuLogistik").empty()
                                            $("#listMenuLogistik").append(data)
                                            $(".display-pageLogistik").css("display", "block")
                                            $(".laporanLogistik .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapLogistik${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapLogistik${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapLogistik${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (pemakaian == "") {
                                $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLogistik${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editLogistik.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapLogistik").DataTable().ajax.reload()
                                            $('#lapLogistik${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_logistik${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_logistik${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_logistik${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan program
                        $('.view_data_logistik${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_logistik.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_logistik${data}").html(data)
                                    $("#dataModal_logistik${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/logistik/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan aset
    $('#lapAset').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_aset.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapAset${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteAset${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapAset${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapAset${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Jenis :</b></span>
                                            <input type="text" class="form-control" value="${data["lapJenis"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        ${data["lapJenis"] == "Pembangunan" ? `<input type="hidden">` : 
                                        `
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Qty Rencana :</b></span>
                                            <input type="text" class="form-control" value="${data["lapQtyAnggaran"]} Pcs" readonly>
                                        </div>
                                        `} 
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        ${data["lapJenis"] == "Pembangunan" ? `<input type="hidden" class="form-control" name="qtyTerpakai" value="0">` : 
                                        `
                                        <label for="" class="form-label">Qty Laporan</label>
                                        <div class="input-group mb-2">
                                            <span class="input-group-text" id="basic-addon1"><b>Qty</b></span>
                                            <input type="text" class="form-control rupiah" name="qtyTerpakai" maxlength="11" placeholder="Qty Pemakaian "
                                                onkeypress="return hanyaAngka(event)" autocomplete="off" value="${data["lapQtyTerpakai"]}">
                                            <span class="input-group-text" id="basic-addon1"><b>Pcs</b></span>
                                        </div>
    
                                        <label for="" class="form-label">
                                            <span class="alertQty text-danger"></span>
                                        </label>
                                        `} 
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapAset${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapAset${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapAset${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteAset${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delAset.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapAset").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuAset").empty()
                                            $("#listMenuAset").append(data)
                                            $(".laporanAset .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuAset").empty()
                                            $("#listMenuAset").append(data)
                                            $(".display-pageAset").css("display", "block")
                                            $(".laporanAset .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapAset${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapAset${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapAset${data["lapId"]} input[name=pengajuan]").val();
                            let qtyTerpakai = $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").val();
                            let tglLaporan = $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapAset${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (qtyTerpakai == "") {
                                $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").focus();
                                $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertQty").html("Qty laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertQty").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapAset${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapAset${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAset${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapAset${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAset${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputQty: qtyTerpakai,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapAset").DataTable().ajax.reload()
                                            $('#lapAset${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapJenis",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "lapQtyAnggaran",
            "render": function (data) {
                return data == 0 ? `<div class="text-center">-</div>` : `<div class="text-center">${new Intl.NumberFormat('en-US').format(data)} Pcs</div>`;
            }
        }, {
            "targets": 7,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 9,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 10,
            data: "lapQtyTerpakai",
            "render": function (data) {
                return data == 0 || data == null ? `<div class="text-center">-</div>` : `<div class="text-center">${new Intl.NumberFormat('en-US').format(data)} Pcs</div>`;
            }
        }, {
            "targets": 11,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 12,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 13,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 14,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_aset${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_aset${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_aset${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan program
                        $('.view_data_aset${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_aset.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_aset${data}").html(data)
                                    $("#dataModal_aset${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 15,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/aset_yayasan/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan uang makan
    $('#lapUangMakan').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_uang_makan.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapUangMakan${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteUangMakan${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapUangMakan${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapUangMakan${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapUangMakan${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapUangMakan${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapUangMakan${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteUangMakan${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delUangMakan.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapUangMakan").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuMakan").empty()
                                            $("#listMenuMakan").append(data)
                                            $(".laporanUangMakan .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuMakan").empty()
                                            $("#listMenuMakan").append(data)
                                            $(".display-pageUangMakan").css("display", "block")
                                            $(".laporanUangMakan .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapUangMakan${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapUangMakan${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapUangMakan${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapUangMakan${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapUangMakan").DataTable().ajax.reload()
                                            $('#lapUangMakan${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_uangMakan${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_uangMakan${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_uangMakan${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan program
                        $('.view_data_uangMakan${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_uangMakan.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_uangMakan${data}").html(data)
                                    $("#dataModal_uangMakan${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/uang_makan/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan gaji karyawan
    $('#lapGaji').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_gaji.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapGaji${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteGaji${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </di>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapGaji${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapGaji${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapGaji${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapGaji${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapGaji${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteGaji${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delGaji.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapGaji").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuGaji").empty()
                                            $("#listMenuGaji").append(data)
                                            $(".laporanGaji .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuGaji").empty()
                                            $("#listMenuGaji").append(data)
                                            $(".display-pageGaji").css("display", "block")
                                            $(".laporanGaji .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapGaji${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapGaji${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapGaji${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapGaji${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapGaji").DataTable().ajax.reload()
                                            $('#lapGaji${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_gaji${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_gaji${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_gaji${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_gaji${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_gaji.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_gaji${data}").html(data)
                                    $("#dataModal_gaji${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/gaji_karyawan/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan anggaran lain
    $('#lapLainnya').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_lainnya.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapLainnya${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteLainnya${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapLainnya${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapLainnya${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapLainnya${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapLainnya${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapLainnya${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteLainnya${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delLainnya.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapLainnya").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuLainnya").empty()
                                            $("#listMenuLainnya").append(data)
                                            $(".laporanLainnya .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuLainnya").empty()
                                            $("#listMenuLainnya").append(data)
                                            $(".display-pageLainnya").css("display", "block")
                                            $(".laporanLainnya .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapLainnya${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapLainnya${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapLainnya${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapLainnya${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapLainnya").DataTable().ajax.reload()
                                            $('#lapLainnya${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_lainnya${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_lainnya${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_lainnya${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_lainnya${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_lainnya.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_lainnya${data}").html(data)
                                    $("#dataModal_lainnya${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/anggaran_lain/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan maintenance
    $('#lapMaintenance').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_maintenance.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapMaintenance${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteMaintenance${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapMaintenance${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapMaintenance${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapMaintenance${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapMaintenance${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapMaintenance${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteMaintenance${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delMaintenance.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapMaintenance").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuMaintenance").empty()
                                            $("#listMenuMaintenance").append(data)
                                            $(".laporanMaintenance .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuMaintenance").empty()
                                            $("#listMenuMaintenance").append(data)
                                            $(".display-pageMaintenance").css("display", "block")
                                            $(".laporanMaintenance .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapMaintenance${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapMaintenance${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapMaintenance${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapMaintenance${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapMaintenance").DataTable().ajax.reload()
                                            $('#lapMaintenance${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_maintenance${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_maintenance${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_maintenance${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_maintenance${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_maintenance.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_maintenance${data}").html(data)
                                    $("#dataModal_maintenance${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/maintenance/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan operasional
    $('#lapOperasional').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_operasional.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapOperasional${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteOperasional${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapOperasional${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapOperasional${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapOperasional${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapOperasional${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapOperasional${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteOperasional${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delOperasional.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapOperasional").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuOperasional").empty()
                                            $("#listMenuOperasional").append(data)
                                            $(".laporanOperasional .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuOperasional").empty()
                                            $("#listMenuOperasional").append(data)
                                            $(".display-pageOperasional").css("display", "block")
                                            $(".laporanOperasional .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapOperasional${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapOperasional${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapOperasional${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapOperasional${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapOperasional").DataTable().ajax.reload()
                                            $('#lapOperasional${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_operasional${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_operasional${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_operasional${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_operasional${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_operasional.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_operasional${data}").html(data)
                                    $("#dataModal_operasional${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/operasional_yayasan/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan jasa
    $('#lapJasa').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_jasa.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapJasa${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeleteJasa${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapJasa${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapJasa${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapJasa${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapJasa${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapJasa${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeleteJasa${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delJasa.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapJasa").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuJasa").empty()
                                            $("#listMenuJasa").append(data)
                                            $(".laporanJasa .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuJasa").empty()
                                            $("#listMenuJasa").append(data)
                                            $(".display-pageJasa").css("display", "block")
                                            $(".laporanJasa .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapJasa${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapJasa${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapJasa${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapJasa${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editManagement.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapJasa").DataTable().ajax.reload()
                                            $('#lapJasa${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_jasa${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_jasa${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_jasa${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_jasa${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_jasa.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_jasa${data}").html(data)
                                    $("#dataModal_jasa${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/jasa/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // table laporan jasa
    $('#lapPaud').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_paud.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [4, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 2,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var date = data["lapPemakaian"]
                var day = date.substring(-8, 2);
                var month = date.substring(2, 6)
                var year = date.substring(6)
                var newDate = `${year}${month}${day}`
                var edit =
                    `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapPaud${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnLapDeletePaud${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapPaud${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" class="edit-lapPaud${data["lapId"]}">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
                                            <input type="hidden" name="id" value="${data["lapId"]}">
                                            <input type="text" class="form-control" name="pengajuan" value="${data["lapKategori"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
                                            <input type="text" class="form-control" value="${data["lapPengajuan"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
                                            <input type="text" class="form-control" style="text-transform: capitalize" value="${data["lapDeskripsi"]}" readonly>
                                        </div>
    
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
                                            <input type="text" class="form-control" value="${new Intl.NumberFormat('en-US').format(data["anggaran"])}" readonly>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                            <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                            <span class="alertTgl text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="pemakaian" class="form-label">Pemakaian</label>
                                            <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                            <span class="alertPemakaian text-danger"></span>
                                        </div>
    
                                        <div class="mb-2">
                                            <label for="terpakai" class="form-label">Terpakai</label>
                                            <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${new Intl.NumberFormat('en-US').format(data["terpakai"])}" onkeypress="return hanyaAngka(event)">
                                            <span class="alertTerpakai text-danger"></span>
                                        </div>
    
                                        <div class="button mb-3">
                                            <button class="btn btn-primary text-white w-100" id="editLapPaud${data["lapId"]}">Ubah</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapPaud${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapPaud${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table laporan
                        $('#btnLapDeletePaud${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah Anda yakin ingin menghapus Laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/lap_delPaud.php',
                                    method: 'POST',
                                    data: {
                                        id: id 
                                    },
                                    success: function (data) {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#lapPaud").DataTable().ajax.reload()
                                        if (data == 0) {
                                            $("#listMenuPaud").empty()
                                            $("#listMenuPaud").append(data)
                                            $(".laporanPaud .infoForm").css("display", "block")
                                
                                        } else {
                                            $("#listMenuPaud").empty()
                                            $("#listMenuPaud").append(data)
                                            $(".display-pagePaud").css("display", "block")
                                            $(".laporanPaud .infoForm").css("display", "none")
                                        }
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                        // edit page laporan input
                        $("#editLapPaud${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapPaud${data["lapId"]} input[name=id]").val();
                            let pengajuan = $(".edit-lapPaud${data["lapId"]} input[name=pengajuan]").val();
                            let tglLaporan = $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").val()
                            let pemakaian = $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").val()
                            let terpakai = $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").val()
                            if(tglLaporan == "") {
                                $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").focus();
                                $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertTgl").html("Tgl laporan tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertTgl").empty();
                                    }
                                }).keyup();
                                return false;
                            
                            } else if (pemakaian == "") {
                                $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").focus();
                                $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertPemakaian").html("Pemakaian tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertPemakaian").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else if (terpakai == "") {
                                $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").focus();
                                $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertTerpakai").html("Terpakai tidak boleh kosong!");
                                    } else {
                                        $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapPaud${data["lapId"]} .alertTerpakai").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/edit/lap_editPaud.php",
                                    data: {
                                        inputId: id,
                                        inputPengajuan: pengajuan,
                                        inputTgl: tglLaporan,
                                        inputPemakaian: pemakaian,
                                        inputTerpakai: terpakai
                    
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'error',
                                                position: 'center',
                                                title: 'Laporan sama saja',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
        
                                        } else {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Laporan berhasil diubah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapPaud").DataTable().ajax.reload()
                                            $('#lapPaud${data["lapId"]}').modal('toggle'); 
                                        }
                                    }
                                });
                            }
                
                            e.preventDefault()
                        })
                    </script>
                    `
                return edit
            }

        }, {
            "targets": 3,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 9,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 10,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var anggaran = data["anggaran"]
                var terpakai = data["terpakai"]
                var cashback = anggaran - terpakai
                var newCashback = new Intl.NumberFormat('en-US').format(cashback)
                return newCashback;
            }
        }, {
            "targets": 11,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="view_data_paud${data}">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    
                        <div id="dataModal_paud${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_paud${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal laporan
                        $('.view_data_paud${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_paud.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_paud${data}").html(data)
                                    $("#dataModal_paud${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
            }
        }, {
            "targets": 12,
            data: "lapDokumen",
            "render": function (data) {
                var excel =
                    `
                        <a href="assets/doc/paud/${data}" download>
                            ${data}
                        </a>`
                return excel;

            }
        }]
    });

    // relaod table laporan 
    $('.success').one('click', function () {
        $('#lapProgram').DataTable().ajax.reload();
    });

    // relaod laporan table program
    $(".suksesLapProgram .reload").click(function () {
        $("#lapProgram").DataTable().ajax.reload()
    })

    $(".sukProgram").one('click', function () {
        $("#lapProgram").DataTable().ajax.reload()
    })

    // relaod laporan table logistik
    $(".suksesLapLogistik .reload").click(function () {
        $("#lapLogistik").DataTable().ajax.reload()
    })

    $(".sukLogistik").one('click', function () {
        $("#lapLogistik").DataTable().ajax.reload()
    })

    // relaod laporan table aset
    $(".suksesLapAset .reload").click(function () {
        $("#lapAset").DataTable().ajax.reload()
    })

    $(".sukpAset").one('click', function () {
        $("#lapAset").DataTable().ajax.reload()
    })

    // relaod laporan table uang makan
    $(".suksesLapUangMakan .reload").click(function () {
        $("#lapUangMakan").DataTable().ajax.reload()
    })

    $(".sukMakan").one('click', function () {
        $("#lapUangMakan").DataTable().ajax.reload()
    })

    // relaod laporan table gaji karyawan
    $(".suksesLapGaji .reload").click(function () {
        $("#lapGaji").DataTable().ajax.reload()
    })

    $(".sukGaji").one('click', function () {
        $("#lapGaji").DataTable().ajax.reload()
    })

    // relaod laporan table biaya lainnya
    $(".suksesLapLainnya .reload").click(function () {
        $("#lapLainnya").DataTable().ajax.reload()
    })

    $(".sukLain").one('click', function () {
        $("#lapLainnya").DataTable().ajax.reload()
    })

    // relaod laporan table maintenance
    $(".suksesLapMaintenance .reload").click(function () {
        $("#lapMaintenance").DataTable().ajax.reload()
    })

    $(".sukMain").one('click', function () {
        $("#lapMaintenance").DataTable().ajax.reload()
    })

    // relaod laporan table operasional yayasan
    $(".suksesLapOperasional .reload").click(function () {
        $("#lapOperasional").DataTable().ajax.reload()
    })
    $(".sukOperasional").one('click', function () {
        $("#lapOperasional").DataTable().ajax.reload()
    })

    // relaod laporan table jasa
    $(".suksesLapJasa .reload").click(function () {
        $("#lapJasa").DataTable().ajax.reload()
    })

    $(".sukJasa").one('click', function () {
        $("#lapJasa").DataTable().ajax.reload()
    })

    // relaod laporan table paud
    $(".suksesLapPaud .reload").click(function () {
        $("#lapPaud").DataTable().ajax.reload()
    })

    $(".sukPaud").one('click', function () {
        $("#lapPaud").DataTable().ajax.reload()
    })
});