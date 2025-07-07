function loadHomePage() {
    setTimeout("loadHomePage()", 1000)
    $.ajax({
        dataType: 'json',
        url: "./data/data_dashboard.php",
        success: function success(data) {
            if (
                readCookie("id_pengurus") == "management_keuangan" ||
                readCookie("id_pengurus") == "kepala_pengajuan" ||
                readCookie("id_pengurus") == "ketua_yayasan"
            ) {
                // program
                let anggaranProgram = new Intl.NumberFormat('en-US').format(data.anggaranProgram)
                let terpakaiProgram = new Intl.NumberFormat('en-US').format(data.terpakaiProgram)
                let cashbackProgram = new Intl.NumberFormat('en-US').format(data.cashbackProgram)

                // logistik
                let anggaranLogistik = new Intl.NumberFormat('en-US').format(data.anggaranLogistik)
                let terpakaiLogistik = new Intl.NumberFormat('en-US').format(data.terpakaiLogistik)
                let cashbackLogistik = new Intl.NumberFormat('en-US').format(data.cashbackLogistik)

                // aset yayasan
                let anggaranAset = new Intl.NumberFormat('en-US').format(data.anggaranAset)
                let terpakaiAset = new Intl.NumberFormat('en-US').format(data.terpakaiAset)
                let cashbackAset = new Intl.NumberFormat('en-US').format(data.cashbackAset)

                // uang makan
                let anggaranMakan = new Intl.NumberFormat('en-US').format(data.anggaranMakan)
                let terpakaiMakan = new Intl.NumberFormat('en-US').format(data.terpakaiMakan)
                let cashbackMakan = new Intl.NumberFormat('en-US').format(data.cashbackMakan)

                // gaji karyawan
                let anggaranGaji = new Intl.NumberFormat('en-US').format(data.anggaranGaji)
                let terpakaiGaji = new Intl.NumberFormat('en-US').format(data.terpakaiGaji)
                let cashbackGaji = new Intl.NumberFormat('en-US').format(data.cashbackGaji)

                // biaya lainnya
                let anggaranLainnya = new Intl.NumberFormat('en-US').format(data.anggaranLainnya)
                let terpakaiLainnya = new Intl.NumberFormat('en-US').format(data.terpakaiLainnya)
                let cashbackLainnya = new Intl.NumberFormat('en-US').format(data.cashbackLainnya)

                // maintenance
                let anggaranMaintenance = new Intl.NumberFormat('en-US').format(data.anggaranMaintenance)
                let terpakaiMaintenance = new Intl.NumberFormat('en-US').format(data.terpakaiMaintenance)
                let cashbackMaintenance = new Intl.NumberFormat('en-US').format(data.cashbackMaintenance)

                // operasional yayasan
                let anggaranOperasional = new Intl.NumberFormat('en-US').format(data.anggaranOperasional)
                let terpakaiOperasional = new Intl.NumberFormat('en-US').format(data.terpakaiOperasional)
                let cashbackOperasional = new Intl.NumberFormat('en-US').format(data.cashbackOperasional)

                // Paud
                let anggaranPaud = new Intl.NumberFormat('en-US').format(data.anggaranPaud)
                let terpakaiPaud = new Intl.NumberFormat('en-US').format(data.terpakaiPaud)
                let cashbackPaud = new Intl.NumberFormat('en-US').format(data.cashbackPaud)

                // jasa
                let anggaranJasa = new Intl.NumberFormat('en-US').format(data.anggaranJasa)
                let terpakaiJasa = new Intl.NumberFormat('en-US').format(data.terpakaiJasa)
                let cashbackJasa = new Intl.NumberFormat('en-US').format(data.cashbackJasa)

                // global
                let anggaranGlobal = new Intl.NumberFormat('en-US').format(data.anggaranGlobal)
                let terpakaiGlobal = new Intl.NumberFormat('en-US').format(data.terpakaiGlobal)
                let cashbackGlobal = new Intl.NumberFormat('en-US').format(data.cashbackGlobal)

                document.querySelector(".ProgramListAnggaran").innerHTML = anggaranProgram
                document.querySelector(".ProgramLisTerpakai").innerHTML = terpakaiProgram
                document.querySelector(".ProgramListCashback").innerHTML = cashbackProgram

                document.querySelector(".LogistikListAnggaran").innerHTML = anggaranLogistik
                document.querySelector(".LogistikLisTerpakai").innerHTML = terpakaiLogistik
                document.querySelector(".LogistikListCashback").innerHTML = cashbackLogistik

                document.querySelector(".AsetListAnggaran").innerHTML = anggaranAset
                document.querySelector(".AsetLisTerpakai").innerHTML = terpakaiAset
                document.querySelector(".AsetListCashback").innerHTML = cashbackAset

                document.querySelector(".MakanListAnggaran").innerHTML = anggaranMakan
                document.querySelector(".MakanLisTerpakai").innerHTML = terpakaiMakan
                document.querySelector(".MakanListCashback").innerHTML = cashbackMakan

                document.querySelector(".GajiListAnggaran").innerHTML = anggaranGaji
                document.querySelector(".GajiLisTerpakai").innerHTML = terpakaiGaji
                document.querySelector(".GajiListCashback").innerHTML = cashbackGaji

                document.querySelector(".LainnyaListAnggaran").innerHTML = anggaranLainnya
                document.querySelector(".LainnyaLisTerpakai").innerHTML = terpakaiLainnya
                document.querySelector(".LainnyaListCashback").innerHTML = cashbackLainnya

                document.querySelector(".MaintenanceListAnggaran").innerHTML = anggaranMaintenance
                document.querySelector(".MaintenanceLisTerpakai").innerHTML = terpakaiMaintenance
                document.querySelector(".MaintenanceListCashback").innerHTML = cashbackMaintenance

                document.querySelector(".OperasionalListAnggaran").innerHTML = anggaranOperasional
                document.querySelector(".OperasionalLisTerpakai").innerHTML = terpakaiOperasional
                document.querySelector(".OperasionalListCashback").innerHTML = cashbackOperasional

                document.querySelector(".PaudListAnggaran").innerHTML = anggaranPaud
                document.querySelector(".PaudLisTerpakai").innerHTML = terpakaiPaud
                document.querySelector(".PaudListCashback").innerHTML = cashbackPaud

                document.querySelector(".JasaListAnggaran").innerHTML = anggaranJasa
                document.querySelector(".JasaLisTerpakai").innerHTML = terpakaiJasa
                document.querySelector(".JasaListCashback").innerHTML = cashbackJasa

                document.querySelector(".totalListAnggaran").innerHTML = `<b>${anggaranGlobal}</b>`
                document.querySelector(".totalLisTerpakai").innerHTML = `<b>${terpakaiGlobal}</b>`
                document.querySelector(".totalListCashback").innerHTML = `<b>${cashbackGlobal}</b>`

                document.querySelector(".anggaranBulanan").innerHTML = anggaranGlobal
                document.querySelector(".terpakaiBulanan").innerHTML = terpakaiGlobal
                document.querySelector(".cashbackBulanan").innerHTML = cashbackGlobal

            } else if (
                readCookie("id_pengurus") == "sosial_media"
            ) {
                let incomeKemarin = new Intl.NumberFormat('en-US').format(data.incomeKemarin)
                let incomeIni = new Intl.NumberFormat('en-US').format(data.incomeIni)
                let incomeTahun = new Intl.NumberFormat('en-US').format(data.incomeTahun)
                let incomeTglKemarin = new Intl.NumberFormat('en-US').format(data.incomeTglKemarin)
                let incomeHariIni = new Intl.NumberFormat('en-US').format(data.incomeHariIni)

                document.querySelector(".incomeBulanLalu").innerHTML = incomeKemarin
                document.querySelector(".incomeBulanIni").innerHTML = `${incomeKemarin < incomeIni ? `${incomeIni} <i class="bi bi-arrow-up text-success"></i>`: incomeKemarin == incomeIni ? incomeIni : `${incomeIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                document.querySelector(".incomeTahunIni").innerHTML = incomeTahun
                document.querySelector(".incomeKemarin").innerHTML = incomeTglKemarin
                document.querySelector(".incomeHariIni").innerHTML = incomeTglKemarin < incomeHariIni ? `${incomeHariIni} <i class="bi bi-arrow-up text-success"></i>` : incomeTglKemarin == incomeHariIni ? incomeHariIni : `${incomeHariIni} <i class="bi bi-arrow-down text-danger"></i>`

            } else if (readCookie("id_pengurus") == "kepala_income") {
                let incomeI = new Intl.NumberFormat('en-US').format(data.incomeI)
                let incomeII = new Intl.NumberFormat('en-US').format(data.incomeII)
                let incomeIII = new Intl.NumberFormat('en-US').format(data.incomeIII)
                // let incomeIV = new Intl.NumberFormat('en-US').format(data.incomeIV)
                let incomeVI = new Intl.NumberFormat('en-US').format(data.incomeVI)
                let incomeV = new Intl.NumberFormat('en-US').format(data.incomeV)
                let incomeVII = new Intl.NumberFormat('en-US').format(data.incomeVII)
                let incomeVIII = new Intl.NumberFormat('en-US').format(data.incomeVIII)
                let incomeIX = new Intl.NumberFormat('en-US').format(data.incomeIX)
                let incomeNonResi = new Intl.NumberFormat('en-US').format(data.incomeNonResi)
                let incomeLalu = new Intl.NumberFormat('en-US').format(data.incomeLalu)
                let incomeBulan = new Intl.NumberFormat('en-US').format(data.incomeBulan)
                let incomeSeluruh = new Intl.NumberFormat('en-US').format(data.incomeSeluruh)

                document.querySelector(".incomeI").innerHTML = incomeI
                document.querySelector(".incomeII").innerHTML = incomeII
                document.querySelector(".incomeIII").innerHTML = incomeIII
                // document.querySelector(".incomeIV").innerHTML = incomeIV
                document.querySelector(".incomeIG").innerHTML = incomeV
                document.querySelector(".incomeIGII").innerHTML = incomeVI
                document.querySelector(".incomeIGIII").innerHTML = incomeVII
                document.querySelector(".incomeIGIV").innerHTML = incomeVIII
                document.querySelector(".incomeFBKI").innerHTML = incomeIX
                document.querySelector(".iNonResi").innerHTML = incomeNonResi
                document.querySelector(".iMediaKemarin").innerHTML = incomeLalu
                document.querySelector(".iMediaIni").innerHTML = `${incomeLalu < incomeBulan ? `${incomeBulan} <i class="bi bi-arrow-up text-success"></i>`:incomeLalu == incomeBulan ? incomeBulan : `${incomeBulan} <i class="bi bi-arrow-down text-danger"></i>`}`
                document.querySelector(".iKeseluruhan").innerHTML = incomeSeluruh

            } else if (readCookie("id_pengurus") == "manager_facebook") {
                // Team 1
                let incomeKemarin = new Intl.NumberFormat('en-US').format(data.incomeKemarin)
                let incomeHariIni = new Intl.NumberFormat('en-US').format(data.incomeHariIni)
                let incomeBulanIni = new Intl.NumberFormat('en-US').format(data.incomeBulanIni)

                // team 2
                let incomeFb2Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb2Kemarin)
                let incomeFb2HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb2HariIni)
                let incomeFb2BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb2BulanIni)

                // Team 3
                let incomeFb3Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb3Kemarin)
                let incomeFb3HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb3HariIni)
                let incomeFb3BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb3BulanIni)

                // team 4
                // let incomeFb4Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb4Kemarin)
                // let incomeFb4HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb4HariIni)
                // let incomeFb4BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb4BulanIni)

                // team 5
                let incomeFb5Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb5Kemarin)
                let incomeFb5HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb5HariIni)
                let incomeFb5BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb5BulanIni)

                // team 6
                let incomeFb6Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb6Kemarin)
                let incomeFb6HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb6HariIni)
                let incomeFb6BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb6BulanIni)

                // team 7
                let incomeFb7Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb7Kemarin)
                let incomeFb7HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb7HariIni)
                let incomeFb7BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb7BulanIni)

                // team 8
                let incomeFb8Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb8Kemarin)
                let incomeFb8HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb8HariIni)
                let incomeFb8BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb8BulanIni)

                // team 9
                let incomeFb9Kemarin = new Intl.NumberFormat('en-US').format(data.incomeFb9Kemarin)
                let incomeFb9HariIni = new Intl.NumberFormat('en-US').format(data.incomeFb9HariIni)
                let incomeFb9BulanIni = new Intl.NumberFormat('en-US').format(data.incomeFb9BulanIni)


                if (readCookie("username") == "fb_saku1") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeKemarin
                    if (incomeKemarin == incomeHariIni || incomeHariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeHariIni

                    } else if (incomeHariIni > incomeKemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeHariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeHariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeBulanIni ? `${incomeBulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeBulanIni ? `${incomeBulanIni}` : `${incomeBulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "fb_saku2") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb2Kemarin
                    if (incomeFb2Kemarin == incomeFb2HariIni || incomeFb2HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb2HariIni

                    } else if (incomeFb2HariIni > incomeFb2Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb2HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb2HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb2BulanIni ? `${incomeFb2BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb2BulanIni ? `${incomeFb2BulanIni}` : `${incomeFb2BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "ig_saku1") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb3Kemarin
                    if (incomeFb3Kemarin == incomeFb3HariIni || incomeFb3HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb3HariIni

                    } else if (incomeFb3HariIni > incomeFb3Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb3HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb3HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb3BulanIni ? `${incomeFb3BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb3BulanIni ? `${incomeFb3BulanIni}` : `${incomeFb3BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "ig_saku2") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb4Kemarin
                    if (incomeFb4Kemarin == incomeFb4HariIni || incomeFb4HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb4HariIni

                    } else if (incomeFb4HariIni > incomeFb4Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb4HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb4HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb4BulanIni ? `${incomeFb4BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb4BulanIni ? `${incomeFb4BulanIni}` : `${incomeFb4BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "fb_sembako") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb5Kemarin
                    if (incomeFb5Kemarin == incomeFb5HariIni || incomeFb5HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb6HariIni

                    } else if (incomeFb5HariIni > incomeFb5Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb5HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb5HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb5BulanIni ? `${incomeFb5BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb5BulanIni ? `${incomeFb5BulanIni}` : `${incomeFb5BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "ig_sembako") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb6Kemarin
                    if (incomeFb6Kemarin == incomeFb6HariIni || incomeFb6HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb6HariIni

                    } else if (incomeFb6HariIni > incomeFb6Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb6HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb6HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb6BulanIni ? `${incomeFb6BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb6BulanIni ? `${incomeFb6BulanIni}` : `${incomeFb6BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "fb_pembangunan") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb7Kemarin
                    if (incomeFb7Kemarin == incomeFb7HariIni || incomeFb7HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb7HariIni

                    } else if (incomeFb7HariIni > incomeFb7Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb7HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb7HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb7BulanIni ? `${incomeFb7BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb7BulanIni ? `${incomeFb7BulanIni}` : `${incomeFb7BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "ig_pembangunan") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb8Kemarin
                    if (incomeFb8Kemarin == incomeFb8HariIni || incomeFb8HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb8HariIni

                    } else if (incomeFb8HariIni > incomeFb8Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb8HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb8HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb8BulanIni ? `${incomeFb8BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb8BulanIni ? `${incomeFb8BulanIni}` : `${incomeFb8BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni

                } else if (readCookie("username") == "fb_kesehatan") {
                    let incomeBulanLalu = new Intl.NumberFormat('en-US').format(data.incomeBulanLalu)
                    let incomeTahunIni = new Intl.NumberFormat('en-US').format(data.incomeTahunIni)

                    document.querySelector(".incomeKemarin").innerHTML = incomeFb9Kemarin
                    if (incomeFb9Kemarin == incomeFb9HariIni || incomeFb9HariIni == 0) {
                        document.querySelector(".incomeHariIni").innerHTML = incomeFb9HariIni

                    } else if (incomeFb9HariIni > incomeFb9Kemarin) {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb9HariIni}` + `<i class="bi bi-arrow-up text-success"></i>`

                    } else {
                        document.querySelector(".incomeHariIni").innerHTML = `${incomeFb9HariIni}` + `<i class="bi bi-down-up text-danger"></i>`

                    }
                    document.querySelector(".incomeBulanLalu").innerHTML = incomeBulanLalu
                    document.querySelector(".incomeBulanIni").innerHTML = `${incomeBulanLalu < incomeFb9BulanIni ? `${incomeFb9BulanIni} <i class="bi bi-arrow-up text-success"></i>`: incomeBulanLalu == incomeFb9BulanIni ? `${incomeFb9BulanIni}` : `${incomeFb9BulanIni} <i class="bi bi-arrow-down text-danger"></i>`}`
                    document.querySelector(".incomeTahunIni").innerHTML = incomeTahunIni
                }

                document.querySelector(".income-team-I .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeKemarin
                document.querySelector(".income-team-I .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeHariIni
                document.querySelector(".income-team-I .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeBulanIni

                document.querySelector(".income-team-II .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb2Kemarin
                document.querySelector(".income-team-II .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb2HariIni
                document.querySelector(".income-team-II .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb2BulanIni

                document.querySelector(".income-team-III .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb3Kemarin
                document.querySelector(".income-team-III .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb3HariIni
                document.querySelector(".income-team-III .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb3BulanIni

                // document.querySelector(".income-team-IV .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb4Kemarin
                // document.querySelector(".income-team-IV .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb4HariIni
                // document.querySelector(".income-team-IV .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb4BulanIni

                document.querySelector(".income-team-IG .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb5Kemarin
                document.querySelector(".income-team-IG .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb5HariIni
                document.querySelector(".income-team-IG .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb5BulanIni

                document.querySelector(".income-team-IG-II .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb6Kemarin
                document.querySelector(".income-team-IG-II .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb6HariIni
                document.querySelector(".income-team-IG-II .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb6BulanIni

                document.querySelector(".income-team-IG-III .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb7Kemarin
                document.querySelector(".income-team-IG-III .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb7HariIni
                document.querySelector(".income-team-IG-III .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb7BulanIni

                document.querySelector(".income-team-IG-IV .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb8Kemarin
                document.querySelector(".income-team-IG-IV .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb8HariIni
                document.querySelector(".income-team-IG-IV .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb8BulanIni

                document.querySelector(".income-team-FB-KI .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFb9Kemarin
                document.querySelector(".income-team-FB-KI .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFb9HariIni
                document.querySelector(".income-team-FB-KI .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFb9BulanIni
            }

            if (readCookie("id_pengurus") == "management_keuangan") {
                let incomeI = new Intl.NumberFormat('en-US').format(data.incomeI)
                let incomeII = new Intl.NumberFormat('en-US').format(data.incomeII)
                let incomeIII = new Intl.NumberFormat('en-US').format(data.incomeIII)
                // let incomeIV = new Intl.NumberFormat('en-US').format(data.incomeIV)
                let incomeVI = new Intl.NumberFormat('en-US').format(data.incomeVI)
                let incomeV = new Intl.NumberFormat('en-US').format(data.incomeV)
                let incomeVII = new Intl.NumberFormat('en-US').format(data.incomeVII)
                let incomeVIII = new Intl.NumberFormat('en-US').format(data.incomeVIII)
                let incomeIX = new Intl.NumberFormat('en-US').format(data.incomeIX)
                let incomeNonResi = new Intl.NumberFormat('en-US').format(data.incomeNonResi)
                let incomeSeluruh = new Intl.NumberFormat('en-US').format(data.incomeSeluruh)
                let incomeCashback = new Intl.NumberFormat('en-US').format(data.incomeCashback)

                document.querySelector(".incomeI").innerHTML = incomeI
                document.querySelector(".incomeII").innerHTML = incomeII
                document.querySelector(".incomeIII").innerHTML = incomeIII
                // document.querySelector(".incomeIV").innerHTML = incomeIV
                document.querySelector(".incomeIG").innerHTML = incomeVI
                document.querySelector(".incomeIGII").innerHTML = incomeV
                document.querySelector(".incomeIGIII").innerHTML = incomeVII
                document.querySelector(".incomeIGIV").innerHTML = incomeVIII
                document.querySelector(".incomeFBKI").innerHTML = incomeIX
                document.querySelector(".incomeTanpaResi").innerHTML = incomeNonResi
                document.querySelector(".incomeKeseluruhan").innerHTML = incomeSeluruh
                document.querySelector(".incomeCashback").innerHTML = incomeCashback
            }

            if (readCookie("id_pengurus") == "ketua_yayasan") {
                let incomeI = new Intl.NumberFormat('en-US').format(data.incomeI)
                let incomeII = new Intl.NumberFormat('en-US').format(data.incomeII)
                let incomeIII = new Intl.NumberFormat('en-US').format(data.incomeIII)
                // let incomeIV = new Intl.NumberFormat('en-US').format(data.incomeIV)
                let incomeV = new Intl.NumberFormat('en-US').format(data.incomeV)
                let incomeVI = new Intl.NumberFormat('en-US').format(data.incomeVI)
                let incomeVII = new Intl.NumberFormat('en-US').format(data.incomeVII)
                let incomeVIII = new Intl.NumberFormat('en-US').format(data.incomeVIII)
                let incomeIX = new Intl.NumberFormat('en-US').format(data.incomeIX)
                let incomeNonResi = new Intl.NumberFormat('en-US').format(data.incomeNonResi)
                let incomeLalu = new Intl.NumberFormat('en-US').format(data.incomeLalu)
                let incomeBulan = new Intl.NumberFormat('en-US').format(data.incomeBulan)
                let incomeSeluruh = new Intl.NumberFormat('en-US').format(data.incomeSeluruh)

                let incomeFBKemarin = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin)
                let incomeFBHariIni = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni)
                let incomeFBBulanIni = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni)

                let incomeFBKemarin2 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin2)
                let incomeFBHariIni2 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni2)
                let incomeFBBulanIni2 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni2)

                let incomeFBKemarin3 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin3)
                let incomeFBHariIni3 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni3)
                let incomeFBBulanIni3 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni3)

                // let incomeFBKemarin4 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin4)
                // let incomeFBHariIni4 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni4)
                // let incomeFBBulanIni4 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni4)

                let incomeFBKemarin5 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin5)
                let incomeFBHariIni5 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni5)
                let incomeFBBulanIni5 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni5)

                let incomeFBKemarin6 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin6)
                let incomeFBHariIni6 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni6)
                let incomeFBBulanIni6 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni6)

                let incomeFBKemarin7 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin7)
                let incomeFBHariIni7 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni7)
                let incomeFBBulanIni7 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni7)

                let incomeFBKemarin8 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin8)
                let incomeFBHariIni8 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni8)
                let incomeFBBulanIni8 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni8)

                let incomeFBKemarin9 = new Intl.NumberFormat('en-US').format(data.incomeFBKemarin9)
                let incomeFBHariIni9 = new Intl.NumberFormat('en-US').format(data.incomeFBHariIni9)
                let incomeFBBulanIni9 = new Intl.NumberFormat('en-US').format(data.incomeFBBulanIni9)

                document.querySelector(".income-team-I .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin
                document.querySelector(".income-team-I .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni
                document.querySelector(".income-team-I .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni

                document.querySelector(".income-team-II .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin2
                document.querySelector(".income-team-II .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni2
                document.querySelector(".income-team-II .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni2

                document.querySelector(".income-team-III .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin3
                document.querySelector(".income-team-III .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni3
                document.querySelector(".income-team-III .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni3

                // document.querySelector(".income-team-IV .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin4
                // document.querySelector(".income-team-IV .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni4
                // document.querySelector(".income-team-IV .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni4

                document.querySelector(".income-team-IG .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin5
                document.querySelector(".income-team-IG .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni5
                document.querySelector(".income-team-IG .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni5

                document.querySelector(".income-team-IG-II .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin6
                document.querySelector(".income-team-IG-II .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni6
                document.querySelector(".income-team-IG-II .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni6

                document.querySelector(".income-team-IG-III .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin7
                document.querySelector(".income-team-IG-III .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni7
                document.querySelector(".income-team-IG-III .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni7

                document.querySelector(".income-team-IG-IV .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin8
                document.querySelector(".income-team-IG-IV .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni8
                document.querySelector(".income-team-IG-IV .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni8

                document.querySelector(".income-team-FB-KI .incomeHariKemarin").innerHTML = 'Income Kemarin : ' + incomeFBKemarin9
                document.querySelector(".income-team-FB-KI .incomeHariIni").innerHTML = 'Income Hari Ini : ' + incomeFBHariIni9
                document.querySelector(".income-team-FB-KI .incomeBulanIni").innerHTML = 'Income Bulan Ini : ' + incomeFBBulanIni9

                document.querySelector(".incomeI").innerHTML = incomeI
                document.querySelector(".incomeII").innerHTML = incomeII
                document.querySelector(".incomeIII").innerHTML = incomeIII
                // document.querySelector(".incomeIV").innerHTML = incomeIV
                document.querySelector(".incomeIG").innerHTML = incomeV
                document.querySelector(".incomeIGII").innerHTML = incomeVI
                document.querySelector(".incomeIGIII").innerHTML = incomeVII
                document.querySelector(".incomeIGIV").innerHTML = incomeVIII
                document.querySelector(".incomeFBKI").innerHTML = incomeIX
                document.querySelector(".iNonResi").innerHTML = incomeNonResi
                document.querySelector(".iMediaKemarin").innerHTML = incomeLalu
                document.querySelector(".iMediaKemarin").innerHTML = incomeLalu
                document.querySelector(".iMediaIni").innerHTML = `${incomeLalu < incomeBulan ? `${incomeBulan} <i class="bi bi-arrow-up text-success"></i>`:`${incomeBulan} <i class="bi bi-arrow-down text-danger"></i>`}`
                document.querySelector(".iKeseluruhan").innerHTML = incomeSeluruh
            }
            let online = new Intl.NumberFormat('en-US').format(data.online)
            const onlineNumber = document.querySelectorAll(".online-number")
            onlineNumber.forEach(userOnline => {
                userOnline.innerHTML = `(${online})`
            });
        }
    });
}

window.addEventListener('load', loadHomePage)

if (readCookie("id_pengurus") == "kepala_pengajuan") {
    function loadNotif() {
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":" + currentdate.getMinutes()
        setTimeout("loadNotif()", 1000)
        $.ajax({
            dataType: "json",
            url: "./data/data_notification.php",
            success: function (data) {
                if (data.totalNotif == "0") {
                    document.querySelector(".icon-badge").innerHTML = ''

                    document.querySelector(".desc").innerHTML = `
                        Tidak ada notifiksi terbaru
                        `
                    document.querySelector(".icon-badge").style.background = 'none'
                    const notifIcon = document.querySelectorAll(".icon-notif")
                    notifIcon.forEach(notif => {
                        notif.innerHTML = ''
                        notif.style.background = 'none'
                        notif.style.border = 'none'
                    });

                } else {
                    document.querySelector(".icon-badge").innerHTML = data.totalNotif
                    document.querySelector(".desc").innerHTML = `
                        <span class="badge-number">${data.totalNotif}</span> 
                        Pengajaun Menunggu Laporanmu, Segera Laporkan Di <br>
                            <b>Input > Pengajuan > Laporan > Daftar Laporan</b>
                        `
                    document.querySelector(".icon-badge").style.background = '#ec776c'
                    document.querySelector(".time-update").innerHTML = datetime


                    if (data.program == 0) {
                        document.querySelector(".inputContent .notifProgram").style.background = 'none'
                        document.querySelector(".inputContent .notifProgram").style.border = 'none'
                        document.querySelector(".inputContent .notifProgram").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifProgram").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifProgram").innerHTML = data.program
                    }

                    if (data.logistik == 0) {
                        document.querySelector(".inputContent .notifLogistik").style.background = 'none'
                        document.querySelector(".inputContent .notifLogistik").style.border = 'none'
                        document.querySelector(".inputContent .notifLogistik").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifLogistik").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifLogistik").innerHTML = data.logistik
                    }

                    if (data.aset == 0) {
                        document.querySelector(".inputContent .notifAset").style.background = 'none'
                        document.querySelector(".inputContent .notifAset").style.border = 'none'
                        document.querySelector(".inputContent .notifAset").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifAset").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifAset").innerHTML = data.aset
                    }

                    if (data.makan == 0) {
                        document.querySelector(".inputContent .notifMakan").style.background = 'none'
                        document.querySelector(".inputContent .notifMakan").style.border = 'none'
                        document.querySelector(".inputContent .notifMakan").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifMakan").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifMakan").innerHTML = data.makan
                    }

                    if (data.gaji == 0) {
                        document.querySelector(".inputContent .notifGaji").style.background = 'none'
                        document.querySelector(".inputContent .notifGaji").style.border = 'none'
                        document.querySelector(".inputContent .notifGaji").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifGaji").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifGaji").innerHTML = data.gaji
                    }

                    if (data.lainnya == 0) {
                        document.querySelector(".inputContent .notifLainnya").style.background = 'none'
                        document.querySelector(".inputContent .notifLainnya").style.border = 'none'
                        document.querySelector(".inputContent .notifLainnya").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifLainnya").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifLainnya").innerHTML = data.lainnya
                    }

                    if (data.maintenance == 0) {
                        document.querySelector(".inputContent .notifMaintenance").style.background = 'none'
                        document.querySelector(".inputContent .notifMaintenance").style.border = 'none'
                        document.querySelector(".inputContent .notifMaintenance").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifMaintenance").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifMaintenance").innerHTML = data.maintenance
                    }

                    if (data.operasional == 0) {
                        document.querySelector(".inputContent .notifOperasional").style.background = 'none'
                        document.querySelector(".inputContent .notifOperasional").style.border = 'none'
                        document.querySelector(".inputContent .notifOperasional").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifOperasional").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifOperasional").innerHTML = data.operasional
                    }

                    if (data.jasa == 0) {
                        document.querySelector(".inputContent .notifJasa").style.background = 'none'
                        document.querySelector(".inputContent .notifJasa").style.border = 'none'
                        document.querySelector(".inputContent .notifJasa").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifJasa").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifJasa").innerHTML = data.jasa
                    }

                    if (data.paud == 0) {
                        document.querySelector(".inputContent .notifPaud").style.background = 'none'
                        document.querySelector(".inputContent .notifPaud").style.border = 'none'
                        document.querySelector(".inputContent .notifPaud").innerHTML = ''
                    } else {
                        document.querySelector(".inputContent .notifPaud").style.background = '#ec776c'
                        document.querySelector(".inputContent .notifPaud").innerHTML = data.paud
                    }

                }
            }
        })
    }
    window.addEventListener("load", loadNotif)
} else if (readCookie("id_pengurus") == "management_keuangan") {
    function loadNotif() {
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":" + currentdate.getMinutes()
        setTimeout("loadNotif()", 1000)
        $.ajax({
            dataType: "json",
            url: "./data/data_notification.php",
            success: function (data) {

                if (data.totalSeluruh == "0") {
                    document.querySelector(".icon-badge").innerHTML = ''
                    document.querySelector(".notifications-list").style.display = 'block'
                    document.querySelector(".desc").innerHTML = `
                        Tidak ada notifiksi terbaru
                        `
                    document.querySelector(".notif-konfirmasi").style.display = 'none'
                    document.querySelector(".notif-income").style.display = 'none'
                    document.querySelector(".notif-nonResi").style.display = 'none'
                    document.querySelector(".icon-badge").style.background = 'none'

                    const notifIcon = document.querySelectorAll(".icon-notif")
                    notifIcon.forEach(notif => {
                        notif.innerHTML = ''
                        notif.style.background = 'none'
                        notif.style.border = 'none'
                    });

                    const notifIncome = document.querySelector(".notifIncomeMedia")
                    notifIncome.innerHTML = ''
                    notifIncome.style.background = 'none'
                    notifIncome.style.border = 'none'

                    const notifNonResi = document.querySelector(".notifNonResi")
                    notifNonResi.innerHTML = ''
                    notifNonResi.style.background = 'none'
                    notifNonResi.style.border = 'none'

                } else {
                    if (data.totalPengajuan == "0") {
                        document.querySelector(".notifications-list").style.display = 'none'
                        const notifIcon = document.querySelectorAll(".notifContent .icon-notif")
                        notifIcon.forEach(notif => {
                            notif.innerHTML = ''
                            notif.style.background = 'none'
                            notif.style.border = 'none'
                        });

                    } else {
                        document.querySelector(".icon-badge").innerHTML = data.totalSeluruh
                        document.querySelector(".notifications-list").style.display = 'block'
                        document.querySelector(".notifications-list .desc").innerHTML = `
                            <span class="badge-number">${data.totalPengajuan}</span> 
                            Pengajaun Menunggu Verifikasimu, Segera Cek Di <br>
                                <b>Menu > Pengajuan</b>
                            `
                        document.querySelector(".icon-badge").style.background = '#ec776c'
                        document.querySelector(".notifications-list .time-update").innerHTML = datetime

                        if (data.program == 0) {
                            document.querySelector(".notifContent .notifProgram").style.background = 'none'
                            document.querySelector(".notifContent .notifProgram").style.border = 'none'
                            document.querySelector(".notifContent .notifProgram").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifProgram").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifProgram").innerHTML = data.program
                        }

                        if (data.logistik == 0) {
                            document.querySelector(".notifContent .notifLogistik").style.background = 'none'
                            document.querySelector(".notifContent .notifLogistik").style.border = 'none'
                            document.querySelector(".notifContent .notifLogistik").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifLogistik").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifLogistik").innerHTML = data.logistik
                        }

                        if (data.aset == 0) {
                            document.querySelector(".notifContent .notifAset").style.background = 'none'
                            document.querySelector(".notifContent .notifAset").style.border = 'none'
                            document.querySelector(".notifContent .notifAset").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifAset").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifAset").innerHTML = data.aset
                        }

                        if (data.makan == 0) {
                            document.querySelector(".notifContent .notifMakan").style.background = 'none'
                            document.querySelector(".notifContent .notifMakan").style.border = 'none'
                            document.querySelector(".notifContent .notifMakan").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifMakan").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifMakan").innerHTML = data.makan
                        }

                        if (data.gaji == 0) {
                            document.querySelector(".notifContent .notifGaji").style.background = 'none'
                            document.querySelector(".notifContent .notifGaji").style.border = 'none'
                            document.querySelector(".notifContent .notifGaji").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifGaji").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifGaji").innerHTML = data.gaji
                        }

                        if (data.lainnya == 0) {
                            document.querySelector(".notifContent .notifLainnya").style.background = 'none'
                            document.querySelector(".notifContent .notifLainnya").style.border = 'none'
                            document.querySelector(".notifContent .notifLainnya").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifLainnya").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifLainnya").innerHTML = data.lainnya
                        }

                        if (data.maintenance == 0) {
                            document.querySelector(".notifContent .notifMaintenance").style.background = 'none'
                            document.querySelector(".notifContent .notifMaintenance").style.border = 'none'
                            document.querySelector(".notifContent .notifMaintenance").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifMaintenance").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifMaintenance").innerHTML = data.maintenance
                        }

                        if (data.operasional == 0) {
                            document.querySelector(".notifContent .notifOperasional").style.background = 'none'
                            document.querySelector(".notifContent .notifOperasional").style.border = 'none'
                            document.querySelector(".notifContent .notifOperasional").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifOperasional").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifOperasional").innerHTML = data.operasional
                        }

                        if (data.jasa == 0) {
                            document.querySelector(".notifContent .notifJasa").style.background = 'none'
                            document.querySelector(".notifContent .notifJasa").style.border = 'none'
                            document.querySelector(".notifContent .notifJasa").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifJasa").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifJasa").innerHTML = data.jasa
                        }

                        if (data.paud == 0) {
                            document.querySelector(".notifContent .notifPaud").style.background = 'none'
                            document.querySelector(".notifContent .notifPaud").style.border = 'none'
                            document.querySelector(".notifContent .notifPaud").innerHTML = ''

                        } else {
                            document.querySelector(".notifContent .notifPaud").style.background = '#ec776c'
                            document.querySelector(".notifContent .notifPaud").innerHTML = data.paud
                        }
                    }

                    if (data.totalLaporan == "0") {
                        document.querySelector(".notif-konfirmasi").style.display = 'none'
                        const notifIcon = document.querySelectorAll(".notifLaporanContent .icon-notif")
                        notifIcon.forEach(notif => {
                            notif.innerHTML = ''
                            notif.style.background = 'none'
                            notif.style.border = 'none'
                        });

                    } else {
                        document.querySelector(".icon-badge").innerHTML = data.totalSeluruh
                        document.querySelector(".notif-konfirmasi").style.display = 'block'
                        document.querySelector(".notif-konfirmasi .desc").innerHTML = `
                            <span class="badge-number">${data.totalLaporan}</span> 
                            Laporan Menunggu Verifikasimu, Segera Cek Di <br>
                                <b>Menu > Laporan</b>
                            `
                        document.querySelector(".icon-badge").style.background = '#ec776c'
                        document.querySelector(".notif-konfirmasi .time-update").innerHTML = datetime

                        if (data.laporan_program == 0) {
                            document.querySelector(".notifLaporanContent .notifProgram").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifProgram").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifProgram").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifProgram").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifProgram").innerHTML = data.laporan_program
                        }

                        if (data.laporan_logistik == 0) {
                            document.querySelector(".notifLaporanContent .notifLogistik").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifLogistik").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifLogistik").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifLogistik").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifLogistik").innerHTML = data.laporan_logistik
                        }

                        if (data.laporan_aset == 0) {
                            document.querySelector(".notifLaporanContent .notifAset").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifAset").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifAset").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifAset").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifAset").innerHTML = data.laporan_aset
                        }

                        if (data.laporan_makan == 0) {
                            document.querySelector(".notifLaporanContent .notifMakan").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifMakan").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifMakan").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifMakan").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifMakan").innerHTML = data.laporan_makan
                        }

                        if (data.laporan_gaji == 0) {
                            document.querySelector(".notifLaporanContent .notifGaji").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifGaji").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifGaji").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifGaji").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifGaji").innerHTML = data.laporan_gaji
                        }

                        if (data.laporan_lainnya == 0) {
                            document.querySelector(".notifLaporanContent .notifLainnya").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifLainnya").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifLainnya").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifLainnya").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifLainnya").innerHTML = data.laporan_lainnya
                        }

                        if (data.laporan_maintenance == 0) {
                            document.querySelector(".notifLaporanContent .notifMaintenance").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifMaintenance").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifMaintenance").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifMaintenance").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifMaintenance").innerHTML = data.laporan_maintenance
                        }

                        if (data.laporan_operasional == 0) {
                            document.querySelector(".notifLaporanContent .notifOperasional").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifOperasional").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifOperasional").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifOperasional").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifOperasional").innerHTML = data.laporan_operasional
                        }

                        if (data.laporan_jasa == 0) {
                            document.querySelector(".notifLaporanContent .notifJasa").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifJasa").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifJasa").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifJasa").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifJasa").innerHTML = data.laporan_jasa
                        }

                        if (data.laporan_paud == 0) {
                            document.querySelector(".notifLaporanContent .notifPaud").style.background = 'none'
                            document.querySelector(".notifLaporanContent .notifPaud").style.border = 'none'
                            document.querySelector(".notifLaporanContent .notifPaud").innerHTML = ''

                        } else {
                            document.querySelector(".notifLaporanContent .notifPaud").style.background = '#ec776c'
                            document.querySelector(".notifLaporanContent .notifPaud").innerHTML = data.laporan_paud
                        }
                    }

                    if (data.incomeMedia == "0") {
                        document.querySelector(".notif-income").style.display = 'none'
                        const notifIncome = document.querySelector(".notifIncomeMedia")
                        notifIncome.innerHTML = ''
                        notifIncome.style.background = 'none'
                        notifIncome.style.border = 'none'

                    } else {
                        document.querySelector(".icon-badge").innerHTML = data.totalSeluruh
                        document.querySelector(".notif-income").style.display = 'block'
                        document.querySelector(".notif-income .desc").innerHTML = `
                            <span class="badge-number">${data.incomeMedia}</span> 
                            Income media menunggu verifikasimu, segera cek  <br>
                                <b>Menu > Income > Income Media</b>
                            `
                        document.querySelector(".icon-badge").style.background = '#ec776c'
                        document.querySelector(".notif-income .time-update").innerHTML = datetime

                        if (data.incomeMedia == 0) {
                            document.querySelector(".icon-notif").innerHTML = ''

                        } else {
                            document.querySelector(".notifIncomeMedia").style.background = '#ec776c'
                            document.querySelector(".notifIncomeMedia").innerHTML = `
                                <span class="icon-notif">${data.incomeMedia}</span>`

                        }

                    }

                    if (data.incomeNonResi == "0") {
                        document.querySelector(".notif-nonResi").style.display = 'none'
                        const notifNonResi = document.querySelector(".notifNonResi")
                        notifNonResi.innerHTML = ''
                        notifNonResi.style.background = 'none'
                        notifNonResi.style.border = 'none'

                    } else {
                        document.querySelector(".icon-badge").innerHTML = data.totalSeluruh
                        document.querySelector(".notif-nonResi").style.display = 'block'
                        document.querySelector(".notif-nonResi .desc").innerHTML = `
                            <span class="badge-number">${data.incomeNonResi}</span> 
                            Income non resi menunggu verifikasimu, segera cek  <br>
                                <b>Menu > Income > Income Non Resi</b>
                            `
                        document.querySelector(".icon-badge").style.background = '#ec776c'
                        document.querySelector(".notif-nonResi .time-update").innerHTML = datetime

                        if (data.incomeNonResi == 0) {
                            document.querySelector(".icon-notif").innerHTML = ''

                        } else {
                            document.querySelector(".notifNonResi").style.background = '#ec776c'
                            document.querySelector(".notifNonResi").innerHTML = `
                                <span class="icon-notif">${data.incomeNonResi}</span>`

                        }

                    }
                }
            }
        })
    }
    window.addEventListener("load", loadNotif)
} else if (readCookie("id_pengurus") == "kepala_income") {
    function loadNotif() {
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":" + currentdate.getMinutes()
        setTimeout("loadNotif()", 1000);
        $.ajax({
            dataType: "json",
            url: "./data/data_notification.php",
            success: function (data) {
                if (data.totalNotifIncome == "0") {
                    document.querySelector(".icon-badge").innerHTML = ''

                    document.querySelector(".desc").innerHTML = `
                        Tidak ada notifiksi terbaru
                        `
                    document.querySelector(".icon-badge").style.background = 'none'
                    const notifIcon = document.querySelectorAll(".notifIncome")
                    notifIcon.forEach(notif => {
                        notif.innerHTML = ''
                    });

                } else {
                    document.querySelector(".icon-badge").innerHTML = data.totalNotifIncome
                    document.querySelector(".desc").innerHTML = `
                        <span class="badge-number">${data.totalNotifIncome}</span> 
                        Income menunggu verifikasimu, segera cek  <br>
                            <b>CheckList > Income > Verifikasi</b>
                        `
                    document.querySelector(".icon-badge").style.background = '#ec776c'
                    document.querySelector(".time-update").innerHTML = datetime

                    if (data.totalNotifIncome == 0) {
                        document.querySelector(".icon-notif").innerHTML = ''

                    } else {
                        document.querySelector(".notifIncome").style.background = '#ec776c'
                        document.querySelector(".notifIncome").innerHTML = `
                            <span class="icon-notif">${data.totalNotifIncome}</span>`

                    }

                }
            }
        })
    }
    window.addEventListener("load", loadNotif)
}

if (
    readCookie("id_pengurus") == "manager_instagram" ||
    readCookie("id_pengurus") == "ketua_yayasan" ||
    readCookie("id_pengurus") == "manager_facebook" ||
    readCookie("id_pengurus") == "kepala_income") {
    $('.personDetail').load("./data/data_pengurus.php");
    document.querySelector(".personContent .refresh-data .btn").addEventListener("click", function () {
        document.querySelector(".personContent .refresh-data .btn").innerHTML = `Sedang Memuat...`
        $('.personDetail').empty()
        setTimeout(() => {
            $('.personDetail').load("./data/data_pengurus.php", function () {}).hide().fadeIn(1000);
            document.querySelector(".personContent .refresh-data .btn").innerHTML = `Refresh Data`
        }, 1500);
    })

}