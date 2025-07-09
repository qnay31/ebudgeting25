'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

/* ==== Enable Bootstrap Alert ====== */
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
	new bootstrap.Alert(alert)
});


/* ===== Responsive Sidepanel ====== */
const sidePanelToggler = document.getElementById('sidepanel-toggler');
const sidePanel = document.getElementById('app-sidepanel');
const sidePanelDrop = document.getElementById('sidepanel-drop');
const sidePanelClose = document.getElementById('sidepanel-close');

window.addEventListener('load', function () {
	responsiveSidePanel();
	// console.clear()
});

window.addEventListener('resize', function () {
	responsiveSidePanel();
});

function responsiveSidePanel() {
	let w = window.innerWidth;
	if (w >= 1200) {
		// if larger 
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');

	} else {
		// if smaller
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
	}
};

sidePanelToggler.addEventListener('click', () => {
	if (sidePanel.classList.contains('sidepanel-visible')) {
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');

	} else {
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
	}
});

sidePanelClose.addEventListener('click', (e) => {
	e.preventDefault();
	sidePanelToggler.click();
});

sidePanelDrop.addEventListener('click', (e) => {
	e.preventDefault()
	sidePanelToggler.click();
});

$('.rupiah').mask('000.000.000', {
	reverse: true
});

function hanyaAngka(evt) {
	var charCode = (evt.which) ? evt.which : e.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))

		return false;
	return true;
}

function Capitalize(str) {
	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
}

$(document).on('change', '.file-input', function () {


	var filesCount = $(this)[0].files.length;

	if (filesCount > 5) {
		alert(`Maksimal hanya 5 Foto.`);
		return;
	}

	var textbox = $(this).prev();

	if (filesCount === 1) {
		var fileName = $(this).val().split('\\').pop();
		textbox.text(fileName);
	} else {
		textbox.text(filesCount + ' files selected');
	}

	if (typeof (FileReader) != "undefined") {
		var dvPreview = $(".divImageMediaPreview");
		dvPreview.html("");
		$($(this)[0].files).each(function () {
			var file = $(this);
			var reader = new FileReader();
			reader.onload = function (e) {
				var img = $("<img />");
				img.attr("style", "width: 100%; padding: 10px");
				img.attr("src", e.target.result);
				dvPreview.append(img);
			}
			reader.readAsDataURL(file[0]);
		});
	} else {
		alert("This browser does not support HTML5 FileReader.");
	}

});

$(document).ready(function () {

	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('.profile-pic').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	$(".file-upload").on('change', function () {
		readURL(this);
	});

	$(".upload-button").on('click', function () {
		$(".file-upload").click();
	});
});

function readCookie(name) {
	name += '=';
	for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
		if (!ca[i].indexOf(name))
			return ca[i].replace(name, '');
}

const dataAlert = document.querySelectorAll(".pengembangan")
dataAlert.forEach(dev => {
	dev.addEventListener("click", function () {
		Swal.fire({
			type: 'error',
			position: 'center',
			title: 'Masih Tahap Pengembangan',
			showConfirmButton: false,
			timer: 1500
		})
	})
});

window.setTimeout("waktu()", 1000);

function waktu() {
	var waktu = new Date();
	setTimeout("waktu()", 1000);
	let salam = document.querySelector("#salam");
	let ucapan = document.querySelector(".ucapan");

	let jam = waktu.getHours()

	jam >= 4 && jam < 10 ?
		`
		${salam.innerHTML = `Selamat Pagi`}
		${ucapan.innerHTML = `Selamat Beraktivitas`} 
	` : jam >= 10 && jam < 12 ?
		`
	${salam.innerHTML = `Selamat Siang`}
	${ucapan.innerHTML = `Selamat Beraktivitas`}
	` : jam >= 12 && jam < 13 ?
		`${salam.innerHTML = `Selamat Siang`}
	${ucapan.innerHTML = `Selamat Beristirahat`}` :
		jam >= 13 && jam < 15 ?
		`${salam.innerHTML = `Selamat Siang`}
	${ucapan.innerHTML = `Selamat Beraktivitas Kembali`}` :
		jam >= 15 && jam < 17 ?
		`${salam.innerHTML = `Selamat Sore`}
	${ucapan.innerHTML = `Selamat Beraktivitas`}` :
		jam >= 17 && jam < 18 ?
		`${salam.innerHTML = `Selamat Sore`}
	${ucapan.innerHTML = `Hati - Hati Dijalan`}` :
		jam >= 18 || jam < 4 ?
		`${salam.innerHTML = `Selamat Malam`}
	${ucapan.innerHTML = `Selamat Beristirahat`}` : ``
}

