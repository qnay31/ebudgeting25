'use strict';

const input = document.querySelectorAll(".inputContent nav a")
const form = document.querySelectorAll("#form")
const dropdown = document.querySelectorAll("#input .dropdown ul li a")
const buttonDropdown = document.querySelector("#input .dropdown button")

// input form pengajuan
const bodyProgram = document.querySelector(".contentProgram")
const bodyLogistik = document.querySelector(".contentLogistik")
const bodyAset = document.querySelector(".contentAset")
const bodyUangMakan = document.querySelector(".contentUangMakan")
const bodyGaji = document.querySelector(".contentGaji")
const bodyLainnya = document.querySelector(".contentLainnya")
const bodyMaintenance = document.querySelector(".contentMaintenance")
const bodyOperasional = document.querySelector(".contentOperasional")
const bodyPaud = document.querySelector(".contentPaud")
const bodyJasa = document.querySelector(".contentJasa")

input.forEach(iForm => {
    iForm.addEventListener("click", function () {
        const inputHref = iForm.getAttribute("href")
        if (inputHref == "#input") {
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

        } else if (inputHref == "#Ilaporan") {
            form.forEach(i => {
                i.reset()
            });

            $(".listLaporan").empty()
            $(".laporanProgram p").empty()
            $(".laporanLogistik p").empty()
            $(".laporanAset p").empty()
            $(".laporanUangMakan p").empty()
            $(".laporanGaji p").empty()
            $(".laporanLainnya p").empty()
            $(".laporanMaintenance p").empty()
            $(".laporanOperasional p").empty()
            $(".laporanPaud p").empty()
            $(".laporanJasa p").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()

        }
    })
});

dropdown.forEach(dropLi => {
    dropLi.addEventListener("click", function () {
        const selectHTML = dropLi.innerHTML
        buttonDropdown.innerHTML = selectHTML
        if (selectHTML == "Program") {
            bodyProgram.classList.remove("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Logistik") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.remove("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")
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

        } else if (selectHTML == "Aset Yayasan") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.remove("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Uang Makan") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.remove("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Gaji Karyawan") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.remove("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Biaya Lainnya") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.remove("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Maintenance") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.remove("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Operasional") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.remove("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "PaudQu El-ZamZam") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.remove("formContent")
            bodyJasa.classList.add("formContent")

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

        } else if (selectHTML == "Pembayaran Jasa") {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.remove("formContent")

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

        } else {
            bodyProgram.classList.add("formContent")
            bodyLogistik.classList.add("formContent")
            bodyAset.classList.add("formContent")
            bodyUangMakan.classList.add("formContent")
            bodyGaji.classList.add("formContent")
            bodyLainnya.classList.add("formContent")
            bodyMaintenance.classList.add("formContent")
            bodyOperasional.classList.add("formContent")
            bodyPaud.classList.add("formContent")
            bodyJasa.classList.add("formContent")

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
        }

    })
});

$("#menuProgram").change(function () {
    var menuProgram = $("#menuProgram").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/input/input_list/list_program.php",
        data: "menuProgram=" + menuProgram,
        success: function (data) {
            $("#listProgram").html(data);
        },
    });
});

$('#tampil').load("pages/input/input_list/tampil_sekolah.php");
$("#Submit").click(function () {
    var sekolah = $("input[name=schollName]").val();
    if (sekolah == "") {
        $("input[name=schollName]").focus();
        $("input[name=schollName]").keyup(function () {
            var value = $(this).val();
            if (value == "") {
                $("input[name=schollName]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".pesan").html("Nama sekolah tidak boleh kosong!");
            } else {
                $("input[name=schollName]").css({
                    "border-color": "green"
                })
                $(".pesan").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/input_list/insert_sekolah.php",
            data: {
                schollName: sekolah
            },
            success: function (data) {
                if (data == 1) {
                    $('#tampil').load("pages/input/input_list/tampil_sekolah.php");
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Sekolah sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    $('#tampil').load("pages/input/input_list/tampil_sekolah.php");
                    $('#modalSekolah').modal('hide')
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Sekolah disimpan',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        });
    }
});

$("#modalSekolah").on('shown.bs.modal', function () {
    $(this).find('input[type="text"]').focus();
});

$("#modalSekolah").on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    $("input[name=schollName]").css({
        "border-color": "blue"
    });
    $(".pesan").empty();
});

$('#modalSekolah').on('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        $('#Submit').click();
    }
});

$("#management").change(function () {
    var management = $("#management").val();
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/input/input_list/list_management.php",
        data: "management=" + management,
        success: function (data) {
            $("#bagian").html(data);
        }
    });
});

