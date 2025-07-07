"use strict";

// preloader
window.addEventListener('load', function () {
	document.querySelector('.app-content').classList.add("loaded")
});

const navLi = document.querySelectorAll(".sidepanel-inner ul li a");
const pageHome = document.querySelector(".homeContent .container-xl")
// const pageDocs = document.querySelector(".docsContent .container-xl")
const pageLaps = document.querySelector(".lapsContent .container-xl")
const pagePerson = document.querySelector(".personContent .container-xl")
const pageDetailPerson = document.querySelector(".detail-personContent .container-xl")
const pageNotif = document.querySelector(".notifContent .container-xl")
const pageNotifLaporan = document.querySelector(".notifLaporanContent .container-xl")
const pageNotifIncome = document.querySelector(".notifIncomeContent .container-xl")
const pageAccount = document.querySelector(".accountContent .container-xl")
const pageInput = document.querySelector(".inputContent .container-xl")
const pageChart = document.querySelector(".chartsContent .container-xl")
const pageData = document.querySelector(".dataTahunContent .container-xl")
const pageLog = document.querySelector(".logContent .container-xl")
const dropDown = document.querySelectorAll(".dropdown-menu .dropdown-menu-content a")

// sidebar switch page
navLi.forEach((li) => {
	li.addEventListener("click", function () {
		const idLi = li.getAttribute("id");
		const active = document.querySelector(".sidepanel-inner .active");
		$('.list-detail-content').empty()
		active.classList.remove("active");
		li.classList.add("active");
		if (idLi == "dashboard") {
			pageHome.classList.remove("display-content")
			pageData.classList.add("display-content")
			if (readCookie("id_pengurus") == "admin_web") {} else {
				pageLaps.classList.add("display-content")
				pageChart.classList.add("display-content")
			}
			// pageDocs.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")

			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}

			if (readCookie("id_pengurus") == "ketua_yayasan" || readCookie("id_pengurus") == "admin_web") {
				pageLog.classList.add("display-content")
			}


		} else if (idLi == "laporan") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.remove("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.add("display-content")

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLog.classList.add("display-content")
			}

		} else if (idLi == "pengurus") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pagePerson.classList.remove("display-content")
			pageDetailPerson.classList.add("display-content")
			pageData.classList.add("display-content")
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.add("display-content")

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLog.classList.add("display-content")
			}

		} else if (idLi == "notif" && readCookie("id_pengurus") == "management_keuangan") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.remove("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.add("display-content")

		} else if (idLi == "notifLaporan" && readCookie("id_pengurus") == "management_keuangan") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.remove("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.add("display-content")

		} else if (idLi == "notifIncome" && readCookie("id_pengurus") == "management_keuangan") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.remove("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.add("display-content")

		} else if (idLi == "account") {
			pageHome.classList.add("display-content")
			pageData.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			if (readCookie("id_pengurus") == "admin_web") {
				pageLog.classList.add("display-content")
			} else {
				pageLaps.classList.add("display-content")
				pageChart.classList.add("display-content")
			}
			pageAccount.classList.remove("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLog.classList.add("display-content")
			}

		} else if (idLi == "iLaporan") {
			const form = document.querySelectorAll("form")
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")

			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.remove("display-content")
			}
			pageChart.classList.add("display-content")

			form.forEach(i => {
				i.reset()
			});
			$("select").css({
				"border-color": "#e7e9ed"
			})
			$("input").css({
				"border-color": "#e7e9ed"
			})
			$("#tampil").empty()
			$(".listProgram").empty()
			$(".contentProgram span").empty()
			$(".contentLogistik span").empty()
			$(".contentAset span").empty()
			$(".contentUangMakan span").empty()
			$(".contentGaji span").empty()
			$(".contentLainnya span").empty()
			$(".contentMaintenance span").empty()
			$(".contentOperasional span").empty()
			$(".contentPaud span").empty()
			$(".contentJasa span").empty()

		} else if (idLi == "charts") {
			pageHome.classList.add("display-content")
			// pageDocs.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageData.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			pageAccount.classList.add("display-content")
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}
			pageChart.classList.remove("display-content")

			if (
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "management_keuangan" ||
				readCookie("id_pengurus") == "ketua_yayasan"
			) {
				$.getJSON("https://edaily.alkiromamanah.com/data/chart_program.php", function (data) {
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranGlobal
							},
							{
								label: 'Terpakai Global',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranPendidikan
							},
							{
								label: 'Terpakai Pendidikan',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranKesehatan
							},
							{
								label: 'Terpakai Kesehatan',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranAsrama
							},
							{
								label: 'Terpakai Asrama Yatim',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranSantunan
							},
							{
								label: 'Terpakai Santunan Bulanan',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranBinaan
							},
							{
								label: 'Terpakai Yatim Binaan',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
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
								hoverBackgroundColor: "rgba(117,193,129,1)",
								data: anggaranLuarBinaan
							},
							{
								label: 'Terpakai Yatim Luar Binaan',
								backgroundColor: "rgba(91,153,234,0.8)",
								hoverBackgroundColor: "rgba(91,153,234,1)",
								data: terpakaiLuarBinaan
							}
						]
					}
					myBarLuarBinaan.data = newDataLuarBinaan;
					window.myBarLuarBinaan.update()

				})

			} else if (readCookie("id_pengurus") == "kepala_income") {
				$.getJSON("https://edaily.alkiromamanah.com/data/chart_income.php", function (data) {
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
			} else if (
				readCookie("id_pengurus") == "sosial_media"
			) {
				$.getJSON("https://edaily.alkiromamanah.com/data/data_income.php", function (data) {
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
				$.getJSON("https://localhost/ebNew/data/chart_income.php", function (data) {
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
			}

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLog.classList.add("display-content")
			}

		} else if (
			readCookie("id_pengurus") == "ketua_yayasan" && idLi == "log" ||
			readCookie("id_pengurus") == "admin_web" && idLi == "log"

		) {
			pageHome.classList.add("display-content")
			pageData.classList.add("display-content")
			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLaps.classList.add("display-content")
				pagePerson.classList.add("display-content")
				pageChart.classList.add("display-content")
				pageAccount.classList.add("display-content")
			}
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageDetailPerson.classList.add("display-content")
			}

			if (readCookie("id_pengurus") == "admin_web" && idLi == "log") {
				pageAccount.classList.add("display-content")
			}
			pageLog.classList.remove("display-content")

		} else if (idLi == "dataAll") {
			pageHome.classList.add("display-content")
			pageLaps.classList.add("display-content")
			pageAccount.classList.add("display-content")
			pageData.classList.remove("display-content")
			if (readCookie("id_pengurus") == "management_keuangan") {
				pageNotif.classList.add("display-content")
				pageNotifLaporan.classList.add("display-content")
				pageNotifIncome.classList.add("display-content")
			}
			if (readCookie("id_pengurus") == "ketua_yayasan") {
				pageLog.classList.add("display-content")
			}
			if (
				readCookie("id_pengurus") == "ketua_yayasan" ||
				readCookie("id_pengurus") == "manager_facebook" ||
				readCookie("id_pengurus") == "manager_instagram" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pagePerson.classList.add("display-content")
				pageDetailPerson.classList.add("display-content")
			}
			if (
				readCookie("id_pengurus") == "sosial_media" ||
				readCookie("id_pengurus") == "kepala_pengajuan" ||
				readCookie("id_pengurus") == "kepala_income"
			) {
				pageInput.classList.add("display-content")
			}

			pageChart.classList.add("display-content")
		} else {

		}

	});
});

