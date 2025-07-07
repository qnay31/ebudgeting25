'use strict';

// list select
const listCharts = document.querySelectorAll(".list-charts button")
listCharts.forEach(listChart => {
    listChart.addEventListener("click", function () {
        const chartsActive = document.querySelector(".list-charts .active")
        const chartsProgram = document.querySelector(".charts-program .row")
        const chartsLogistik = document.querySelector(".charts-logistik .row")
        const chartsAset = document.querySelector(".charts-aset .row")
        const chartsUangMakan = document.querySelector(".charts-uangMakan .row")
        const chartsGaji = document.querySelector(".charts-gaji .row")
        const chartsLainnya = document.querySelector(".charts-lainnya .row")
        const chartsMaintenance = document.querySelector(".charts-maintenance .row")
        const chartsOperasional = document.querySelector(".charts-operasional .row")
        const chartsPaud = document.querySelector(".charts-paud .row")
        const chartsJasa = document.querySelector(".charts-jasa .row")
        const chartsIncome = document.querySelector(".charts-income .row")

        chartsActive.classList.remove("active")
        listChart.classList.add("active")
        document.querySelector(".charts-title .title-charts").innerHTML = listChart.innerHTML
        const idCharts = listChart.getAttribute("href")
        if (idCharts == "#program") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_program.php", function (data) {
                var isi_labels = [];
                var anggaranPendidikan = [];
                var terpakaiPendidikan = [];
                var anggaranKesehatan = [];
                var terpakaiKesehatan = [];
                var anggaranAsrama = [];
                var terpakaiAsrama = [];
                var anggaranSantunan = [];
                var terpakaiSantunan = [];
                var anggaranBinaan = [];
                var terpakaiBinaan = [];
                var anggaranLuarBinaan = [];
                var terpakaiLuarBinaan = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranPendidikan.push(data[i].anggaran_pendidikan);
                    terpakaiPendidikan.push(data[i].terpakai_pendidikan);
                    anggaranKesehatan.push(data[i].anggaran_kesehatan);
                    terpakaiKesehatan.push(data[i].terpakai_kesehatan);
                    anggaranAsrama.push(data[i].anggaran_asrama_yatim);
                    terpakaiAsrama.push(data[i].terpakai_asrama_yatim);
                    anggaranSantunan.push(data[i].anggaran_santunanBulanan);
                    terpakaiSantunan.push(data[i].terpakai_santunanBulanan);
                    anggaranBinaan.push(data[i].anggaran_binaan);
                    terpakaiBinaan.push(data[i].terpakai_binaan);
                    anggaranLuarBinaan.push(data[i].anggaran_luar_binaan);
                    terpakaiLuarBinaan.push(data[i].terpakai_luar_binaan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBar.data = newDataGlobal;
                window.myBar.update()

                let newDataPendidikan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pendidikan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPendidikan
                        },
                        {
                            label: 'Terpakai Pendidikan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPendidikan
                        }
                    ]
                }
                myBarPendidikan.data = newDataPendidikan;
                window.myBarPendidikan.update()

                let newDataKesehatan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Kesehatan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranKesehatan
                        },
                        {
                            label: 'Terpakai Kesehatan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiKesehatan
                        }
                    ]
                }
                myBarKesehatan.data = newDataKesehatan;
                window.myBarKesehatan.update()

                let newDataAsrama = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Asrama Yatim',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranAsrama
                        },
                        {
                            label: 'Terpakai Asrama Yatim',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiAsrama
                        }
                    ]
                }
                myBarAsrama.data = newDataAsrama;
                window.myBarAsrama.update()

                let newDataSantunan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Santunan Bulanan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranSantunan
                        },
                        {
                            label: 'Terpakai Santunan Bulanan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiSantunan
                        }
                    ]
                }
                myBarSantunan.data = newDataSantunan;
                window.myBarSantunan.update()

                let newDataBinaan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Yatim Binaan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranBinaan
                        },
                        {
                            label: 'Terpakai Yatim Binaan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiBinaan
                        }
                    ]
                }
                myBarBinaan.data = newDataBinaan;
                window.myBarBinaan.update()

                let newDataLuarBinaan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Yatim Luar Binaan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranLuarBinaan
                        },
                        {
                            label: 'Terpakai Yatim Luar Binaan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiLuarBinaan
                        }
                    ]
                }
                myBarLuarBinaan.data = newDataLuarBinaan;
                window.myBarLuarBinaan.update()

            })

            chartsProgram.classList.remove("display-content")
            if (readCookie("id_pengurus") == "manager_facebook") {} else {
                chartsLogistik.classList.add("display-content")
                chartsAset.classList.add("display-content")
                chartsUangMakan.classList.add("display-content")
                chartsGaji.classList.add("display-content")
                chartsLainnya.classList.add("display-content")
                chartsMaintenance.classList.add("display-content")
                chartsOperasional.classList.add("display-content")
                chartsPaud.classList.add("display-content")
                chartsJasa.classList.add("display-content")
            }
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#logistik") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_logistik.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarLogistik.data = newDataGlobal;
                window.myBarLogistik.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.remove("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#aset") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_aset.php", function (data) {
                var isi_labels = [];
                var anggaranPembangunan = [];
                var terpakaiPembangunan = [];
                var anggaranPembelian = [];
                var terpakaiPembelian = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranPembangunan.push(data[i].anggaran_pembangunan);
                    terpakaiPembangunan.push(data[i].terpakai_pembangunan);
                    anggaranPembelian.push(data[i].anggaran_pembelian);
                    terpakaiPembelian.push(data[i].anggaran_pembelian);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarAset.data = newDataGlobal;
                window.myBarAset.update()

                let newDataPembangunan = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pembangunan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPembangunan
                        },
                        {
                            label: 'Terpakai Pembangunan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPembangunan
                        }
                    ]
                }
                myBarPembangunan.data = newDataPembangunan;
                window.myBarPembangunan.update()

                let newDataPembelian = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pembelian Barang',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPembelian
                        },
                        {
                            label: 'Terpakai Pembelian Barang',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPembelian
                        }
                    ]
                }
                myBarPembelian.data = newDataPembelian;
                window.myBarPembelian.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.remove("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#makan") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_uangMakan.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarUangMakan.data = newDataGlobal;
                window.myBarUangMakan.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.remove("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#gaji") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_gaji.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarGaji.data = newDataGlobal;
                window.myBarGaji.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.remove("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#lainnya") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_lainnya.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarLainnya.data = newDataGlobal;
                window.myBarLainnya.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.remove("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#maintenance") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_maintenance.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarMaintenance.data = newDataGlobal;
                window.myBarMaintenance.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.remove("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#operasional") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_operasional.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarOperasional.data = newDataGlobal;
                window.myBarOperasional.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.remove("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#paud") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_paud.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarPaud.data = newDataGlobal;
                window.myBarPaud.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.remove("display-content")
            chartsJasa.classList.add("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else if (idCharts == "#jasa") {
            $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_jasa.php", function (data) {
                var isi_labels = [];
                var anggaranGlobal = [];
                var terpakaiGlobal = [];

                $(data).each(function (i) {
                    isi_labels.push(data[i].bulan);
                    anggaranGlobal.push(data[i].anggaran_global);
                    terpakaiGlobal.push(data[i].terpakai_global);
                });

                let newDataGlobal = {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                }
                myBarJasa.data = newDataGlobal;
                window.myBarJasa.update()

            })

            chartsProgram.classList.add("display-content")
            chartsLogistik.classList.add("display-content")
            chartsAset.classList.add("display-content")
            chartsUangMakan.classList.add("display-content")
            chartsGaji.classList.add("display-content")
            chartsLainnya.classList.add("display-content")
            chartsMaintenance.classList.add("display-content")
            chartsOperasional.classList.add("display-content")
            chartsPaud.classList.add("display-content")
            chartsJasa.classList.remove("display-content")
            if (readCookie("id_pengurus") == "kepala_pengajuan") {} else {
                chartsIncome.classList.add("display-content")
            }

        } else {
            if (
                readCookie("id_pengurus") == "sosial_media"
            ) {
                $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/data_income.php", function (data) {
                    var isi_labels = [];
                    var totalTF = [];

                    $(data).each(function (i) {
                        isi_labels.push(data[i].periode);
                        totalTF.push(data[i].total_tf);
                    });

                    let newDataGlobal = {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income Global',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: totalTF,
                        }]
                    }
                    myLineIncomeMedia.data = newDataGlobal;
                    window.myLineIncomeMedia.update()

                })
            } else if (
                readCookie("id_pengurus") == "manager_facebook"
            ) {
                $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_income.php", function (data) {
                    var isi_labels = [];
                    var income_I = [];
                    var income_II = [];
                    var income_III = [];
                    var income_IV = [];
                    var income_V = [];
                    var income_VI = [];
                    var income_VII = [];
                    var income_VIII = [];
                    var income_IX = [];
                    var incomeNonResi = [];
                    var incomeGlobal = [];

                    $(data).each(function (i) {
                        isi_labels.push(data[i].bulan);
                        income_I.push(data[i].income_I);
                        income_II.push(data[i].income_II);
                        income_III.push(data[i].income_III);
                        income_IV.push(data[i].income_IV);
                        income_V.push(data[i].income_V);
                        income_VI.push(data[i].income_VI);
                        income_VII.push(data[i].income_VII);
                        income_VIII.push(data[i].income_VIII);
                        income_IX.push(data[i].income_IX);
                        incomeNonResi.push(data[i].income_tanpaResi);
                        incomeGlobal.push(data[i].income_global);
                    });

                    if (readCookie("username") == "fb_saku1") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income FB Saku I',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_I,
                            }]
                        }
                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "fb_saku2") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income FB Saku II',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_II,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "ig_saku1") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income IG Saku I',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_III,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "ig_saku2") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income IG Saku II',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_IV,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "fb_sembako") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income FB Sembako',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_V,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "ig_sembako") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income IG Sembako',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_VI,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "fb_pembangunan") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income FB Pembangunan',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_VII,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "ig_pembangunan") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income IG Pembangunan',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_VIII,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else if (readCookie("username") == "manager_fb" || readCookie("username") == "manager_ig") {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income Global',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: incomeGlobal,
                            }]
                        }
                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()

                    } else {
                        let newDataGlobal = {
                            labels: isi_labels,

                            datasets: [{
                                label: 'Income FB Kesehatan',
                                backgroundColor: "rgba(117,193,129,0.2)",
                                borderColor: "rgba(2,193,129, 0.8)",
                                data: income_IX,
                            }]
                        }

                        myLineFacebook.data = newDataGlobal;
                        window.myLineFacebook.update()
                    }

                    let newDataMedia = {
                        labels: isi_labels,
                        datasets: [{
                                label: 'FB Uang Saku I',
                                backgroundColor: "rgba(117,193,129,0.8)",
                                hoverBackgroundColor: "rgba(1,200,129,1)",
                                data: income_I
                            },
                            {
                                label: 'FB Uang Saku II',
                                backgroundColor: "rgba(91,153,234,0.8)",
                                hoverBackgroundColor: "rgba(1,130,234,1)",
                                data: income_II
                            },
                            {
                                label: 'IG Uang Saku I',
                                backgroundColor: "rgba(255,127,80)",
                                hoverBackgroundColor: "rgba(255,69,0)",
                                data: income_III
                            },
                            {
                                label: 'IG Uang Saku II',
                                backgroundColor: "rgba(186,85,211)",
                                hoverBackgroundColor: "rgba(153,50,204)",
                                data: income_VI
                            },
                            {
                                label: 'FB Sembako',
                                backgroundColor: "#FFD700",
                                hoverBackgroundColor: "rgba(255,255,0)",
                                data: income_V
                            },
                            {
                                label: 'IG Sembako',
                                backgroundColor: "#00CED1",
                                hoverBackgroundColor: "rgba(64,224,208)",
                                data: income_VI
                            },
                            {
                                label: 'FB Pembangunan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_VII
                            },
                            {
                                label: 'IG Pembangunan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_VIII
                            },
                            {
                                label: 'FB Kesehatan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_IX
                            }
                        ]
                    }
                    myBarMedia.data = newDataMedia;
                    window.myBarMedia.update()

                })

            } else {
                $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_income.php", function (data) {
                    var isi_labels = [];
                    var income_I = [];
                    var income_II = [];
                    var income_III = [];
                    var income_IV = [];
                    var income_V = [];
                    var income_VI = [];
                    var income_VII = [];
                    var income_VIII = [];
                    var income_IX = [];
                    var incomeNonResi = [];
                    var incomeGlobal = [];

                    $(data).each(function (i) {
                        isi_labels.push(data[i].bulan);
                        income_I.push(data[i].income_I);
                        income_II.push(data[i].income_II);
                        income_III.push(data[i].income_III);
                        income_IV.push(data[i].income_IV);
                        income_V.push(data[i].income_V);
                        income_VI.push(data[i].income_VI);
                        income_VII.push(data[i].income_VII);
                        income_VIII.push(data[i].income_VIII);
                        income_IX.push(data[i].income_IX);
                        incomeNonResi.push(data[i].income_tanpaResi);
                        incomeGlobal.push(data[i].income_global);
                    });

                    let newDataGlobal = {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income Global',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: incomeGlobal,
                        }]
                    }
                    myLineIncome.data = newDataGlobal;
                    window.myLineIncome.update()

                    let newDataMedia = {
                        labels: isi_labels,
                        datasets: [{
                                label: 'FB Uang Saku I',
                                backgroundColor: "rgba(117,193,129,0.8)",
                                hoverBackgroundColor: "rgba(1,200,129,1)",
                                data: income_I
                            },
                            {
                                label: 'FB Uang Saku II',
                                backgroundColor: "rgba(91,153,234,0.8)",
                                hoverBackgroundColor: "rgba(1,130,234,1)",
                                data: income_II
                            },
                            {
                                label: 'IG Uang Saku I',
                                backgroundColor: "rgba(255,127,80)",
                                hoverBackgroundColor: "rgba(255,69,0)",
                                data: income_III
                            },
                            {
                                label: 'IG Uang Saku II',
                                backgroundColor: "rgba(186,85,211)",
                                hoverBackgroundColor: "rgba(153,50,204)",
                                data: income_VI
                            },
                            {
                                label: 'FB Sembako',
                                backgroundColor: "#FFD700",
                                hoverBackgroundColor: "rgba(255,255,0)",
                                data: income_V
                            },
                            {
                                label: 'IG Sembako',
                                backgroundColor: "#00CED1",
                                hoverBackgroundColor: "rgba(64,224,208)",
                                data: income_VI
                            },
                            {
                                label: 'FB Pembangunan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_VII
                            },
                            {
                                label: 'IG Pembangunan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_VIII
                            },
                            {
                                label: 'FB Kesehatan',
                                backgroundColor: "rgba(190, 70, 70, 0.8)",
                                hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                                data: income_IX
                            }
                        ]
                    }
                    myBarMedia.data = newDataMedia;
                    window.myBarMedia.update()

                    let newDataNonResi = {
                        labels: isi_labels,
                        datasets: [{
                            label: 'Non Resi Income',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: incomeNonResi
                        }]
                    }
                    myBarNonResi.data = newDataNonResi;
                    window.myBarNonResi.update()

                })
            }

            if (readCookie("id_pengurus") == "kepala_income" ||
                readCookie("id_pengurus") == "sosial_media" ||
                readCookie("id_pengurus") == "manager_facebook"
            ) {} else {
                chartsProgram.classList.add("display-content")
                chartsLogistik.classList.add("display-content")
                chartsAset.classList.add("display-content")
                chartsUangMakan.classList.add("display-content")
                chartsGaji.classList.add("display-content")
                chartsLainnya.classList.add("display-content")
                chartsMaintenance.classList.add("display-content")
                chartsOperasional.classList.add("display-content")
                chartsPaud.classList.add("display-content")
                chartsJasa.classList.add("display-content")
            }
            chartsIncome.classList.remove("display-content")

        }
    })
});

