$(document).ready(function () {
    // program
    function adminLapProgram() {
        $('#lapProgram').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_program.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapProgram${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? `<a href="" id="btnDelete${data["lapId"]}"><i class="bi bi-trash"></i></a>` : `<a href="" id="btnLapDelete${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
                        </div>
        
                        <!-- Modal -->
                        <div class="modal fade" id="lapProgram${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
    
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTgl text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? `` : `
                                            <div class="mb-2">
                                                <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                                <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                                <span class="alertTglPemakaian text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pemakaian" class="form-label">Pemakaian</label>
                                                <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                                <span class="alertPemakaian text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="terpakai" class="form-label">Terpakai</label>
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>
                                            `}
        
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
    
                            $('#btnDelete${data["lapEdit"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapEdit"]};
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
                                            $("#lapProgram").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
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
                                let tglPengajuan = $(".edit-lapProgram${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapProgram${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapProgram${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapProgram${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapProgram${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapProgram${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapProgram${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapProgram${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapProgram${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertTgl").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (perencanaan == "") {
                                    $(".edit-lapProgram${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapProgram${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapProgram${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapProgram${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapProgram${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapProgram${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapProgram${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapProgram${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == "" 
                                ) {
                                    $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").focus();
                                    $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertTglPemakaian").html("Tgl laporan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapProgram${data["lapId"]} input[name=tglLaporan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapProgram${data["lapId"]} .alertTglPemakaian").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                    ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                    ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputRencana: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 12,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Terverifikasi" ? `<div class="text-center">
                        <a name="view" data-id="${data["lapResi"]}" class="view_data_program${data["lapResi"]}" style="cursor:pointer">
                            <i class="bi bi-images"></i>
                        </a>
                    </div>
                
                    <div id="dataModal_program${data["lapResi"]}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Bukti Kwitansi</h4>
                                </div>
                                <div class="modal-body" id="detail_user_program${data["lapResi"]}">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <script>
                    // modal laporan program
                    $('.view_data_program${data["lapResi"]}').click(function () {
                        var data_id = $(this).data("id")
                        $.ajax({
                            url: "pages/resi/resi_program.php",
                            method: "POST",
                            data: {
                                data_id: data_id
                            },
                            success: function (data) {
                                $("#detail_user_program${data["lapResi"]}").html(data)
                                $("#dataModal_program${data["lapResi"]}").modal('show')
                            }
                        })
                    })
                    </script>
                
                ` : `<div class="text-center">-</div>`
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [3, 5, 8]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13]
            }]
        });
    }

    // logistik
    function adminLapLogistik() {
        $('#lapLogistik').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_logistik.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapLogistik${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? `<a href="" id="btnDeleteLogistik${data["lapId"]}"><i class="bi bi-trash"></i></a>` : `<a href="" id="btnLapDeleteLogistik${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
    
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTgl text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? `` : `
                                            <div class="mb-2">
                                                <label for="tglLaporan" class="form-label">Tanggal Laporan</label>
                                                <input type="date" class="form-control" name="tglLaporan" id="tglLaporan" value="${newDate}">
                                                <span class="alertTglPemakaian text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pemakaian" class="form-label">Pemakaian</label>
                                                <input type="text" class="form-control" name="pemakaian" id="pemakaian" value="${data["lapDeskripsiPemakaian"]}">
                                                <span class="alertPemakaian text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="terpakai" class="form-label">Terpakai</label>
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>
                                            `}
        
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
    
                            $('#btnDeleteLogistik${data["lapEdit"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapEdit"]};
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
                                                title: 'Pengajuan Berhasil Dihapus',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapLogistik").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
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
                                let tglPengajuan = $(".edit-lapLogistik${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapLogistik${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapLogistik${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapLogistik${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapLogistik${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapLogistik${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapLogistik${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertTgl").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (perencanaan == "") {
                                    $(".edit-lapLogistik${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapLogistik${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapLogistik${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapLogistik${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == "" 
                                ) {
                                    $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").focus();
                                    $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertTglPemakaian").html("Tgl laporan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLogistik${data["lapId"]} input[name=tglLaporan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLogistik${data["lapId"]} .alertTglPemakaian").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                    ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                    ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputRencana: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ?
                        `<div class="text-center">
                                <a name="view" data-id="${data["lapResi"]}" class="view_data_logistik${data["lapResi"]}" style="cursor:pointer">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_logistik${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_logistik${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan program
                            $('.view_data_logistik${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_logistik.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_logistik${data["lapResi"]}").html(data)
                                        $("#dataModal_logistik${data["lapResi"]}").modal('show')
                                    }
                                })
                            })
                            </script>
                        
                        ` : `<div class="text-center">-</div>`
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12]
            }]
        });
    }

    // aset yayasan
    function adminLapAset() {
        $('#lapAset').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_aset.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapAset${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteAset${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteAset${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
    
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            ${data["lapJenis"] == "Pembangunan" ? `
                                            <input type="hidden" name="qty" value="${data["lapQtyAnggaran"]}">` 
                                            : `
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Qty</b></span>
                                                <input type="text" class="form-control rupiah" name="qty" maxlength="11" placeholder="qty perencanaan"
                                                    onkeypress="return hanyaAngka(event)" autocomplete="off" value="${data["lapQtyAnggaran"]}">
                                                <span class="input-group-text" id="basic-addon1"><b>Pcs</b></span>
                                            </div>
                                            <label for="" class="form-label">
                                                <span class="alertQtyAnggaran text-danger"></span>
                                            </label>
                                            `}
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` : 
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`
                                            }
        
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
                            $('#btnDeleteAset${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapAset").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let qty = $(".edit-lapAset${data["lapId"]} input[name=qty]").val();
                                let tglPengajuan = $(".edit-lapAset${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapAset${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapAset${data["lapId"]} input[name=anggaran]").val()
                                let qtyTerpakai = $(".edit-lapAset${data["lapId"]} input[name=qtyTerpakai]").val();
                                let tglLaporan = $(".edit-lapAset${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapAset${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapAset${data["lapId"]} input[name=terpakai]").val()
    
                                if(tglPengajuan == "") {
                                    $(".edit-lapAset${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapAset${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapAset${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertTglPengajuan").html("Tgl pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapAset${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (qty == "") {
                                    $(".edit-lapAset${data["lapId"]} input[name=qty]").focus();
                                    $(".edit-lapAset${data["lapId"]} input[name=qty]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapAset${data["lapId"]} input[name=qty]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertQty").html("Qty anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapAset${data["lapId"]} input[name=qty]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertQtyAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapAset${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapAset${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapAset${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapAset${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapAset${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapAset${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapAset${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapAset${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapAset${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && qtyTerpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && qtyTerpakai == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputQtyAnggaran: qty,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                    return data == 0 ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data) + ' Pcs';
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
                }
            }, {
                "targets": 10,
                data: "lapQtyTerpakai",
                "render": function (data) {
                    return data == 0 || data == null ? `<div class="text-center">-</div>` : new Intl.NumberFormat('en-US').format(data) + ' Pcs';
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 14,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ?
                        `<div class="text-center">
                                <a name="view" data-id="${data["lapResi"]}" class="view_data_aset${data["lapResi"]}" style="cursor: pointer">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_aset${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_aset${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan program
                            $('.view_data_aset${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_aset.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_aset${data["lapResi"]}").html(data)
                                        $("#dataModal_aset${data["lapResi"]}").modal('show')
                                    }
                                })
                            })
                            </script>
                        
                        ` : `<div class="text-center">-</div>`
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 5, 9]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 7, 8, 10, 11, 12, 13, 14, 15]
            }]
        });
    }

    // uang makan
    function adminLapMakan() {
        $('#lapUangMakan').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_uang_makan.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapUangMakan${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteUangMakan${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteUangMakan${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
                        </center>
        
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
    
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteUangMakan${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapUangMakan").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapUangMakan${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapUangMakan${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapUangMakan${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapUangMakan${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapUangMakan${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapUangMakan${data["lapId"]} input[name=terpakai]").val()   
    
                                if(tglPengajuan == "") {
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapUangMakan${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapUangMakan${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapUangMakan${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ?
                        `<div class="text-center">
                                <a name="view" data-id="${data["lapResi"]}" class="view_data_uangMakan${data["lapResi"]}" style="cursor: pointer">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_uangMakan${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_uangMakan${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan program
                            $('.view_data_uangMakan${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_uangMakan.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_uangMakan${data["lapResi"]}").html(data)
                                        $("#dataModal_uangMakan${data["lapResi"]}").modal('show')
                                    }
                                })
                            })
                            </script>
                        ` : `<div class="text-center">-</div>`
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // gaji
    function adminLapGaji() {
        $('#lapGaji').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
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
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapGaji${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteGaji${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteGaji${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
                        </div>
        
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteGaji${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapGaji").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapGaji${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapGaji${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapGaji${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapGaji${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapGaji${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapGaji${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapGaji${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapGaji${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapGaji${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapGaji${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapGaji${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapGaji${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapGaji${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapGaji${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapGaji${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapGaji${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapGaji${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapGaji${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapGaji${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a style="cursor:pointer" name="view" data-id="${data["lapResi"]}" class="view_data_gaji${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </center>
                        
                            <div id="dataModal_gaji${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_gaji${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_gaji${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_gaji.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_gaji${data["lapResi"]}").html(data)
                                        $("#dataModal_gaji${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // biaya lainnya
    function adminLapLainnya() {
        $('#lapLainnya').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_lainnya.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></di>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></di>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></di>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapLainnya${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteLainnya${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteLainnya${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteLainnya${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapLainnya").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
                            
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
                                let tglPengajuan = $(".edit-lapLainnya${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapLainnya${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapLainnya${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapLainnya${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapLainnya${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapLainnya${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapLainnya${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapLainnya${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapLainnya${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapLainnya${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapLainnya${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapLainnya${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapLainnya${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapLainnya${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a style="cursor: pointer" name="view" data-id="${data["lapResi"]}" class="view_data_lainnya${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_lainnya${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_lainnya${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_lainnya${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_lainnya.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_lainnya${data["lapResi"]}").html(data)
                                        $("#dataModal_lainnya${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // maintenance
    function adminLapMaintenance() {
        $('#lapMaintenance').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_maintenance.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapMaintenance${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteMaintenance${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteMaintenance${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteMaintenance${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapMaintenance").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapMaintenance${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapMaintenance${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapMaintenance${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapMaintenance${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapMaintenance${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapMaintenance${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapMaintenance${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapMaintenance${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapMaintenance${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a style="cursor: pointer" name="view" data-id="${data["lapResi"]}" class="view_data_maintenance${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </center>
                        
                            <div id="dataModal_maintenance${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_maintenance${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_maintenance${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_maintenance.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_maintenance${data["lapResi"]}").html(data)
                                        $("#dataModal_maintenance${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // operasional
    function adminLapOperasional() {
        $('#lapOperasional').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_operasional.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></center>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></center>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></center>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapOperasional${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteOperasional${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteOperasional${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
                        </di>
        
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteOperasional${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapOperasional").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapOperasional${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapOperasional${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapOperasional${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapOperasional${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapOperasional${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapOperasional${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapOperasional${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapOperasional${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapOperasional${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapOperasional${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapOperasional${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapOperasional${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapOperasional${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapOperasional${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a style="cursor: pointer" name="view" data-id="${data["lapResi"]}" class="view_data_operasional${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </di>
                        
                            <div id="dataModal_operasional${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_operasional${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_operasional${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_operasional.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_operasional${data["lapResi"]}").html(data)
                                        $("#dataModal_operasional${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // paud
    function adminLapPaud() {
        $('#lapPaud').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_paud.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapPaud${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeletePaud${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeletePaud${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeletePaud${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapPaud").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapPaud${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapPaud${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapPaud${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapPaud${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapPaud${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapPaud${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapPaud${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapPaud${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapPaud${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapPaud${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapPaud${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapPaud${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapPaud${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapPaud${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapPaud${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapPaud${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapPaud${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapPaud${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapPaud${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a href="#" style="cursor: pointer" data-id="${data["lapResi"]}" class="view_data_paud${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_paud${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_paud${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_paud${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_paud.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_paud${data["lapResi"]}").html(data)
                                        $("#dataModal_paud${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // jasa
    function adminLapJasa() {
        $('#lapJasa').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_jasa.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
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
                    return data == "Belum Laporan" ? `<div class="text-center"><span class="badge bg-danger">${data}</span></div>` : data == "Terverifikasi" ? `<div class="text-center"><span class="badge bg-success">${data}</span></div>` : `<div class="text-center"><span class="badge bg-warning">${data}</span></div>`
                }
            }, {
                "targets": 2,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var datePengajuan = data["lapPengajuan"]
                    var dayPengajuan = datePengajuan.substring(-8, 2);
                    var monthPengajuan = datePengajuan.substring(2, 6)
                    var yearPengajuan = datePengajuan.substring(6)
                    var newDatePengajuan = `${yearPengajuan}${monthPengajuan}${dayPengajuan}`

                    var date = data["lapPemakaian"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#"" data-bs-toggle="modal" data-bs-target="#lapJasa${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                            ${data["lapStatus"] == "Belum Laporan" ? 
                            `<a href="" id="btnDeleteJasa${data["lapId"]}"><i class="bi bi-trash"></i></a>` : 
                            `<a href="" id="btnLapDeleteJasa${data["lapId"]}"><i class="bi bi-trash"></i></a>`}
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
                                                <input type="text" class="form-control" value="${data["anggaran"]}" readonly>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="pengajuan" class="form-label">Tanggal Pengajuan</label>
                                                <input type="date" class="form-control" name="tglPengajuan" id="pengajuan" value="${newDatePengajuan}">
                                                <span class="alertTglPengajuan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="perencanaan" class="form-label">Perencanaan</label>
                                                <input type="text" class="form-control" name="perencanaan" id="perencanaan" value="${data["lapDeskripsi"]}">
                                                <span class="alertPerencanaan text-danger"></span>
                                            </div>
        
                                            <div class="mb-2">
                                                <label for="anggaran" class="form-label">Anggaran</label>
                                                <input type="text" class="form-control rupiah" name="anggaran" id="anggaran"  value="${data["anggaran"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertAnggaran text-danger"></span>
                                            </div>
        
                                            ${data["lapStatus"] == "Belum Laporan" ? 
                                            `<div class="text-center">-</div>` :
                                            `<div class="mb-2">
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
                                                <input type="text" class="form-control rupiah" name="terpakai" id="terpakai"  value="${data["terpakai"]}" onkeypress="return hanyaAngka(event)">
                                                <span class="alertTerpakai text-danger"></span>
                                            </div>`}
        
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
                            $('#btnDeleteJasa${data["lapId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data["lapId"]};
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
                                            $("#lapJasa").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
    
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
                                let tglPengajuan = $(".edit-lapJasa${data["lapId"]} input[name=tglPengajuan]").val()
                                let perencanaan = $(".edit-lapJasa${data["lapId"]} input[name=perencanaan]").val()
                                let anggaran = $(".edit-lapJasa${data["lapId"]} input[name=anggaran]").val()
                                let tglLaporan = $(".edit-lapJasa${data["lapId"]} input[name=tglLaporan]").val()
                                let pemakaian = $(".edit-lapJasa${data["lapId"]} input[name=pemakaian]").val()
                                let terpakai = $(".edit-lapJasa${data["lapId"]} input[name=terpakai]").val()
                                if(tglPengajuan == "") {
                                    $(".edit-lapJasa${data["lapId"]} input[name=tglPengajuan]").focus();
                                    $(".edit-lapJasa${data["lapId"]} input[name=tglPengajuan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapJasa${data["lapId"]} input[name=tglPengajuan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertTglPengajuan").html("Tgl Pengajuan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapJasa${data["lapId"]} input[name=tglPengajuan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertTglPengajuan").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else if (perencanaan == "") {
                                    $(".edit-lapJasa${data["lapId"]} input[name=perencanaan]").focus();
                                    $(".edit-lapJasa${data["lapId"]} input[name=perencanaan]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapJasa${data["lapId"]} input[name=perencanaan]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapJasa${data["lapId"]} input[name=perencanaan]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertPerencanaan").empty();
                                        }
                                    }).keyup();
                                    return false;
        
                                } else if (anggaran == "") {
                                    $(".edit-lapJasa${data["lapId"]} input[name=anggaran]").focus();
                                    $(".edit-lapJasa${data["lapId"]} input[name=anggaran]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-lapJasa${data["lapId"]} input[name=anggaran]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertAnggaran").html("Anggaran tidak boleh kosong!");
                                        } else {
                                            $(".edit-lapJasa${data["lapId"]} input[name=anggaran]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-lapJasa${data["lapId"]} .alertAnggaran").empty();
                                        }
                                    }).keyup();
                                    return false;
    
                                } else if(
                                    ${data["lapStatus"] == "Terverifikasi"} && tglLaporan == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && tglLaporan == ""
                                ) {
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
                                
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && pemakaian == "" || 
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && pemakaian == ""
                                ) {
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
        
                                } else if (
                                    ${data["lapStatus"] == "Terverifikasi"} && terpakai == "" ||
                                    ${data["lapStatus"] == "Menunggu Verifikasi"} && terpakai == ""
                                ) {
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
                                            inputTglPengajuan: tglPengajuan,
                                            inputPerencanaan: perencanaan,
                                            inputAnggaran: anggaran,
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
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    return data["lapStatus"] == "Belum Laporan" ? `<div class="text-center">-</div>` : data["lapPemakaian"]
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
                    return data["lapStatus"] == "Terverifikasi" || data["lapStatus"] == "Menunggu Verifikasi" ? newCashback : `<div class="text-center">-</div>`
                }
            }, {
                "targets": 11,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var image =
                        data["lapStatus"] == "Belum Laporan" ?
                        `<div class="text-center">-</div>` :
                        `<div class="text-center">
                                <a style="cursor: pointer" name="view" data-id="${data["lapResi"]}" class="view_data_jasa${data["lapResi"]}">
                                    <i class="bi bi-images"></i>
                                </a>
                            </div>
                        
                            <div id="dataModal_jasa${data["lapResi"]}" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Bukti Kwitansi</h4>
                                        </div>
                                        <div class="modal-body" id="detail_user_jasa${data["lapResi"]}">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <script>
                            // modal laporan
                            $('.view_data_jasa${data["lapResi"]}').click(function () {
                                var data_id = $(this).data("id")
                                $.ajax({
                                    url: "pages/resi/resi_jasa.php",
                                    method: "POST",
                                    data: {
                                        data_id: data_id
                                    },
                                    success: function (data) {
                                        $("#detail_user_jasa${data["lapResi"]}").html(data)
                                        $("#dataModal_jasa${data["lapResi"]}").modal('show')
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
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 6, 8, 9, 10, 11, 12]
            }]
        });

    }

    // akun ebudget
    function adminLapAkunEbudget() {
        $('#lapAkunEbudget').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            dom: 'Plfrtip',
            "autoWidth": true,
            "ajax": 'table_ajax/data_akun_ebudget.php',
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "akunNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "akunUsername",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 3,
                data: "akunPosisi",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "akunId",
                "render": function (data) {
                    var hapus =
                        `
                        <div class="text-center">
                            <a href="#" id="btnDeletAkunEbudget${data}"><i class="bi bi-trash"></i></a>
                        </div>
        
                        <script>
                            // Delete Table
                            $('#btnDeletAkunEbudget${data}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus pengajuan ini?")) {
                                    var id = ${data};
                                    $.ajax({
                                        url: 'pages/delete/delete_account.php',
                                        method: 'POST',
                                        data: {
                                            id: id,
                                            kategori: "ebudget"
                                        },
                                        success: function () {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Akun berhasil dihapus',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapAkunEbudget").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
                        </script>
                        `
                    return hapus
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1, 3]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 2, 4]
            }]
        });

    }

    //akun media 
    function adminLapAkunMedia() {
        $('#lapAkunMedia').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            dom: 'Plfrtip',
            "autoWidth": true,
            "ajax": 'table_ajax/data_akun_media.php',
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "akunNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "akunKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "akunList",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 4,
                data: "akunPosisi",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 5,
                data: "akunTeam",
                "render": function (data) {
                    return `Team ${data}`;
                }
            }, {
                "targets": 6,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#" id="listMedia${data["akunId"]}" data-bs-toggle="modal" data-bs-target="#akunMedia${data["akunId"]}"><i class="bi bi-pencil"></i></a> | 
                            <a href="" id="btnDeletAkunMedia${data["akunId"]}"><i class="bi bi-trash"></i></a>
                        </di>
        
                        <!-- Modal -->
                        <div class="modal fade" id="akunMedia${data["akunId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" method="post" class="edit-akunMedia${data["akunId"]}">
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Nama :</b></span>
                                                <input type="hidden" name="id" value="${data["akunEditId"]}">
                                                <input type="text" class="form-control" name="oldName" value="${data["akunNama"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Team :</b></span>
                                                <input type="text" class="form-control" value="${data["akunTeam"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Akun :</b></span>
                                                <input type="text" class="form-control" value="${data["akunKategori"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Nama Akun :</b></span>
                                                <input type="text" class="form-control" name="nameAkun" value="${data["akunList"]}" readonly>
                                            </div>
    
                                            <div class="listName${data["akunId"]}">
                                                
                                            </div>
        
                                            <div class="button mb-3">
                                                <button class="btn btn-primary text-white w-100" id="editAkunMedia${data["akunId"]}">Ubah</button>
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
                            $('#listMedia${data["akunId"]}').click(function() {
                                $(".listName${data["akunId"]}").load("./data/data_adminPengurus.php?id=${data["akunId"]}&team=${data["akunIdPengurus"]}&kategori=${data["akunKategori"]}")
                            })
                            $('#akunMedia${data["akunId"]}').on('hidden.bs.modal', function () {
                                $(this).find('form').trigger('reset');
                                $("select").css({
                                    "border-color": "#e7e9ed"
                                })
        
                                $(".edit-akunMedia${data["akunId"]} .text-danger").empty()
                            })
        
                            // Delete Table laporan
                            $('#btnDeletAkunMedia${data["akunId"]}').click(function (e) {
                                if (confirm("Apakah Anda yakin ingin menghapus akun ini?")) {
                                    var id = ${data["akunId"]};
                                    $.ajax({
                                        url: 'pages/delete/delete_account.php',
                                        method: 'POST',
                                        data: {
                                            id: id,
                                            kategori: "mediaSosial"
                                        },
                                        success: function () {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Akun berhasil dihapus',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#lapAkunMedia").DataTable().ajax.reload()
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });
                            
                            // edit page 
                            $("#editAkunMedia${data["akunId"]}").click(function (e) {
                                let id = $(".edit-akunMedia${data["akunId"]} input[name=id]").val();
                                let oldName = $(".edit-akunMedia${data["akunId"]} input[name=oldName]").val();
                                let nameAkun = $(".edit-akunMedia${data["akunId"]} input[name=nameAkun]").val();
                                let listName = $(".edit-akunMedia${data["akunId"]} select[name=listName]").val();
                                let userId = $(".edit-akunMedia${data["akunId"]} input[name=userId]").val();
                                let team = $(".edit-akunMedia${data["akunId"]} select[name=team]").val();
                                if(listName == "") {
                                    $(".edit-akunMedia${data["akunId"]} select[name=listName]").focus();
                                    $(".edit-akunMedia${data["akunId"]} select[name=listName]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-akunMedia${data["akunId"]} select[name=listName]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-akunMedia${data["akunId"]} .alertNama").html("Harus dipilih salah satu!");
                                        } else {
                                            $(".edit-akunMedia${data["akunId"]} select[name=listName]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-akunMedia${data["akunId"]} .alertNama").empty();
                                        }
                                    }).keyup();
                                    return false;
                                    
                                } else if(team == "") {
                                    $(".edit-akunMedia${data["akunId"]} select[name=team]").focus();
                                    $(".edit-akunMedia${data["akunId"]} select[name=team]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-akunMedia${data["akunId"]} select[name=team]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-akunMedia${data["akunId"]} .alertTeam").html("Harus dipilih salah satu!");
                                        } else {
                                            $(".edit-akunMedia${data["akunId"]} select[name=team]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-akunMedia${data["akunId"]} .alertTeam").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else {
                                    $.ajax({
                                        type: 'POST',
                                        url: "pages/media/admin_changeAccount.php",
                                        data: {
                                            inputId: id,
                                            inputOldName: oldName,
                                            inputAkun: nameAkun,
                                            inputName: listName,
                                            inputNewId: userId,
                                            inputTeam: team
                                        },
                                        success: function (data) {
                                            if (data == 1) {
                                                Swal.fire({
                                                    type: 'error',
                                                    position: 'center',
                                                    title: 'Data akun sama saja',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                
                                            } else {
                                                Swal.fire({
                                                    type: 'success',
                                                    position: 'center',
                                                    title: 'Data akun berhasil dipindah',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                $("#lapAkunMedia").DataTable().ajax.reload()
                                                $('#akunMedia${data["akunId"]}').modal('toggle'); 
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1, 2]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 3, 4, 5]
            }]
        });

    }

    // income harian
    function adminLapPending() {
        $('#IncomePending').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/laporan_incomePending.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                <div class="text-center">
                <a href="" class="text-danger" id="confirmIncomeMedia${data["verEdit"]}"><i class="bi bi-arrow-left-right" style="font-size: 1.2  rem; color: cornflowerblue;"></i></a>
                </div>
                
                <script>
                    // confirm table
                    $('#confirmIncomeMedia${data["verEdit"]}').click(function (e) {
                        if (confirm("Income ini diubah statusnya?")) {
                            var id = ${data["verEdit"]};
                            $.ajax({
                                url: 'pages/media/income_sending.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Income berhasil dikirim',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $("#IncomePending").DataTable().ajax.reload()
                                }
                            });
                        } else {
                            return false;
                        }
    
                        e.preventDefault()
                    }); 
                </script>
                `
                    return edit
                }
            }, {
                "targets": 2,
                data: "verPosisi",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "verGedung",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "verTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "verIncome",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "verStatus",
                "render": function (data) {
                    return data == "Pending" ? `<span class="badge bg-danger">${data}</span>` :
                        data == "Terverifikasi" ? `<span class="badge bg-success">${data}</span>` : `<span class="badge bg-warning">${data}</span>`
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [3, 4]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [1, 2, 5, 6]
            }]
        });

    }

    // income akun
    function adminLapVerifIncome() {
        $('#verifikasiIncome').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/verifikasi_income.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                <div class="text-center">
                    <a href="" id="btnDeleteIncome${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                </div>
    
                <script>
                    // Delete Table
                    $('#btnDeleteIncome${data["verEdit"]}').click(function (e) {
                        if (confirm("Apakah kamu yakin ingin menghapus income ini?")) {
                            var id = ${data["verEdit"]};
                            $.ajax({
                                url: 'pages/media/delete_income.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Income Berhasil Dihapus',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $("#verifikasiIncome").DataTable().ajax.reload()
                                }
                            });
                        } else {
                            return false;
                        }
    
                        e.preventDefault()
                    });
                </script>
                `
                    return edit
                }
            }, {
                "targets": 2,
                data: "verAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "verDonatur",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: {
                    data: ["data"]
                },
                "render": function (data) {
                    var time = data["verJam"];
                    var jam = time.substring(5, -3);
                    return `${data["verTanggal"]} - ${jam}`
                }
            }, {
                "targets": 5,
                data: "verBank",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "verTransfer",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 7,
                data: "verStatus",
                "render": function (data) {
                    return data == "Pending" ? `<span class="badge bg-warning">${data}</span>` : `<span class="badge bg-danger">${data}</span>`
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 4]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 3, 5, 6, 7]
            }]
        });

    }

    // non resi
    function adminLapResi() {
        $('#nonResiWaiting').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/verifikasi_nonResi.php',
                type: 'GET',
            },
            "deferRender": true,
            "order": [4, 'desc'],
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                div class="text-center">
                    <a href="" class="text-primary" id="confirmNonResiTable${data["verEdit"]}"><i class="bi bi-arrow-left-right" style="font-size: 1.2  rem;"></i></a>
                </center>
                <script>
                    // confirm table
                    $('#confirmNonResiTable${data["verEdit"]}').click(function (e) {
                        if (confirm("Non Resi sudah sesuai dan akan dikembalikan?")) {
                            var id = ${data["verEdit"]};
                            $.ajax({
                                url: 'pages/media/verifying_non_resi.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Non Resi berhasil kembalikan',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $("#nonResiWaiting").DataTable().ajax.reload()
                                }
                            });
                        } else {
                            return false;
                        }
    
                        e.preventDefault()
                    }); 
                </script>
                `
                    return edit
                }
            }, {
                "targets": 2,
                data: "verPosisi",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "verKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "verTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "verIncome",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "verStatus",
                "render": function (data) {
                    return `<span class="badge bg-success">${data}</span>`
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [4]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 5, 6]
            }]
        });

    }

    // laporan akun
    function adminLapAkun() {
        $('#laporanAkun').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/data_laporan_akun.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {

                    var edit =
                        `
                    <div class="text-center">
                        <a href="" id="btnDeleteLapAkun${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <script>
                        // Delete Table
                        $('#btnDeleteLapAkun${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah kamu yakin ingin menghapus laporan ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/media/delete_laporan.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Laporan Berhasil Dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#laporanAkun").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                    </script>
                    `
                    return edit
                }
            }, {
                "targets": 2,
                data: "lapAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "lapLaporan",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`;
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 3]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1]
            }]
        });

    }

    // sekolah
    function adminLapSekolah() {
        $('#laporanSekolah').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/data_sekolah.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {

                    var edit =
                        `
                    <div class="text-center">
                        <a href="" id="btnDeleteSekolah${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </center>
    
                    <script>
                        // Delete Table
                        $('#btnDeleteSekolah${data["lapId"]}').click(function (e) {
                            if (confirm("Apakah kamu yakin ingin menghapus sekolah ini?")) {
                                var id = ${data["lapId"]};
                                $.ajax({
                                    url: 'pages/delete/delete_sekolah.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Sekolah Berhasil Dihapus',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#laporanSekolah").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                    </script>
                    `
                    return edit
                }
            }, {
                "targets": 2,
                data: "lapSekolah",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1]
            }]
        });

    }

    // team 
    function adminLapTeamMedia() {
        $('#laporanTeamMedia').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/data_akun_team.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "akunNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "akunTeam",
                "render": function (data) {
                    return `Team ${data}`;
                }
            }, {
                "targets": 3,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#teamMedia${data["akunId"]}"><i class="bi bi-pencil"></i></a>
                        </div>
        
                        <!-- Modal -->
                        <div class="modal fade" id="teamMedia${data["akunId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" method="post" class="edit-teamMedia${data["akunId"]}">
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Nama :</b></span>
                                                <input type="hidden" name="id" value="${data["akunEditId"]}">
                                                <input type="text" class="form-control" name="akun" value="${data["akunNama"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Team :</b></span>
                                                <input type="text" class="form-control" name="oldTeam" value="${data["akunTeam"]}" readonly>
                                            </div>
    
                                            <div class="form-floating mb-2">        
                                                <select class="form-select" name="team" aria-label="Default select example">
                                                    <option selected value="">Pilih Salah Satu Team</option>
                                                    <option value="I">Facebook</option>
                                                    <option value="II">Instagram</option>
                                                </select>
                                                <label for="floatingSelect">Pilih Team</label>
                                                <span class="alertTeam text-danger"></span>
                                            </div>
        
                                            <div class="button mb-3">
                                                <button class="btn btn-primary text-white w-100" id="editTeamMedia${data["akunId"]}">Ubah</button>
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
                            // edit page 
                            $("#editTeamMedia${data["akunId"]}").click(function (e) {
                                let akun = $(".edit-teamMedia${data["akunId"]} input[name=akun]").val();
                                let oldTeam = $(".edit-teamMedia${data["akunId"]} input[name=oldTeam]").val();
                                let team = $(".edit-teamMedia${data["akunId"]} select[name=team]").val();
                                if(team == "") {
                                    $(".edit-teamMedia${data["akunId"]} select[name=team]").focus();
                                    $(".edit-teamMedia${data["akunId"]} select[name=team]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-teamMedia${data["akunId"]} select[name=team]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-teamMedia${data["akunId"]} .alertTeam").html("Harus dipilih salah satu!");
                                        } else {
                                            $(".edit-teamMedia${data["akunId"]} select[name=team]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-teamMedia${data["akunId"]} .alertTeam").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else {
                                    $.ajax({
                                        type: 'POST',
                                        url: "pages/media/admin_changeTeam.php",
                                        data: {
                                            inputAkun: akun,
                                            inputOldTeam: oldTeam,
                                            inputTeam: team
                                        },
                                        success: function (data) {
                                            if (data == 1) {
                                                Swal.fire({
                                                    type: 'error',
                                                    position: 'center',
                                                    title: 'Data team sama saja',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                
                                            } else {
                                                Swal.fire({
                                                    type: 'success',
                                                    position: 'center',
                                                    title: 'Data akun berhasil dipindah',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                $("#laporanTeamMedia").DataTable().ajax.reload()
                                                $('#teamMedia${data["akunId"]}').modal('toggle'); 
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 2, 3]
            }]
        });

    }

    // ganti nama akun
    function adminLapChangeName() {
        $('#laporanChangeName').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/data_akun_media.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "akunNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "akunList",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 3,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#AccountName${data["akunId"]}"><i class="bi bi-pencil"></i></a>
                        </div>
        
                        <!-- Modal -->
                        <div class="modal fade" id="AccountName${data["akunId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" method="post" class="edit-AccountName${data["akunId"]}">
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Nama :</b></span>
                                                <input type="text" class="form-control" name="nama" value="${data["akunNama"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Akun :</b></span>
                                                <input type="text" class="form-control" name="akun" value="${data["akunList"]}" readonly>
                                            </div>
    
                                            <div class="mb-2">
                                                <label for="newName" class="form-label">Nama Baru</label>
                                                <input type="text" class="form-control" name="newName" id="newName" placeholder="Nama Baru">
                                                <p class="alertName text-danger"></p>
                                            </div>
        
                                            <div class="button mb-3">
                                                <button class="btn btn-primary text-white w-100" id="editAccountName${data["akunId"]}">Ubah</button>
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
                            $('#AccountName${data["akunId"]}').on('hidden.bs.modal', function () {
                                $(this).find('form').trigger('reset');
    
                                $(".edit-AccountName${data["akunId"]} input").css({
                                    "border-color": "#e7e9ed"
                                })
                    
                                $(".edit-AccountName${data["akunId"]} p").empty()
                            })
                            
                            // edit page 
                            $("#editAccountName${data["akunId"]}").click(function (e) {
                                let nama = $(".edit-AccountName${data["akunId"]} input[name=nama]").val();
                                let akun = $(".edit-AccountName${data["akunId"]} input[name=akun]").val();
                                let newName = $(".edit-AccountName${data["akunId"]} input[name=newName]").val();
                                if(newName == "") {
                                    $(".edit-AccountName${data["akunId"]} input[name=newName]").focus();
                                    $(".edit-AccountName${data["akunId"]} input[name=newName]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-AccountName${data["akunId"]} input[name=newName]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-AccountName${data["akunId"]} .alertName").html("Nama akun tidak boleh kosong!");
                                        } else {
                                            $(".edit-AccountName${data["akunId"]} input[name=newName]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-AccountName${data["akunId"]} .alertName").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else {
                                    $.ajax({
                                        type: 'POST',
                                        url: "pages/media/admin_changeName.php",
                                        data: {
                                            inputNama: nama,
                                            inputAkun: akun,
                                            inputNewName: newName
                                        },
                                        success: function (data) {
                                            if (data == 1) {
                                                Swal.fire({
                                                    type: 'error',
                                                    position: 'center',
                                                    title: 'Nama akun sudah ada',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                
                                            } else {
                                                Swal.fire({
                                                    type: 'success',
                                                    position: 'center',
                                                    title: 'Nama akun berhasil diganti',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                $("#laporanChangeName").DataTable().ajax.reload()
                                                $('#AccountName${data["akunId"]}').modal('toggle'); 
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 2, 3]
            }]
        });

    }

    // migrasi donatur
    function adminLapDonatur() {
        $('#laporanDonatur').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'Plfrtip',
            "ajax": {
                url: 'table_ajax/data_akun_media.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            searchPanes: {
                orderable: false,
            },
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "akunNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "akunList",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 3,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var edit =
                        `
                        <div class="text-center">
                            <a href="#" id="ChangeListDonatur${data["akunId"]}" data-bs-toggle="modal" data-bs-target="#ChangeDonatur${data["akunId"]}"><i class="bi bi-pencil"></i></a>
                        </div>
        
                        <!-- Modal -->
                        <div class="modal fade" id="ChangeDonatur${data["akunId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" method="post" class="edit-ChangeDonatur${data["akunId"]}">
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Nama :</b></span>
                                                <input type="text" class="form-control" name="nama" value="${data["akunNama"]}" readonly>
                                            </div>
    
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="basic-addon1"><b>Akun :</b></span>
                                                <input type="text" class="form-control" name="akun" value="${data["akunList"]}" readonly>
                                            </div>
    
                                            <div class="listAccount${data["akunId"]}">
                                                
                                            </div>
        
                                            <div class="button mb-3">
                                                <button class="btn btn-primary text-white w-100" id="editChangeDonatur${data["akunId"]}">Ubah</button>
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
                            $('#ChangeListDonatur${data["akunId"]}').click(function() {
                                $(".listAccount${data["akunId"]}").load("./data/data_adminAccount.php?id=${data["akunId"]}")
                            })
                            
                            $('#ChangeDonatur${data["akunId"]}').on('hidden.bs.modal', function () {
                                $(this).find('form').trigger('reset');
    
                                $(".edit-ChangeDonatur${data["akunId"]} select").css({
                                    "border-color": "#e7e9ed"
                                })
                    
                                $(".edit-ChangeDonatur${data["akunId"]} p").empty()
                            })
                            
                            // edit page 
                            $("#editChangeDonatur${data["akunId"]}").click(function (e) {
                                let akun = $(".edit-ChangeDonatur${data["akunId"]} input[name=akun]").val();
                                let newAccount = $(".edit-ChangeDonatur${data["akunId"]} select[name=listAccount]").val();
                                if(newAccount == "") {
                                    $(".edit-ChangeDonatur${data["akunId"]} select[name=listAccount]").focus();
                                    $(".edit-ChangeDonatur${data["akunId"]} select[name=listAccount]").keyup(function () {
                                        let value = $(this).val();
                                        if (value == "") {
                                            $(".edit-ChangeDonatur${data["akunId"]} select[name=listAccount]").css({
                                                "box-shadow": "none",
                                                "border-color": "red"
                                            })
                                            $(".edit-ChangeDonatur${data["akunId"]} .alertAccount").html("Nama akun tidak boleh kosong!");
                                        } else {
                                            $(".edit-ChangeDonatur${data["akunId"]} select[name=listAccount]").css({
                                                "border-color": "green"
                                            })
                                            $(".edit-ChangeDonatur${data["akunId"]} .alertAccount").empty();
                                        }
                                    }).keyup();
                                    return false;
                                
                                } else {
                                    $.ajax({
                                        type: 'POST',
                                        url: "pages/media/admin_changeDonatur.php",
                                        data: {
                                            inputAkun: akun,
                                            inputNewAccount: newAccount
                                        },
                                        success: function (data) {
                                            Swal.fire({
                                                type: 'success',
                                                position: 'center',
                                                title: 'Donatur berhasil dipindah',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            $("#laporanDonatur").DataTable().ajax.reload()
                                            $('#ChangeDonatur${data["akunId"]}').modal('toggle'); 
                                            
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 2, 3]
            }]
        });

    }

    $(".list-admin [href='#program']").click(function () {
        adminLapProgram()
    })

    $(".list-admin [href='#logistik']").click(function () {
        adminLapLogistik()
    })

    $(".list-admin [href='#aset']").click(function () {
        adminLapAset()
    })

    $(".list-admin [href='#makan']").click(function () {
        adminLapMakan()
    })

    $(".list-admin [href='#gaji']").click(function () {
        adminLapGaji()
    })

    $(".list-admin [href='#lainnya']").click(function () {
        adminLapLainnya()
    })

    $(".list-admin [href='#maintenance']").click(function () {
        adminLapMaintenance()
    })

    $(".list-admin [href='#operasional']").click(function () {
        adminLapOperasional()
    })

    $(".list-admin [href='#paud']").click(function () {
        adminLapPaud()
    })

    $(".list-admin [href='#jasa']").click(function () {
        adminLapJasa()
    })

    $(".list-admin [href='#ebudget']").click(function () {
        adminLapAkunEbudget()
    })

    $(".list-admin [href='#akunMedia']").click(function () {
        adminLapAkunMedia()
    })

    $(".list-admin [href='#harian']").click(function () {
        adminLapVerifIncome()
    })

    $(".list-admin [href='#income']").click(function () {
        adminLapPending()
    })

    $(".list-admin [href='#nonResi']").click(function () {
        adminLapResi()
    })

    $(".list-admin [href='#laporan']").click(function () {
        adminLapAkun()
    })

    $(".list-admin [href='#sekolah']").click(function () {
        adminLapSekolah()
    })

    $(".list-admin [href='#team']").click(function () {
        adminLapTeamMedia()
    })

    $(".list-admin [href='#changeName']").click(function () {
        adminLapChangeName()
    })

    $(".list-admin [href='#migrasiDonatur']").click(function () {
        adminLapDonatur()
    })
})