const lapDropdown = document.querySelectorAll("#Ilaporan .dropdown ul li a")
const lapButtonDropdown = document.querySelector("#Ilaporan .dropdown button")
// input form laporan
const lapProgram = document.querySelector(".laporanProgram")
const lapLogistik = document.querySelector(".laporanLogistik")
const lapAset = document.querySelector(".laporanAset")
const lapUangMakan = document.querySelector(".laporanUangMakan")
const lapGaji = document.querySelector(".laporanGaji")
const lapLainnya = document.querySelector(".laporanLainnya")
const lapMaintenance = document.querySelector(".laporanMaintenance")
const lapOperasional = document.querySelector(".laporanOperasional")
const lapPaud = document.querySelector(".laporanPaud")
const lapJasa = document.querySelector(".laporanJasa")

lapDropdown.forEach(lapDrop => {
    lapDrop.addEventListener("click", function () {
        const lapHTML = lapDrop.innerHTML
        lapButtonDropdown.innerHTML = lapHTML
        const idLaporan = lapDrop.getAttribute("href")
        if (idLaporan == "#program") {
            lapProgram.classList.remove("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "program"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuProgram").empty()
                        $("#listMenuProgram").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageProgram").css("display", "none")
                        $(".laporanProgram .infoForm").css("display", "block")

                    } else {
                        $("#listMenuProgram").empty()
                        $("#listMenuProgram").append(`
                        ${data}
                        `)
                        $(".display-pageProgram").css("display", "block")
                        $(".laporanProgram .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanProgram #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanProgram p").empty()

        } else if (idLaporan == "#logistik") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.remove("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "logistik"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuLogistik").empty()
                        $("#listMenuLogistik").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageLogistik").css("display", "none")
                        $(".laporanLogistik .infoForm").css("display", "block")

                    } else {
                        $("#listMenuLogistik").empty()
                        $("#listMenuLogistik").append(`
                        ${data}
                        `)
                        $(".display-pageLogistik").css("display", "block")
                        $(".laporanLogistik .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanLogistik #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanLogistik p").empty()

        } else if (idLaporan == "#aset") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.remove("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "aset_yayasan"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuAset").empty()
                        $("#listMenuAset").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageAset").css("display", "none")
                        $(".laporanAset .infoForm").css("display", "block")

                    } else {
                        $("#listMenuAset").empty()
                        $("#listMenuAset").append(`
                        ${data}
                        `)
                        $(".display-pageAset").css("display", "block")
                        $(".laporanAset .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanAset #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanAset p").empty()

        } else if (idLaporan == "#makan") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.remove("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "uang_makan"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuMakan").empty()
                        $("#listMenuMakan").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageUangMakan").css("display", "none")
                        $(".laporanUangMakan .infoForm").css("display", "block")

                    } else {
                        $("#listMenuMakan").empty()
                        $("#listMenuMakan").append(`
                        ${data}
                        `)
                        $(".display-pageUangMakan").css("display", "block")
                        $(".laporanUangMakan .infoForm").css("display", "none")

                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanUangMakan #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanUangMakan p").empty()

        } else if (idLaporan == "#gaji") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.remove("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "gaji_karyawan"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuGaji").empty()
                        $("#listMenuGaji").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageGaji").css("display", "none")
                        $(".laporanGaji .infoForm").css("display", "block")

                    } else {
                        $("#listMenuGaji").empty()
                        $("#listMenuGaji").append(`
                        ${data}
                        `)
                        $(".display-pageGaji").css("display", "block")
                        $(".laporanGaji .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanGaji #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanGaji p").empty()

        } else if (idLaporan == "#lainnya") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.remove("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "anggaran_lain"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuLainnya").empty()
                        $("#listMenuLainnya").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageLainnya").css("display", "none")
                        $(".laporanLainnya .infoForm").css("display", "block")

                    } else {
                        $("#listMenuLainnya").empty()
                        $("#listMenuLainnya").append(`
                        ${data}
                        `)
                        $(".display-pageLainnya").css("display", "block")
                        $(".laporanLainnya .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanLainnya #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanLainnya p").empty()

        } else if (idLaporan == "#maintenance") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.remove("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "maintenance"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuMaintenance").empty()
                        $("#listMenuMaintenance").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageMaintenance").css("display", "none")
                        $(".laporanMaintenance .infoForm").css("display", "block")

                    } else {
                        $("#listMenuMaintenance").empty()
                        $("#listMenuMaintenance").append(`
                        ${data}
                        `)
                        $(".display-pageMaintenance").css("display", "block")
                        $(".laporanMaintenance .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanMaintenance #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanMaintenance p").empty()

        } else if (idLaporan == "#operasional") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.remove("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "operasional_yayasan"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuOperasional").empty()
                        $("#listMenuOperasional").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageOperasional").css("display", "none")
                        $(".laporanOperasional .infoForm").css("display", "block")

                    } else {
                        $("#listMenuOperasional").empty()
                        $("#listMenuOperasional").append(`
                        ${data}
                        `)
                        $(".display-pageOperasional").css("display", "block")
                        $(".laporanOperasional .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanOperasional #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanOperasional p").empty()

        } else if (idLaporan == "#paud") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.remove("formContent")
            lapJasa.classList.add("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "paudqu"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuPaud").empty()
                        $("#listMenuPaud").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pagePaud").css("display", "none")
                        $(".laporanPaud .infoForm").css("display", "block")

                    } else {
                        $("#listMenuPaud").empty()
                        $("#listMenuPaud").append(`
                        ${data}
                        `)
                        $(".display-pagePaud").css("display", "block")
                        $(".laporanPaud .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanPaud #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanPaud p").empty()

        } else if (idLaporan == "#jasa") {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.remove("formContent")

            $.ajax({
                url: "pages/sub_pages/list_laporan.php",
                type: "POST",
                data: {
                    data: "jasa"
                },
                success: function (data) {
                    if (data == 0) {
                        $("#listMenuJasa").empty()
                        $("#listMenuJasa").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)
                        $(".display-pageJasa").css("display", "none")
                        $(".laporanJasa .infoForm").css("display", "block")

                    } else {
                        $("#listMenuJasa").empty()
                        $("#listMenuJasa").append(`
                        ${data}
                        `)
                        $(".display-pageJasa").css("display", "block")
                        $(".laporanJasa .infoForm").css("display", "none")
                    }
                }
            })

            form.forEach(i => {
                i.reset()
            });

            $(".laporanJasa #listLaporan").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()
            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })
            $(".laporanJasa p").empty()

        } else {
            lapProgram.classList.add("formContent")
            lapLogistik.classList.add("formContent")
            lapAset.classList.add("formContent")
            lapUangMakan.classList.add("formContent")
            lapGaji.classList.add("formContent")
            lapLainnya.classList.add("formContent")
            lapMaintenance.classList.add("formContent")
            lapOperasional.classList.add("formContent")
            lapPaud.classList.add("formContent")
            lapJasa.classList.add("formContent")

        }
    })
});

