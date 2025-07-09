window.addEventListener("load", function () {
    if (
        readCookie("id_pengurus") == "management_keuangan" ||
        readCookie("id_pengurus") == "kepala_pengajuan" ||
        readCookie("id_pengurus") == "ketua_yayasan" ||
        readCookie("id_pengurus") == "kepala_income" ||
        readCookie("id_pengurus") == "manager_facebook" ||
        readCookie("id_pengurus") == "manager_instagram"
    ) {
        $.ajax({
            dataType: 'json',
            url: "./data/data_query2021.php",
            success: function success(data) {
                if (
                    readCookie("id_pengurus") == "management_keuangan" ||
                    readCookie("id_pengurus") == "kepala_pengajuan" ||
                    readCookie("id_pengurus") == "ketua_yayasan"
                ) {
                    let anggaranProgram = new Intl.NumberFormat('en-US').format(data.program.anggaran)
                    let terpakaiProgram = new Intl.NumberFormat('en-US').format(data.program.terpakai)
                    let cashbackProgram = new Intl.NumberFormat('en-US').format(data.program.cashback)

                    // baksos
                    let anggaranBaksos = new Intl.NumberFormat('en-US').format(data.baksos.anggaran)
                    let terpakaiBaksos = new Intl.NumberFormat('en-US').format(data.baksos.terpakai)
                    let cashbackBaksos = new Intl.NumberFormat('en-US').format(data.baksos.cashback)

                    // logistik
                    let anggaranLogistik = new Intl.NumberFormat('en-US').format(data.logistik.anggaran)
                    let terpakaiLogistik = new Intl.NumberFormat('en-US').format(data.logistik.terpakai)
                    let cashbackLogistik = new Intl.NumberFormat('en-US').format(data.logistik.cashback)

                    // aset yayasan
                    let anggaranAset = new Intl.NumberFormat('en-US').format(data.aset.anggaran)
                    let terpakaiAset = new Intl.NumberFormat('en-US').format(data.aset.terpakai)
                    let cashbackAset = new Intl.NumberFormat('en-US').format(data.aset.cashback)

                    // biaya lainnya
                    let anggaranProduksi = new Intl.NumberFormat('en-US').format(data.produksi.anggaran)
                    let terpakaiProduksi = new Intl.NumberFormat('en-US').format(data.produksi.terpakai)
                    let cashbackProduksi = new Intl.NumberFormat('en-US').format(data.produksi.cashback)

                    // gaji karyawan
                    let anggaranGaji = new Intl.NumberFormat('en-US').format(data.gaji.anggaran)
                    let terpakaiGaji = new Intl.NumberFormat('en-US').format(data.gaji.terpakai)
                    let cashbackGaji = new Intl.NumberFormat('en-US').format(data.gaji.cashback)

                    // aset yayasan
                    let anggaranHumas = new Intl.NumberFormat('en-US').format(data.humas.anggaran)
                    let terpakaiHumas = new Intl.NumberFormat('en-US').format(data.humas.terpakai)
                    let cashbackHumas = new Intl.NumberFormat('en-US').format(data.humas.cashback)

                    // maintenance
                    let anggaranMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.anggaran)
                    let terpakaiMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.terpakai)
                    let cashbackMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.cashback)

                    // operasional yayasan
                    let anggaranOperasional = new Intl.NumberFormat('en-US').format(data.operasional.anggaran)
                    let terpakaiOperasional = new Intl.NumberFormat('en-US').format(data.operasional.terpakai)
                    let cashbackOperasional = new Intl.NumberFormat('en-US').format(data.operasional.cashback)

                    // global
                    let anggaranGlobal = new Intl.NumberFormat('en-US').format(data.total.anggaran)
                    let terpakaiGlobal = new Intl.NumberFormat('en-US').format(data.total.terpakai)
                    let cashbackGlobal = new Intl.NumberFormat('en-US').format(data.total.cashback)

                    document.querySelector(".dataGlobalTahun .Program2021ListAnggaran").innerHTML = anggaranProgram
                    document.querySelector(".dataGlobalTahun .Program2021LisTerpakai").innerHTML = terpakaiProgram
                    document.querySelector(".dataGlobalTahun .Program2021ListCashback").innerHTML = cashbackProgram

                    document.querySelector(".dataGlobalTahun .Baksos2021ListAnggaran").innerHTML = anggaranBaksos
                    document.querySelector(".dataGlobalTahun .Baksos2021LisTerpakai").innerHTML = terpakaiBaksos
                    document.querySelector(".dataGlobalTahun .Baksos2021ListCashback").innerHTML = cashbackBaksos

                    document.querySelector(".dataGlobalTahun .Logistik2021ListAnggaran").innerHTML = anggaranLogistik
                    document.querySelector(".dataGlobalTahun .Logistik2021LisTerpakai").innerHTML = terpakaiLogistik
                    document.querySelector(".dataGlobalTahun .Logistik2021ListCashback").innerHTML = cashbackLogistik

                    document.querySelector(".dataGlobalTahun .Aset2021ListAnggaran").innerHTML = anggaranAset
                    document.querySelector(".dataGlobalTahun .Aset2021LisTerpakai").innerHTML = terpakaiAset
                    document.querySelector(".dataGlobalTahun .Aset2021ListCashback").innerHTML = cashbackAset

                    document.querySelector(".dataGlobalTahun .Produksi2021ListAnggaran").innerHTML = anggaranProduksi
                    document.querySelector(".dataGlobalTahun .Produksi2021LisTerpakai").innerHTML = terpakaiProduksi
                    document.querySelector(".dataGlobalTahun .Produksi2021ListCashback").innerHTML = cashbackProduksi

                    document.querySelector(".dataGlobalTahun .Gaji2021ListAnggaran").innerHTML = anggaranGaji
                    document.querySelector(".dataGlobalTahun .Gaji2021LisTerpakai").innerHTML = terpakaiGaji
                    document.querySelector(".dataGlobalTahun .Gaji2021ListCashback").innerHTML = cashbackGaji

                    document.querySelector(".dataGlobalTahun .Humas2021ListAnggaran").innerHTML = anggaranHumas
                    document.querySelector(".dataGlobalTahun .Humas2021LisTerpakai").innerHTML = terpakaiHumas
                    document.querySelector(".dataGlobalTahun .Humas2021ListCashback").innerHTML = cashbackHumas

                    document.querySelector(".dataGlobalTahun .Maintenance2021ListAnggaran").innerHTML = anggaranMaintenance
                    document.querySelector(".dataGlobalTahun .Maintenance2021LisTerpakai").innerHTML = terpakaiMaintenance
                    document.querySelector(".dataGlobalTahun .Maintenance2021ListCashback").innerHTML = cashbackMaintenance

                    document.querySelector(".dataGlobalTahun .Operasional2021ListAnggaran").innerHTML = anggaranOperasional
                    document.querySelector(".dataGlobalTahun .Operasional2021LisTerpakai").innerHTML = terpakaiOperasional
                    document.querySelector(".dataGlobalTahun .Operasional2021ListCashback").innerHTML = cashbackOperasional

                    document.querySelector(".total2021ListAnggaran").innerHTML = `<b>${anggaranGlobal}</b>`
                    document.querySelector(".total2021LisTerpakai").innerHTML = `<b>${terpakaiGlobal}</b>`
                    document.querySelector(".total2021ListCashback").innerHTML = `<b>${cashbackGlobal}</b>`

                    document.querySelector(".dataGlobalTahun .anggaran").innerHTML = anggaranGlobal
                    document.querySelector(".dataGlobalTahun .terpakai").innerHTML = terpakaiGlobal
                    document.querySelector(".dataGlobalTahun .cashback").innerHTML = cashbackGlobal

                    if (
                        readCookie("id_pengurus") == "management_keuangan" ||
                        readCookie("id_pengurus") == "ketua_yayasan"
                    ) {
                        // pemasukan //
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                        let incomeKotak = new Intl.NumberFormat('en-US').format(data.pemasukan.kotak)
                        let IncomeCelengan = new Intl.NumberFormat('en-US').format(data.pemasukan.celengan)
                        let IncomeFacebook = new Intl.NumberFormat('en-US').format(data.pemasukan.facebook)
                        let IncomeInstagram = new Intl.NumberFormat('en-US').format(data.pemasukan.instagram)
                        let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                        document.querySelector(".dataGlobalTahun .incomeMedia").innerHTML = incomeMedia
                        document.querySelector(".dataGlobalTahun .kotakAmal").innerHTML = incomeKotak
                        document.querySelector(".dataGlobalTahun .celengan").innerHTML = IncomeCelengan

                        // list pemasukan
                        document.querySelector(".dataGlobalTahun .iFacebook").innerHTML = IncomeFacebook
                        document.querySelector(".dataGlobalTahun .iInstagram").innerHTML = IncomeInstagram
                        document.querySelector(".dataGlobalTahun .iKotak").innerHTML = incomeKotak
                        document.querySelector(".dataGlobalTahun .iCelengan").innerHTML = IncomeCelengan
                        document.querySelector(".dataGlobalTahun .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
                    }
                } else if (
                    readCookie("id_pengurus") == "kepala_income" ||
                    readCookie("id_pengurus") == "manager_facebook" ||
                    readCookie("id_pengurus") == "manager_instagram"
                ) {
                    // pemasukan //
                    let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                    let incomeKotak = new Intl.NumberFormat('en-US').format(data.pemasukan.kotak)
                    let IncomeCelengan = new Intl.NumberFormat('en-US').format(data.pemasukan.celengan)
                    let IncomeFacebook = new Intl.NumberFormat('en-US').format(data.pemasukan.facebook)
                    let IncomeInstagram = new Intl.NumberFormat('en-US').format(data.pemasukan.instagram)
                    let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                    document.querySelector(".dataGlobalTahun .incomeMedia").innerHTML = incomeMedia
                    document.querySelector(".dataGlobalTahun .kotakAmal").innerHTML = incomeKotak
                    document.querySelector(".dataGlobalTahun .celengan").innerHTML = IncomeCelengan

                    // list pemasukan
                    document.querySelector(".dataGlobalTahun .iFacebook").innerHTML = IncomeFacebook
                    document.querySelector(".dataGlobalTahun .iInstagram").innerHTML = IncomeInstagram
                    document.querySelector(".dataGlobalTahun .iKotak").innerHTML = incomeKotak
                    document.querySelector(".dataGlobalTahun .iCelengan").innerHTML = IncomeCelengan
                    document.querySelector(".dataGlobalTahun .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`

                }
            }
        })
    }

    $.ajax({
        dataType: 'json',
        url: "./data/data_query2022.php",
        success: function success(data) {
            if (
                readCookie("id_pengurus") == "management_keuangan" ||
                readCookie("id_pengurus") == "kepala_pengajuan" ||
                readCookie("id_pengurus") == "ketua_yayasan"
            ) {
                let anggaranProgram = new Intl.NumberFormat('en-US').format(data.program.anggaran)
                let terpakaiProgram = new Intl.NumberFormat('en-US').format(data.program.terpakai)
                let cashbackProgram = new Intl.NumberFormat('en-US').format(data.program.cashback)

                // logistik
                let anggaranLogistik = new Intl.NumberFormat('en-US').format(data.logistik.anggaran)
                let terpakaiLogistik = new Intl.NumberFormat('en-US').format(data.logistik.terpakai)
                let cashbackLogistik = new Intl.NumberFormat('en-US').format(data.logistik.cashback)

                // aset yayasan
                let anggaranAset = new Intl.NumberFormat('en-US').format(data.aset.anggaran)
                let terpakaiAset = new Intl.NumberFormat('en-US').format(data.aset.terpakai)
                let cashbackAset = new Intl.NumberFormat('en-US').format(data.aset.cashback)

                // uang makan
                let anggaranMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.anggaran)
                let terpakaiMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.terpakai)
                let cashbackMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.cashback)

                // gaji karyawan
                let anggaranGaji = new Intl.NumberFormat('en-US').format(data.gaji.anggaran)
                let terpakaiGaji = new Intl.NumberFormat('en-US').format(data.gaji.terpakai)
                let cashbackGaji = new Intl.NumberFormat('en-US').format(data.gaji.cashback)

                // biaya lainnya
                let anggaranLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.anggaran)
                let terpakaiLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.terpakai)
                let cashbackLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.cashback)

                // maintenance
                let anggaranMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.anggaran)
                let terpakaiMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.terpakai)
                let cashbackMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.cashback)

                // operasional yayasan
                let anggaranOperasional = new Intl.NumberFormat('en-US').format(data.operasional.anggaran)
                let terpakaiOperasional = new Intl.NumberFormat('en-US').format(data.operasional.terpakai)
                let cashbackOperasional = new Intl.NumberFormat('en-US').format(data.operasional.cashback)

                // paud
                let anggaranPaud = new Intl.NumberFormat('en-US').format(data.paud.anggaran)
                let terpakaiPaud = new Intl.NumberFormat('en-US').format(data.paud.terpakai)
                let cashbackPaud = new Intl.NumberFormat('en-US').format(data.paud.cashback)

                // jasa
                let anggaranJasa = new Intl.NumberFormat('en-US').format(data.jasa.anggaran)
                let terpakaiJasa = new Intl.NumberFormat('en-US').format(data.jasa.terpakai)
                let cashbackJasa = new Intl.NumberFormat('en-US').format(data.jasa.cashback)

                // global
                let anggaranGlobal = new Intl.NumberFormat('en-US').format(data.total.anggaran)
                let terpakaiGlobal = new Intl.NumberFormat('en-US').format(data.total.terpakai)
                let cashbackGlobal = new Intl.NumberFormat('en-US').format(data.total.cashback)

                document.querySelector(".dataGlobal2022 .Program2022ListAnggaran").innerHTML = anggaranProgram
                document.querySelector(".dataGlobal2022 .Program2022LisTerpakai").innerHTML = terpakaiProgram
                document.querySelector(".dataGlobal2022 .Program2022ListCashback").innerHTML = cashbackProgram

                document.querySelector(".dataGlobal2022 .Logistik2022ListAnggaran").innerHTML = anggaranLogistik
                document.querySelector(".dataGlobal2022 .Logistik2022LisTerpakai").innerHTML = terpakaiLogistik
                document.querySelector(".dataGlobal2022 .Logistik2022ListCashback").innerHTML = cashbackLogistik

                document.querySelector(".dataGlobal2022 .Aset2022ListAnggaran").innerHTML = anggaranAset
                document.querySelector(".dataGlobal2022 .Aset2022LisTerpakai").innerHTML = terpakaiAset
                document.querySelector(".dataGlobal2022 .Aset2022ListCashback").innerHTML = cashbackAset

                document.querySelector(".dataGlobal2022 .Makan2022ListAnggaran").innerHTML = anggaranMakan
                document.querySelector(".dataGlobal2022 .Makan2022LisTerpakai").innerHTML = terpakaiMakan
                document.querySelector(".dataGlobal2022 .Makan2022ListCashback").innerHTML = cashbackMakan

                document.querySelector(".dataGlobal2022 .Gaji2022ListAnggaran").innerHTML = anggaranGaji
                document.querySelector(".dataGlobal2022 .Gaji2022LisTerpakai").innerHTML = terpakaiGaji
                document.querySelector(".dataGlobal2022 .Gaji2022ListCashback").innerHTML = cashbackGaji

                document.querySelector(".dataGlobal2022 .Lainnya2022ListAnggaran").innerHTML = anggaranLainnya
                document.querySelector(".dataGlobal2022 .Lainnya2022LisTerpakai").innerHTML = terpakaiLainnya
                document.querySelector(".dataGlobal2022 .Lainnya2022ListCashback").innerHTML = cashbackLainnya

                document.querySelector(".dataGlobal2022 .Maintenance2022ListAnggaran").innerHTML = anggaranMaintenance
                document.querySelector(".dataGlobal2022 .Maintenance2022LisTerpakai").innerHTML = terpakaiMaintenance
                document.querySelector(".dataGlobal2022 .Maintenance2022ListCashback").innerHTML = cashbackMaintenance

                document.querySelector(".dataGlobal2022 .Operasional2022ListAnggaran").innerHTML = anggaranOperasional
                document.querySelector(".dataGlobal2022 .Operasional2022LisTerpakai").innerHTML = terpakaiOperasional
                document.querySelector(".dataGlobal2022 .Operasional2022ListCashback").innerHTML = cashbackOperasional

                document.querySelector(".dataGlobal2022 .Paud2022ListAnggaran").innerHTML = anggaranPaud
                document.querySelector(".dataGlobal2022 .Paud2022LisTerpakai").innerHTML = terpakaiPaud
                document.querySelector(".dataGlobal2022 .Paud2022ListCashback").innerHTML = cashbackPaud

                document.querySelector(".dataGlobal2022 .Jasa2022ListAnggaran").innerHTML = anggaranJasa
                document.querySelector(".dataGlobal2022 .Jasa2022LisTerpakai").innerHTML = terpakaiJasa
                document.querySelector(".dataGlobal2022 .Jasa2022ListCashback").innerHTML = cashbackJasa

                document.querySelector(".total2022ListAnggaran").innerHTML = `<b>${anggaranGlobal}</b>`
                document.querySelector(".total2022LisTerpakai").innerHTML = `<b>${terpakaiGlobal}</b>`
                document.querySelector(".total2022ListCashback").innerHTML = `<b>${cashbackGlobal}</b>`

                document.querySelector(".dataGlobal2022 .anggaran").innerHTML = anggaranGlobal
                document.querySelector(".dataGlobal2022 .terpakai").innerHTML = terpakaiGlobal
                document.querySelector(".dataGlobal2022 .cashback").innerHTML = cashbackGlobal

                if (
                    readCookie("id_pengurus") == "management_keuangan" ||
                    readCookie("id_pengurus") == "ketua_yayasan"
                ) {
                    // pemasukan //
                    let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                    let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                    let IncomeFacebook = new Intl.NumberFormat('en-US').format(data.pemasukan.facebook)
                    let IncomeInstagram = new Intl.NumberFormat('en-US').format(data.pemasukan.instagram)
                    let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                    document.querySelector(".dataGlobal2022 .incomeMedia").innerHTML = incomeMedia
                    document.querySelector(".dataGlobal2022 .incomeNonResi").innerHTML = incomeNonResi

                    // list pemasukan
                    document.querySelector(".dataGlobal2022 .iFacebook").innerHTML = IncomeFacebook
                    document.querySelector(".dataGlobal2022 .iInstagram").innerHTML = IncomeInstagram
                    document.querySelector(".dataGlobal2022 .iResi").innerHTML = incomeNonResi
                    document.querySelector(".dataGlobal2022 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
                }
            } else if (
                readCookie("id_pengurus") == "kepala_income" ||
                readCookie("id_pengurus") == "manager_facebook" ||
                readCookie("id_pengurus") == "manager_instagram"
            ) {
                // pemasukan //
                let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                let IncomeFacebook = new Intl.NumberFormat('en-US').format(data.pemasukan.facebook)
                let IncomeInstagram = new Intl.NumberFormat('en-US').format(data.pemasukan.instagram)
                let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                document.querySelector(".dataGlobal2022 .incomeMedia").innerHTML = incomeMedia
                document.querySelector(".dataGlobal2022 .incomeNonResi").innerHTML = incomeNonResi

                // list pemasukan
                document.querySelector(".dataGlobal2022 .iFacebook").innerHTML = IncomeFacebook
                document.querySelector(".dataGlobal2022 .iInstagram").innerHTML = IncomeInstagram
                document.querySelector(".dataGlobal2022 .iResi").innerHTML = incomeNonResi
                document.querySelector(".dataGlobal2022 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
            } else if (readCookie("id_pengurus") == "sosial_media") {
                let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan)
                document.querySelector(".dataGlobal2022 .incomeMedia").innerHTML = incomeMedia
            }
        }
    })

    $.ajax({
        dataType: 'json',
        url: "./data/data_query2023.php",
        success: function success(data) {
            if (
                readCookie("id_pengurus") == "management_keuangan" ||
                readCookie("id_pengurus") == "kepala_pengajuan" ||
                readCookie("id_pengurus") == "ketua_yayasan"
            ) {
                let anggaranProgram = new Intl.NumberFormat('en-US').format(data.program.anggaran)
                let terpakaiProgram = new Intl.NumberFormat('en-US').format(data.program.terpakai)
                let cashbackProgram = new Intl.NumberFormat('en-US').format(data.program.cashback)

                // logistik
                let anggaranLogistik = new Intl.NumberFormat('en-US').format(data.logistik.anggaran)
                let terpakaiLogistik = new Intl.NumberFormat('en-US').format(data.logistik.terpakai)
                let cashbackLogistik = new Intl.NumberFormat('en-US').format(data.logistik.cashback)

                // aset yayasan
                let anggaranAset = new Intl.NumberFormat('en-US').format(data.aset.anggaran)
                let terpakaiAset = new Intl.NumberFormat('en-US').format(data.aset.terpakai)
                let cashbackAset = new Intl.NumberFormat('en-US').format(data.aset.cashback)

                // uang makan
                let anggaranMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.anggaran)
                let terpakaiMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.terpakai)
                let cashbackMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.cashback)

                // gaji karyawan
                let anggaranGaji = new Intl.NumberFormat('en-US').format(data.gaji.anggaran)
                let terpakaiGaji = new Intl.NumberFormat('en-US').format(data.gaji.terpakai)
                let cashbackGaji = new Intl.NumberFormat('en-US').format(data.gaji.cashback)

                // biaya lainnya
                let anggaranLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.anggaran)
                let terpakaiLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.terpakai)
                let cashbackLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.cashback)

                // maintenance
                let anggaranMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.anggaran)
                let terpakaiMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.terpakai)
                let cashbackMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.cashback)

                // operasional yayasan
                let anggaranOperasional = new Intl.NumberFormat('en-US').format(data.operasional.anggaran)
                let terpakaiOperasional = new Intl.NumberFormat('en-US').format(data.operasional.terpakai)
                let cashbackOperasional = new Intl.NumberFormat('en-US').format(data.operasional.cashback)

                // paud
                let anggaranPaud = new Intl.NumberFormat('en-US').format(data.paud.anggaran)
                let terpakaiPaud = new Intl.NumberFormat('en-US').format(data.paud.terpakai)
                let cashbackPaud = new Intl.NumberFormat('en-US').format(data.paud.cashback)

                // jasa
                let anggaranJasa = new Intl.NumberFormat('en-US').format(data.jasa.anggaran)
                let terpakaiJasa = new Intl.NumberFormat('en-US').format(data.jasa.terpakai)
                let cashbackJasa = new Intl.NumberFormat('en-US').format(data.jasa.cashback)

                // global
                let anggaranGlobal = new Intl.NumberFormat('en-US').format(data.total.anggaran)
                let terpakaiGlobal = new Intl.NumberFormat('en-US').format(data.total.terpakai)
                let cashbackGlobal = new Intl.NumberFormat('en-US').format(data.total.cashback)

                document.querySelector(".dataGlobal2023 .Program2023ListAnggaran").innerHTML = anggaranProgram
                document.querySelector(".dataGlobal2023 .Program2023LisTerpakai").innerHTML = terpakaiProgram
                document.querySelector(".dataGlobal2023 .Program2023ListCashback").innerHTML = cashbackProgram

                document.querySelector(".dataGlobal2023 .Logistik2023ListAnggaran").innerHTML = anggaranLogistik
                document.querySelector(".dataGlobal2023 .Logistik2023LisTerpakai").innerHTML = terpakaiLogistik
                document.querySelector(".dataGlobal2023 .Logistik2023ListCashback").innerHTML = cashbackLogistik

                document.querySelector(".dataGlobal2023 .Aset2023ListAnggaran").innerHTML = anggaranAset
                document.querySelector(".dataGlobal2023 .Aset2023LisTerpakai").innerHTML = terpakaiAset
                document.querySelector(".dataGlobal2023 .Aset2023ListCashback").innerHTML = cashbackAset

                document.querySelector(".dataGlobal2023 .Makan2023ListAnggaran").innerHTML = anggaranMakan
                document.querySelector(".dataGlobal2023 .Makan2023LisTerpakai").innerHTML = terpakaiMakan
                document.querySelector(".dataGlobal2023 .Makan2023ListCashback").innerHTML = cashbackMakan

                document.querySelector(".dataGlobal2023 .Gaji2023ListAnggaran").innerHTML = anggaranGaji
                document.querySelector(".dataGlobal2023 .Gaji2023LisTerpakai").innerHTML = terpakaiGaji
                document.querySelector(".dataGlobal2023 .Gaji2023ListCashback").innerHTML = cashbackGaji

                document.querySelector(".dataGlobal2023 .Lainnya2023ListAnggaran").innerHTML = anggaranLainnya
                document.querySelector(".dataGlobal2023 .Lainnya2023LisTerpakai").innerHTML = terpakaiLainnya
                document.querySelector(".dataGlobal2023 .Lainnya2023ListCashback").innerHTML = cashbackLainnya

                document.querySelector(".dataGlobal2023 .Maintenance2023ListAnggaran").innerHTML = anggaranMaintenance
                document.querySelector(".dataGlobal2023 .Maintenance2023LisTerpakai").innerHTML = terpakaiMaintenance
                document.querySelector(".dataGlobal2023 .Maintenance2023ListCashback").innerHTML = cashbackMaintenance

                document.querySelector(".dataGlobal2023 .Operasional2023ListAnggaran").innerHTML = anggaranOperasional
                document.querySelector(".dataGlobal2023 .Operasional2023LisTerpakai").innerHTML = terpakaiOperasional
                document.querySelector(".dataGlobal2023 .Operasional2023ListCashback").innerHTML = cashbackOperasional

                document.querySelector(".dataGlobal2023 .Paud2023ListAnggaran").innerHTML = anggaranPaud
                document.querySelector(".dataGlobal2023 .Paud2023LisTerpakai").innerHTML = terpakaiPaud
                document.querySelector(".dataGlobal2023 .Paud2023ListCashback").innerHTML = cashbackPaud

                document.querySelector(".dataGlobal2023 .Jasa2023ListAnggaran").innerHTML = anggaranJasa
                document.querySelector(".dataGlobal2023 .Jasa2023LisTerpakai").innerHTML = terpakaiJasa
                document.querySelector(".dataGlobal2023 .Jasa2023ListCashback").innerHTML = cashbackJasa

                document.querySelector(".total2023ListAnggaran").innerHTML = `<b>${anggaranGlobal}</b>`
                document.querySelector(".total2023LisTerpakai").innerHTML = `<b>${terpakaiGlobal}</b>`
                document.querySelector(".total2023ListCashback").innerHTML = `<b>${cashbackGlobal}</b>`

                document.querySelector(".dataGlobal2023 .anggaran").innerHTML = anggaranGlobal
                document.querySelector(".dataGlobal2023 .terpakai").innerHTML = terpakaiGlobal
                document.querySelector(".dataGlobal2023 .cashback").innerHTML = cashbackGlobal

                if (
                    readCookie("id_pengurus") == "management_keuangan" ||
                    readCookie("id_pengurus") == "ketua_yayasan"
                ) {
                    // pemasukan //
                    let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                    let IncomeTeamI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamI)
                    let IncomeTeamII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamII)
                    let IncomeTeamIII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIII)
                    let IncomeTeamIV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIV)
                    let IncomeTeamVI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamVI)
                    let IncomeTeamV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamV)
                    let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                    let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                    document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                    document.querySelector(".dataGlobal2023 .incomeNonResi").innerHTML = incomeNonResi

                    // list pemasukan
                    document.querySelector(".dataGlobal2023 .teamI").innerHTML = IncomeTeamI
                    document.querySelector(".dataGlobal2023 .teamII").innerHTML = IncomeTeamII
                    document.querySelector(".dataGlobal2023 .iResi").innerHTML = incomeNonResi
                    document.querySelector(".dataGlobal2023 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
                }
            } else if (
                readCookie("id_pengurus") == "kepala_income" ||
                readCookie("id_pengurus") == "manager_facebook" ||
                readCookie("id_pengurus") == "manager_instagram"
            ) {
                // pemasukan //
                let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                let IncomeTeamI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamI)
                let IncomeTeamII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamII)
                let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                document.querySelector(".dataGlobal2023 .incomeNonResi").innerHTML = incomeNonResi

                // list pemasukan
                document.querySelector(".dataGlobal2023 .teamI").innerHTML = IncomeTeamI
                document.querySelector(".dataGlobal2023 .teamII").innerHTML = IncomeTeamII
                document.querySelector(".dataGlobal2023 .iResi").innerHTML = incomeNonResi
                document.querySelector(".dataGlobal2023 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
            } else if (readCookie("id_pengurus") == "sosial_media") {
                let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan)
                document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
            }
        }
    })
})