$(document).ready(function () {
	$('#floatingInputanUserName').keyup(function () {
		var $th = $(this);
		$th.val($th.val().replace(/[^a-zA-Z0-9_-]/g, function (str) {
			alert('Kamu menulis " ' + str + ' ".\n\ dimohon huruf dan angka saja.');
			return '';
		}));
	});

	$(".changeUsername a").click(function () {
		const nameHtml = document.querySelector(".changeUsername a")
		if (nameHtml.innerHTML === "Ubah") {
			nameHtml.innerHTML = "Sembunyikan";
		} else {
			nameHtml.innerHTML = "Ubah";
			$(".formChangeUsername").trigger("reset")
			$(".formChangeUsername input").css({
				"border-color": "#e7e9ed"
			})

			$(".formChangeUsername span").empty()
		}

		$(".formChangeUsername").toggle(500);

	});

	$(".changeNameAccount a").click(function () {
		const nameHtml = document.querySelector(".changeNameAccount a")
		const deleteHtml = document.querySelector(".changeNameAccount #hapus")
		if (nameHtml.innerHTML === "Ubah") {
			nameHtml.innerHTML = "Sembunyikan";
			deleteHtml.innerHTML = "Hapus";
			document.querySelector(".formDeleteNameAccount").style.display = 'none'
		} else {
			nameHtml.innerHTML = "Ubah";
			$(".formChangeNameAccount").trigger("reset")
			$(".formChangeNameAccount input").css({
				"border-color": "#e7e9ed"
			})

			$(".formChangeNameAccount select").css({
				"border-color": "#e7e9ed"
			})

			$(".formChangeNameAccount span").empty()
		}

		$(".formChangeNameAccount").toggle(500);

	});

	$(".changeNameAccount #hapus").click(function () {
		const changeHtml = document.querySelector(".changeNameAccount a")
		const nameHtml = document.querySelector(".changeNameAccount #hapus")
		if (nameHtml.innerHTML === "Hapus") {
			changeHtml.innerHTML = "Ubah";
			nameHtml.innerHTML = "Sembunyikan";
			document.querySelector(".formChangeNameAccount").style.display = 'none'

		} else {
			nameHtml.innerHTML = "Hapus";
			$(".formDeleteNameAccount").trigger("reset")

			$(".formDeleteNameAccount select").css({
				"border-color": "#e7e9ed"
			})

			$(".formDeleteNameAccount span").empty()
		}

		$(".formDeleteNameAccount").toggle(500);

	});

	$(".changePassword a").click(function () {
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
	});
});

$(".toggle-password").click(function () {

	$(this).toggleClass("show-password");
	var input = $($(this).attr("toggle"));
	const idToggle = input.attr("id")
	if (input.attr("type") == "password") {
		input.attr("type", "text");
		if (idToggle == "password-field") {
			document.querySelector(".showMe").innerHTML = "Sembunyikan"

		} else {
			document.querySelector(".showMe2").innerHTML = "Sembunyikan"
		}

	} else {
		input.attr("type", "password");
		if (idToggle == "password-field") {
			document.querySelector(".showMe").innerHTML = "Tampilkan"

		} else {
			document.querySelector(".showMe2").innerHTML = "Tampilkan"
		}

	}
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.opacity = "1";
		mybutton.style.visibility = "visible"
	} else {
		mybutton.style.opacity = "0";
		mybutton.style.visibility = "hidden"
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

$.ajaxPrefilter(function (options) {
	if (options.async === false) {
		// console.warn("Memaksa async ke true pada: ", options.url);
		options.async = true;
	}
});