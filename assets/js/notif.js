'use strict';

const notifListBtn = document.querySelectorAll(".list-notif button")
notifListBtn.forEach(notifBtn => {
    notifBtn.addEventListener("click", function () {
        const notifActive = document.querySelector(".list-notif .active")
        notifActive.classList.remove("active")
        notifBtn.classList.add("active")

        const notifHTML = notifBtn.innerHTML

        document.querySelector(".notifContent .title-table").innerHTML = notifHTML

        const notifId = notifBtn.getAttribute("href")
        const notifProgram = document.querySelector(".tablePengajuanProgram .table-responsive")
        const notifLogistik = document.querySelector(".tablePengajuanLogistik .table-responsive")
        const notifAset = document.querySelector(".tablePengajuanAset .table-responsive")
        const notifMakan = document.querySelector(".tablePengajuanMakan .table-responsive")
        const notifGaji = document.querySelector(".tablePengajuanGaji .table-responsive")
        const notifLainnya = document.querySelector(".tablePengajuanLainnya .table-responsive")
        const notifMaintenance = document.querySelector(".tablePengajuanMaintenance .table-responsive")
        const notifOperasional = document.querySelector(".tablePengajuanOperasional .table-responsive")
        const notifPaud = document.querySelector(".tablePengajuanPaud .table-responsive")
        const notifJasa = document.querySelector(".tablePengajuanJasa .table-responsive")

        if (notifId == "#program") {
            notifProgram.classList.remove("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#aset") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.remove("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#makan") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.remove("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#gaji") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.remove("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#lainnya") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.remove("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#maintenance") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.remove("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#operasional") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.remove("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#paud") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.remove("display-content")
            notifJasa.classList.add("display-content")

        } else if (notifId == "#jasa") {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.add("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.remove("display-content")

        } else {
            notifProgram.classList.add("display-content")
            notifLogistik.classList.remove("display-content")
            notifAset.classList.add("display-content")
            notifMakan.classList.add("display-content")
            notifGaji.classList.add("display-content")
            notifLainnya.classList.add("display-content")
            notifMaintenance.classList.add("display-content")
            notifOperasional.classList.add("display-content")
            notifPaud.classList.add("display-content")
            notifJasa.classList.add("display-content")
        }
    })
});

const notifLapsBtn = document.querySelectorAll(".list-notifLaporan button")
notifLapsBtn.forEach(notifLaps => {
    notifLaps.addEventListener("click", function () {
        const notifLapsActive = document.querySelector(".list-notifLaporan .active")

        notifLapsActive.classList.remove("active")
        notifLaps.classList.add("active")

        const notifLapsHTML = notifLaps.innerHTML
        document.querySelector(".notifLaporanContent .title-table").innerHTML = notifLapsHTML
        const notifLapId = notifLaps.getAttribute("href")

        const notifLapProgram = document.querySelector(".tableNotLaporanProgram .table-responsive")
        const notifLapLogistik = document.querySelector(".tableNotLaporanLogistik .table-responsive")
        const notifLapAset = document.querySelector(".tableNotLaporanAset .table-responsive")
        const notifLapMakan = document.querySelector(".tableNotLaporanMakan .table-responsive")
        const notifLapGaji = document.querySelector(".tableNotLaporanGaji .table-responsive")
        const notifLapLainnya = document.querySelector(".tableNotLaporanLainnya .table-responsive")
        const notifLapMaintenance = document.querySelector(".tableNotLaporanMaintenance .table-responsive")
        const notifLapOperasional = document.querySelector(".tableNotLaporanOperasional .table-responsive")
        const notifLapPaud = document.querySelector(".tableNotLaporanPaud .table-responsive")
        const notifLapJasa = document.querySelector(".tableNotLaporanJasa .table-responsive")

        if (notifLapId == "#program") {
            notifLapProgram.classList.remove("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#aset") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.remove("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#makan") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.remove("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#gaji") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.remove("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#lainnya") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.remove("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#maintenance") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.remove("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#operasional") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.remove("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#paud") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.remove("display-content")
            notifLapJasa.classList.add("display-content")

        } else if (notifLapId == "#jasa") {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.add("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.remove("display-content")

        } else {
            notifLapProgram.classList.add("display-content")
            notifLapLogistik.classList.remove("display-content")
            notifLapAset.classList.add("display-content")
            notifLapMakan.classList.add("display-content")
            notifLapGaji.classList.add("display-content")
            notifLapLainnya.classList.add("display-content")
            notifLapMaintenance.classList.add("display-content")
            notifLapOperasional.classList.add("display-content")
            notifLapPaud.classList.add("display-content")
            notifLapJasa.classList.add("display-content")
        }
    })
});

const notifIncomeBtn = document.querySelectorAll(".notifIncomeWait button")
notifIncomeBtn.forEach(incomeBtn => {
    incomeBtn.addEventListener("click", function () {
        const notifIncomeActive = document.querySelector(".list-notifIncomeWait .active")

        const notifIncomeWaiting = document.querySelector(".tableIncomeWaiting .table-responsive")
        const notifNonResiWaiting = document.querySelector(".tableNonResiWaiting .table-responsive")

        notifIncomeActive.classList.remove("active")
        incomeBtn.classList.add("active")
        const notifIncomeHTML = incomeBtn.innerHTML
        document.querySelector(".notifIncomeContent .title-table").innerHTML = notifIncomeHTML
        const notifIncomeId = incomeBtn.getAttribute("href")

        if (notifIncomeId == "#income") {
            notifIncomeWaiting.classList.remove("display-content")
            notifNonResiWaiting.classList.add("display-content")

        } else {
            notifIncomeWaiting.classList.add("display-content")
            notifNonResiWaiting.classList.remove("display-content")
        }
    })
});

$(document).ready(function () {
    // pengajuan program
    $('#pengajuanProgram').DataTable({
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
            [3, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
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
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmProgram${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmProgram${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_program.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "program",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanProgram').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan logistik
    $('#pengajuanLogistik').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_logistik.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLogistik${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLogistik${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_logistik.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanLogistik').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan aset yayasan
    $('#pengajuanAset').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_aset.php',
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
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
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
                return data;
            }
        }, {
            "targets": 3,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 4,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 5,
            data: "verQty",
            "render": function (data) {
                return `${data} Pcs`
            }
        }, {
            "targets": 6,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmAset${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmAset${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "aset_yayasan",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanAset').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan uang makan
    $('#pengajuanMakan').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_uang_makan.php',
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
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmMakan${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmMakan${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "uang_makan",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanMakan').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan gaji karyawan
    $('#pengajuanGaji').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_gaji_karyawan.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmGaji${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmGaji${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "gaji_karyawan",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanGaji').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan gaji karyawan
    $('#pengajuanLainnya').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_biaya_lainnya.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLainnya${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLainnya${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "anggaran_lain",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanLainnya').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan maintenance
    $('#pengajuanMaintenance').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_maintenance.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmMaintenance${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmMaintenance${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "maintenance",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanMaintenance').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan operasional
    $('#pengajuanOperasional').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_operasional.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmOperasional${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmOperasional${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "operasional_yayasan",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanOperasional').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan paud qu
    $('#pengajuanPaud').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_paud.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmPaud${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmPaud${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_program.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "paudqu",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanPaud').DataTable().ajax.reload();
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
        }]
    });

    // pengajuan jasa
    $('#pengajuanJasa').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_jasa.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "order": [
            [2, 'desc']
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: "verKategori",
            "render": function (data) {
                return `<center>Pembayaran ${Capitalize(data)}</center>`;
            }
        }, {
            "targets": 2,
            data: "verPengajuan",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 3,
            data: "verDeskripsi",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 4,
            data: "verAnggaran",
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
            data: "verEdit",
            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmJasa${data}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmJasa${data}').click(function (e) {
                        if (confirm("Pengajuan ini disetujui?")) {
                            var id = ${data};
                            $.ajax({
                                url: 'pages/konfirmasi/pengajuan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "jasa",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Pengajuan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#pengajuanJasa').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan program
    $('#notLaporanProgram').DataTable({
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
            [3, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 6,
            data: "lapPemakaian",
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
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
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
            "targets": 11,
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
            "targets": 12,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 13,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanProgram${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanProgram${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_program.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanProgram').DataTable().ajax.reload();
                                    $('#laporanProgram').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan logistik
    $('#notLaporanLogistik').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanLogistik${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanLogistik${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_logistik.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanLogistik').DataTable().ajax.reload();
                                    $('#laporanLogistik').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan aset yayasan
    $('#notLaporanAset').DataTable({
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
            [3, 'desc']
        ],
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
                return data == 0 ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data) + ' Pcs';
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
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 7,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 8,
            data: "lapQtyTerpakai",
            "render": function (data) {
                return data == 0 || data == null ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data) + ' Pcs';
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
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
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
                    `<center>
                        <a href="#" name="view" data-id="${data}" class="view_data_aset_yayasan${data}">
                            <i class="bi bi-images"></i>
                        </a>
                    </center>

                    <div id="dataModal_aset_yayasan${data}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Bukti Kwitansi</h4>
                                </div>
                                <div class="modal-body" id="detail_user_aset_yayasan${data}">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script>
                    // modal laporan aset_yayasan
                    $('.view_data_aset_yayasan${data}').click(function () {
                        var data_id = $(this).data("id")
                        $.ajax({
                            url: "pages/resi/resi_aset.php",
                            method: "POST",
                            data: {
                                data_id: data_id
                            },
                            success: function (data) {
                                $("#detail_user_aset_yayasan${data}").html(data)
                                $("#dataModal_aset_yayasan${data}").modal('show')
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
                    <a href="assets/doc/aset_yayasan/${data}" download>
                        ${data}
                    </a>`
                return excel;

            }
        }, {
            "targets": 14,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 15,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanAset${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanAset${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "aset_yayasan"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanAset').DataTable().ajax.reload();
                                    $('#laporanAset').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan uang makan
    $('#notLaporanMakan').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
                    // modal laporan uang makan
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanMakan${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanMakan${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "uang_makan"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanMakan').DataTable().ajax.reload();
                                    $('#laporanMakan').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan gaji karyawan
    $('#notLaporanGaji').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanGaji${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanGaji${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "gaji_karyawan"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanGaji').DataTable().ajax.reload();
                                    $('#laporanGaji').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan anggaran lain
    $('#notLaporanLainnya').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
                    // modal laporan gaji karyawan
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanLainnya${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanLainnya${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "anggaran_lain"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanLainnya').DataTable().ajax.reload();
                                    $('#laporanLainnya').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan maintenance
    $('#notLaporanMaintenance').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanMaintenance${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanMaintenance${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "maintenance"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanMaintenance').DataTable().ajax.reload();
                                    $('#laporanMaintenance').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan operasional
    $('#notLaporanOperasional').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanOperasional${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanOperasional${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "operasional_yayasan"
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanOperasional').DataTable().ajax.reload();
                                    $('#laporanOperasional').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan Paudqu
    $('#notLaporanPaud').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "terpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
                    // modal laporan paudqu
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanPaud${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanPaud${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_paud.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanPaud').DataTable().ajax.reload();
                                    $('#laporanPaud').DataTable().ajax.reload();
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
        }]
    });

    // laporan pengajuan Jasa
    $('#notLaporanJasa').DataTable({
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
            [2, 'desc']
        ],
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
            data: "anggaran",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 5,
            data: "lapPemakaian",
            "render": function (data) {
                return data
            }
        }, {
            "targets": 6,
            data: "lapDeskripsiPemakaian",
            "render": function (data) {
                return Capitalize(data);
            }
        }, {
            "targets": 7,
            data: "t    erpakai",
            "render": function (data) {
                return data == "" ? `<center>-</center>` : new Intl.NumberFormat('en-US').format(data);
            }
        }, {
            "targets": 8,
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
            "targets": 9,
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
            "targets": 10,
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
            "targets": 11,
            data: "lapStatus",
            "render": function (data) {
                return `<span class="badge bg-warning">${data}</span>`
            }
        }, {
            "targets": 12,
            data: {
                data: ['data']
            },

            "render": function (data) {
                var edit =
                    `
                <center> 
                    <a href="" id="btnConfirmLaporanJasa${data["lapEdit"]}"><i class="bi bi-check-circle"></i></a>
                </center>

                <script>
                    // Confirm
                    $('#btnConfirmLaporanJasa${data["lapEdit"]}').click(function (e) {
                        if (confirm("Laporan sudah sesuai dan akan disetujui?")) {
                            var id = ${data["lapEdit"]};
                            $.ajax({
                                url: 'pages/konfirmasi/laporan_management.php',
                                method: 'POST',
                                data: {
                                    id: id,
                                    kategori: "jasa",
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Laporan telah disetujui',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('#notLaporanJasa').DataTable().ajax.reload();
                                    $('#laporanJasa').DataTable().ajax.reload();
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
        }]
    });

    // relaod data pengajuan program
    $('.notification').click(function () {
        $('#pengajuanProgram').DataTable().ajax.reload();
    });

    $('.btnPengajuanProgram').click(function () {
        $('#pengajuanProgram').DataTable().ajax.reload();
    });

    $(".tablePengajuanProgram .reload").click(function () {
        $("#pengajuanProgram").DataTable().ajax.reload()
    })

    // reload data pengajuan logistik
    $('.btnPengajuanLogistik').click(function () {
        $('#pengajuanLogistik').DataTable().ajax.reload();
    });

    $(".tablePengajuanLogistik .reload").click(function () {
        $("#pengajuanLogistik").DataTable().ajax.reload()
    })

    // reload data pengajuan aset yayasan
    $('.btnPengajuanAset').click(function () {
        $('#pengajuanAset').DataTable().ajax.reload();
    });

    $(".tablePengajuanAset .reload").click(function () {
        $("#pengajuanAset").DataTable().ajax.reload()
    })

    // reload data pengajuan uang makan
    $('.btnPengajuanMakan').click(function () {
        $('#pengajuanMakan').DataTable().ajax.reload();
    });

    $(".tablePengajuanMakan .reload").click(function () {
        $("#pengajuanMakan").DataTable().ajax.reload()
    })

    // reload data pengajuan gaji karyawan
    $('.btnAjuGaji').click(function () {
        $('#pengajuanGaji').DataTable().ajax.reload();
    });

    $(".tablePengajuanGaji .reload").click(function () {
        $("#pengajuanGaji").DataTable().ajax.reload()
    })

    // reload data pengajuan biaya lainnya
    $('.btnAjuLainnya').click(function () {
        $('#pengajuanLainnya').DataTable().ajax.reload();
    });

    $(".tablePengajuanLainnya .reload").click(function () {
        $("#pengajuanLainnya").DataTable().ajax.reload()
    })

    // reload data pengajuan maintenance
    $('.btnPengajuanMaintenance').click(function () {
        $('#pengajuanMaintenance').DataTable().ajax.reload();
    });

    $(".tablePengajuanMaintenance .reload").click(function () {
        $("#pengajuanMaintenance").DataTable().ajax.reload()
    })

    // reload data pengajuan operasional
    $('.btnPengajuanOperasional').click(function () {
        $('#pengajuanOperasional').DataTable().ajax.reload();
    });

    $(".tablePengajuanOperasional .reload").click(function () {
        $("#pengajuanOperasional").DataTable().ajax.reload()
    })

    // reload data pengajuan paud qu
    $('.btnAjuPaud').click(function () {
        $('#pengajuanPaud').DataTable().ajax.reload();
    });

    $(".tablePengajuanPaud .reload").click(function () {
        $("#pengajuanPaud").DataTable().ajax.reload()
    })

    // reload data pengajuan paud qu
    $('.btnAjuJasa').click(function () {
        $('#pengajuanJasa').DataTable().ajax.reload();
    });

    $(".tablePengajuanJasa .reload").click(function () {
        $("#pengajuanJasa").DataTable().ajax.reload()
    })

    // relaod data laporan program
    $('.notifContent-laporan').click(function () {
        $('#notLaporanProgram').DataTable().ajax.reload();
    });

    $('.btnNotPengajuanProgram').click(function () {
        $('#notLaporanProgram').DataTable().ajax.reload();
    });

    $(".tableNotLaporanProgram .reload").click(function () {
        $("#notLaporanProgram").DataTable().ajax.reload()
    })

    // relaod data laporan logistik
    $('.btnNotLaporanLogistik').click(function () {
        $('#notLaporanLogistik').DataTable().ajax.reload();
    });

    $(".tableNotLaporanLogistik .reload").click(function () {
        $("#notLaporanLogistik").DataTable().ajax.reload()
    })

    // relaod data laporan aset yayasan
    $('.btnNotLaporanAset').click(function () {
        $('#notLaporanAset').DataTable().ajax.reload();
    });

    $(".tableNotLaporanAset .reload").click(function () {
        $("#notLaporanAset").DataTable().ajax.reload()
    })

    // relaod data laporan uang makan
    $('.btnNotLaporanUangMakan').click(function () {
        $('#notLaporanMakan').DataTable().ajax.reload();
    });

    $(".tableNotLaporanMakan .reload").click(function () {
        $("#notLaporanMakan").DataTable().ajax.reload()
    })

    // relaod data laporan gaji karyawan
    $('.btnNotLaporanGaji').click(function () {
        $('#notLaporanGaji').DataTable().ajax.reload();
    });

    $(".tableNotLaporanGaji .reload").click(function () {
        $("#notLaporanGaji").DataTable().ajax.reload()
    })

    // relaod data laporan anggaran lain
    $('.btnNotLaporanLainnya').click(function () {
        $('#notLaporanLainnya').DataTable().ajax.reload();
    });

    $(".tableNotLaporanLainnya .reload").click(function () {
        $("#notLaporanLainnya").DataTable().ajax.reload()
    })

    // relaod data laporan maintenance
    $('.btnNotLaporanMaintenance').click(function () {
        $('#notLaporanMaintenance').DataTable().ajax.reload();
    });

    $(".tableNotLaporanMaintenance .reload").click(function () {
        $("#notLaporanMaintenance").DataTable().ajax.reload()
    })

    // relaod data laporan operasional
    $('.btnNotLaporanOperasional').click(function () {
        $('#notLaporanOperasional').DataTable().ajax.reload();
    });

    $(".tableNotLaporanOperasional .reload").click(function () {
        $("#notLaporanOperasional").DataTable().ajax.reload()
    })

    // relaod data laporan paud qu
    $('.btnNotLaporanPaud').click(function () {
        $('#notLaporanPaud').DataTable().ajax.reload();
    });

    $(".tableNotLaporanPaud .reload").click(function () {
        $("#notLaporanPaud").DataTable().ajax.reload()
    })

    // relaod data laporan jasa
    $('.btnNotLaporanJasa').click(function () {
        $('#notLaporanJasa').DataTable().ajax.reload();
    });

    $(".tableNotLaporanJasa .reload").click(function () {
        $("#notLaporanJasa").DataTable().ajax.reload()
    })

    // table income pending 
    $('#IncomeWaiting').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/laporan_incomePending.php',
            type: 'GET',
        },
        "deferRender": true,
        "order": [4, 'desc'],
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var edit =
                    `
            <center>
                <a href="" class="text-primary" id="confirmTableIncome${data["verEdit"]}"><i class="bi bi-check-circle" style="font-size: 1.2  rem;"></i></a>
            </center>
            <script>
                // confirm table
                $('#confirmTableIncome${data["verEdit"]}').click(function (e) {
                    if (confirm("Income sudah sesuai dan akan diverifikasi?")) {
                        var id = ${data["verEdit"]};
                        $.ajax({
                            url: 'pages/media/verifying_income.php',
                            method: 'POST',
                            data: {
                                id: id
                            },
                            success: function () {
                                Swal.fire({
                                    type: 'success',
                                    position: 'center',
                                    title: 'Income berhasil diverifikasi',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                $("#IncomeWaiting").DataTable().ajax.reload()
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
                return `<center>Team ${data}</center>`;
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
                return `<span class="badge bg-warning">${data}</span>`
            }
        }]
    });

    $('.notifContent-income').click(function () {
        $('#IncomeWaiting').DataTable().ajax.reload();
    });

    $('.btnIncomeMedia').one('click', function () {
        $('#IncomeWaiting').DataTable().ajax.reload();
    });

    $(".tableIncomeWaiting .reload").click(function () {
        $("#IncomeWaiting").DataTable().ajax.reload()
    })

    // table non resi pending 
    $('#nonResiWaiting').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/verifikasi_nonResi.php',
            type: 'GET',
        },
        "deferRender": true,
        "order": [4, 'desc'],
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return "<center>" + no + "</center>";
            }
        }, {
            "targets": 1,
            data: {
                data: ['data']
            },
            "render": function (data) {
                var edit =
                    `
            <center>
                <a href="" class="text-primary" id="confirmNonResiTable${data["verEdit"]}"><i class="bi bi-check-circle" style="font-size: 1.2  rem;"></i></a>
            </center>
            <script>
                // confirm table
                $('#confirmNonResiTable${data["verEdit"]}').click(function (e) {
                    if (confirm("Non Resi sudah sesuai dan akan diverifikasi?")) {
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
                                    title: 'Non Resi berhasil diverifikasi',
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
                return `<span class="badge bg-warning">${data}</span>`
            }
        }]
    });

    $('.btnNonResi').one('click', function () {
        $('#nonResiWaiting').DataTable().ajax.reload();
    });

    $(".tableNonResiWaiting .reload").click(function () {
        $("#nonResiWaiting").DataTable().ajax.reload()
    })

})