// ======================= 2022 ======================
if (
    readCookie("id_pengurus") == "management_keuangan" ||
    readCookie("id_pengurus") == "kepala_pengajuan" ||
    readCookie("id_pengurus") == "ketua_yayasan" ||
    readCookie("id_pengurus") == "kepala_income"
) {
    const btnData2022 = document.querySelectorAll(".dataGlobal2022 .pengeluaran-select .button-list button")
    const program2022 = document.querySelector(".dataGlobal2022 .table2022Program .tables")
    const logistik2022 = document.querySelector(".dataGlobal2022 .table2022Logistik .tables")
    const aset2022 = document.querySelector(".dataGlobal2022 .table2022Aset .tables")
    const makan2022 = document.querySelector(".dataGlobal2022 .table2022Makan .tables")
    const gaji2022 = document.querySelector(".dataGlobal2022 .table2022Gaji .tables")
    const lainnya2022 = document.querySelector(".dataGlobal2022 .table2022Lainnya .tables")
    const maintenance2022 = document.querySelector(".dataGlobal2022 .table2022Maintenance .tables")
    const operasional2022 = document.querySelector(".dataGlobal2022 .table2022Operasional .tables")
    const paud2022 = document.querySelector(".dataGlobal2022 .table2022Paud .tables")
    const jasa2022 = document.querySelector(".dataGlobal2022 .table2022Jasa .tables")

    btnData2022.forEach(data2022 => {
        data2022.addEventListener("click", function () {
            const lapActive = document.querySelector(".dataGlobal2022 .pengeluaran-select .button-list .active")
            const titleLap = document.querySelector(".dataGlobal2022 .pengeluaran-select .title-table")
            lapActive.classList.remove("active")
            data2022.classList.add("active")
            titleLap.innerHTML = data2022.innerHTML
            const idData = data2022.getAttribute("id")
            if (idData == "program") {
                program2022.classList.remove("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "logistik") {
                program2022.classList.add("display-content")
                logistik2022.classList.remove("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "aset") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.remove("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "makan") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.remove("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "gaji") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.remove("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "lainnya") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.remove("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "maintenance") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.remove("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "operasional") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.remove("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "paud") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.remove("display-content")
                jasa2022.classList.add("display-content")

            } else if (idData == "jasa") {
                program2022.classList.add("display-content")
                logistik2022.classList.add("display-content")
                aset2022.classList.add("display-content")
                makan2022.classList.add("display-content")
                gaji2022.classList.add("display-content")
                lainnya2022.classList.add("display-content")
                maintenance2022.classList.add("display-content")
                operasional2022.classList.add("display-content")
                paud2022.classList.add("display-content")
                jasa2022.classList.remove("display-content")

            }
        })
    });

    const btnData2022masuk = document.querySelectorAll(".dataGlobal2022 .button-list-pemasukan button")
    const harian2022 = document.querySelector(".dataGlobal2022 .laporan2022Harian .tables")
    const income2022 = document.querySelector(".dataGlobal2022 .laporan2022Income .tables")
    const resi2022 = document.querySelector(".dataGlobal2022 .laporan2022NonResi .tables")
    btnData2022masuk.forEach(dataMasuk => {
        dataMasuk.addEventListener("click", function () {
            const masukActive = document.querySelector(".dataGlobal2022 .button-list-pemasukan .active")
            const titleMasuk = document.querySelector(".dataGlobal2022 .title-pemasukan .title-table")
            masukActive.classList.remove("active")
            dataMasuk.classList.add("active")
            titleMasuk.innerHTML = dataMasuk.innerHTML
            const idMasuk = dataMasuk.getAttribute("id")

            if (idMasuk == "harian") {
                harian2022.classList.remove("display-content")
                income2022.classList.add("display-content")
                resi2022.classList.add("display-content")

            } else if (idMasuk == "donatur") {
                harian2022.classList.add("display-content")
                income2022.classList.remove("display-content")
                resi2022.classList.add("display-content")

            } else {
                harian2022.classList.add("display-content")
                income2022.classList.add("display-content")
                resi2022.classList.remove("display-content")
            }
        })
    });

}

// ========================= 2023 =============================
if (
    readCookie("id_pengurus") == "management_keuangan" ||
    readCookie("id_pengurus") == "kepala_pengajuan" ||
    readCookie("id_pengurus") == "ketua_yayasan" ||
    readCookie("id_pengurus") == "kepala_income"
) {
    const btnData2023 = document.querySelectorAll(".dataGlobal2023 .pengeluaran-select .button-list button")
    const program2023 = document.querySelector(".dataGlobal2023 .table2023Program .tables")
    const logistik2023 = document.querySelector(".dataGlobal2023 .table2023Logistik .tables")
    const aset2023 = document.querySelector(".dataGlobal2023 .table2023Aset .tables")
    const makan2023 = document.querySelector(".dataGlobal2023 .table2023Makan .tables")
    const gaji2023 = document.querySelector(".dataGlobal2023 .table2023Gaji .tables")
    const lainnya2023 = document.querySelector(".dataGlobal2023 .table2023Lainnya .tables")
    const maintenance2023 = document.querySelector(".dataGlobal2023 .table2023Maintenance .tables")
    const operasional2023 = document.querySelector(".dataGlobal2023 .table2023Operasional .tables")
    const paud2023 = document.querySelector(".dataGlobal2023 .table2023Paud .tables")
    const jasa2023 = document.querySelector(".dataGlobal2023 .table2023Jasa .tables")

    btnData2023.forEach(data2023 => {
        data2023.addEventListener("click", function () {
            const lapActive = document.querySelector(".dataGlobal2023 .pengeluaran-select .button-list .active")
            const titleLap = document.querySelector(".dataGlobal2023 .pengeluaran-select .title-table")
            lapActive.classList.remove("active")
            data2023.classList.add("active")
            titleLap.innerHTML = data2023.innerHTML
            const idData = data2023.getAttribute("id")
            if (idData == "program") {
                program2023.classList.remove("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "logistik") {
                program2023.classList.add("display-content")
                logistik2023.classList.remove("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "aset") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.remove("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "makan") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.remove("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "gaji") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.remove("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "lainnya") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.remove("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "maintenance") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.remove("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "operasional") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.remove("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "paud") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.remove("display-content")
                jasa2023.classList.add("display-content")

            } else if (idData == "jasa") {
                program2023.classList.add("display-content")
                logistik2023.classList.add("display-content")
                aset2023.classList.add("display-content")
                makan2023.classList.add("display-content")
                gaji2023.classList.add("display-content")
                lainnya2023.classList.add("display-content")
                maintenance2023.classList.add("display-content")
                operasional2023.classList.add("display-content")
                paud2023.classList.add("display-content")
                jasa2023.classList.remove("display-content")

            }
        })
    });

    // dropdown select periode pengeluaran
    const dropdownPeriode = document.querySelectorAll(".dataGlobal2023 .pengeluaran-select .dropdown-menu-periode li a")
    dropdownPeriode.forEach(periode => {
        periode.addEventListener("click", function () {
            periode.innerHTML == "Global" ? document.querySelector(".dataGlobal2023 .pengeluaran-select .title-dropdown").innerHTML =
                "" : document.querySelector(".dataGlobal2023 .pengeluaran-select .title-dropdown").innerHTML = periode.innerHTML
            const hrefPeriode = periode.getAttribute("href")
            document.querySelector(".dataGlobal2023 .pengeluaran-select .title-data-pengeluaran").innerHTML = `Periode ${periode.innerHTML}`
            if (hrefPeriode == "#Global") {
                var urlJson = "./data/data_query2023.php"

            } else {
                var urlJson = "./data/data_query2023.php?periode=" + periode.innerHTML
            }

            $.ajax({
                dataType: 'json',
                url: urlJson,
                success: function success(data) {
                    if (
                        readCookie("id_pengurus") == "management_keuangan" ||
                        readCookie("id_pengurus") == "kepala_pengajuan" ||
                        readCookie("id_pengurus") == "ketua_yayasan"
                    ) {
                        let anggaranProgram = new Intl.NumberFormat('en-US').format(data.program.anggaran)
                        let terpakaiProgram = new Intl.NumberFormat('en-US').format(data.program.terpakai)
                        let cashbackProgram = new Intl.NumberFormat('en-US').format(data.program.cashback)

                        // logistik
                        let anggaranLogistik = new Intl.NumberFormat('en-US').format(data.logistik.anggaran)
                        let terpakaiLogistik = new Intl.NumberFormat('en-US').format(data.logistik.terpakai)
                        let cashbackLogistik = new Intl.NumberFormat('en-US').format(data.logistik.cashback)

                        // aset yayasan
                        let anggaranAset = new Intl.NumberFormat('en-US').format(data.aset.anggaran)
                        let terpakaiAset = new Intl.NumberFormat('en-US').format(data.aset.terpakai)
                        let cashbackAset = new Intl.NumberFormat('en-US').format(data.aset.cashback)

                        // uang makan
                        let anggaranMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.anggaran)
                        let terpakaiMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.terpakai)
                        let cashbackMakan = new Intl.NumberFormat('en-US').format(data.uangMakan.cashback)

                        // gaji karyawan
                        let anggaranGaji = new Intl.NumberFormat('en-US').format(data.gaji.anggaran)
                        let terpakaiGaji = new Intl.NumberFormat('en-US').format(data.gaji.terpakai)
                        let cashbackGaji = new Intl.NumberFormat('en-US').format(data.gaji.cashback)

                        // biaya lainnya
                        let anggaranLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.anggaran)
                        let terpakaiLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.terpakai)
                        let cashbackLainnya = new Intl.NumberFormat('en-US').format(data.lainnya.cashback)

                        // maintenance
                        let anggaranMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.anggaran)
                        let terpakaiMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.terpakai)
                        let cashbackMaintenance = new Intl.NumberFormat('en-US').format(data.maintenance.cashback)

                        // operasional yayasan
                        let anggaranOperasional = new Intl.NumberFormat('en-US').format(data.operasional.anggaran)
                        let terpakaiOperasional = new Intl.NumberFormat('en-US').format(data.operasional.terpakai)
                        let cashbackOperasional = new Intl.NumberFormat('en-US').format(data.operasional.cashback)

                        // paud
                        let anggaranPaud = new Intl.NumberFormat('en-US').format(data.paud.anggaran)
                        let terpakaiPaud = new Intl.NumberFormat('en-US').format(data.paud.terpakai)
                        let cashbackPaud = new Intl.NumberFormat('en-US').format(data.paud.cashback)

                        // jasa
                        let anggaranJasa = new Intl.NumberFormat('en-US').format(data.jasa.anggaran)
                        let terpakaiJasa = new Intl.NumberFormat('en-US').format(data.jasa.terpakai)
                        let cashbackJasa = new Intl.NumberFormat('en-US').format(data.jasa.cashback)

                        // global
                        let anggaranGlobal = new Intl.NumberFormat('en-US').format(data.total.anggaran)
                        let terpakaiGlobal = new Intl.NumberFormat('en-US').format(data.total.terpakai)
                        let cashbackGlobal = new Intl.NumberFormat('en-US').format(data.total.cashback)

                        document.querySelector(".dataGlobal2023 .Program2023ListAnggaran").innerHTML = anggaranProgram
                        document.querySelector(".dataGlobal2023 .Program2023LisTerpakai").innerHTML = terpakaiProgram
                        document.querySelector(".dataGlobal2023 .Program2023ListCashback").innerHTML = cashbackProgram

                        document.querySelector(".dataGlobal2023 .Logistik2023ListAnggaran").innerHTML = anggaranLogistik
                        document.querySelector(".dataGlobal2023 .Logistik2023LisTerpakai").innerHTML = terpakaiLogistik
                        document.querySelector(".dataGlobal2023 .Logistik2023ListCashback").innerHTML = cashbackLogistik

                        document.querySelector(".dataGlobal2023 .Aset2023ListAnggaran").innerHTML = anggaranAset
                        document.querySelector(".dataGlobal2023 .Aset2023LisTerpakai").innerHTML = terpakaiAset
                        document.querySelector(".dataGlobal2023 .Aset2023ListCashback").innerHTML = cashbackAset

                        document.querySelector(".dataGlobal2023 .Makan2023ListAnggaran").innerHTML = anggaranMakan
                        document.querySelector(".dataGlobal2023 .Makan2023LisTerpakai").innerHTML = terpakaiMakan
                        document.querySelector(".dataGlobal2023 .Makan2023ListCashback").innerHTML = cashbackMakan

                        document.querySelector(".dataGlobal2023 .Gaji2023ListAnggaran").innerHTML = anggaranGaji
                        document.querySelector(".dataGlobal2023 .Gaji2023LisTerpakai").innerHTML = terpakaiGaji
                        document.querySelector(".dataGlobal2023 .Gaji2023ListCashback").innerHTML = cashbackGaji

                        document.querySelector(".dataGlobal2023 .Lainnya2023ListAnggaran").innerHTML = anggaranLainnya
                        document.querySelector(".dataGlobal2023 .Lainnya2023LisTerpakai").innerHTML = terpakaiLainnya
                        document.querySelector(".dataGlobal2023 .Lainnya2023ListCashback").innerHTML = cashbackLainnya

                        document.querySelector(".dataGlobal2023 .Maintenance2023ListAnggaran").innerHTML = anggaranMaintenance
                        document.querySelector(".dataGlobal2023 .Maintenance2023LisTerpakai").innerHTML = terpakaiMaintenance
                        document.querySelector(".dataGlobal2023 .Maintenance2023ListCashback").innerHTML = cashbackMaintenance

                        document.querySelector(".dataGlobal2023 .Operasional2023ListAnggaran").innerHTML = anggaranOperasional
                        document.querySelector(".dataGlobal2023 .Operasional2023LisTerpakai").innerHTML = terpakaiOperasional
                        document.querySelector(".dataGlobal2023 .Operasional2023ListCashback").innerHTML = cashbackOperasional

                        document.querySelector(".dataGlobal2023 .Paud2023ListAnggaran").innerHTML = anggaranPaud
                        document.querySelector(".dataGlobal2023 .Paud2023LisTerpakai").innerHTML = terpakaiPaud
                        document.querySelector(".dataGlobal2023 .Paud2023ListCashback").innerHTML = cashbackPaud

                        document.querySelector(".dataGlobal2023 .Jasa2023ListAnggaran").innerHTML = anggaranJasa
                        document.querySelector(".dataGlobal2023 .Jasa2023LisTerpakai").innerHTML = terpakaiJasa
                        document.querySelector(".dataGlobal2023 .Jasa2023ListCashback").innerHTML = cashbackJasa

                        document.querySelector(".total2023ListAnggaran").innerHTML = `<b>${anggaranGlobal}</b>`
                        document.querySelector(".total2023LisTerpakai").innerHTML = `<b>${terpakaiGlobal}</b>`
                        document.querySelector(".total2023ListCashback").innerHTML = `<b>${cashbackGlobal}</b>`

                        document.querySelector(".dataGlobal2023 .anggaran").innerHTML = anggaranGlobal
                        document.querySelector(".dataGlobal2023 .terpakai").innerHTML = terpakaiGlobal
                        document.querySelector(".dataGlobal2023 .cashback").innerHTML = cashbackGlobal

                    }
                }
            })
        })
    });

    // pemasukan
    const btnData2023masuk = document.querySelectorAll(".dataGlobal2023 .button-list-pemasukan button")
    const harian2023 = document.querySelector(".dataGlobal2023 .laporan2023Harian .tables")
    const income2023 = document.querySelector(".dataGlobal2023 .laporan2023Income .tables")
    const resi2023 = document.querySelector(".dataGlobal2023 .laporan2023NonResi .tables")
    btnData2023masuk.forEach(dataMasuk23 => {
        dataMasuk23.addEventListener("click", function () {
            const masukActive = document.querySelector(".dataGlobal2023 .button-list-pemasukan .active")
            const titleMasuk = document.querySelector(".dataGlobal2023 .title-pemasukan .title-table")
            masukActive.classList.remove("active")
            dataMasuk23.classList.add("active")
            titleMasuk.innerHTML = dataMasuk23.innerHTML
            const idMasuk = dataMasuk23.getAttribute("id")

            if (idMasuk == "harian") {
                harian2023.classList.remove("display-content")
                income2023.classList.add("display-content")
                resi2023.classList.add("display-content")

            } else if (idMasuk == "donatur") {
                harian2023.classList.add("display-content")
                income2023.classList.remove("display-content")
                resi2023.classList.add("display-content")

            } else {
                harian2023.classList.add("display-content")
                income2023.classList.add("display-content")
                resi2023.classList.remove("display-content")
            }
        })
    });

    // dropdown select periode pemasukan
    const dropdownPeriodeMasuk = document.querySelectorAll(".dataGlobal2023 .pemasukan-select .dropdown-menu-periode li a")
    dropdownPeriodeMasuk.forEach(periodeMasuk => {
        periodeMasuk.addEventListener("click", function () {
            periodeMasuk.innerHTML == "Global" ? document.querySelector(".dataGlobal2023 .pemasukan-select .title-dropdown").innerHTML =
                "" : document.querySelector(".dataGlobal2023 .pemasukan-select .title-dropdown").innerHTML = periodeMasuk.innerHTML
            const hrefPeriodeMasuk = periodeMasuk.getAttribute("href")
            document.querySelector(".dataGlobal2023 .pemasukan-select .title-data-pemasukan").innerHTML = `Periode ${periodeMasuk.innerHTML}`
            if (hrefPeriodeMasuk == "#Global") {
                var urlJsonMasuk = "./data/data_query2023.php"

            } else {
                var urlJsonMasuk = "./data/data_query2023.php?periode=" + periodeMasuk.innerHTML
            }

            $.ajax({
                dataType: 'json',
                url: urlJsonMasuk,
                success: function success(data) {
                    if (
                        readCookie("id_pengurus") == "management_keuangan" ||
                        readCookie("id_pengurus") == "ketua_yayasan"
                    ) {
                        // pemasukan //
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                        let IncomeTeamI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamI)
                        let IncomeTeamII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamII)
                        let IncomeTeamIII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIII)
                        let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                        let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                        document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                        document.querySelector(".dataGlobal2023 .incomeNonResi").innerHTML = incomeNonResi

                        // list pemasukan
                        document.querySelector(".dataGlobal2023 .teamI").innerHTML = IncomeTeamI
                        document.querySelector(".dataGlobal2023 .teamII").innerHTML = IncomeTeamII
                        document.querySelector(".dataGlobal2023 .teamIII").innerHTML = IncomeTeamIII
                        document.querySelector(".dataGlobal2023 .iResi").innerHTML = incomeNonResi
                        document.querySelector(".dataGlobal2023 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`

                    } else if (
                        readCookie("id_pengurus") == "kepala_income" ||
                        readCookie("id_pengurus") == "manager_facebook" ||
                        readCookie("id_pengurus") == "manager_instagram"
                    ) {
                        // pemasukan //
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                        let IncomeTeamI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamI)
                        let IncomeTeamII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamII)
                        let IncomeTeamIII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIII)
                        let IncomeTeamIV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIV)
                        let IncomeTeamV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamV)
                        let IncomeTeamVI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamVI)
                        let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                        let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                        document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                        document.querySelector(".dataGlobal2023 .incomeNonResi").innerHTML = incomeNonResi

                        // list pemasukan
                        document.querySelector(".dataGlobal2023 .teamI").innerHTML = IncomeTeamI
                        document.querySelector(".dataGlobal2023 .teamII").innerHTML = IncomeTeamII
                        document.querySelector(".dataGlobal2023 .teamIII").innerHTML = IncomeTeamIII
                        document.querySelector(".dataGlobal2023 .teamIV").innerHTML = IncomeTeamIV
                        document.querySelector(".dataGlobal2023 .teamIG").innerHTML = IncomeTeamVI
                        document.querySelector(".dataGlobal2023 .teamIGII").innerHTML = IncomeTeamV
                        document.querySelector(".dataGlobal2023 .iResi").innerHTML = incomeNonResi
                        document.querySelector(".dataGlobal2023 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
                    } else if (readCookie("id_pengurus") == "sosial_media") {
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan)
                        document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                    }
                }
            })
        })

    });

}

