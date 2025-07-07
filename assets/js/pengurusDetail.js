var btnSelectListDetail = document.querySelectorAll(".list-detail-content .select-data-account .app-card")
btnSelectListDetail.forEach(listDetail => {
    listDetail.addEventListener("click", function () {
        const detailActive = document.querySelector(".list-detail-content .select-data-account .app-card.active")
        if (detailActive == null) {
            listDetail.classList.toggle("active")
        } else {
            listDetail.classList.toggle("active")
            detailActive.classList.remove("active")
        }

        const detailId = listDetail.getAttribute("id")
        if (detailId == "laporanIncome") {
            $(".list-laporan-income").toggle("slow")
            $(".list-laporan-akun").css("display", "none")
        } else {
            $(".list-laporan-income").css("display", "none")
            $(".list-laporan-akun").toggle("slow")
        }
    })
});

var buttonListLaporanIncome = document.querySelectorAll(".list-laporan-income .button-list-laporan-income button")
buttonListLaporanIncome.forEach(listLaporanIncome => {
    listLaporanIncome.addEventListener("click", function () {
        const listIncomeActive = document.querySelector(".list-laporan-income .button-list-laporan-income .active")
        const pageIncomeBulan = document.querySelector(".laporanIncomeDetail .table-responsive")
        const pageIncomeTahun = document.querySelector(".laporanIncomeDetailTahun .table-responsive")
        listIncomeActive.classList.remove("active")
        listLaporanIncome.classList.add("active")
        document.querySelector(".list-laporan-income .title-pemasukan .title-table").innerHTML = listLaporanIncome.innerHTML

        const idListlaporan = listLaporanIncome.getAttribute("id")
        if (idListlaporan == "bulanan") {
            pageIncomeBulan.classList.remove("display-content")
            pageIncomeTahun.classList.add("display-content")

        } else {
            pageIncomeBulan.classList.add("display-content")
            pageIncomeTahun.classList.remove("display-content")
        }
    })
});

var buttonListLaporanAkun = document.querySelectorAll(".list-laporan-akun .button-list-laporan-akun button")
buttonListLaporanAkun.forEach(listLaporanAkun => {
    listLaporanAkun.addEventListener("click", function () {
        const listAkunActive = document.querySelector(".list-laporan-akun .button-list-laporan-akun .active")
        listAkunActive.classList.remove("active")
        listLaporanAkun.classList.add("active")
        document.querySelector(".list-laporan-akun .title-laporan .title-table").innerHTML = listLaporanAkun.innerHTML

        const listAkunid = listLaporanAkun.getAttribute("id")
        const pageAkunBulanan = document.querySelector(".laporanAkunDetail .table-responsive")
        const pageAkunTahunan = document.querySelector(".laporanAkunDetailTahun .table-responsive")

        if (listAkunid == "bulanan") {
            pageAkunBulanan.classList.remove("display-content")
            pageAkunTahunan.classList.add("display-content")
        } else {
            pageAkunBulanan.classList.add("display-content")
            pageAkunTahunan.classList.remove("display-content")
        }
    })
});

var btnListMediaBulan = document.querySelectorAll(".laporanAkunDetail .list-media-akun .btn")
btnListMediaBulan.forEach(btnMediaBulan => {
    btnMediaBulan.addEventListener("click", function () {
        const mediaActive = document.querySelector(".laporanAkunDetail .list-media-akun .active")
        mediaActive.classList.remove("active")
        btnMediaBulan.classList.add("active")

        const akunId = btnMediaBulan.getAttribute("id")
        const pageAkunFacebook = document.querySelector(".laporanAkunDetail .table-facebook .table-responsive")
        const pageAkunInstagram = document.querySelector(".laporanAkunDetail .table-instagram .table-responsive")
        if (akunId == "mediaFacebook") {
            pageAkunFacebook.classList.remove("display-content")
            pageAkunInstagram.classList.add("display-content")
        } else {
            pageAkunFacebook.classList.add("display-content")
            pageAkunInstagram.classList.remove("display-content")

        }
    })
});

var btnListMediaTahun = document.querySelectorAll(".laporanAkunDetailTahun .list-media-akun .btn")
btnListMediaTahun.forEach(btnMediaTahun => {
    btnMediaTahun.addEventListener("click", function () {
        const mediaTahunActive = document.querySelector(".laporanAkunDetailTahun .list-media-akun .active")
        mediaTahunActive.classList.remove("active")
        btnMediaTahun.classList.add("active")

        const akunTahunid = btnMediaTahun.getAttribute("id")
        const pageAkunFacebookTahun = document.querySelector(".laporanAkunDetailTahun .table-facebook .table-responsive")
        const pageAkunInstagramTahun = document.querySelector(".laporanAkunDetailTahun .table-instagram .table-responsive")

        if (akunTahunid == "mediaFacebook") {
            pageAkunFacebookTahun.classList.remove("display-content")
            pageAkunInstagramTahun.classList.add("display-content")
        } else {
            pageAkunFacebookTahun.classList.add("display-content")
            pageAkunInstagramTahun.classList.remove("display-content")

        }

    })
});