// list laporan program
$("#listMenuProgram").change(function () {
    var listMenuProgram = $("#listMenuProgram").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuProgram=" + listMenuProgram,
        success: function (data) {
            $(".laporanProgram #listLaporan").html(data);
        },
    });
});

// list laporan logistik
$("#listMenuLogistik").change(function () {
    var listMenuLogistik = $("#listMenuLogistik").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuLogistik=" + listMenuLogistik,
        success: function (data) {
            $(".laporanLogistik #listLaporan").html(data);
        },
    });
});

// list laporan Aset
$("#listMenuAset").change(function () {
    var listMenuAset = $("#listMenuAset").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuAset=" + listMenuAset,
        success: function (data) {
            $(".laporanAset #listLaporan").html(data);
        },
    });
});

// list laporan uang makan
$("#listMenuMakan").change(function () {
    var listMenuMakan = $("#listMenuMakan").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuMakan=" + listMenuMakan,
        success: function (data) {
            $(".laporanUangMakan #listLaporan").html(data);
        },
    });
});

// list laporan gaji karyawan
$("#listMenuGaji").change(function () {
    var listMenuGaji = $("#listMenuGaji").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuGaji=" + listMenuGaji,
        success: function (data) {
            $(".laporanGaji #listLaporan").html(data);
        },
    });
});

// list laporan biaya lainnya
$("#listMenuLainnya").change(function () {
    var listMenuLainnya = $("#listMenuLainnya").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuLainnya=" + listMenuLainnya,
        success: function (data) {
            $(".laporanLainnya #listLaporan").html(data);
        },
    });
});

// list laporan maintenance
$("#listMenuMaintenance").change(function () {
    var listMenuMaintenance = $("#listMenuMaintenance").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuMaintenance=" + listMenuMaintenance,
        success: function (data) {
            $(".laporanMaintenance #listLaporan").html(data);
        },
    });
});

// list laporan operasional
$("#listMenuOperasional").change(function () {
    var listMenuOperasional = $("#listMenuOperasional").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuOperasional=" + listMenuOperasional,
        success: function (data) {
            $(".laporanOperasional #listLaporan").html(data);
        },
    });
});

// list laporan jasa
$("#listMenuJasa").change(function () {
    var listMenuJasa = $("#listMenuJasa").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuJasa=" + listMenuJasa,
        success: function (data) {
            $(".laporanJasa #listLaporan").html(data);
        },
    });
});

// list laporan paud
$("#listMenuPaud").change(function () {
    var listMenuPaud = $("#listMenuPaud").val();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/laporan/list_laporan.php",
        data: "listMenuPaud=" + listMenuPaud,
        success: function (data) {
            $(".laporanPaud #listLaporan").html(data);
        },
    });
});