if (
    readCookie("id_pengurus") == "manager_facebook" ||
    readCookie("id_pengurus") == "manager_instagram" ||
    readCookie("id_pengurus") == "sosial_media") {
    // dropdown select periode pemasukan
    const dropdownPeriodeMasuk = document.querySelectorAll(".dataGlobal2023 .pemasukan-select .dropdown-menu-periode li a")
    dropdownPeriodeMasuk.forEach(periodeMasuk => {
        periodeMasuk.addEventListener("click", function () {
            periodeMasuk.innerHTML == "Global" ? document.querySelector(".dataGlobal2023 .pemasukan-select .title-dropdown").innerHTML =
                "" : document.querySelector(".dataGlobal2023 .pemasukan-select .title-dropdown").innerHTML = periodeMasuk.innerHTML
            const hrefPeriodeMasuk = periodeMasuk.getAttribute("href")
            document.querySelector(".dataGlobal2023 .pemasukan-select .title-data-pemasukan").innerHTML = `Periode ${periodeMasuk.innerHTML}`
            const idPeriodeMasuk = periodeMasuk.getAttribute("id")
            if (hrefPeriodeMasuk == "#Global") {
                var urlJsonMasuk = "./data/data_query2023.php"

            } else {
                if (readCookie("id_pengurus") == "sosial_media") {
                    var urlJsonMasuk = "./data/data_query2023.php?periode=" + idPeriodeMasuk
                } else {
                    var urlJsonMasuk = "./data/data_query2023.php?periode=" + periodeMasuk.innerHTML
                }
            }

            $.ajax({
                dataType: 'json',
                url: urlJsonMasuk,
                success: function success(data) {
                    if (
                        readCookie("id_pengurus") == "manager_facebook" ||
                        readCookie("id_pengurus") == "manager_instagram"
                    ) {
                        // pemasukan //
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan.media)
                        let IncomeTeamI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamI)
                        let IncomeTeamII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamII)
                        let IncomeTeamIII = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIII)
                        let IncomeTeamIV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamIV)
                        let IncomeTeamV = new Intl.NumberFormat('en-US').format(data.pemasukan.teamV)
                        let IncomeTeamVI = new Intl.NumberFormat('en-US').format(data.pemasukan.teamVI)
                        let incomeNonResi = new Intl.NumberFormat('en-US').format(data.pemasukan.nonResi)
                        let IncomeGlobal = new Intl.NumberFormat('en-US').format(data.pemasukan.totalPemasukan)

                        document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                        document.querySelector(".dataGlobal2023 .incomeNonResi").innerHTML = incomeNonResi

                        // list pemasukan
                        document.querySelector(".dataGlobal2023 .teamI").innerHTML = IncomeTeamI
                        document.querySelector(".dataGlobal2023 .teamII").innerHTML = IncomeTeamII
                        document.querySelector(".dataGlobal2023 .teamIII").innerHTML = IncomeTeamIII
                        document.querySelector(".dataGlobal2023 .teamIV").innerHTML = IncomeTeamIV
                        document.querySelector(".dataGlobal2023 .teamIG").innerHTML = IncomeTeamVI
                        document.querySelector(".dataGlobal2023 .teamIGII").innerHTML = IncomeTeamV
                        document.querySelector(".dataGlobal2023 .iResi").innerHTML = incomeNonResi
                        document.querySelector(".dataGlobal2023 .totalPemasukan").innerHTML = `<b>${IncomeGlobal}</b>`
                    } else if (readCookie("id_pengurus") == "sosial_media") {
                        let incomeMedia = new Intl.NumberFormat('en-US').format(data.pemasukan)
                        document.querySelector(".dataGlobal2023 .incomeMedia").innerHTML = incomeMedia
                    }
                }
            })
        })

    });
}