window.chartColors = {
    green: '#75c181', // rgba(117,193,129, 1)
    blue: '#5b99ea', // rgba(91,153,234, 1)
    gray: '#a9b5c9',
    text: '#252930',
    border: '#e7e9ed'
};

// Generate charts on load
window.addEventListener('load', function () {
    if (
        readCookie("id_pengurus") == "kepala_pengajuan" ||
        readCookie("id_pengurus") == "management_keuangan" ||
        readCookie("id_pengurus") == "ketua_yayasan"
    ) {
        // program
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_program.php", function (data) {

            var isi_labels = [];
            var anggaranPendidikan = [];
            var terpakaiPendidikan = [];
            var anggaranKesehatan = [];
            var terpakaiKesehatan = [];
            var anggaranAsrama = [];
            var terpakaiAsrama = [];
            var anggaranSantunan = [];
            var terpakaiSantunan = [];
            var anggaranBinaan = [];
            var terpakaiBinaan = [];
            var anggaranLuarBinaan = [];
            var terpakaiLuarBinaan = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranPendidikan.push(data[i].anggaran_pendidikan);
                terpakaiPendidikan.push(data[i].terpakai_pendidikan);
                anggaranKesehatan.push(data[i].anggaran_kesehatan);
                terpakaiKesehatan.push(data[i].terpakai_kesehatan);
                anggaranAsrama.push(data[i].anggaran_asrama_yatim);
                terpakaiAsrama.push(data[i].terpakai_asrama_yatim);
                anggaranSantunan.push(data[i].anggaran_santunanBulanan);
                terpakaiSantunan.push(data[i].terpakai_santunanBulanan);
                anggaranBinaan.push(data[i].anggaran_binaan);
                terpakaiBinaan.push(data[i].terpakai_binaan);
                anggaranLuarBinaan.push(data[i].anggaran_luar_binaan);
                terpakaiLuarBinaan.push(data[i].terpakai_luar_binaan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            // chart bar global program
            var barChartProgram = document.getElementById('chart-program').getContext('2d');
            window.myBar = new Chart(barChartProgram, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

            // chart pendidikan
            var barChartPendidikan = document.getElementById('chart-pendidikan').getContext('2d');
            window.myBarPendidikan = new Chart(barChartPendidikan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pendidikan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPendidikan
                        },
                        {
                            label: 'Terpakai Pendidikan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPendidikan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // chart kesehatan
            var barChartKesehatan = document.getElementById('chart-kesehatan').getContext('2d');
            window.myBarKesehatan = new Chart(barChartKesehatan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Kesehatan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranKesehatan
                        },
                        {
                            label: 'Terpakai Kesehatan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiKesehatan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // chart asrama yatim
            var barChartAsrama = document.getElementById('chart-asrama').getContext('2d');
            window.myBarAsrama = new Chart(barChartAsrama, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Asrama Yatim',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranAsrama
                        },
                        {
                            label: 'Terpakai Asrama Yatim',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiAsrama
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // chart santunan bulanan
            var barChartSantunan = document.getElementById('chart-santunan').getContext('2d');
            window.myBarSantunan = new Chart(barChartSantunan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Santunan Bulanan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranSantunan
                        },
                        {
                            label: 'Terpakai Santunan Bulanan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiSantunan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // chart yatim binaan
            var barChartBinaan = document.getElementById('chart-binaan').getContext('2d');
            window.myBarBinaan = new Chart(barChartBinaan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Yatim Binaan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranBinaan
                        },
                        {
                            label: 'Terpakai Yatim Binaan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiBinaan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // chart yatim luar binaan
            var barChartLuarBinaan = document.getElementById('chart-luarBinaan').getContext('2d');
            window.myBarLuarBinaan = new Chart(barChartLuarBinaan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Yatim Luar Binaan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranLuarBinaan
                        },
                        {
                            label: 'Terpakai Yatim Luar Binaan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiLuarBinaan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

        })

        // logistik
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_logistik.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartLogistik = document.getElementById('chart-logistik').getContext('2d');
            window.myBarLogistik = new Chart(barChartLogistik, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

        })

        // aset yayasan
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_aset.php", function (data) {
            var isi_labels = [];
            var anggaranPembangunan = [];
            var terpakaiPembangunan = [];
            var anggaranPembelian = [];
            var terpakaiPembelian = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranPembangunan.push(data[i].anggaran_pembangunan);
                terpakaiPembangunan.push(data[i].terpakai_pembangunan);
                anggaranPembelian.push(data[i].anggaran_pembelian);
                terpakaiPembelian.push(data[i].anggaran_pembelian);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            // global aset yayasan
            var barChartAset = document.getElementById('chart-aset').getContext('2d');
            window.myBarAset = new Chart(barChartAset, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

            // pembangunan
            var barChartPembangunan = document.getElementById('chart-pembangunan').getContext('2d');
            window.myBarPembangunan = new Chart(barChartPembangunan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pembangunan',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPembangunan
                        },
                        {
                            label: 'Terpakai Pembangunan',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPembangunan
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

            // pembelian
            var barChartPembelian = document.getElementById('chart-pembelian').getContext('2d');
            window.myBarPembelian = new Chart(barChartPembelian, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Pembelian Barang',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranPembelian
                        },
                        {
                            label: 'Terpakai Pembelian Barang',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiPembelian
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

        })

        // uang makan
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_uangMakan.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartUangMakan = document.getElementById('chart-uangMakan').getContext('2d');
            window.myBarUangMakan = new Chart(barChartUangMakan, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

        })

        // gaji karyawan
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_gaji.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartGaji = document.getElementById('chart-gaji').getContext('2d');
            window.myBarGaji = new Chart(barChartGaji, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

        })

        // anggaran lainnya
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_lainnya.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartLainnya = document.getElementById('chart-lainnya').getContext('2d');
            window.myBarLainnya = new Chart(barChartLainnya, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })

        // maintenance
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_maintenance.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartMaintenance = document.getElementById('chart-maintenance').getContext('2d');
            window.myBarMaintenance = new Chart(barChartMaintenance, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })

        // operasional
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_operasional.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartOperasional = document.getElementById('chart-operasional').getContext('2d');
            window.myBarOperasional = new Chart(barChartOperasional, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })

        // paud qu
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_paud.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartPaud = document.getElementById('chart-paud').getContext('2d');
            window.myBarPaud = new Chart(barChartPaud, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })

        // jasa
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_jasa.php", function (data) {
            var isi_labels = [];
            var anggaranGlobal = [];
            var terpakaiGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                anggaranGlobal.push(data[i].anggaran_global);
                terpakaiGlobal.push(data[i].terpakai_global);
            });

            var barChartJasa = document.getElementById('chart-jasa').getContext('2d');
            window.myBarJasa = new Chart(barChartJasa, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'Anggaran Global',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: anggaranGlobal
                        },
                        {
                            label: 'Terpakai Global',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: terpakaiGlobal
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })
    }

    if (
        readCookie("id_pengurus") == "management_keuangan" ||
        readCookie("id_pengurus") == "ketua_yayasan" ||
        readCookie("id_pengurus") == "kepala_income"
    ) {
        // income
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_income.php", function (data) {
            var isi_labels = [];
            var income_I = [];
            var income_II = [];
            var income_III = [];
            var income_IV = [];
            var income_V = [];
            var income_VI = [];
            var income_VII = [];
            var income_VIII = [];
            var income_IX = [];
            var incomeNonResi = [];
            var incomeGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                income_I.push(data[i].income_I);
                income_II.push(data[i].income_II);
                income_III.push(data[i].income_III);
                income_IV.push(data[i].income_IV);
                income_V.push(data[i].income_V);
                income_VI.push(data[i].income_VI);
                income_VII.push(data[i].income_VII);
                income_VIII.push(data[i].income_VIII);
                income_IX.push(data[i].income_IX);
                incomeNonResi.push(data[i].income_tanpaResi);
                incomeGlobal.push(data[i].income_global);
            });

            // global income
            var lineChartIncome = document.getElementById('chart-income').getContext('2d');
            window.myLineIncome = new Chart(lineChartIncome, {
                type: 'line',

                data: {
                    labels: isi_labels,

                    datasets: [{
                        label: 'Income Global',
                        backgroundColor: "rgba(117,193,129,0.2)",
                        borderColor: "rgba(117,193,129, 0.8)",
                        data: incomeGlobal,
                    }]
                },
                options: {
                    responsive: true,

                    legend: {
                        display: true,
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },
                            scaleLabel: {
                                display: false,

                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },
                            scaleLabel: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });

            // income media
            var barChartMedia = document.getElementById('chart-media').getContext('2d');
            window.myBarMedia = new Chart(barChartMedia, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'FB Uang Saku I',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: income_I
                        },
                        {
                            label: 'FB Uang Saku II',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: income_II
                        },
                        {
                            label: 'IG Uang Saku I',
                            backgroundColor: "rgba(255,127,80)",
                            hoverBackgroundColor: "rgba(255,69,0)",
                            data: income_III
                        },
                        {
                            label: 'IG Uang Saku II',
                            backgroundColor: "rgba(186,85,211)",
                            hoverBackgroundColor: "rgba(153,50,204)",
                            data: income_VI
                        },
                        {
                            label: 'FB Sembako',
                            backgroundColor: "#FFD700",
                            hoverBackgroundColor: "rgba(255,255,0)",
                            data: income_V
                        },
                        {
                            label: 'IG Sembako',
                            backgroundColor: "#00CED1",
                            hoverBackgroundColor: "rgba(64,224,208)",
                            data: income_VI
                        },
                        {
                            label: 'FB Pembangunan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_VII
                        },
                        {
                            label: 'IG Pembangunan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_VIII
                        },
                        {
                            label: 'FB Kesehatan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_IX
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });

            // non resi
            var barChartNonResi = document.getElementById('chart-nonResi').getContext('2d');
            window.myBarNonResi = new Chart(barChartNonResi, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                        label: 'Non Resi Income',
                        backgroundColor: "rgba(117,193,129,0.8)",
                        hoverBackgroundColor: "rgba(1,200,129,1)",
                        data: incomeNonResi
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })
    }

    if (
        readCookie("id_pengurus") == "sosial_media"
    ) {
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/data_income.php", function (data) {
            var isi_labels = [];
            var totalTF = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].periode);
                totalTF.push(data[i].total_tf);
            });

            var lineChartIncomeMedia = document.getElementById('chart-incomeMedia').getContext('2d');
            window.myLineIncomeMedia = new Chart(lineChartIncomeMedia, {
                type: 'line',

                data: {
                    labels: isi_labels,

                    datasets: [{
                        label: 'Income Global',
                        backgroundColor: "rgba(117,193,129,0.2)",
                        borderColor: "rgba(2,193,129, 0.8)",
                        data: totalTF,
                    }]
                },
                options: {
                    responsive: true,

                    legend: {
                        display: true,
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },
                            scaleLabel: {
                                display: false,

                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },
                            scaleLabel: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },
                        }]
                    }
                }
            });
        })
    }

    if (
        readCookie("id_pengurus") == "manager_facebook"
    ) {
        // income
        $.getJSON("https://ebudgeting23.duniawebamira.my.id/data/chart_income.php", function (data) {
            var isi_labels = [];
            var income_I = [];
            var income_II = [];
            var income_III = [];
            var income_IV = [];
            var income_V = [];
            var income_VI = [];
            var income_VII = [];
            var income_VIII = [];
            var income_IX = [];
            var incomeNonResi = [];
            var incomeGlobal = [];

            $(data).each(function (i) {
                isi_labels.push(data[i].bulan);
                income_I.push(data[i].income_I);
                income_II.push(data[i].income_II);
                income_III.push(data[i].income_III);
                income_IV.push(data[i].income_IV);
                income_V.push(data[i].income_V);
                income_VI.push(data[i].income_VI);
                income_VII.push(data[i].income_VII);
                income_VIII.push(data[i].income_VIII);
                income_IX.push(data[i].income_IX);
                incomeNonResi.push(data[i].income_tanpaResi);
                incomeGlobal.push(data[i].income_global);
            });

            // global income
            var lineChartFacebook = document.getElementById('chart-incomeMedia').getContext('2d');
            if (readCookie("username") == "fb_saku1") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income FB Saku I',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_I,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "fb_saku2") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income FB Saku II',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_II,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });
            } else if (readCookie("username") == "ig_saku1") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income IG Saku I',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_III,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });
            } else if (readCookie("username") == "ig_saku2") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income IG Saku II',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_IV,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "fb_sembako") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income FB Sembako',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_V,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "ig_sembako") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income IG Sembako',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_VI,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "fb_pembangunan") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income FB Pembangunan',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_VII,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "ig_pembangunan") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income IG Pembangunan',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_VIII,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else if (readCookie("username") == "manager_fb" || readCookie("username") == "manager_ig") {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income Global',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: incomeGlobal,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });

            } else {
                window.myLineFacebook = new Chart(lineChartFacebook, {
                    type: 'line',

                    data: {
                        labels: isi_labels,

                        datasets: [{
                            label: 'Income FB Kesehatan',
                            backgroundColor: "rgba(117,193,129,0.2)",
                            borderColor: "rgba(2,193,129, 0.8)",
                            data: income_IX,
                        }]
                    },
                    options: {
                        responsive: true,

                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'end',
                        },

                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            titleMarginBottom: 10,
                            bodySpacing: 10,
                            xPadding: 16,
                            yPadding: 16,
                            borderColor: window.chartColors.border,
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            bodyFontColor: window.chartColors.text,
                            titleFontColor: window.chartColors.text,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                        '';
                                    return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                        .toFixed(0)
                                        .replace(/./g,
                                            function (c,
                                                i, a) {
                                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                    "." +
                                                    c : c;
                                            });
                                }
                            },

                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,

                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    drawBorder: false,
                                    color: window.chartColors.border,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    userCallback: function (value, index, values) {
                                        if (parseInt(value) > 999) {
                                            return 'Rp. ' + value.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else if (parseInt(value) < -999) {
                                            return '-Rp. ' + Math.abs(value).toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g, ".");
                                        } else {
                                            return 'Rp. ' + value;
                                        }
                                    }
                                },
                            }]
                        }
                    }
                });
            }

            // income media
            var barChartMedia = document.getElementById('chart-media').getContext('2d');
            window.myBarMedia = new Chart(barChartMedia, {
                type: 'bar',

                data: {
                    labels: isi_labels,
                    datasets: [{
                            label: 'FB Uang Saku I',
                            backgroundColor: "rgba(117,193,129,0.8)",
                            hoverBackgroundColor: "rgba(1,200,129,1)",
                            data: income_I
                        },
                        {
                            label: 'FB Uang Saku II',
                            backgroundColor: "rgba(91,153,234,0.8)",
                            hoverBackgroundColor: "rgba(1,130,234,1)",
                            data: income_II
                        },
                        {
                            label: 'IG Uang Saku I',
                            backgroundColor: "rgba(255,127,80)",
                            hoverBackgroundColor: "rgba(255,69,0)",
                            data: income_III
                        },
                        {
                            label: 'IG Uang Saku II',
                            backgroundColor: "rgba(186,85,211)",
                            hoverBackgroundColor: "rgba(153,50,204)",
                            data: income_VI
                        },
                        {
                            label: 'FB Sembako',
                            backgroundColor: "#FFD700",
                            hoverBackgroundColor: "rgba(255,255,0)",
                            data: income_V
                        },
                        {
                            label: 'IG Sembako',
                            backgroundColor: "#00CED1",
                            hoverBackgroundColor: "rgba(64,224,208)",
                            data: income_VI
                        },
                        {
                            label: 'FB Pembangunan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_VII
                        },
                        {
                            label: 'IG Pembangunan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_VIII
                        },
                        {
                            label: 'FB Kesehatan',
                            backgroundColor: "rgba(190, 70, 70, 0.8)",
                            hoverBackgroundColor: "rgba(192, 4, 4, 0.8)",
                            data: income_IX
                        }
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'end',
                    },

                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        titleMarginBottom: 10,
                        bodySpacing: 10,
                        xPadding: 16,
                        yPadding: 16,
                        borderColor: window.chartColors.border,
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        bodyFontColor: window.chartColors.text,
                        titleFontColor: window.chartColors.text,
                        callbacks: {
                            label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label ||
                                    '';
                                return datasetLabel + ': Rp. ' + Number(tooltipItem.yLabel)
                                    .toFixed(0)
                                    .replace(/./g,
                                        function (c,
                                            i, a) {
                                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?
                                                "." +
                                                c : c;
                                        });
                            }
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.border,
                            },

                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                drawBorder: false,
                                color: window.chartColors.borders,
                            },
                            ticks: {
                                beginAtZero: true,
                                userCallback: function (value, index, values) {
                                    if (parseInt(value) > 999) {
                                        return 'Rp. ' + value.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else if (parseInt(value) < -999) {
                                        return '-Rp. ' + Math.abs(value).toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g, ".");
                                    } else {
                                        return 'Rp. ' + value;
                                    }
                                }
                            },

                        }]
                    }

                }
            });
        })
    }

});