// periode akun
var periodeAkunList = document.querySelectorAll(".list-periode-account-detail .dropdown-menu-periode li a")
periodeAkunList.forEach(periodeList => {
    periodeList.addEventListener("click", function () {

    })
});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            return `
            <img src="./assets/images/profiles/${$(this).data('image')}" alt="Profile Image">
            `;
        },
    })

    $(".select-data-account #laporanIncome").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        var date = new Date()
        var month = String(date.getMonth() + 1).padStart(2, '0')
        var collapsedGroups = {};
        var table = $('#incomeBulan').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Income Bulan Ini',
            }],
            "ajax": {
                url: 'table_ajax/data_list_income.php?idKey=' + getIdAccount + '&idMonth=' + month,
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
                dataSrc: "suksesAkun",
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
                targets: [1, 2, 3, 5, 6, 9]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 4, 7, 8]
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

        $('#incomeBulan tbody').on('click', 'tr.group-end', function () {
            var name = $(this).data('name');
            collapsedGroups[name] = !collapsedGroups[name];
            table.draw(false);
        });
    })

    $(".button-list-laporan-income #tahunan").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        var collapsedGroups = {};
        var table = $('#incomeTahun').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Income Tahun ini'
            }],
            "ajax": {
                url: 'table_ajax/data_list_income.php?idKey=' + getIdAccount + '&idMonth=0',
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
                dataSrc: "suksesAkun",
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
                targets: [1, 2, 3, 5, 6, 9]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 4, 7, 8]
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

        $('#incomeTahun tbody').on('click', 'tr.group-end', function () {
            var name = $(this).data('name');
            collapsedGroups[name] = !collapsedGroups[name];
            table.draw(false);
        });
    })

    $(".laporanIncomeDetail .reload").click(function () {
        $("#incomeBulan").DataTable().ajax.reload()
    })

    $(".laporanIncomeDetailTahun .reload").click(function () {
        $("#incomeTahun").DataTable().ajax.reload()
    })

    $(".select-data-account #laporanAkun").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        var date = new Date()
        var month = String(date.getMonth() + 1).padStart(2, '0')
        $('#lapTableAkunFacebookBulan').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Akun Bulan Ini'
            }],
            "ajax": {
                url: 'table_ajax/data_list_akun.php?idKey=' + getIdAccount + '&idMonth=' + month + '&listMedia=facebook',
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
                    'Rp ' + rupiah + ''
                );
            }
        });
    })

    $(".laporanAkunDetail .list-media-akun #mediaInstagram").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        var date = new Date()
        var month = String(date.getMonth() + 1).padStart(2, '0')
        $('#lapTableAkunInstagramBulan').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Akun Bulan Ini'
            }],
            "ajax": {
                url: 'table_ajax/data_list_akun.php?idKey=' + getIdAccount + '&idMonth=' + month + '&listMedia=instagram',
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
    })

    $(".laporanAkunDetail .table-facebook .reload").click(function () {
        $("#lapTableAkunFacebookBulan").DataTable().ajax.reload()
    })

    $(".laporanAkunDetail .table-instagram .reload").click(function () {
        $("#lapTableAkunInstagramBulan").DataTable().ajax.reload()
    })

    $(".list-laporan-akun .button-list-laporan-akun #tahunan").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        $('#lapTableAkunFacebookTahun').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Akun Tahun Ini'
            }],
            "ajax": {
                url: 'table_ajax/data_list_akun.php?idKey=' + getIdAccount + '&idMonth=0&listMedia=facebook',
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
                    'Rp ' + rupiah + ''
                );
            }
        });
    })

    $(".laporanAkunDetailTahun .list-media-akun #mediaInstagram").one("click", function () {
        var getIdAccount = $(this).attr("data-name")
        $('#lapTableAkunInstagramTahun').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Akun Tahun Ini'
            }],
            "ajax": {
                url: 'table_ajax/data_list_akun.php?idKey=' + getIdAccount + '&idMonth=0&listMedia=instagram',
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
    })

    $(".laporanAkunDetailTahun .table-facebook .reload").click(function () {
        $("#lapTableAkunFacebookTahun").DataTable().ajax.reload()
    })

    $(".laporanAkunDetailTahun .table-instagram .reload").click(function () {
        $("#lapTableAkunInstagramTahun").DataTable().ajax.reload()
    })
})