$(document).ready(function () {
    function newexportaction(e, dt, button, config) {
        var self = this;
        var oldStart = dt.settings()[0]._iDisplayStart;
        dt.one('preXhr', function (e, s, data) {
            // Just this once, load all data from the server...
            data.start = 0;
            data.length = 2147483647;
            dt.one('preDraw', function (e, settings) {
                // Call the original action function
                if (button[0].className.indexOf('buttons-excel') >= 0) {
                    $.fn.dataTable.ext.buttons.excelHtml5.available(dt, config) ?
                        $.fn.dataTable.ext.buttons.excelHtml5.action.call(self, e, dt, button, config) :
                        $.fn.dataTable.ext.buttons.excelFlash.action.call(self, e, dt, button, config);
                }
                dt.one('preXhr', function (e, s, data) {
                    // DataTables thinks the first item displayed is index 0, but we're not drawing that.
                    // Set the property to what it was before exporting.
                    settings._iDisplayStart = oldStart;
                    data.start = oldStart;
                });
                // Reload the grid with the original page. Otherwise, API functions like table.cell(this) don't work properly.
                setTimeout(dt.ajax.reload, 0);
                // Prevent rendering of the full data to the DOM
                return false;
            });
        });
        // Requery the server with the new one-time export settings
        dt.ajax.reload();
    }

    // ======================= 2022 ======================
    // table data program
    $('.dataGlobal2022 #pengeluaran').one('click', function () {
        // table program
        $('#program2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Program 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_program.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                    return new Intl.NumberFormat('en-US').format(data)
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
                data: "terpakai",
                "render": function (data) {
                    return new Intl.NumberFormat('en-US').format(data)
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1, 2, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 3, 4, 5, 6, 8, 9, 10]
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

    });

    // table data logistik
    $('.dataGlobal2022 #logistik').one('click', function () {
        $('#logistik2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Logistik 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_logistik.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data aset yayasan
    $('.dataGlobal2022 #aset').one('click', function () {
        $('#aset2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Aset Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_aset.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                    return `${data == 0 ? `<div class="text-center">-</div>`:`<div class="text-center">${data} Pcs</div>`}`;
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
                    return `${data == 0 ? `<div class="text-center">-</div>`:`<div class="text-center">${data} Pcs</div>`}`;
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 8]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 12]
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
    });

    // table data uang makan
    $('.dataGlobal2022 #makan').one('click', function () {
        $('#makan2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Uang Makan Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_makan.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data gaji karyawan
    $('.dataGlobal2022 #gaji').one('click', function () {
        $('#gaji2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Gaji Karyawan Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_gaji.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data anggaran lain
    $('.dataGlobal2022 #lainnya').one('click', function () {
        $('#lainnya2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Anggaran Lain Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_lainnya.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data maintenance
    $('.dataGlobal2022 #maintenance').one('click', function () {
        $('#maintenance2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Maintenance Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_maintenance.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data operasional
    $('.dataGlobal2022 #operasional').one('click', function () {
        $('#operasional2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Operasional Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_operasional.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data paudqu
    $('.dataGlobal2022 #paud').one('click', function () {
        $('#paud2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan PaudQU Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_paud.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data jasa
    $('.dataGlobal2022 #jasa').one('click', function () {
        $('#jasa2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Pembayaran Jasa Yayasan 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_jasa.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // harian
    if (readCookie("id_pengurus") == "kepala_income") {
        $('#dataDonatur22').one('click', function () {
            $('#harian2022').DataTable({
                "processing": true,
                "serverSide": false,
                "scrollX": true,
                "autoWidth": true,
                dom: 'PBlfrtip',
                buttons: [{
                    extend: 'excel',
                    footer: true,
                    title: 'Laporan Income Harian 2022'
                }],
                "ajax": {
                    url: 'table_ajax/2022_data_harianIncome.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 25, 50, 100, -1],
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
                    data: "lapKategori",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "lapGedung",
                    "render": function (data) {
                        return Capitalize(data);
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
                    searchPanes: {
                        show: true,
                        initCollapsed: true
                    },
                    targets: [2, 4]
                }, {
                    searchPanes: {
                        show: false
                    },
                    targets: [0, 1, 3, 5]
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
                    // Update footer
                    $(api.column(5).footer()).html(
                        'Rp. ' + rupiah + ''
                    );

                }
            });
        });
    } else if (
        readCookie("id_pengurus") == "manager_facebook" ||
        readCookie("id_pengurus") == "manager_instagram"

    ) {
        $('#dataDonatur22').one('click', function () {
            $('#income2022').DataTable({
                "processing": true,
                "serverSide": true,
                "scrollX": true,
                "autoWidth": true,
                "language": {
                    "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
                },
                dom: 'Blfrtip',
                "buttons": [{
                    "extend": 'excel',
                    title: 'Data Donatur 2022',
                    "action": newexportaction
                }],
                "ajax": {
                    url: 'table_ajax/2022_data_donatur.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 50, 100, 500, -1],
                    [10, 50, 100, 500, "All"]
                ],
                "order": [
                    [1, 'asc'],
                    [4, 'asc']
                ],
                "columnDefs": [{
                    "targets": 0,
                    "render": function (_data, _type, _row, meta) {
                        var no = meta.row + meta.settings._iDisplayStart + 1
                        return `<div class="text-center">` + no + `</div>`
                    }
                }, {
                    "targets": 1,
                    data: "suksesPemegang",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "suksesAkun",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 3,
                    data: "suksesDonatur",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 4,
                    data: "suksesTanggal",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 5,
                    data: "suksesBulan",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 6,
                    data: "suksesBank",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 7,
                    data: "suksesTransfer",
                    "render": function (data) {
                        return data;
                    }
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
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

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
                        'Rp. ' + rupiah
                    );

                }
            });
        });
    } else if (readCookie("id_pengurus") == "sosial_media") {
        $('#dataAll').one('click', function () {
            $('.list-account-income').load("pages/sub_pages/data_tahunan/list_acc_income.php");
            $('#income2022').DataTable({
                "processing": true,
                "serverSide": true,
                "scrollX": true,
                "autoWidth": true,
                "language": {
                    "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
                },
                dom: 'Blfrtip',
                "buttons": [{
                    "extend": 'excel',
                    title: 'Data Donatur 2022',
                    "action": newexportaction
                }],
                "ajax": {
                    url: 'table_ajax/2022_data_donatur.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 50, 100, 500, -1],
                    [10, 50, 100, 500, "All"]
                ],
                "order": [
                    [1, 'asc'],
                    [4, 'asc']
                ],
                "columnDefs": [{
                    "targets": 0,
                    "render": function (_data, _type, _row, meta) {
                        var no = meta.row + meta.settings._iDisplayStart + 1
                        return `<div class="text-center">` + no + `</div>`
                    }
                }, {
                    "targets": 1,
                    data: "suksesPemegang",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "suksesAkun",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 3,
                    data: "suksesDonatur",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 4,
                    data: "suksesTanggal",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 5,
                    data: "suksesBulan",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 6,
                    data: "suksesBank",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 7,
                    data: "suksesTransfer",
                    "render": function (data) {
                        return data;
                    }
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
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

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
                        'Rp. ' + rupiah
                    );

                }
            });
        });
    }

    $('.dataGlobal2022 #pemasukan').one('click', function () {
        $('#harian2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Income Harian 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_harianIncome.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                data: "lapKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "lapGedung",
                "render": function (data) {
                    return Capitalize(data);
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 4]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 3, 5]
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
                // Update footer
                $(api.column(5).footer()).html(
                    'Rp. ' + rupiah + ''
                );

            }
        });
    });

    // table donatur
    $('.dataGlobal2022 #donatur').one('click', function () {
        $('#income2022').DataTable({
            "processing": true,
            "serverSide": true,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            dom: 'Blfrtip',
            "buttons": [{
                "extend": 'excel',
                title: 'Data Donatur 2022',
                "action": newexportaction
            }],
            "ajax": {
                url: 'table_ajax/2022_data_donatur.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 50, 100, 500, -1],
                [10, 50, 100, 500, "All"]
            ],
            "order": [
                [1, 'asc'],
                [4, 'asc']
            ],
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "suksesPemegang",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "suksesAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "suksesDonatur",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "suksesTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "suksesBulan",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "suksesBank",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 7,
                data: "suksesTransfer",
                "render": function (data) {
                    return data;
                }
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
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

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
                    'Rp. ' + rupiah
                );

            }
        });
    });

    // table non resi
    $('.dataGlobal2022 #nonResi').one('click', function () {
        $('#nonresi2022').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Non Resi 2022'
            }],
            "ajax": {
                url: 'table_ajax/2022_data_nonResi.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [3]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 4]
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
                // Update footer
                $(api.column(4).footer()).html(
                    'Rp. ' + rupiah + ''
                );

            }
        });
    });

    // ======================= 2023 ======================
    $('.dataGlobal2023 #pengeluaran').one('click', function () {
        // table program
        $('#program2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Program 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_program.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                    return new Intl.NumberFormat('en-US').format(data)
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
                data: "terpakai",
                "render": function (data) {
                    return new Intl.NumberFormat('en-US').format(data)
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [1, 2, 7]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 3, 4, 5, 6, 8, 9, 10]
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
    });

    // table data logistik
    $('.dataGlobal2023 #logistik').one('click', function () {
        $('#logistik2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Logistik 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_logistik.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data aset yayasan
    $('.dataGlobal2023 #aset').one('click', function () {
        $('#aset2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Aset Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_aset.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                    return `${data == 0 ? `<div class="text-center">-</div>`:`<div class="text-center">${data} Pcs</div>`}`;
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
                    return `${data == 0 ? `<div class="text-center">-</div>`:`<div class="text-center">${data} Pcs</div>`}`;
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 8]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 12]
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
    });

    // table data uang makan
    $('.dataGlobal2023 #makan').one('click', function () {
        $('#makan2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Uang Makan Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_makan.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data gaji karyawan
    $('.dataGlobal2023 #gaji').one('click', function () {
        $('#gaji2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Gaji Karyawan Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_gaji.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data anggaran lain
    $('.dataGlobal2023 #lainnya').one('click', function () {
        $('#lainnya2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Anggaran Lain Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_lainnya.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data maintenance
    $('.dataGlobal2023 #maintenance').one('click', function () {
        $('#maintenance2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Maintenance Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_maintenance.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data operasional
    $('.dataGlobal2023 #operasional').one('click', function () {
        $('#operasional2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Operasional Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_operasional.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data paudqu
    $('.dataGlobal2023 #paud').one('click', function () {
        $('#paud2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan PaudQU Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_paud.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // table data jasa
    $('.dataGlobal2023 #jasa').one('click', function () {
        $('#jasa2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Pembayaran Jasa Yayasan 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_jasa.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [6]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 3, 4, 5, 7, 8, 9]
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
    });

    // harian
    if (
        readCookie("id_pengurus") == "kepala_income"

    ) {
        $('#dataDonatur23').one('click', function () {
            $('#harian2023').DataTable({
                "processing": true,
                "serverSide": false,
                "scrollX": true,
                "autoWidth": true,
                dom: 'PBlfrtip',
                buttons: [{
                    extend: 'excel',
                    footer: true,
                    title: 'Laporan Income Harian 2023'
                }],
                "ajax": {
                    url: 'table_ajax/data_laporan_incomeHarian.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 25, 50, 100, -1],
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
                    data: "lapKategori",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "lapGedung",
                    "render": function (data) {
                        return `<div class="text-center">${data}</div>`;
                    }
                }, {
                    "targets": 3,
                    data: "lapTanggal",
                    "render": function (data) {
                        return `<div class="text-center">${data}</div>`;
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
                    searchPanes: {
                        show: true,
                        initCollapsed: true
                    },
                    targets: [2, 4]
                }, {
                    searchPanes: {
                        show: false
                    },
                    targets: [0, 1, 3, 5]
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
                    // Update footer
                    $(api.column(5).footer()).html(
                        'Rp. ' + rupiah + ''
                    );

                }
            });
        });
    } else if (
        readCookie("id_pengurus") == "manager_facebook" ||
        readCookie("id_pengurus") == "manager_instagram"
    ) {
        $('#dataDonatur23').one('click', function () {
            $('#income2023').DataTable({
                "processing": true,
                "serverSide": true,
                "scrollX": true,
                "autoWidth": true,
                "language": {
                    "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
                },
                "dom": 'Blfrtip',
                "buttons": [{
                    "extend": 'excel',
                    title: 'Data Donatur 2023',
                    "action": newexportaction
                }],
                "ajax": {
                    url: 'table_ajax/data_donatur.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 50, 100, 500, -1],
                    [10, 50, 100, 500, "All"]
                ],
                "order": [
                    [1, 'asc'],
                    [4, 'asc']
                ],
                "columnDefs": [{
                    "targets": 0,
                    "render": function (_data, _type, _row, meta) {
                        var no = meta.row + meta.settings._iDisplayStart + 1
                        return `<div class="text-center">` + no + `</div>`
                    }
                }, {
                    "targets": 1,
                    data: "suksesPemegang",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "suksesAkun",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 3,
                    data: "suksesDonatur",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 4,
                    data: "suksesTanggal",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 5,
                    data: "suksesBulan",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 6,
                    data: "suksesBank",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 7,
                    data: "suksesTransfer",
                    "render": function (data) {
                        return data;
                    }
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
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

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
                        'Rp. ' + rupiah
                    );

                }
            });
        });
    } else if (readCookie("id_pengurus") == "sosial_media") {
        $('#dataDonatur23').one('click', function () {
            $('#income2023').DataTable({
                "processing": true,
                "serverSide": true,
                "scrollX": true,
                "autoWidth": true,
                "language": {
                    "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
                },
                "dom": 'Blfrtip',
                "buttons": [{
                    "extend": 'excel',
                    title: 'Data Donatur 2023',
                    "action": newexportaction
                }],
                "ajax": {
                    url: 'table_ajax/data_donatur.php',
                    type: 'GET',
                },
                "deferRender": true,
                "destroy": true,
                "lengthMenu": [
                    [10, 50, 100, 500, -1],
                    [10, 50, 100, 500, "All"]
                ],
                "order": [
                    [1, 'asc'],
                    [4, 'asc']
                ],
                "columnDefs": [{
                    "targets": 0,
                    "render": function (_data, _type, _row, meta) {
                        var no = meta.row + meta.settings._iDisplayStart + 1
                        return `<div class="text-center">` + no + `</div>`
                    }
                }, {
                    "targets": 1,
                    data: "suksesPemegang",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 2,
                    data: "suksesAkun",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 3,
                    data: "suksesDonatur",
                    "render": function (data) {
                        return Capitalize(data);
                    }
                }, {
                    "targets": 4,
                    data: "suksesTanggal",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 5,
                    data: "suksesBulan",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 6,
                    data: "suksesBank",
                    "render": function (data) {
                        return data;
                    }
                }, {
                    "targets": 7,
                    data: "suksesTransfer",
                    "render": function (data) {
                        return data;
                    }
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
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

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
                        'Rp. ' + rupiah
                    );

                }
            });
        });
    }

    $('.dataGlobal2023 #pemasukan').one('click', function () {
        $('#harian2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Income Harian 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_incomeHarian.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                data: "lapKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "lapGedung",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`;
                }
            }, {
                "targets": 3,
                data: "lapTanggal",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`;
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 4]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 3, 5]
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
                // Update footer
                $(api.column(5).footer()).html(
                    'Rp. ' + rupiah + ''
                );

            }
        });
    });

    // table donatur
    $('.dataGlobal2023 #donatur').one('click', function () {
        $('#income2023').DataTable({
            "processing": true,
            "serverSide": true,
            "scrollX": true,
            "autoWidth": true,
            "language": {
                "processing": "<i class='fa fa-refresh fa-spin icon-refresh fa-3x'></i>"
            },
            "dom": 'Blfrtip',
            "buttons": [{
                "extend": 'excel',
                title: 'Data Donatur 2023',
                "action": newexportaction
            }],
            "ajax": {
                url: 'table_ajax/data_donatur.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 50, 100, 500, -1],
                [10, 50, 100, 500, "All"]
            ],
            "order": [
                [1, 'asc'],
                [4, 'asc']
            ],
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: "suksesPemegang",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 2,
                data: "suksesAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "suksesDonatur",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "suksesTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "suksesBulan",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "suksesBank",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 7,
                data: "suksesTransfer",
                "render": function (data) {
                    return data;
                }
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
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

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
                    'Rp. ' + rupiah
                );

            }
        });
    });

    // table non resi
    $('.dataGlobal2023 #nonResi').one('click', function () {
        $('#nonresi2023').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            dom: 'PBlfrtip',
            buttons: [{
                extend: 'excel',
                footer: true,
                title: 'Laporan Non Resi 2023'
            }],
            "ajax": {
                url: 'table_ajax/data_laporan_nonResi.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
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
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [3]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 2, 4]
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
                // Update footer
                $(api.column(4).footer()).html(
                    'Rp. ' + rupiah + ''
                );

            }
        });
    });

    $(".table2023Program .reload").click(function () {
        $("#program2023").DataTable().ajax.reload()
    })

    $(".table2023Logistik .reload").click(function () {
        $("#logistik2023").DataTable().ajax.reload()
    })

    $(".table2023Aset .reload").click(function () {
        $("#aset2023").DataTable().ajax.reload()
    })

    $(".table2023Makan .reload").click(function () {
        $("#makan2023").DataTable().ajax.reload()
    })

    $(".table2023Gaji .reload").click(function () {
        $("#gaji2023").DataTable().ajax.reload()
    })

    $(".table2023Lainnya .reload").click(function () {
        $("#lainnya2023").DataTable().ajax.reload()
    })

    $(".table2023Maintenance .reload").click(function () {
        $("#maintenance2023").DataTable().ajax.reload()
    })

    $(".table2023Operasional .reload").click(function () {
        $("#operasional2023").DataTable().ajax.reload()
    })

    $(".table2023Paud .reload").click(function () {
        $("#paud2023").DataTable().ajax.reload()
    })

    $(".table2023Jasa .reload").click(function () {
        $("#jasa2023").DataTable().ajax.reload()
    })

    $(".laporan2023Harian .reload").click(function () {
        $("#harian2023").DataTable().ajax.reload()
    })

    $(".laporan2023Income .reload").click(function () {
        $("#income2023").DataTable().ajax.reload()
    })

    $(".laporan2023NonResi .reload").click(function () {
        $("#nonresi2023").DataTable().ajax.reload()
    })
})