// verifikasi switch table
const buttonList = document.querySelectorAll(".list-verifikasi button")
buttonList.forEach(btn => {
	btn.addEventListener("click", function () {
		const btnActive = document.querySelector(".list-verifikasi .active")
		const tableProgram = document.querySelector(".tableProgram .table-responsive")
		const tableLogistik = document.querySelector(".tableLogistik .table-responsive")
		const tableAset = document.querySelector(".tableAset .table-responsive")
		const tableUangMakan = document.querySelector(".tableUangMakan .table-responsive")
		const tableGaji = document.querySelector(".tableGaji .table-responsive")
		const tableLainnya = document.querySelector(".tableLainnya .table-responsive")
		const tableMaintenance = document.querySelector(".tableMaintenance .table-responsive")
		const tableOperasional = document.querySelector(".tableOperasional .table-responsive")
		const tablePaud = document.querySelector(".tablePaud .table-responsive")
		const tableJasa = document.querySelector(".tableJasa .table-responsive")
		const tableincome = document.querySelector(".tableincome .table-responsive")
		const tableNonResi = document.querySelector(".tableNonResi .table-responsive")

		const hrefList = btn.getAttribute("href");
		btnActive.classList.remove("active")
		btn.classList.add("active")

		const tabHTML = btn.innerHTML

		document.querySelector("#verifikasi .title-table").innerHTML = tabHTML
		if (tabHTML == "Logistik") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.remove("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Aset Yayasan") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.remove("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Uang Makan") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.remove("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Gaji Karyawan") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.remove("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Biaya Lainnya") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.remove("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Maintenance") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.remove("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Operasional") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.remove("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "PaudQu El-ZamZam") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.remove("display-content")
			tableJasa.classList.add("display-content")

		} else if (tabHTML == "Pembayaran Jasa") {
			tableProgram.classList.add("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.remove("display-content")
		} else if (hrefList == "#incomeMedia") {
			tableincome.classList.remove("display-content")
			tableNonResi.classList.add("display-content")
		} else if (hrefList == "#nonResi") {
			tableincome.classList.add("display-content")
			tableNonResi.classList.remove("display-content")
		} else {
			tableProgram.classList.remove("display-content")
			tableLogistik.classList.add("display-content")
			tableAset.classList.add("display-content")
			tableUangMakan.classList.add("display-content")
			tableGaji.classList.add("display-content")
			tableLainnya.classList.add("display-content")
			tableMaintenance.classList.add("display-content")
			tableOperasional.classList.add("display-content")
			tablePaud.classList.add("display-content")
			tableJasa.classList.add("display-content")
		}
	})
});

// sukses switch table
const btnListSukses = document.querySelectorAll(".list-sukses button")
btnListSukses.forEach(sukses => {
	sukses.addEventListener("click", function () {
		const suksesActive = document.querySelector(".list-sukses .active")
		// list table sukses
		const suksesProgram = document.querySelector(".suksesLapProgram .table-responsive")
		const suksesLogistik = document.querySelector(".suksesLapLogistik .table-responsive")
		const suksesAset = document.querySelector(".suksesLapAset .table-responsive")
		const suksesUangMakan = document.querySelector(".suksesLapUangMakan .table-responsive")
		const suksesGaji = document.querySelector(".suksesLapGaji .table-responsive")
		const suksesLainnya = document.querySelector(".suksesLapLainnya .table-responsive")
		const suksesMaintenance = document.querySelector(".suksesLapMaintenance .table-responsive")
		const suksesOperasional = document.querySelector(".suksesLapOperasional .table-responsive")
		const suksesPaud = document.querySelector(".suksesLapPaud .table-responsive")
		const suksesJasa = document.querySelector(".suksesLapJasa .table-responsive")

		suksesActive.classList.remove("active")
		sukses.classList.add("active")

		const suksesHTML = sukses.innerHTML
		document.querySelector("#sukses .title-table").innerHTML = suksesHTML

		if (suksesHTML == "Logistik") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.remove("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Aset Yayasan") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.remove("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Uang Makan") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.remove("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Gaji Karyawan") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.remove("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Biaya Lainnya") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.remove("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Maintenance") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.remove("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Operasional") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.remove("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "PaudQu El-ZamZam") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.remove("display-content")
			suksesJasa.classList.add("display-content")

		} else if (suksesHTML == "Pembayaran Jasa") {
			suksesProgram.classList.add("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.remove("display-content")

		} else {
			suksesProgram.classList.remove("display-content")
			suksesLogistik.classList.add("display-content")
			suksesAset.classList.add("display-content")
			suksesUangMakan.classList.add("display-content")
			suksesGaji.classList.add("display-content")
			suksesLainnya.classList.add("display-content")
			suksesMaintenance.classList.add("display-content")
			suksesOperasional.classList.add("display-content")
			suksesPaud.classList.add("display-content")
			suksesJasa.classList.add("display-content")
		}

	})
});

// laporan switch table
const dataLapBtn = document.querySelectorAll(".list-laporan button")
dataLapBtn.forEach(dataLap => {
	dataLap.addEventListener("click", function () {
		const lapBtnActive = document.querySelector(".list-laporan .active")
		const tableLaporanProgram = document.querySelector(".tableLaporanProgram .table-responsive")
		const tableLaporanLogistik = document.querySelector(".tableLaporanLogistik .table-responsive")
		const tableLaporanAset = document.querySelector(".tableLaporanAset .table-responsive")
		const tableLaporanMakan = document.querySelector(".tableLaporanMakan .table-responsive")
		const tableLaporanGaji = document.querySelector(".tableLaporanGaji .table-responsive")
		const tableLaporanLainnya = document.querySelector(".tableLaporanLainnya .table-responsive")
		const tableLaporanMaintenance = document.querySelector(".tableLaporanMaintenance .table-responsive")
		const tableLaporanOperasional = document.querySelector(".tableLaporanOperasional .table-responsive")
		const tableLaporanPaud = document.querySelector(".tableLaporanPaud .table-responsive")
		const tableLaporanJasa = document.querySelector(".tableLaporanJasa .table-responsive")
		const tableLaporanTableIncome = document.querySelector(".laporanTableIncome .table-responsive")
		const tableLaporanHarian = document.querySelector(".laporanIncomeHarian .table-responsive")
		const tableLaporanTableNonResi = document.querySelector(".laporanTableNonResi .table-responsive")
		const tableLaporanTableAkunMedia = document.querySelector(".laporanTableAkunMedia .laporanTable")

		lapBtnActive.classList.remove("active")
		dataLap.classList.add("active")

		const lapHTML = dataLap.innerHTML
		document.querySelector(".lapsContent .title-table").innerHTML = lapHTML
		if (lapHTML == "Logistik") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.remove("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Aset Yayasan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.remove("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Uang Makan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.remove("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Gaji Karyawan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.remove("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Biaya Lainnya") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.remove("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Maintenance") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.remove("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Operasional") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.remove("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "PaudQu El-ZamZam") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.remove("display-content")
			tableLaporanJasa.classList.add("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Pembayaran Jasa") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.remove("display-content")

			if (readCookie("id_pengurus") == "management_keuangan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")

			} else if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanHarian.classList.add("display-content")
				tableLaporanTableNonResi.classList.add("display-content")
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (
			lapHTML == "Income" && readCookie("id_pengurus") == "sosial_media" ||
			lapHTML == "Income" && readCookie("id_pengurus") == "manager_instagram" ||
			lapHTML == "Income" && readCookie("id_pengurus") == "manager_facebook") {
			tableLaporanTableIncome.classList.remove("display-content")
			tableLaporanTableAkunMedia.classList.add("display-content")

		} else if (
			lapHTML == "Akun" && readCookie("id_pengurus") == "sosial_media" ||
			lapHTML == "Akun" && readCookie("id_pengurus") == "manager_instagram" ||
			lapHTML == "Akun" && readCookie("id_pengurus") == "manager_facebook"
		) {
			tableLaporanTableIncome.classList.add("display-content")
			tableLaporanTableAkunMedia.classList.remove("display-content")

			const btnListMedia = document.querySelectorAll(".laporanTableAkunMedia .list-media-akun .btn")
			btnListMedia.forEach(listMedia => {
				listMedia.addEventListener("click", function () {
					const idListMedia = listMedia.getAttribute("id")
					const listMediaActive = document.querySelector(".laporanTableAkunMedia .list-media-akun .active")
					listMediaActive.classList.remove("active")
					listMedia.classList.add("active")

					const laporanFacebook = document.querySelector(".table-facebook .table-responsive")
					const laporanInstagram = document.querySelector(".table-instagram .table-responsive")
					document.querySelector(".lapsContent .title-table").innerHTML = `${lapHTML} ${listMedia.innerHTML}`
					if (idListMedia == "mediaFacebook") {
						laporanFacebook.classList.remove("display-content")
						laporanInstagram.classList.add("display-content")

					} else {
						laporanFacebook.classList.add("display-content")
						laporanInstagram.classList.remove("display-content")
					}
				})
			});

		} else if (lapHTML == "Income Harian" && readCookie("id_pengurus") == "kepala_income") {
			tableLaporanHarian.classList.remove("display-content")
			tableLaporanTableIncome.classList.add("display-content")
			tableLaporanTableNonResi.classList.add("display-content")

		} else if (lapHTML == "Income Akun" && readCookie("id_pengurus") == "kepala_income") {
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableIncome.classList.remove("display-content")
			tableLaporanTableNonResi.classList.add("display-content")

		} else if (lapHTML == "Income Non Resi" && readCookie("id_pengurus") == "kepala_income") {
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableIncome.classList.add("display-content")
			tableLaporanTableNonResi.classList.remove("display-content")

		} else if (
			lapHTML == "Income Harian" && readCookie("id_pengurus") == "management_keuangan" ||
			lapHTML == "Income Harian" && readCookie("id_pengurus") == "ketua_yayasan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")
			tableLaporanHarian.classList.remove("display-content")
			tableLaporanTableNonResi.classList.add("display-content")

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (
			lapHTML == "Income Non Resi" && readCookie("id_pengurus") == "management_keuangan" ||
			lapHTML == "Income Non Resi" && readCookie("id_pengurus") == "ketua_yayasan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableNonResi.classList.remove("display-content")

			if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}

		} else if (lapHTML == "Income Akun" && readCookie("id_pengurus") == "ketua_yayasan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableNonResi.classList.add("display-content")
			tableLaporanTableIncome.classList.remove("display-content")
			tableLaporanTableAkunMedia.classList.add("display-content")

		} else if (lapHTML == "Akun" && readCookie("id_pengurus") == "ketua_yayasan") {
			tableLaporanProgram.classList.add("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableNonResi.classList.add("display-content")
			tableLaporanTableIncome.classList.add("display-content")
			tableLaporanTableAkunMedia.classList.remove("display-content")

			const btnListMedia = document.querySelectorAll(".laporanTableAkunMedia .list-media-akun .btn")
			btnListMedia.forEach(listMedia => {
				listMedia.addEventListener("click", function () {
					const idListMedia = listMedia.getAttribute("id")
					const listMediaActive = document.querySelector(".laporanTableAkunMedia .list-media-akun .active")
					listMediaActive.classList.remove("active")
					listMedia.classList.add("active")

					const laporanFacebook = document.querySelector(".table-facebook .table-responsive")
					const laporanInstagram = document.querySelector(".table-instagram .table-responsive")
					document.querySelector(".lapsContent .title-table").innerHTML = `${lapHTML} ${listMedia.innerHTML}`
					if (idListMedia == "mediaFacebook") {
						laporanFacebook.classList.remove("display-content")
						laporanInstagram.classList.add("display-content")

					} else {
						laporanFacebook.classList.add("display-content")
						laporanInstagram.classList.remove("display-content")
					}
				})
			});

		} else {
			tableLaporanProgram.classList.remove("display-content")
			tableLaporanLogistik.classList.add("display-content")
			tableLaporanAset.classList.add("display-content")
			tableLaporanMakan.classList.add("display-content")
			tableLaporanGaji.classList.add("display-content")
			tableLaporanLainnya.classList.add("display-content")
			tableLaporanMaintenance.classList.add("display-content")
			tableLaporanOperasional.classList.add("display-content")
			tableLaporanPaud.classList.add("display-content")
			tableLaporanJasa.classList.add("display-content")
			tableLaporanHarian.classList.add("display-content")
			tableLaporanTableNonResi.classList.add("display-content")
			if (readCookie("id_pengurus") == "ketua_yayasan") {
				tableLaporanTableIncome.classList.add("display-content")
				tableLaporanTableAkunMedia.classList.add("display-content")
			}
		}

	})
});

// data tahunan
const dataTahunan = document.querySelectorAll(".list-all-data button")
dataTahunan.forEach(dt => {
	dt.addEventListener("click", function () {
		const dataActive = document.querySelector(".list-all-data .active")
		dataActive.classList.remove("active")
		dt.classList.add("active")

		const page2021 = document.querySelector(".dataGlobalTahun")
		const page2022 = document.querySelector(".dataGlobal2022")
		const page2023 = document.querySelector(".dataGlobal2023")

		const dataHref = dt.getAttribute("href")

		if (dataHref == "#data2021") {
			page2021.classList.remove("display-content")
			page2022.classList.add("display-content")
			page2023.classList.add("display-content")

		} else if (dataHref == "#data2022") {
			if (readCookie("id_pengurus") == "sosial_media") {} else {
				page2021.classList.add("display-content")
			}
			page2022.classList.remove("display-content")
			page2023.classList.add("display-content")

		} else {
			if (readCookie("id_pengurus") == "sosial_media") {
				const dropMediaMasuk = document.querySelectorAll(".dataGlobal2023 .pemasukan-select .dropdown-menu-periode li a")
				dropMediaMasuk.forEach(selectMasuk => {
					selectMasuk.addEventListener("click", function () {
						const idSelect = selectMasuk.getAttribute("id")
						const hrefSelect = selectMasuk.getAttribute("href")

						if (hrefSelect == "#Global") {
							$('.list-account-income23').load("pages/sub_pages/data_tahunan/list_acc_income23.php");

						} else {
							$('.list-account-income23').load("pages/sub_pages/data_tahunan/list_acc_income23.php?periode=" + idSelect);

						}
					})
				});
				$('.list-account-income23').load("pages/sub_pages/data_tahunan/list_acc_income23.php");

			} else {
				page2021.classList.add("display-content")
			}
			page2022.classList.add("display-content")
			page2023.classList.remove("display-content")
		}
	})
});

const dataSelect = document.querySelectorAll(".dataGlobal2022 .select-data")
dataSelect.forEach(select => {
	select.addEventListener("click", function () {
		const idSelect = select.getAttribute("id")

		if (idSelect == "pengeluaran") {
			$(".dataGlobal2022 .pengeluaran-select").toggle("slow")
			$(".dataGlobal2022 .pemasukan-select").css("display", "none")
		} else {
			$(".dataGlobal2022 .pemasukan-select").toggle("slow")
			$(".dataGlobal2022 .pengeluaran-select").css("display", "none")

		}
	})
});

const dataSelect23 = document.querySelectorAll(".dataGlobal2023 .select-data")
dataSelect23.forEach(select => {
	select.addEventListener("click", function () {
		const idSelect = select.getAttribute("id")

		if (idSelect == "pengeluaran") {
			$(".dataGlobal2023 .pengeluaran-select").toggle("slow")
			$(".dataGlobal2023 .pemasukan-select").css("display", "none")
		} else {
			$(".dataGlobal2023 .pemasukan-select").toggle("slow")
			$(".dataGlobal2023 .pengeluaran-select").css("display", "none")

		}
	})
});

// profile page 
if (
	readCookie("id_pengurus") == "sosial_media"
) {

	$("#username").on({
		keydown: function (e) {
			if (e.which === 32)
				return false;
		},
		keyup: function () {
			this.value = this.value.toLowerCase();
		},
		change: function () {
			this.value = this.value.replace(/\s/g, "");

		}
	})

	const btnChangeName = document.querySelector("#submitNewUsernameName")
	btnChangeName.addEventListener("click", function (e) {
		e.preventDefault()
		let id = $(".formChangeUsername input[name=id]").val();
		let newUsername = $(".formChangeUsername input[name=newUsername]").val();
		if (newUsername == "") {
			$(".formChangeUsername input[name=newUsername]").focus();
			$(".formChangeUsername input[name=newUsername]").keyup(function () {
				let value = $(this).val();
				if (value == "") {
					$(".formChangeUsername input[name=newUsername]").css({
						"box-shadow": "none",
						"border-color": "red"
					})
					$(".formChangeUsername .alertNewUserName").html("Nama Baru Tidak Boleh Kosong!");

				} else if (value.length < 4) {
					$(".formChangeUsername input[name=newUsername]").css({
						"box-shadow": "none",
						"border-color": "red"
					})
					$(".formChangeUsername .alertNewUserName").html("Nama Baru Terlalu Pendek!");

				} else {
					$(".formChangeUsername input[name=newUsername]").css({
						"border-color": "green"
					})
					$(".formChangeUsername .alertNewUserName").empty();
				}
			}).keyup();
			return false;

		} else if (newUsername.length < 4) {
			$(".formChangeUsername input[name=newUsername]").focus();
			$(".formChangeUsername input[name=newUsername]").keyup(function () {
				let value = $(this).val();
				if (value.length < 4) {
					$(".formChangeUsername input[name=newUsername]").css({
						"box-shadow": "none",
						"border-color": "red"
					})
					$(".formChangeUsername .alertNewUserName").html("Nama Baru Terlalu Pendek!");

				} else {
					$(".formChangeUsername input[name=newUsername]").css({
						"border-color": "green"
					})
					$(".formChangeUsername .alertNewUserName").empty();
				}
			}).keyup();
			return false;

		} else {
			$.ajax({
				type: "POST",
				url: "pages/profil/changeUsername.php",
				data: {
					inputId: id,
					inputName: newUsername
				},
				success: function (data) {
					if (data == 1) {
						Swal.fire({
							type: 'error',
							position: 'center',
							title: 'Username tidak ada yg diubah',
							showConfirmButton: false,
							timer: 1500
						})

						$(".formChangeUsername input[name=newUsername]").focus();
						$(".formChangeUsername #submitnewUsername").css({
							"background-color": "#15a362",
							"color": "#fff"
						})

					} else {
						Swal.fire({
							type: 'success',
							position: 'center',
							title: 'Username berhasil diubah, silahkan login kembali!',
							confirmButtonText: 'OK!'
						}).then((result) => {
							if (result) {
								window.location.href = './logout?key=' + data;
							}
						})
					}
				}
			})
		}

	})

	if (readCookie("id_pengurus") == "sosial_media") {
		const btnChangeAkunName = document.querySelector("#submitNewNameAccount")
		btnChangeAkunName.addEventListener("click", function (e) {
			e.preventDefault()
			let id = $(".formChangeNameAccount input[name=id]").val();
			let nameAccount = $(".formChangeNameAccount select[name=akun]").val();
			let newNameAccount = $(".formChangeNameAccount input[name=newNameAccount]").val();
			if (nameAccount == "") {
				$(".formChangeNameAccount select[name=akun]").focus();
				$(".formChangeNameAccount select[name=akun]").keyup(function () {
					let value = $(this).val();
					if (value == "") {
						$(".formChangeNameAccount select[name=akun]").css({
							"box-shadow": "none",
							"border-color": "red"
						})
						$(".formChangeNameAccount .alertAkun").html("Harap Pilih Satu Akun!");

					} else {
						$(".formChangeNameAccount select[name=akun]").css({
							"border-color": "green"
						})
						$(".formChangeNameAccount .alertAkun").empty();
					}
				}).keyup();
				return false;

			} else if (newNameAccount == "") {
				$(".formChangeNameAccount input[name=newNameAccount]").focus();
				$(".formChangeNameAccount input[name=newNameAccount]").keyup(function () {
					let value = $(this).val();
					if (value == "") {
						$(".formChangeNameAccount input[name=newNameAccount]").css({
							"box-shadow": "none",
							"border-color": "red"
						})
						$(".formChangeNameAccount .alertNewNameAccount").html("Nama Baru Tidak Boleh Kosong!");

					} else if (value.length < 4) {
						$(".formChangeNameAccount input[name=newNameAccount]").css({
							"box-shadow": "none",
							"border-color": "red"
						})
						$(".formChangeNameAccount .alertNewNameAccount").html("Nama Baru Terlalu Pendek!");

					} else {
						$(".formChangeNameAccount input[name=newNameAccount]").css({
							"border-color": "green"
						})
						$(".formChangeNameAccount .alertNewNameAccount").empty();
					}
				}).keyup();
				return false;

			} else {
				$.ajax({
					type: "POST",
					url: "pages/profil/changeNewNameAccount.php",
					data: {
						inputId: id,
						inputAccount: nameAccount,
						inputNewName: newNameAccount
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

							$(".formChangeNameAccount input[name=newNameAccount]").focus();
							$(".formChangeNameAccount #submitNewNameAccount").css({
								"background-color": "#15a362",
								"color": "#fff"
							})

						} else {
							Swal.fire({
								type: 'success',
								position: 'center',
								title: 'Akun Berhasil Diubah!',
								showConfirmButton: false,
								timer: 1500
							}).then((result) => {
								if (result) {
									const nameHtml = document.querySelector(".changeNameAccount a")
									if (nameHtml.innerHTML === "Ubah") {
										nameHtml.innerHTML = "Sembunyikan";
									} else {
										nameHtml.innerHTML = "Ubah";
										$(".formChangeNameAccount").trigger("reset")
										$(".formChangeNameAccount select").css({
											"border-color": "#e7e9ed"
										})

										$(".formChangeNameAccount input").css({
											"border-color": "#e7e9ed"
										})

										$(".formChangeNameAccount p").empty()
									}
									$('.akunNew').load("pages/input/input_list/tampil_akun.php");
									$('.list-account').load("pages/input/input_list/list_akun.php");
									$(".formChangeNameAccount").toggle(500);
								}
							})

						}
					}
				})
			}

		})

		const btnDeleteAccount = document.querySelector("#deleteAccountName")
		btnDeleteAccount.addEventListener("click", function (e) {
			e.preventDefault()
			let id = $(".formDeleteNameAccount input[name=id]").val();
			let nameAccount = $(".formDeleteNameAccount select[name=akun]").val();
			if (nameAccount == "") {
				$(".formDeleteNameAccount select[name=akun]").focus();
				$(".formDeleteNameAccount select[name=akun]").keyup(function () {
					let value = $(this).val();
					if (value == "") {
						$(".formDeleteNameAccount select[name=akun]").css({
							"box-shadow": "none",
							"border-color": "red"
						})
						$(".formDeleteNameAccount .alertAkun").html("Harap Pilih Satu Akun!");

					} else {
						$(".formDeleteNameAccount select[name=akun]").css({
							"border-color": "green"
						})
						$(".formDeleteNameAccount .alertAkun").empty();
					}
				}).keyup();
				return false;

			} else {
				$.ajax({
					url: 'pages/delete/delete_account.php',
					method: 'POST',
					data: {
						id: id,
						kategori: "mediaSosial",
						deleteAkun: nameAccount
					},
					success: function () {
						Swal.fire({
							type: 'success',
							position: 'center',
							title: 'Akun berhasil dihapus',
							showConfirmButton: false,
							timer: 1500
						}).then((result) => {
							if (result) {
								const nameHtml = document.querySelector(".changeNameAccount #hapus")
								if (nameHtml.innerHTML === "Hapus") {
									nameHtml.innerHTML = "Sembunyikan";
								} else {
									nameHtml.innerHTML = "Hapus";
									$(".formDeleteNameAccount").trigger("reset")
									$(".formDeleteNameAccount select").css({
										"border-color": "#e7e9ed"
									})

									$(".formDeleteNameAccount span").empty()
								}
								$('.akunNew').load("pages/input/input_list/tampil_akun.php");
								$('.list-account').load("pages/input/input_list/list_akun.php");
								$(".formDeleteNameAccount").toggle(500);
							}
						})
					}
				});
			}

		})
	}

}

const btnChangePassword = document.querySelector("#submitNewPassword")
btnChangePassword.addEventListener("click", function (e) {
	e.preventDefault()
	let id = $(".formChangePassword input[name=id]").val();
	let password = $(".formChangePassword input[name=password]").val();
	let confirmPassword = $(".formChangePassword input[name=confirmPassword]").val();
	if (password == "") {
		$(".formChangePassword input[name=password]").focus();
		$(".formChangePassword input[name=password]").keyup(function () {
			let value = $(this).val();
			if (value == "") {
				$(".formChangePassword input[name=password]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertPassword").html("Password Tidak Boleh Kosong!");

			} else if (value.length < 4) {
				$(".formChangePassword input[name=password]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertPassword").html("Password Terlalu Pendek!");

			} else {
				$(".formChangePassword input[name=password]").css({
					"border-color": "green"
				})
				$(".formChangePassword .alertPassword").empty();
			}
		}).keyup();
		return false;

	} else if (password.length < 4) {
		$(".formChangePassword input[name=password]").focus();
		$(".formChangePassword input[name=password]").keyup(function () {
			let value = $(this).val();
			if (value.length < 4) {
				$(".formChangePassword input[name=password]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertPassword").html("Password Terlalu Pendek!");

			} else {
				$(".formChangePassword input[name=password]").css({
					"border-color": "green"
				})
				$(".formChangePassword .alertPassword").empty();
			}
		}).keyup();
		return false;

	} else if (confirmPassword == "") {
		$(".formChangePassword input[name=confirmPassword]").focus();
		$(".formChangePassword input[name=confirmPassword]").keyup(function () {
			let value = $(this).val();
			if (value == "") {
				$(".formChangePassword input[name=confirmPassword]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertConfirmPassword").html("Konfirmasi Password Tidak Boleh Kosong!");

			} else if (value.length < 4) {
				$(".formChangePassword input[name=confirmPassword]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertConfirmPassword").html("Konfirmasi Password Terlalu Pendek!");

			} else {
				$(".formChangePassword input[name=confirmPassword]").css({
					"border-color": "green"
				})
				$(".formChangePassword .alertConfirmPassword").empty();
			}
		}).keyup();
		return false;

	} else if (confirmPassword.length < 4) {
		$(".formChangePassword input[name=confirmPassword]").focus();
		$(".formChangePassword input[name=confirmPassword]").keyup(function () {
			let value = $(this).val();
			if (value.length < 4) {
				$(".formChangePassword input[name=confirmPassword]").css({
					"box-shadow": "none",
					"border-color": "red"
				})
				$(".formChangePassword .alertConfirmPassword").html("Konfirmasi Password Terlalu Pendek!");

			} else {
				$(".formChangePassword input[name=confirmPassword]").css({
					"border-color": "green"
				})
				$(".formChangePassword .alertConfirmPassword").empty();
			}
		}).keyup();
		return false;

	} else {
		$.ajax({
			type: "POST",
			url: "pages/profil/changePassword.php",
			data: {
				inputId: id,
				inputPassword: password,
				inputConfirmPassword: confirmPassword
			},
			success: function (data) {
				if (data == 2) {
					Swal.fire({
						type: 'warning',
						position: 'center',
						title: 'Konfirmasi password tidak sama!',
						showConfirmButton: false,
						timer: 1500
					})

					$(".formChangePassword input[name=confirmPassword]").focus();
					$(".formChangePassword #submitNewPassword").css({
						"background-color": "#15a362",
						"color": "#fff"
					})

				} else if (data == 1) {
					Swal.fire({
						type: 'info',
						position: 'center',
						title: 'Password sama saja!',
						showConfirmButton: false,
						timer: 1500
					})

					$(".formChangePassword input[name=password]").focus();
					$(".formChangePassword #submitNewPassword").css({
						"background-color": "#15a362",
						"color": "#fff"
					})

				} else {
					Swal.fire({
						type: 'success',
						position: 'center',
						title: 'Password berhasil disimpan!',
						showConfirmButton: false,
						timer: 1500
					}).then((result) => {
						if (result) {
							const nameHtml = document.querySelector(".changePassword a")
							if (nameHtml.innerHTML === "Ubah") {
								nameHtml.innerHTML = "Sembunyikan";
							} else {
								nameHtml.innerHTML = "Ubah";
								$(".formChangePassword").trigger("reset")
								$(".formChangePassword input").css({
									"border-color": "#e7e9ed"
								})

								$(".formChangePassword p").empty()
							}

							$(".formChangePassword").toggle(500);
						}
					})
				}
			}
		})
	}

})