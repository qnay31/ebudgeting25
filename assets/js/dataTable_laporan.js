$(document).ready(function () {
    // table data program
    $('#laporanProgram').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Program Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_program.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapProgram",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapBulan",
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
            data: "lapTerpakai",
            "render": function (data) {
                return data;
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
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_program${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
            "targets": 12,
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
            targets: [1, 2, 7]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 3, 4, 5, 6, 8, 9, 10, 11, 12]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(5, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(5).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(5, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(10).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data logistik
    $('#laporanLogistik').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Logistik Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_logistik.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_logistik${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan logistik
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data aset yayasan
    $('#laporanAset').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Aset Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_aset.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapJenis",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "lapQtyAnggaran",
            "render": function (data) {
                return `${data == 0 ? `<center>-</center>`:`<center>${data} Pcs</center>`}`;
            }
        }, {
            "targets": 5,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 9,
            data: "lapQtyTerpakai",
            "render": function (data) {
                return `${data == 0 ? `<center>-</center>`:`<center>${data} Pcs</center>`}`;
            }
        }, {
            "targets": 10,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 11,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 12,
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
            "targets": 13,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_aset${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan aset
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
            "targets": 14,
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
            targets: [2, 8]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(6, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(6).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(11, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(11).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(6, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(11, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(12).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data uang makan
    $('#laporanMakan').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Uang Makan Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_makan.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_uang_makan${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
                    <div id="dataModal_uang_makan${data}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Bukti Kwitansi</h4>
                                </div>
                                <div class="modal-body" id="detail_user_uang_makan${data}">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <script>
                    // modal laporan uang Makan
                    $('.view_data_uang_makan${data}').click(function () {
                        var data_id = $(this).data("id")
                        $.ajax({
                            url: "pages/resi/resi_uangMakan.php",
                            method: "POST",
                            data: {
                                data_id: data_id
                            },
                            success: function (data) {
                                $("#detail_user_uang_makan${data}").html(data)
                                $("#dataModal_uang_makan${data}").modal('show')
                            }
                        })
                    })
                    </script>
                
                `
                return image
            }
        }, {
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data gaji karyawan
    $('#laporanGaji').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Gaji Karyawan Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_gaji.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_gaji${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan gaji karyawan
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data gaji karyawan
    $('#laporanLainnya').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Anggaran Lain Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_lainnya.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_lainnya${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan anggaran lain
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data maintenance
    $('#laporanMaintenance').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Maintenance Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_maintenance.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_maintenance${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan maintenance
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data operasional
    $('#laporanOperasional').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Operasional Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_operasional.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_operasional${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan operasional
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data paudqu
    $('#laporanPaud').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan PaudQU Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_paud.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_paud${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan paud
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // table data jasa
    $('#laporanJasa').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Pembayaran Jasa Yayasan Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_jasa.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "lapAnggaran",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapBulan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 7,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 8,
            data: "lapTerpakai",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 9,
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
            "targets": 10,
            data: "lapResi",
            "render": function (data) {
                var image =
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_jasa${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>
                
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
                    // modal laporan jasa
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
            "targets": 11,
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
            targets: [6]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah + ''
            );

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageSeluruh = pageTotal - pageTotal2

            var number_string = pageSeluruh.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            // console.log(pageTotal);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    // relaod data program
    $('#laporan').click(function () {
        $('#laporanProgram').DataTable().ajax.reload();
    });

    $('.btnProgram').one('click', function () {
        $('#laporanProgram').DataTable().ajax.reload();
    });

    $(".tableLaporanProgram .reload").click(function () {
        $("#laporanProgram").DataTable().ajax.reload()
    })

    // relaod data logistik
    $('.btnLogistik').one('click', function () {
        $('#laporanLogistik').DataTable().ajax.reload();
    });

    $(".tableLaporanLogistik .reload").click(function () {
        $("#laporanLogistik").DataTable().ajax.reload()
    })

    // relaod data aset
    $('.btnAset').one('click', function () {
        $('#laporanAset').DataTable().ajax.reload();
    });

    $(".tableLaporanAset .reload").click(function () {
        $("#laporanAset").DataTable().ajax.reload()
    })

    // relaod data uang makan
    $('.btnUangMakan').one('click', function () {
        $('#laporanMakan').DataTable().ajax.reload();
    });

    $(".tableLaporanMakan .reload").click(function () {
        $("#laporanMakan").DataTable().ajax.reload()
    })

    // relaod data gaji karyawan
    $('.btnGaji').one('click', function () {
        $('#laporanGaji').DataTable().ajax.reload();
    });

    $(".tableLaporanGaji .reload").click(function () {
        $("#laporanGaji").DataTable().ajax.reload()
    })

    // reload data anggaran lain
    $('.btnLainnya').one('click', function () {
        $('#laporanLainnya').DataTable().ajax.reload();
    });

    $(".tableLaporanLainnya .reload").click(function () {
        $("#laporanLainnya").DataTable().ajax.reload()
    })

    // reload data maintenance
    $('.btnMaintenance').one('click', function () {
        $('#laporanMaintenance').DataTable().ajax.reload();
    });

    $(".tableLaporanMaintenance .reload").click(function () {
        $("#laporanMaintenance").DataTable().ajax.reload()
    })

    // reload data operasioanl
    $('.btnOperasional').one('click', function () {
        $('#laporanOperasional').DataTable().ajax.reload();
    });

    $(".tableLaporanOperasional .reload").click(function () {
        $("#laporanOperasional").DataTable().ajax.reload()
    })

    // reload data paud qu
    $('.btnPaud').one('click', function () {
        $('#laporanPaud').DataTable().ajax.reload();
    });

    $(".tableLaporanPaud .reload").click(function () {
        $("#laporanPaud").DataTable().ajax.reload()
    })

    // reload data jasa
    $('.btnJasa').one('click', function () {
        $('#laporanJasa').DataTable().ajax.reload();
    });

    $(".tableLaporanJasa .reload").click(function () {
        $("#laporanJasa").DataTable().ajax.reload()
    })

    // ==================================== income ==================================== //
    // harian
    $('#incomeHarian').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Income Harian'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_incomeHarian.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapGedung",
            "render": function (data) {
                return `<center>Team ${data}</center>`;
            }
        }, {
            "targets": 3,
            data: "lapTanggal",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "lapBulan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapIncome",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-success">${data}</span>`
            }
        }, {
            searchPanes: {
                show: true,
                initCollapsed: true
            },
            targets: [2, 3, 4]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 5, 6]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            total = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal = api
                .column(5, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            var number_string2 = total.toString(),
                sisa2 = number_string2.length % 3,
                rupiah2 = number_string2.substr(0, sisa2),
                ribuan2 = number_string2.substr(sisa2).match(/\d{3}/g);

            if (ribuan2) {
                separator2 = sisa2 ? '.' : '';
                rupiah2 += separator2 + ribuan2.join('.');
            }
            // Update footer
            $(api.column(5).footer()).html(
                'Rp. ' + rupiah + ''
            );

            $(api.column(6).footer()).html(
                ' (Total: ' + rupiah2 + ')'
            );

        }
    });

    if (readCookie("id_pengurus") == "kepala_income") {
        $('#laporan').click(function () {
            $('#incomeHarian').DataTable().ajax.reload();
        });
    }
    $('.incomeHarian').one('click', function () {
        $('#incomeHarian').DataTable().ajax.reload();
    });

    $(".laporanIncomeHarian .reload").click(function () {
        $("#incomeHarian").DataTable().ajax.reload()
    })

    $('.btnIncomeHarian').one('click', function () {
        $('#incomeHarian').DataTable().ajax.reload();
    });

    // akun
    var collapsedGroups = {};
    var table = $('#laporanIncome').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Income Global'
        }],
        "ajax": {
            url: 'table_ajax/data_global_income.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 50, 100, 500, -1],
            [10, 50, 100, 500, "All"]
        ],
        searchPanes: {
            orderable: false,
        },
        rowGroup: {
            // Uses the 'row group' plugin
            dataSrc: "suksesPemegang",
            startRender: null,
            endRender: function (rows, group) {
                var collapsed = !!collapsedGroups[group];

                rows.nodes().each(function (r) {
                    r.style.display = collapsed ? 'none' : '';
                });

                var intVal = function (i) {
                    return typeof i === 'string' ?
                        i.replace(/[\Rp,.]/g, '') * 1 :
                        typeof i === 'number' ?
                        i : 0;
                };

                var salary = rows
                    .data()
                    .pluck("suksesTransfer")
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                salary = $.fn.dataTable.render.number('.', '', 0).display(salary);


                // Add category name to the <tr>. NOTE: Hardcoded colspan
                return $('<tr/>')
                    .append('<td></td>')
                    .append('<td colspan="7">' + group + ' (' + rows.count() + ') ' + '/ Income: ' + ' ' + salary + '</td>')
                    .append('<td> ' + salary + ' </td>')
                    .append('<td></td>')
                    .attr('data-name', group)
                    .toggleClass('collapsed', collapsed);
            }
        },
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "suksesKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "suksesPemegang",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 3,
            data: "suksesAkun",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "suksesDonatur",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "suksesTanggal",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "suksesBulan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 7,
            data: "suksesBank",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 8,
            data: "suksesTransfer",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 9,
            data: "suksesTeam",
            "render": function (data) {
                return `<center>Team ${data}</center>`
            }
        }, {
            searchPanes: {
                show: true,
                initCollapsed: true
            },
            targets: [1, 2, 3, 4, 5, 6, 9]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 7, 8]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            total = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            var number_string2 = total.toString(),
                sisa2 = number_string2.length % 3,
                rupiah2 = number_string2.substr(0, sisa2),
                ribuan2 = number_string2.substr(sisa2).match(/\d{3}/g);

            if (ribuan2) {
                separator2 = sisa2 ? '.' : '';
                rupiah2 += separator2 + ribuan2.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                'Rp. ' + rupiah
            );

            $(api.column(9).footer()).html(
                ' (Total: ' + rupiah2 + ')'
            );

        }
    });

    $('#laporanIncome tbody').on('click', 'tr.group-end', function () {
        var name = $(this).data('name');
        collapsedGroups[name] = !collapsedGroups[name];
        table.draw(false);
    });

    if (readCookie("id_pengurus") == "manager_facebook") {
        $('#laporan').one('click', function () {
            $('#laporanIncome').DataTable().ajax.reload();
        });
    }

    $('.incomeAkun').one('click', function () {
        $('#laporanIncome').DataTable().ajax.reload();
    });

    $(".laporanTableIncome .reload").click(function () {
        $("#laporanIncome").DataTable().ajax.reload()
    })

    // non resi
    $('#laporanNonResi').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Income Non Resi'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_nonResi.php',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "lapTanggal",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "lapBulan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "lapIncome",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-success">${data}</span>`
            }
        }, {
            searchPanes: {
                show: true,
                initCollapsed: true
            },
            targets: [3]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 1, 2, 4, 5]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            total = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            pageTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            var number_string2 = total.toString(),
                sisa2 = number_string2.length % 3,
                rupiah2 = number_string2.substr(0, sisa2),
                ribuan2 = number_string2.substr(sisa2).match(/\d{3}/g);

            if (ribuan2) {
                separator2 = sisa2 ? '.' : '';
                rupiah2 += separator2 + ribuan2.join('.');
            }
            // Update footer
            $(api.column(4).footer()).html(
                'Rp. ' + rupiah + ''
            );

            $(api.column(5).footer()).html(
                ' (Total: ' + rupiah2 + ')'
            );

        }
    });

    $('.incomeNonResi').one('click', function () {
        $('#laporanNonResi').DataTable().ajax.reload();
    });

    $(".laporanTableNonResi .reload").click(function () {
        $("#laporanNonResi").DataTable().ajax.reload()
    })

    $('.btnIncomeNonResi').one('click', function () {
        $('#laporanNonResi').DataTable().ajax.reload();
    });

    // laporan akun facebook
    $('#lapTableAkunFacebook').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Akun Global Facebook'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_akun.php?media=Facebook',
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
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapPemegang",
            "render": function (data) {
                return Capitalize(data);
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
                return data;
            }
        }, {
            "targets": 4,
            data: "lapBulan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapTeman",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "lapAdd",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 7,
            data: "lapTemanBaru",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 8,
            data: "lapTemanHapus",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 9,
            data: "lapSerangan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 10,
            data: "lapRespon",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 11,
            data: "lapNoRespon",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 12,
            data: "lapDonatur",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 13,
            data: "lapIncome",
            "render": function (data) {
                return data
            }
        }, {
            searchPanes: {
                show: true,
                initCollapsed: true
            },
            targets: [1, 2, 4]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(6, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(6).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(7, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(7).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(10, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(10).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(11, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(11).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(12, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(12).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(13, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(13).footer()).html(
                rupiah + ''
            );
        }
    });

    $('.btnLaporanAkun').one('click', function () {
        $('#lapTableAkunFacebook').DataTable().ajax.reload();
    });

    $('.facebook').one('click', function () {
        $('#lapTableAkunFacebook').DataTable().ajax.reload();
    });

    $(".table-facebook .reload").click(function () {
        $("#lapTableAkunFacebook").DataTable().ajax.reload()
    })

    // laporan akun instagram
    $('#lapTableAkunInstagram').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        dom: 'PBlfrtip',
        buttons: [{
            extend: 'excel',
            footer: true,
            title: 'Laporan Akun Global'
        }],
        "ajax": {
            url: 'table_ajax/data_laporan_akun.php?media=Instagram',
            type: 'GET',
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
        searchPanes: {
            orderable: false,
        },
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "lapPemegang",
            "render": function (data) {
                return Capitalize(data);
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
                return data;
            }
        }, {
            "targets": 4,
            data: "lapBulan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 5,
            data: "lapPengikut",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 6,
            data: "lapMengikuti",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 7,
            data: "lapIkutBaru",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 8,
            data: "lapIkutiBaru",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 9,
            data: "lapIkutHapus",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 10,
            data: "lapIkutiHapus",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 11,
            data: "lapSerangan",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 12,
            data: "lapRespon",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 13,
            data: "lapNoRespon",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 14,
            data: "lapDonatur",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 15,
            data: "lapIncome",
            "render": function (data) {
                return data
            }
        }, {
            searchPanes: {
                show: true,
                initCollapsed: true
            },
            targets: [1, 2, 4]
        }, {
            searchPanes: {
                show: false
            },
            targets: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\Rp,.]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page
            pageTotal = api
                .column(7, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(7).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(8).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(9).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(10, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(10).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(11, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(11).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(12, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(12).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(13, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(13).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(14, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(14).footer()).html(
                rupiah + ''
            );

            pageTotal = api
                .column(15, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            var number_string = pageTotal.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            // Update footer
            $(api.column(15).footer()).html(
                'Rp. ' + rupiah + ''
            );
        }
    });

    $('.instagram').one('click', function () {
        $('#lapTableAkunInstagram').DataTable().ajax.reload();
    });

    $(".table-instagram .reload").click(function () {
        $("#lapTableAkunInstagram").DataTable().ajax.reload()
    })
})