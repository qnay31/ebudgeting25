'use strict';

const input = document.querySelectorAll(".inputContent nav a")
const form = document.querySelectorAll("#form")
const mediaListLaporan = document.querySelectorAll(".tableLaporanAkun .list-tableLaporanAkun span")
const pageLaporanFacebook = document.querySelector(".tableLaporanAkun .laporanAkunFB .table-responsive")
const pageLaporanInstagram = document.querySelector(".tableLaporanAkun .laporanAkunIG .table-responsive")

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

            $(".inputIncome p").empty()
            $(".file-message").html("or drag and drop files here")
            $(".divImageMediaPreview").empty()

        } else if (inputHref == "#Ilaporan") {
            form.forEach(i => {
                i.reset()
            });

            $("select").css({
                "border-color": "#e7e9ed"
            })
            $("input").css({
                "border-color": "#e7e9ed"
            })

        }
    })
});

$('.teamAdminMediaSosial').load("pages/input/input_list/tampil_team.php");
$('.akunNew').load("pages/input/input_list/tampil_akun.php");
$('.list-account').load("pages/input/input_list/list_akun.php");
$("#refreshAkun").click(function (e) {
    e.preventDefault()
    $('.teamAdminMediaSosial').load("pages/input/input_list/tampil_team.php");
    $('.akunNew').load("pages/input/input_list/tampil_akun.php");
    $('.list-account').load("pages/input/input_list/list_akun.php");
    Swal.fire({
        type: 'success',
        position: 'center',
        title: 'Refresh Akun',
        showConfirmButton: false,
        timer: 1000
    })
})
$("#saveAkun").click(function (e) {
    var akun = $("input[name=akunName]").val();
    var sosialMedia = $("select[name=sosialMedia]").val();
    var team = $("select[name=team]").val();
    if (akun == "") {
        $("input[name=akunName]").focus();
        $("input[name=akunName]").keyup(function () {
            var value = $(this).val();
            if (value == "") {
                $("input[name=akunName]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".pesan").html("Akun tidak boleh kosong!");
            } else {
                $("input[name=akunName]").css({
                    "border-color": "green"
                })
                $(".pesan").empty();
            }
        }).keyup();
        return false;

    } else if (sosialMedia == "") {
        $("select[name=sosialMedia]").focus();
        $("select[name=sosialMedia]").keyup(function () {
            var value = $(this).val();
            if (value == "") {
                $("select[name=sosialMedia]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".alertSosialMedia").html("Harap pilih satu sosial media!");
            } else {
                $("select[name=sosialMedia]").css({
                    "border-color": "green"
                })
                $(".alertSosialMedia").empty();
            }
        }).keyup();
        return false;

    } else if (team == "") {
        $("select[name=team]").focus();
        $("select[name=team]").keyup(function () {
            var value = $(this).val();
            if (value == "") {
                $("select[name=team]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".alertTeam").html("Harap pilih satu team!");
            } else {
                $("select[name=team]").css({
                    "border-color": "green"
                })
                $(".alertTeam").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/input/input_list/insert_akun.php",
            type: "POST",
            data: {
                akunName: akun,
                mediaName: sosialMedia,
                teamName: team
            },
            success: function (data) {
                if (data == 1) {
                    $('.akunNew').load("pages/input/input_list/tampil_akun.php");
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Akun sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    $('.akunNew').load("pages/input/input_list/tampil_akun.php");
                    $('.teamAdminMediaSosial').load("pages/input/input_list/tampil_team.php");
                    $('.list-account').load("pages/input/input_list/list_akun.php");
                    $('#modalAkun').modal('hide')
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Akun disimpan',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        });
    }
    e.preventDefault()
});

$("#modalAkun").on('shown.bs.modal', function () {
    $(this).find('input[type="text"]').focus();
});

$("#modalAkun").on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    $("#modalAkun input").css({
        "border-color": "#e7e9ed"
    });

    $("#modalAkun select").css({
        "border-color": "#e7e9ed"
    });
    $("#modalAkun span").empty();
});

$(".inputLaporanAkunNew #akunNew").change(function () {
    var viewInput = $(".inputLaporanAkunNew #akunNew").val();

    $.ajax({
        type: "POST",
        url: "pages/input/input_list/tampil_listLaporan.php",
        data: {
            akun: viewInput
        },
        success: function (data) {
            if (data == "Facebook") {
                $(".listInputLaporan .input-facebook").css("display", "block")
                $(".listInputLaporan .input-instagram").css("display", "none")
                $(".input-submit-media .submit-facebook").css("display", "block")
                $(".input-submit-media .submit-instagram").css("display", "none")

            } else if (data == "Instagram") {
                $(".listInputLaporan .input-facebook").css("display", "none")
                $(".listInputLaporan .input-instagram").css("display", "block")
                $(".input-submit-media .submit-facebook").css("display", "none")
                $(".input-submit-media .submit-instagram").css("display", "block")

            } else {
                $(".listInputLaporan .input-facebook").css("display", "none")
                $(".listInputLaporan .input-instagram").css("display", "none")
                $(".input-submit-media .submit-facebook").css("display", "none")
                $(".input-submit-media .submit-instagram").css("display", "none")
            }
        },
    });
});

$("#modalLaporan").on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })

    $(".inputLaporanAkunNew span").empty()
    $(".listInputLaporan .input-facebook").css("display", "none")
    $(".listInputLaporan .input-instagram").css("display", "none")
    $(".input-submit-media .submit-facebook").css("display", "none")
    $(".input-submit-media .submit-instagram").css("display", "none")
});

mediaListLaporan.forEach(listLaporan => {
    listLaporan.addEventListener("click", function () {
        const listLaporanActive = document.querySelector(".tableLaporanAkun .list-tableLaporanAkun .active")
        listLaporanActive.classList.remove("active")
        listLaporan.classList.add("active")
        document.querySelector(".titleLaporan .title-media").innerHTML = listLaporan.innerHTML

        const listMediaId = listLaporan.getAttribute("id")

        if (listMediaId == "akunFB") {
            pageLaporanFacebook.classList.remove("display-content")
            pageLaporanInstagram.classList.add("display-content")

        } else {
            pageLaporanFacebook.classList.add("display-content")
            pageLaporanInstagram.classList.remove("display-content")
        }
    })
});

$(document).ready(function () {
    // input income
    $(".formIncome").on('submit', (function (e) {
        $(".inputIncome .button-submit").css("cursor", "not-allowed")
        $(".inputIncome .btn-primary").css({
            "background-color": "rgb(146, 211, 181)",
            "color": "#fff",
            "pointer-events": "none"
        })
        document.querySelector(".inputIncome .btn-primary").innerHTML = "Please Wait!"

        let akun = $(".inputIncome select[name=akun]").val()
        let namaDonatur = $(".inputIncome input[name=namaDonatur]").val()
        let tanggal = $(".inputIncome input[name=tanggal]").val()
        let jam = $(".inputIncome input[name=jam]").val()
        let bank = $(".inputIncome select[name=bank]").val()
        let transfer = $(".inputIncome input[name=transfer]").val()

        if (akun == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome select[name=akun]").focus();
            $(".inputIncome select[name=akun]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome select[name=akun]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertAkun").html("Akun harus pilih salah satu!");
                } else {
                    $(".inputIncome select[name=akun]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertAkun").empty();
                }
            }).keyup();
            return false;

        } else if (namaDonatur == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome input[name=namaDonatur]").focus();
            $(".inputIncome input[name=namaDonatur]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome input[name=namaDonatur]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertDonatur").html("Nama donatur harus diisi!");
                } else {
                    $(".inputIncome input[name=namaDonatur]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertDonatur").empty();
                }
            }).keyup();
            return false;

        } else if (tanggal == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome input[name=tanggal]").focus();
            $(".inputIncome input[name=tanggal]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome input[name=tanggal]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertTanggal").html("Tanggal transfer harus diisi!");
                } else {
                    $(".inputIncome input[name=tanggal]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertTanggal").empty();
                }
            }).keyup();
            return false;

        } else if (jam == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome input[name=jam]").focus();
            $(".inputIncome input[name=jam]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome input[name=jam]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertJam").html("jam transfer harus diisi!");
                } else {
                    $(".inputIncome input[name=jam]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertJam").empty();
                }
            }).keyup();
            return false;

        } else if (bank == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome select[name=bank]").focus();
            $(".inputIncome select[name=bank]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome select[name=bank]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertBank").html("Bank harus pilih salah satu!");
                } else {
                    $(".inputIncome select[name=bank]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertBank").empty();
                }
            }).keyup();
            return false;

        } else if (transfer == "") {
            setTimeout(() => {
                $(".inputIncome .button-submit").css("cursor", "pointer")
                $(".inputIncome .btn-primary").css({
                    "background-color": "#5cb377",
                    "color": "#fff",
                    "pointer-events": "auto"
                })
                document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

            }, 2000);

            $(".inputIncome input[name=transfer]").focus();
            $(".inputIncome input[name=transfer]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputIncome input[name=transfer]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputIncome .alertTransfer").html("Transfer harus diisi!");
                } else {
                    $(".inputIncome input[name=transfer]").css({
                        "border-color": "green"
                    })
                    $(".inputIncome .alertTransfer").empty();
                }
            }).keyup();
            return false;

        } else {
            $.ajax({
                url: "pages/media/input_income.php",
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    if (data == 3) {
                        Swal.fire({
                            type: 'error',
                            position: 'center',
                            title: 'Ukuran foto terlalu besar',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    } else {
                        Swal.fire({
                            type: 'success',
                            position: 'center',
                            title: 'Income terkirim',
                            showConfirmButton: false,
                            timer: 2000
                        })

                        $(".inputIncome .button-submit").css("cursor", "not-allowed")
                        $(".inputIncome .btn-primary").css({
                            "background-color": "rgb(146, 211, 181)",
                            "color": "#fff",
                            "pointer-events": "none"
                        })

                        form.forEach(i => {
                            i.reset()
                        });

                        $("select").css({
                            "border-color": "#e7e9ed"
                        })
                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".inputIncome p").empty()
                        $(".file-message").html("or drag and drop files here")
                        $(".divImageMediaPreview").empty()
                        $("#verifikasiIncome").DataTable().ajax.reload()
                    }

                    document.querySelector(".inputIncome .btn-primary").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".inputIncome .button-submit").css("cursor", "pointer")
                        $(".inputIncome .btn-primary").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".inputIncome .btn-primary").innerHTML = "Laporkan"

                    }, 2000);
                },
            });
        }

        e.preventDefault();
    }));

    if (readCookie("id_pengurus") == "kepala_income") {
        // table verifikasi income
        $('#verifikasiIncome').DataTable({
            "processing": true,
            "serverSide": true,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/verifikasi_income.php',
                type: 'GET',
            },
            "deferRender": true,
            "order": [
                [6, 'desc']
            ],
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 100000],
                [10, 25, 50, 100, "All"]
            ],
            "columnDefs": [{
                "targets": 0,
                "render": function (_data, _type, _row, meta) {
                    var no = meta.row + meta.settings._iDisplayStart + 1
                    return `<div class="text-center">` + no + `</div>`;
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var date = data["verTanggal"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var newMonth = month.substring(1, 3)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var time = data["verJam"];
                    var jam = time.substring(5, -3);
                    var today = new Date();
                    var mm = String(today.getMonth() + 1).padStart(2, '0');
                    var edit =
                        `
                <div class="text-center">  
                ${newMonth < mm ? 
                    `<a href="#"" data-bs-toggle="modal" data-bs-target="#VerifEditIncome${data["verEdit"]}"><i class="bi bi-pencil"></i></a>` :
                    `<a href="" id="btnConfirm${data["verEdit"]}"><i class="bi bi-check-circle" style="font-size: 1.2rem;"></i></a>`} | 
                    <a href="" class="text-danger" id="btnCancelIncome${data["verEdit"]}"><i class="bi bi-x-circle" style="font-size: 1.2rem;"></i></a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="VerifEditIncome${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="" method="post" class="edit-VerifEditIncome${data["verEdit"]}">
                                    <p class="text-danger">Income ini bukan pada bulan ini, mohon dicek kembali!!</p>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1"><b>Nama Akun</b></span>
                                        <input type="hidden" name="id" value="${data["verEdit"]}">
                                        <input type="text" class="form-control" value="${data["verAkun"]}" readonly>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control" value="${data["verDonatur"]}" id="floatingInputDonatur" readonly style="text-transform: capitalize">
                                        <label for="floatingInputDonatur">Nama Donatur</label>
                                        <span class="alertDonatur text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Transfer" value="${newDate}">
                                        <label for="floatingInputTanggal">Tanggal Transfer</label>
                                        <span class="alertTanggal text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="time" class="form-control" value="${jam}" id="floatingInputJam" readonly>
                                        <label for="floatingInputJam">Jam Transfer</label>
                                        <span class="alertJam text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control" value="${data["verBank"]}" id="floatingInputBank" readonly>
                                        <label for="floatingInputBank">Via Bank</label>
                                        <span class="alertDonatur text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control rupiah" value="${data["verTransfer"]}" id="floatingInputTransfer"  readonly>
                                        <label for="floatingInputTransfer">Jumlah Transfer</label>
                                    </div>

                                    <div class="button mb-3">
                                        <button class="btn btn-warning text-white w-50" id="editVerifIncome${data["verEdit"]}">Ubah & Simpan</button>
                                        <button class="btn btn-primary text-white w-50" id="btnConfirm${data["verEdit"]}">Tetap Kirim</button>
                                    </div>

                                    <div class="button mb-3">
                                        <button class="btn btn-danger text-white w-100" id="btnBatalIncome${data["verEdit"]}">Batalkan Income</button>
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
                    $('#VerifEditIncome${data["verEdit"]}').on('hidden.bs.modal', function () {
                        $(this).find('form').trigger('reset');
                        $("select").css({
                            "border-color": "#e7e9ed"
                        })

                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".edit-VerifEditIncome${data["verEdit"]} .text-danger").empty()
                    })

                    $('.rupiah').mask('000.000.000', {
                        reverse: true
                    });


                    // confirm table
                    $('#btnConfirm${data["verEdit"]}').click(function (e) {
                        if (confirm("Income sudah sesuai dan diverifikasi?")) {
                            var id = ${data["verEdit"]};
                            $.ajax({
                                url: 'pages/media/confirm_income.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Income Berhasil Dikonfirmasi',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $("#verifikasiIncome").DataTable().ajax.reload()
                                    $('.Ilaporan').one("click", function () {
                                        $('#IncomePending').DataTable().ajax.reload();
                                    });

                                    $('.sukses').one("click", function () {
                                        $('#crossCheckIncome').DataTable().ajax.reload();
                                    });

                                    ${newMonth < mm ? `$('#VerifEditIncome${data["verEdit"]}').modal('toggle')` : ``}
                                }
                            });
                        } else {
                            return false;
                        }

                        e.preventDefault()
                    });

                    // Cancel Table
                    $('#btnCancelIncome${data["verEdit"]}').click(function (e) {
                        if (confirm("Apakah kamu yakin ingin menolak income ini?")) {
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
                                        title: 'Income Berhasil Ditolak',
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

                    $('#btnBatalIncome${data["verEdit"]}').click(function (e) {
                        if (confirm("Apakah kamu yakin ingin menolak income ini?")) {
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
                                        title: 'Income Berhasil Ditolak',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $("#verifikasiIncome").DataTable().ajax.reload()
                                    $('#VerifEditIncome${data["verEdit"]}').modal('toggle'); 
                                }
                            });
                        } else {
                            return false;
                        }

                        e.preventDefault()
                    });
                    
                    // edit page input
                    $("#editVerifIncome${data["verEdit"]}").click(function (e) {
                        let id = $(".edit-VerifEditIncome${data["verEdit"]} input[name=id]").val();
                        let tanggal = $(".edit-VerifEditIncome${data["verEdit"]} input[name=tanggal]").val()

                        if (tanggal == "") {
                            $(".edit-VerifEditIncome${data["verEdit"]} input[name=tanggal]").focus();
                            $(".edit-VerifEditIncome${data["verEdit"]} input[name=tanggal]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-VerifEditIncome${data["verEdit"]} input[name=tanggal]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-VerifEditIncome${data["verEdit"]} .alertTanggal").html("Tanggal transfer harus diisi!");
                                } else {
                                    $(".edit-VerifEditIncome${data["verEdit"]} input[name=tanggal]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-VerifEditIncome${data["verEdit"]} .alertTanggal").empty();
                                }
                            }).keyup();
                            return false;

                        } else {
                            $.ajax({
                                type: 'POST',
                                url: "pages/media/edit_income.php",
                                data: {
                                    inputId: id,
                                    tanggalName: tanggal,
                                },
                                success: function (data) {
                                    if (data == 1) {
                                        Swal.fire({
                                            type: 'info',
                                            position: 'center',
                                            title: 'Bulan income sama saja',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
    
                                    } else {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Bulan berhasil diubah',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiIncome").DataTable().ajax.reload()
                                        $('#VerifEditIncome${data["verEdit"]}').modal('toggle'); 
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
                "targets": 2,
                data: "verKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "verAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "verNama",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 5,
                data: "verDonatur",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 6,
                data: {
                    data: ["data"]
                },
                "render": function (data) {
                    var time = data["verJam"];
                    var jam = time.substring(5, -3);
                    return `${data["verTanggal"]} - ${jam} WIB`
                }
            }, {
                "targets": 7,
                data: "verBank",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 8,
                data: "verTransfer",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 9,
                data: {
                    data: ["data"]
                },
                "render": function (data) {
                    var image =
                        `<div class="text-center">
                            ${data["verResi"] == "" ? `-` : `<a href="#" name="view" data-id="${data["verEdit"]}" class="view_data_resi${data["verEdit"]}">
                            <i class="bi bi-images"></i>
                        </a>` }
                    </div>
                
                    <div id="dataModal_resi${data["verEdit"]}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title"></h4>
                                </div>
                                <div class="modal-body" id="detail_user_resi${data["verEdit"]}">
                                </div>
                                <div class="modal-footer">
                                <a type="button" class="btn btn-info text-white" href="assets/images/resi/${data["verResi"]}" target="blank_">Fullsreen</a>
                                    <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <script>
                    // modal laporan resi
                    $('.view_data_resi${data["verEdit"]}').click(function () {
                        var data_id = $(this).data("id")
                        $.ajax({
                            url: "pages/resi/resi_media.php",
                            method: "POST",
                            data: {
                                data_id: data_id
                            },
                            success: function (data) {
                                $("#detail_user_resi${data["verEdit"]}").html(data)
                                $("#dataModal_resi${data["verEdit"]}").modal('show')
                            }
                        })
                    })
                    </script>
                
                `
                    return image
                }
            }, {
                "targets": 10,
                data: "verStatus",
                "render": function (data) {
                    return `<span class="badge bg-warning">${data}</span>`
                }
            }, {
                "targets": 11,
                data: "verTeam",
                "render": function (data) {
                    return `<div class="text-center">Team ${data}</div>`
                }
            }]
        });

        $('#verifikasiNonResi').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/verifikasi_nonResi.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 100000],
                [10, 25, 50, 100, "All"]
            ],
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
                    var date = data["verTanggal"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var edit =
                        `
                <div class="text-center">
                    <a href="#"" data-bs-toggle="modal" data-bs-target="#editNonResi${data["verEdit"]}"><i class="bi bi-pencil"></i></a> | 
                    <a href="" class="text-danger" id="btnDeleteNonResi${data["verEdit"]}"><i class="bi bi-x-circle"></i></a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="editNonResi${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="" method="post" class="edit-NonResi${data["verEdit"]}">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1"><b>Kategori</b></span>
                                        <input type="hidden" name="id" value="${data["verEdit"]}">
                                        <input type="text" class="form-control" value="${data["verKategori"]}" readonly>
                                    </div>
                                    <div class="form-floating mb-2">
                                        <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Non Resi" value="${newDate}" readonly>
                                        <label for="floatingInputTanggal">Tanggal Non Resi</label>
                                        <span class="alertTanggal text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control rupiah" name="income" value="${data["verIncome"]}" >
                                        <label for="floatingInputTransfer">Jumlah Non Resi</label>
                                        <span class="alertIncome text-danger"></span>
                                        </div>

                                    <div class="button mb-3">
                                        <button class="btn btn-primary text-white w-100" id="btnEditNonResi${data["verEdit"]}">Ubah & Simpan
                                        </button>
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
                    $('#editNonResi${data["verEdit"]}').on('hidden.bs.modal', function () {
                        $(this).find('form').trigger('reset');
                        $("select").css({
                            "border-color": "#e7e9ed"
                        })

                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".edit-NonResi${data["verEdit"]} .text-danger").empty()
                    })

                    $('.rupiah').mask('000.000.000', {
                        reverse: true
                    });


                    // confirm table
                    $('#btnDeleteNonResi${data["verEdit"]}').click(function (e) {
                        if (confirm("Laporan non resi akan dihapus?")) {
                            var id = ${data["verEdit"]};
                            $.ajax({
                                url: 'pages/media/delete_nonResi.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Non Resi Berhasil Dihapus',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    $("#verifikasiNonResi").DataTable().ajax.reload()
                                }
                            });
                        } else {
                            return false;
                        }

                        e.preventDefault()
                    });
                    
                    // edit page input
                    $("#btnEditNonResi${data["verEdit"]}").click(function (e) {
                        let id = $(".edit-NonResi${data["verEdit"]} input[name=id]").val();
                        let tanggal = $(".edit-NonResi${data["verEdit"]} input[name=tanggal]").val()
                        let income = $(".edit-NonResi${data["verEdit"]} input[name=income]").val()

                        if (tanggal == "") {
                            $(".edit-NonResi${data["verEdit"]} input[name=tanggal]").focus();
                            $(".edit-NonResi${data["verEdit"]} input[name=tanggal]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-NonResi${data["verEdit"]} input[name=tanggal]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-NonResi${data["verEdit"]} .alertTanggal").html("Tanggal non resi harus diisi!");
                                } else {
                                    $(".edit-NonResi${data["verEdit"]} input[name=tanggal]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-NonResi${data["verEdit"]} .alertTanggal").empty();
                                }
                            }).keyup();
                            return false;

                        } else if (income == "") {
                            $(".edit-NonResi${data["verEdit"]} input[name=income]").focus();
                            $(".edit-NonResi${data["verEdit"]} input[name=income]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-NonResi${data["verEdit"]} input[name=income]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-NonResi${data["verEdit"]} .alertIncome").html("Nominal non resi harus diisi!");
                                } else {
                                    $(".edit-NonResi${data["verEdit"]} input[name=income]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-NonResi${data["verEdit"]} .alertIncome").empty();
                                }
                            }).keyup();
                            return false;

                        } else {
                            $.ajax({
                                type: 'POST',
                                url: "pages/media/edit_nonResi.php",
                                data: {
                                    inputId: id,
                                    tanggalName: tanggal,
                                    incomeName: income
                                },
                                success: function (data) {
                                    if (data == 1) {
                                        Swal.fire({
                                            type: 'info',
                                            position: 'center',
                                            title: 'Data non resi sama saja',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })

                                    } else if (data == 2) {
                                        Swal.fire({
                                            type: 'info',
                                            position: 'center',
                                            title: 'Data sudah ada sebelumnya',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    } else {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Data non resi diubah',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiNonResi").DataTable().ajax.reload()
                                        $('#editNonResi${data["verEdit"]}').modal('toggle'); 
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
                "targets": 2,
                data: "verKategori",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 3,
                data: "verPosisi",
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

        $('.incomeTanpaResi').one("click", function () {
            $('#verifikasiNonResi').DataTable().ajax.reload();
        });

        $(".tableNonResi .reload").click(function () {
            $("#verifikasiNonResi").DataTable().ajax.reload()
        })
    } else {
        // table verifikasi income
        $('#verifikasiIncome').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/verifikasi_income.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 100000],
                [10, 25, 50, 100, "All"]
            ],
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
                    var date = data["verTanggal"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`
                    var time = data["verJam"];
                    var jam = time.substring(5, -3);

                    var edit =
                        `
                <div class="text-center">
                    ${data["verStatus"] == "Pending" ? `<a href="#"" data-bs-toggle="modal" data-bs-target="#income${data["verEdit"]}"><i class="bi bi-pencil"></i></a> |` : ``}
                    <a href="" id="btnDeleteIncome${data["verEdit"]}"><i class="bi bi-trash"></i></a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="income${data["verEdit"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">Detail Info</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="" method="post" class="edit-income${data["verEdit"]}">
                                    <div class="input-group mb-2">
                                        <label class="input-group-text" for="namaAkun"><b>Nama Akun</b></label>
                                        <input type="hidden" name="id" value="${data["verEdit"]}">
                                        <input type="text" class="form-control" id="namaAkun" value="${data["verAkun"]}" readonly>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control" id="floatingInputDonatur" name="namaDonatur" placeholder="Nama Donatur" value="${data["verDonatur"]}">
                                        <label for="floatingInputDonatur">Nama Donatur</label>
                                        <span class="alertDonatur text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Transfer" value="${newDate}">
                                        <label for="floatingInputTanggal">Tanggal Transfer</label>
                                        <span class="alertTanggal text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="time" class="form-control" id="floatingInputJam" name="jam" placeholder="Jam Transfer"  value="${jam}">
                                        <label for="floatingInputJam">Jam Transfer</label>
                                        <span class="alertJam text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <select class="form-select" name="bank" id="input-edit-bank" aria-label="Default select example">
                                            <option selected value="${data["verBank"]}">- ${data["verBank"]} -</option>
                                            <option value="BRI">Bank BRI</option>
                                            <option value="BNI">Bank BNI</option>
                                            <option value="Cimb">Bank Cimb</option>
                                            <option value="BCA">Bank BCA</option>
                                            <option value="Mandiri">Bank Mandiri</option>
                                            <option value="BSI">Bank BSI</option>
                                            <option value="Dana">Dana</option>
                                            <option value="OVO">OVO</option>
                                            <option value="WU">WU</option>
                                            <option value="Kitabisa.com">Kitabisa.com</option>
                                            <option value="Pulsa">Pulsa</option>
                                            <option value="Uang Cash">Uang Cash</option>
                                        </select>
                                        <label for="input-edit-bank">Pilih Bank</label>
                                        <span class="alertBank text-danger"></span>
                                    </div>

                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control rupiah" id="floatingInputTransfer" name="transfer" placeholder="10.000.000" onkeypress="return hanyaAngka(event)" value="${data["verTransfer"]}">
                                        <label for="floatingInputTransfer">Jumlah Transfer</label>
                                        <span class="alertTransfer text-danger"></span>
                                    </div>

                                    <div class="button mb-3">
                                        <button class="btn btn-primary text-white w-100" id="editIncome${data["verEdit"]}">Ubah</button>
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
                    $('#income${data["verEdit"]}').on('hidden.bs.modal', function () {
                        $(this).find('form').trigger('reset');
                        $("select").css({
                            "border-color": "#e7e9ed"
                        })

                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".edit-income${data["verEdit"]} .text-danger").empty()
                    })

                    $('.rupiah').mask('000.000.000', {
                        reverse: true
                    });

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
                    
                    // edit page input
                    $("#editIncome${data["verEdit"]}").click(function (e) {
                        let id = $(".edit-income${data["verEdit"]} input[name=id]").val();
                        let namaDonatur = $(".edit-income${data["verEdit"]} input[name=namaDonatur]").val()
                        let tanggal = $(".edit-income${data["verEdit"]} input[name=tanggal]").val()
                        let jam = $(".edit-income${data["verEdit"]} input[name=jam]").val()
                        let bank = $(".edit-income${data["verEdit"]} select[name=bank]").val()
                        let transfer = $(".edit-income${data["verEdit"]} input[name=transfer]").val()

                        if (namaDonatur == "") {
                            $(".edit-income${data["verEdit"]} input[name=namaDonatur]").focus();
                            $(".edit-income${data["verEdit"]} input[name=namaDonatur]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-income${data["verEdit"]} input[name=namaDonatur]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertDonatur").html("Nama donatur harus diisi!");
                                } else {
                                    $(".edit-income${data["verEdit"]} input[name=namaDonatur]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertDonatur").empty();
                                }
                            }).keyup();
                            return false;

                        } else if (tanggal == "") {
                            $(".edit-income${data["verEdit"]} input[name=tanggal]").focus();
                            $(".edit-income${data["verEdit"]} input[name=tanggal]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-income${data["verEdit"]} input[name=tanggal]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertTanggal").html("Tanggal transfer harus diisi!");
                                } else {
                                    $(".edit-income${data["verEdit"]} input[name=tanggal]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertTanggal").empty();
                                }
                            }).keyup();
                            return false;

                        } else if (jam == "") {
                            $(".edit-income${data["verEdit"]} input[name=jam]").focus();
                            $(".edit-income${data["verEdit"]} input[name=jam]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-income${data["verEdit"]} input[name=jam]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertJam").html("jam transfer harus diisi!");
                                } else {
                                    $(".edit-income${data["verEdit"]} input[name=jam]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertJam").empty();
                                }
                            }).keyup();
                            return false;

                        } else if (bank == "") {
                            $(".edit-income${data["verEdit"]} select[name=bank]").focus();
                            $(".edit-income${data["verEdit"]} select[name=bank]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-income${data["verEdit"]} select[name=bank]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertBank").html("Bank harus pilih salah satu!");
                                } else {
                                    $(".edit-income${data["verEdit"]} select[name=bank]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertBank").empty();
                                }
                            }).keyup();
                            return false;

                        } else if (transfer == "") {
                            $(".edit-income${data["verEdit"]} input[name=transfer]").focus();
                            $(".edit-income${data["verEdit"]} input[name=transfer]").keyup(function () {
                                let value = $(this).val();
                                if (value == "") {
                                    $(".edit-income${data["verEdit"]} input[name=transfer]").css({
                                        "box-shadow": "none",
                                        "border-color": "red"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertTransfer").html("Transfer transfer harus diisi!");
                                } else {
                                    $(".edit-income${data["verEdit"]} input[name=transfer]").css({
                                        "border-color": "green"
                                    })
                                    $(".edit-income${data["verEdit"]} .alertTransfer").empty();
                                }
                            }).keyup();
                            return false;

                        } else {
                            $.ajax({
                                type: 'POST',
                                url: "pages/media/edit_income.php",
                                data: {
                                    inputId: id,
                                    donaturName: namaDonatur,
                                    tanggalName: tanggal,
                                    jamName: jam,
                                    bankName: bank,
                                    transferName: transfer
                                },
                                success: function (data) {
                                    if (data == 1) {
                                        Swal.fire({
                                            type: 'info',
                                            position: 'center',
                                            title: 'Income sama saja',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
    
                                    } else {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Income berhasil diubah',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        $("#verifikasiIncome").DataTable().ajax.reload()
                                        $('#income${data["verEdit"]}').modal('toggle'); 
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
                "targets": 2,
                data: "verKategori",
                "render": function (data) {
                    return `<div class="text-center">` + data + `</div>`;
                }
            }, {
                "targets": 3,
                data: "verAkun",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 4,
                data: "verDonatur",
                "render": function (data) {
                    return Capitalize(data);
                }
            }, {
                "targets": 5,
                data: {
                    data: ["data"]
                },
                "render": function (data) {
                    var time = data["verJam"];
                    var jam = time.substring(5, -3);
                    return `${data["verTanggal"]} - ${jam}`
                }
            }, {
                "targets": 6,
                data: "verBank",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 7,
                data: "verTransfer",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 8,
                data: "verStatus",
                "render": function (data) {
                    return data == "Pending" ? `<span class="badge bg-warning">${data}</span>` : `<span class="badge bg-danger">${data}</span>`
                }
            }, {
                "targets": 9,
                data: {
                    data: ["data"]
                },
                "render": function (data) {
                    var image =
                        `<div class="text-center">
                        <a href="#" name="view" data-id="${data["verEdit"]}" class="view_data_resi${data["verEdit"]}">
                            <i class="bi bi-images"></i>
                        </a>
                    </div>
                
                    <div id="dataModal_resi${data["verEdit"]}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body" id="detail_user_resi${data["verEdit"]}">
                                </div>
                                <div class="modal-footer">
                                <a type="button" class="btn btn-info text-white" href="assets/images/resi/${data["verResi"]}" target="blank_">Fullsreen</a>
                                    <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <script>
                    // modal laporan resi
                    $('.view_data_resi${data["verEdit"]}').click(function () {
                        var data_id = $(this).data("id")
                        $.ajax({
                            url: "pages/resi/resi_media.php",
                            method: "POST",
                            data: {
                                data_id: data_id
                            },
                            success: function (data) {
                                $("#detail_user_resi${data["verEdit"]}").html(data)
                                $("#dataModal_resi${data["verEdit"]}").modal('show')
                            }
                        })
                    })
                    </script>
                
                `
                    return image
                }
            }]
        });
    }

    // reload table
    $('.verifikasi').one("click", function () {
        $('.tableincome #verifikasiIncome').DataTable().ajax.reload();
    });

    $(".tableincome .reload").click(function () {
        $("#verifikasiIncome").DataTable().ajax.reload()
    })

    // ========== laporan akun ========== //
    $("#submitLaporanAkunFacebook").click(function (e) {
        let akun = $(".inputLaporanAkunNew select[name=akun]").val()
        let tanggal = $(".inputLaporanAkunNew input[name=tanggal]").val()
        let teman = $(".inputLaporanAkunNew input[name=teman]").val()
        let add = $(".inputLaporanAkunNew input[name=add]").val()
        let serangan = $(".inputLaporanAkunNew input[name=serangan]").val()
        let donatur = $(".inputLaporanAkunNew input[name=donatur]").val()
        let respon = $(".inputLaporanAkunNew input[name=respon]").val()
        let noRespon = $(".inputLaporanAkunNew input[name=noRespon]").val()
        let transfer = $(".inputLaporanAkunNew input[name=transfer]").val()
        if (tanggal == "") {
            $(".inputLaporanAkunNew input[name=tanggal]").focus();
            $(".inputLaporanAkunNew input[name=tanggal]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=tanggal]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertTanggal").html("Tanggal laporan harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=tanggal]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertTanggal").empty();
                }
            }).keyup();
            return false;

        } else if (teman == "") {
            $(".inputLaporanAkunNew input[name=teman]").focus();
            $(".inputLaporanAkunNew input[name=teman]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=teman]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertTeman").html("Total teman harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=teman]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertTeman").empty();
                }
            }).keyup();
            return false;

        } else if (add == "") {
            $(".inputLaporanAkunNew input[name=add]").focus();
            $(".inputLaporanAkunNew input[name=add]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=add]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertAdd").html("Total add harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=add]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertAdd").empty();
                }
            }).keyup();
            return false;

        } else if (serangan == "") {
            $(".inputLaporanAkunNew input[name=serangan]").focus();
            $(".inputLaporanAkunNew input[name=serangan]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=serangan]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertSerangan").html("Total serangan harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=serangan]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertSerangan").empty();
                }
            }).keyup();
            return false;

        } else if (donatur == "") {
            $(".inputLaporanAkunNew input[name=donatur]").focus();
            $(".inputLaporanAkunNew input[name=donatur]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=donatur]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertDonatur").html("Total donatur harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=donatur]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertDonatur").empty();
                }
            }).keyup();
            return false;

        } else if (respon == "") {
            $(".inputLaporanAkunNew input[name=respon]").focus();
            $(".inputLaporanAkunNew input[name=respon]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=respon]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertRespon").html("Total respon harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=respon]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertRespon").empty();
                }
            }).keyup();
            return false;

        } else if (noRespon == "") {
            $(".inputLaporanAkunNew input[name=noRespon]").focus();
            $(".inputLaporanAkunNew input[name=noRespon]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=noRespon]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertNoRespon").html("Total tidak respon harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=noRespon]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertNoRespon").empty();
                }
            }).keyup();
            return false;

        } else if (transfer == "") {
            $(".inputLaporanAkunNew input[name=transfer]").focus();
            $(".inputLaporanAkunNew input[name=transfer]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=transfer]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertTransfer").html("Total transfer harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=transfer]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertTransfer").empty();
                }
            }).keyup();
            return false;

        } else {
            $.ajax({
                url: "pages/media/input_laporan.php",
                type: "POST",
                data: {
                    akunName: akun,
                    tanggalName: tanggal,
                    temanName: teman,
                    addName: add,
                    seranganName: serangan,
                    donaturName: donatur,
                    responName: respon,
                    noResponName: noRespon,
                    transferName: transfer,
                },
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            type: 'error',
                            position: 'center',
                            title: 'Laporan akun pada tanggal ini sudah ada',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    } else {
                        Swal.fire({
                            type: 'success',
                            position: 'center',
                            title: 'Laporan telah dibuat',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        $('#modalLaporan').modal('hide')

                        $("select").css({
                            "border-color": "#e7e9ed"
                        })
                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".inputLaporanAkunNew  span").empty()
                        $("#laporanAkunFacebook").DataTable().ajax.reload()
                        $('#lapTableAkunFacebook').DataTable().ajax.reload();
                        $(".listInputLaporan .input-facebook").css("display", "none")
                        $(".input-submit-media .submit-facebook").css("display", "none")
                    }
                },
            });
        }

        e.preventDefault()
    })

    $("#submitLaporanAkunInstagram").click(function (e) {
        let akun = $(".inputLaporanAkunNew select[name=akun]").val()
        let tanggal = $(".inputLaporanAkunNew input[name=tanggal]").val()
        let pengikut = $(".inputLaporanAkunNew input[name=pengikut]").val()
        let mengikuti = $(".inputLaporanAkunNew input[name=mengikuti]").val()
        let serangan = $(".inputLaporanAkunNew input[name=serangan]").val()
        let donatur = $(".inputLaporanAkunNew input[name=donatur]").val()
        let respon = $(".inputLaporanAkunNew input[name=respon]").val()
        let noRespon = $(".inputLaporanAkunNew input[name=noRespon]").val()
        let transfer = $(".inputLaporanAkunNew input[name=transfer]").val()
        if (tanggal == "") {
            $(".inputLaporanAkunNew input[name=tanggal]").focus();
            $(".inputLaporanAkunNew input[name=tanggal]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=tanggal]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertTanggal").html("Tanggal laporan harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=tanggal]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertTanggal").empty();
                }
            }).keyup();
            return false;

        } else if (pengikut == "") {
            $(".inputLaporanAkunNew input[name=pengikut]").focus();
            $(".inputLaporanAkunNew input[name=pengikut]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=pengikut]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertPengikut").html("Total pengikut harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=pengikut]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertPengikut").empty();
                }
            }).keyup();
            return false;

        } else if (mengikuti == "") {
            $(".inputLaporanAkunNew input[name=mengikuti]").focus();
            $(".inputLaporanAkunNew input[name=mengikuti]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=mengikuti]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertMengikuti").html("Total mengikuti harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=mengikuti]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertMengikuti").empty();
                }
            }).keyup();
            return false;

        } else if (serangan == "") {
            $(".inputLaporanAkunNew input[name=serangan]").focus();
            $(".inputLaporanAkunNew input[name=serangan]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=serangan]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertSerangan").html("Total serangan harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=serangan]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertSerangan").empty();
                }
            }).keyup();
            return false;

        } else if (donatur == "") {
            $(".inputLaporanAkunNew input[name=donatur]").focus();
            $(".inputLaporanAkunNew input[name=donatur]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=donatur]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertDonatur").html("Total donatur harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=donatur]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertDonatur").empty();
                }
            }).keyup();
            return false;

        } else if (respon == "") {
            $(".inputLaporanAkunNew input[name=respon]").focus();
            $(".inputLaporanAkunNew input[name=respon]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=respon]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertRespon").html("Total respon harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=respon]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertRespon").empty();
                }
            }).keyup();
            return false;

        } else if (noRespon == "") {
            $(".inputLaporanAkunNew input[name=noRespon]").focus();
            $(".inputLaporanAkunNew input[name=noRespon]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=noRespon]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertNoRespon").html("Total tidak respon harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=noRespon]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertNoRespon").empty();
                }
            }).keyup();
            return false;

        } else if (transfer == "") {
            $(".inputLaporanAkunNew input[name=transfer]").focus();
            $(".inputLaporanAkunNew input[name=transfer]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".inputLaporanAkunNew input[name=transfer]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".inputLaporanAkunNew .alertTransfer").html("Total transfer harus diisi!");
                } else {
                    $(".inputLaporanAkunNew input[name=transfer]").css({
                        "border-color": "green"
                    })
                    $(".inputLaporanAkunNew .alertTransfer").empty();
                }
            }).keyup();
            return false;

        } else {
            $.ajax({
                url: "pages/media/input_laporan.php",
                type: "POST",
                data: {
                    akunName: akun,
                    tanggalName: tanggal,
                    pengikutName: pengikut,
                    mengikutiName: mengikuti,
                    seranganName: serangan,
                    donaturName: donatur,
                    responName: respon,
                    noResponName: noRespon,
                    transferName: transfer,
                },
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            type: 'error',
                            position: 'center',
                            title: 'Laporan akun pada tanggal ini sudah ada',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    } else {
                        Swal.fire({
                            type: 'success',
                            position: 'center',
                            title: 'Laporan telah dibuat',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        $('#modalLaporan').modal('hide')

                        $("select").css({
                            "border-color": "#e7e9ed"
                        })
                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".inputLaporanAkunNew span").empty()
                        $("#laporanAkunInstagram").DataTable().ajax.reload()
                        $('#lapTableAkunInstagram').DataTable().ajax.reload();
                        $(".listInputLaporan .input-instagram").css("display", "none")
                        $(".input-submit-media .submit-instagram").css("display", "none")
                    }
                },
            });
        }

        e.preventDefault()
    })

    if (readCookie("id_pengurus") == "sosial_media") {
        $('#laporanAkunFacebook').DataTable({
            "processing": true,
            "serverSide": true,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/data_laporan_akun.php?listMedia=facebook',
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
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var date = data["lapLaporan"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`

                    var today = new Date();
                    var dd = String(today.getDate() - 1).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0');
                    var yyyy = today.getFullYear();

                    today = `${yyyy}-${mm}-${dd}`
                    var edit =
                        `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapAkun${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnDeleteLapAkun${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapAkun${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info ${dd}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                     <div id="forms">
                                        <div class="inputLaporanAkun">
                                            <form action="" method="post" class="edit-lapAkun${data["lapId"]}">
                                                <div class="input-group mb-1">
                                                    <p class="input-group-text" id="basic-addon1"><b>Nama Akun</b></p>
                                                    <input type="hidden" name="id" value="${data["lapId"]}">
                                                    <input type="text" class="form-control" value="${data["lapAkun"]}" style="text-transform: capitalize" readonly>
                                                </div>
    
                                                ${newDate < today ? 
                                                    `<div class="form-floating mb-1">
                                                    <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Laporan" value="${newDate}" readonly>
                                                    <label for="floatingInputTanggal">Tanggal Laporan</label>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputTeman" name="teman" placeholder="Total Teman" value="${data["lapTeman"]}"
                                                        onkeypress="return hanyaAngka(event)" readonly>
                                                    <label for="floatingInputTeman">Total Teman</label>
                                                </div>` : 
                                                `<div class="form-floating mb-1">
                                                    <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Laporan" value="${newDate}">
                                                    <label for="floatingInputTanggal">Tanggal Laporan</label>
                                                    <span class="alertTanggal text-danger"></span>
                                                </div>

                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputTeman" name="teman" placeholder="Total Teman" value="${data["lapTeman"]}"
                                                        onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputTeman">Total Teman</label>
                                                    <span class="alertTeman text-danger"></span>
                                                </div>`}
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputAdd" name="add" placeholder="Total Add" value="${data["lapAdd"]}"
                                                        onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputAdd">Total Add</label>
                                                    <span class="alertAdd text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputSerangan" name="serangan"
                                                        placeholder="Total Serangan" value="${data["lapSerangan"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputSerangan">Total Serangan</label>
                                                    <span class="alertSerangan text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputDonatur" name="donatur"
                                                        placeholder="Total Donatur" value="${data["lapDonatur"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputDonatur">Total Donatur</label>
                                                    <span class="alertDonatur text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputRespon" name="respon" placeholder="Total Respon" value="${data["lapRespon"]}"
                                                        onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputRespon">Total Respon (insyaallah,norek,belumbisabantu,dsb)</label>
                                                    <span class="alertRespon text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputNoRespon" name="noRespon"
                                                        placeholder="Total Tidak Respon" value="${data["lapNoRespon"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputNoRespon">Total Tidak Respon</label>
                                                    <span class="alertNoRespon text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-2">
                                                    <input type="text" class="form-control rupiah" id="floatingInputTransfer" name="transfer"
                                                        placeholder="Total Transfer" value="${data["lapIncome"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputTransfer">Total Transfer</label>
                                                    <span class="alertTransfer text-danger"></span>
                                                </div>
    
                                                <div class="button-submitLaporan">
                                                    <button type="submit" name="input" class="btn btn-primary text-white w-100"
                                                        id="editLaporanAkun${data["lapId"]}">Laporkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapAkun${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapAkun${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        ${newDate < today ? 
                            `$('#btnDeleteLapAkun${data["lapId"]}').click(function (e) {
                                Swal.fire({
                                    title: 'Kamu sudah yakin?',
                                    text: "Laporan akan dihapus menyebabkan data tidak sinkron!",
                                    type: 'warning',
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Hapus!',
                                    cancelButtonText: 'Batal!',
                                    }).then((result) => {
                                        if (result.value) {
                                            Swal.fire({
                                                title: 'Terhapus!',
                                                text: 'Laporan Terhapus.',
                                                type: 'success',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            var id = ${data["lapId"]};
                                            $.ajax({
                                                url: 'pages/media/delete_laporan.php',
                                                method: 'POST',
                                                data: {
                                                    id: id
                                                },
                                                success: function () {
                                                    $("#laporanAkunFacebook").DataTable().ajax.reload()
                                                    $('#lapTableAkunFacebook').DataTable().ajax.reload();
                                                }
                                            });
                                        }
                                    })
                                e.preventDefault()
                            });` :
                            `$('#btnDeleteLapAkun${data["lapId"]}').click(function (e) {
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
                                            $("#laporanAkunFacebook").DataTable().ajax.reload()
                                            $('#lapTableAkunFacebook').DataTable().ajax.reload();
                                        }
                                    });
                                } else {
                                    return false;
                                }
        
                                e.preventDefault()
                            });`
                        }
                        
                        // edit page input
                        $("#editLaporanAkun${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapAkun${data["lapId"]} input[name=id]").val();
                            let akun = $(".edit-lapAkun${data["lapId"]} select[name=akun]").val()
                            let tanggal = $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").val()
                            let teman = $(".edit-lapAkun${data["lapId"]} input[name=teman]").val()
                            let add = $(".edit-lapAkun${data["lapId"]} input[name=add]").val()
                            let serangan = $(".edit-lapAkun${data["lapId"]} input[name=serangan]").val()
                            let donatur = $(".edit-lapAkun${data["lapId"]} input[name=donatur]").val()
                            let respon = $(".edit-lapAkun${data["lapId"]} input[name=respon]").val()
                            let noRespon = $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").val()
                            let transfer = $(".edit-lapAkun${data["lapId"]} input[name=transfer]").val()
    
                            if (tanggal == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTanggal").html("Tanggal laporan harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTanggal").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (readCookie("id_pengurus") == "facebook_depok" && teman == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=teman]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=teman]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=teman]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTeman").html("Total teman harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=teman]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTeman").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (readCookie("id_pengurus") == "facebook_depok" && add == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=add]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=add]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".inputLaporanAkun input[name=add]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertAdd").html("Total add harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=add]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertAdd").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (serangan == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=serangan]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=serangan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=serangan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertSerangan").html("Total serangan harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=serangan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertSerangan").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (donatur == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=donatur]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=donatur]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=donatur]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertDonatur").html("Total donatur harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=donatur]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertDonatur").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (respon == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=respon]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=respon]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=respon]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertRespon").html("Total respon harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=respon]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertRespon").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (noRespon == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertNoRespon").html("Total tidak respon harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertNoRespon").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (transfer == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=transfer]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=transfer]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=transfer]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTransfer").html("Total transfer harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=transfer]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTransfer").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/media/edit_laporan.php",
                                    data: {
                                        inputId: id,
                                        tanggalName: tanggal,
                                        temanName: teman,
                                        addName: add,
                                        seranganName: serangan,
                                        donaturName: donatur,
                                        responName: respon,
                                        noResponName: noRespon,
                                        transferName: transfer,
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'info',
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
                                            $("#laporanAkunFacebook").DataTable().ajax.reload()
                                            $('#lapTableAkunFacebook').DataTable().ajax.reload();
                                            $('#lapAkun${data["lapId"]}').modal('toggle'); 
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
                "targets": 4,
                data: "lapTeman",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 5,
                data: "lapAdd",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 6,
                data: "lapTemanBaru",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 7,
                data: "lapTemanHapus",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 8,
                data: "lapSerangan",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 9,
                data: "lapRespon",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 10,
                data: "lapNoRespon",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 11,
                data: "lapDonatur",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 12,
                data: "lapIncome",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }]
        });

        $('#laporanAkunInstagram').DataTable({
            "processing": true,
            "serverSide": true,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/data_laporan_akun.php?listMedia=instagram',
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
                    return `<div class="text-center">` + no + `</div>`
                }
            }, {
                "targets": 1,
                data: {
                    data: ['data']
                },
                "render": function (data) {
                    var date = data["lapLaporan"]
                    var day = date.substring(-8, 2);
                    var month = date.substring(2, 6)
                    var year = date.substring(6)
                    var newDate = `${year}${month}${day}`

                    var today = new Date();
                    var dd = String(today.getDate() - 1).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0');
                    var yyyy = today.getFullYear();

                    today = `${yyyy}-${mm}-${dd}`
                    var edit =
                        `
                    <div class="text-center">
                        <a href="#"" data-bs-toggle="modal" data-bs-target="#lapAkun${data["lapId"]}"><i class="bi bi-pencil"></i></a> | 
                        <a href="" id="btnDeleteLapAkun${data["lapId"]}"><i class="bi bi-trash"></i></a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="lapAkun${data["lapId"]}" tabindex="-1"  data-bs-backdrop="static" aria-labelledby="modalLabel"    aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Detail Info ${dd}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div id="forms">
                                        <div class="inputLaporanAkun">
                                            <form action="" method="post" class="edit-lapAkun${data["lapId"]}">
                                                <div class="input-group mb-1">
                                                    <p class="input-group-text" id="basic-addon1"><b>Nama Akun</b></p>
                                                    <input type="hidden" name="id" value="${data["lapId"]}">
                                                    <input type="text" class="form-control" value="${data["lapAkun"]}" style="text-transform: capitalize" readonly>
                                                </div>
    
                                                ${newDate < today ? 
                                                `<div class="form-floating mb-1">
                                                    <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Laporan" value="${newDate}" readonly>
                                                    <label for="floatingInputTanggal">Tanggal Laporan</label>
                                                </div>

                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputPengikut" name="pengikut"
                                                        placeholder="Total Pengikut" value="${data["lapPengikut"]}" onkeypress="return hanyaAngka(event)" readonly>
                                                    <label for="floatingInputPengikut">Total Pengikut</label>
                                                </div>

                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputMengikuti" name="mengikuti"
                                                        placeholder="Total Mengikuti" value="${data["lapMengikuti"]}" onkeypress="return hanyaAngka(event)" readonly>
                                                    <label for="floatingInputMengikuti">Total Mengikuti</label>
                                                </div>` :
                                                `<div class="form-floating mb-1">
                                                    <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Laporan" value="${newDate}">
                                                    <label for="floatingInputTanggal">Tanggal Laporan</label>
                                                    <span class="alertTanggal text-danger"></span>
                                                </div>

                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputPengikut" name="pengikut"
                                                        placeholder="Total Pengikut" value="${data["lapPengikut"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputPengikut">Total Pengikut</label>
                                                    <span class="alertPengikut text-danger"></span>
                                                </div>

                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputMengikuti" name="mengikuti"
                                                        placeholder="Total Mengikuti" value="${data["lapMengikuti"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputMengikuti">Total Mengikuti</label>
                                                    <span class="alertMengikuti text-danger"></span>
                                                </div>`}
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputSerangan" name="serangan"
                                                        placeholder="Total Serangan" value="${data["lapSerangan"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputSerangan">Total Serangan</label>
                                                    <span class="alertSerangan text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputDonatur" name="donatur"
                                                        placeholder="Total Donatur" value="${data["lapDonatur"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputDonatur">Total Donatur</label>
                                                    <span class="alertDonatur text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputRespon" name="respon" placeholder="Total Respon" value="${data["lapRespon"]}"
                                                        onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputRespon">Total Respon (insyaallah,norek,belumbisabantu,dsb)</label>
                                                    <span class="alertRespon text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-1">
                                                    <input type="text" class="form-control rupiah" id="floatingInputNoRespon" name="noRespon"
                                                        placeholder="Total Tidak Respon" value="${data["lapNoRespon"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputNoRespon">Total Tidak Respon</label>
                                                    <span class="alertNoRespon text-danger"></span>
                                                </div>
    
                                                <div class="form-floating mb-2">
                                                    <input type="text" class="form-control rupiah" id="floatingInputTransfer" name="transfer"
                                                        placeholder="Total Transfer" value="${data["lapIncome"]}" onkeypress="return hanyaAngka(event)">
                                                    <label for="floatingInputTransfer">Total Transfer</label>
                                                    <span class="alertTransfer text-danger"></span>
                                                </div>
    
                                                <div class="button-submitLaporan">
                                                    <button type="submit" name="input" class="btn btn-primary text-white w-100"
                                                        id="editLaporanAkun${data["lapId"]}">Laporkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <script>
                        $('#lapAkun${data["lapId"]}').on('hidden.bs.modal', function () {
                            $(this).find('form').trigger('reset');
                            $("select").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $("input").css({
                                "border-color": "#e7e9ed"
                            })
    
                            $(".edit-lapAkun${data["lapId"]} .text-danger").empty()
                        })
    
                        $('.rupiah').mask('000.000.000', {
                            reverse: true
                        });
    
                        // Delete Table
                        ${newDate < today ? 
                        `$('#btnDeleteLapAkun${data["lapId"]}').click(function (e) {
                            Swal.fire({
                                title: 'Kamu sudah yakin?',
                                text: "Laporan akan dihapus menyebabkan data tidak sinkron!",
                                type: 'warning',
                                showCancelButton: true,
                                showConfirmButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Hapus!',
                                cancelButtonText: 'Batal!',
                                }).then((result) => {
                                    if (result.value) {
                                        Swal.fire({
                                            title: 'Terhapus!',
                                            text: 'Laporan Terhapus.',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        var id = ${data["lapId"]};
                                        $.ajax({
                                            url: 'pages/media/delete_laporan.php',
                                            method: 'POST',
                                            data: {
                                                id: id
                                            },
                                            success: function () {
                                                $("#laporanAkunInstagram").DataTable().ajax.reload()
                                                $('#lapTableAkunInstagram').DataTable().ajax.reload();
                                            }
                                        });
                                    }
                                })
    
                            e.preventDefault()
                        });` :
                        `$('#btnDeleteLapAkun${data["lapId"]}').click(function (e) {
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
                                        $("#laporanAkunInstagram").DataTable().ajax.reload()
                                        $('#lapTableAkunInstagram').DataTable().ajax.reload();
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });`
                        }
                        
                        // edit page input
                        $("#editLaporanAkun${data["lapId"]}").click(function (e) {
                            let id = $(".edit-lapAkun${data["lapId"]} input[name=id]").val();
                            let akun = $(".edit-lapAkun${data["lapId"]} select[name=akun]").val()
                            let tanggal = $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").val()
                            let pengikut = $(".edit-lapAkun${data["lapId"]} input[name=pengikut]").val()
                            let mengikuti = $(".edit-lapAkun${data["lapId"]} input[name=mengikuti]").val()
                            let serangan = $(".edit-lapAkun${data["lapId"]} input[name=serangan]").val()
                            let donatur = $(".edit-lapAkun${data["lapId"]} input[name=donatur]").val()
                            let respon = $(".edit-lapAkun${data["lapId"]} input[name=respon]").val()
                            let noRespon = $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").val()
                            let transfer = $(".edit-lapAkun${data["lapId"]} input[name=transfer]").val()
    
                            if (tanggal == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTanggal").html("Tanggal laporan harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=tanggal]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTanggal").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (pengikut == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=pengikut]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=pengikut]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=pengikut]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertPengikut").html("Total pengikut harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=pengikut]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertPengikut").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (mengikuti == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=mengikuti]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=mengikuti]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=mengikuti]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertMengikuti").html("Total mengikuti harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=mengikuti]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertMengikuti").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (serangan == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=serangan]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=serangan]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=serangan]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertSerangan").html("Total serangan harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=serangan]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertSerangan").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (donatur == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=donatur]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=donatur]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=donatur]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertDonatur").html("Total donatur harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=donatur]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertDonatur").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (respon == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=respon]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=respon]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=respon]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertRespon").html("Total respon harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=respon]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertRespon").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (noRespon == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertNoRespon").html("Total tidak respon harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=noRespon]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertNoRespon").empty();
                                    }
                                }).keyup();
                                return false;
                    
                            } else if (transfer == "") {
                                $(".edit-lapAkun${data["lapId"]} input[name=transfer]").focus();
                                $(".edit-lapAkun${data["lapId"]} input[name=transfer]").keyup(function () {
                                    let value = $(this).val();
                                    if (value == "") {
                                        $(".edit-lapAkun${data["lapId"]} input[name=transfer]").css({
                                            "box-shadow": "none",
                                            "border-color": "red"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTransfer").html("Total transfer harus diisi!");
                                    } else {
                                        $(".edit-lapAkun${data["lapId"]} input[name=transfer]").css({
                                            "border-color": "green"
                                        })
                                        $(".edit-lapAkun${data["lapId"]} .alertTransfer").empty();
                                    }
                                }).keyup();
                                return false;
    
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: "pages/media/edit_laporan.php",
                                    data: {
                                        inputId: id,
                                        tanggalName: tanggal,
                                        pengikutName: pengikut,
                                        mengikutiName: mengikuti,
                                        seranganName: serangan,
                                        donaturName: donatur,
                                        responName: respon,
                                        noResponName: noRespon,
                                        transferName: transfer,
                                    },
                                    success: function (data) {
                                        if (data == 1) {
                                            Swal.fire({
                                                type: 'info',
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
                                            $("#laporanAkunInstagram").DataTable().ajax.reload()
                                            $('#lapTableAkunInstagram').DataTable().ajax.reload();
                                            $('#lapAkun${data["lapId"]}').modal('toggle'); 
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
                "targets": 4,
                data: "lapPengikut",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 5,
                data: "lapMengikuti",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 6,
                data: "lapIkutBaru",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 7,
                data: "lapIkutiBaru",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 8,
                data: "lapIkutHapus",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 9,
                data: "lapIkutiHapus",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 10,
                data: "lapSerangan",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 11,
                data: "lapRespon",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 12,
                data: "lapNoRespon",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 13,
                data: "lapDonatur",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }, {
                "targets": 14,
                data: "lapIncome",
                "render": function (data) {
                    return `<div class="text-center">${data}</div>`
                }
            }]
        });
    }

    $('.Ilaporan').one("click", function () {
        $('.tableLaporanAkun #laporanAkunFacebook').DataTable().ajax.reload();
    });

    $(".list-tableLaporanAkun .facebook").one('click', function () {
        $("#laporanAkunFacebook").DataTable().ajax.reload()
    })

    $(".laporanAkunFB .reload").click(function () {
        $("#laporanAkunFacebook").DataTable().ajax.reload()
    })

    $(".list-tableLaporanAkun .instagram").one('click', function () {
        $("#laporanAkunInstagram").DataTable().ajax.reload()
    })

    $(".laporanAkunIG .reload").click(function () {
        $("#laporanAkunInstagram").DataTable().ajax.reload()
    })

    // ========= sukses income =========== //
    $('#suksesIncome').DataTable({
        "processing": true,
        "serverSide": false,
        "scrollX": true,
        "autoWidth": true,
        "ajax": {
            url: 'table_ajax/data_laporan_income_resi.php',
            type: 'GET',
        },
        "deferRender": true,
        "destroy": true,
        "lengthMenu": [
            [10, 25, 50, 100, 100000],
            [10, 25, 50, 100, "All"]
        ],
        "columnDefs": [{
            "targets": 0,
            "render": function (_data, _type, _row, meta) {
                var no = meta.row + meta.settings._iDisplayStart + 1
                return `<div class="text-center">` + no + `</div>`
            }
        }, {
            "targets": 1,
            data: "suksesEdit",
            "render": function (data) {
                var image =
                    `<div class="text-center">
                            <a href="#" name="view" data-id="${data}" class="btn btn-primary text-white view_data_income${data}">
                                Simpan resi
                            </a>
                        </div>
                    
                        <div id="dataModal_income${data}" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Bukti Kwitansi</h4>
                                    </div>
                                    <div class="modal-body" id="detail_user_income${data}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <script>
                        // modal income
                        $('.view_data_income${data}').click(function () {
                            var data_id = $(this).data("id")
                            $.ajax({
                                url: "pages/resi/resi_income.php",
                                method: "POST",
                                data: {
                                    data_id: data_id
                                },
                                success: function (data) {
                                    $("#detail_user_income${data}").html(data)
                                    $("#dataModal_income${data}").modal('show')
                                }
                            })
                        })
                        </script>
                    
                    `
                return image
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
            data: {
                data: ["data"]
            },
            "render": function (data) {
                var time = data["suksesJam"];
                var jam = time.substring(5, -3);
                return `${data["suksesTanggal"]} - ${jam}`
            }
        }, {
            "targets": 5,
            data: "suksesBank",
            "render": function (data) {
                return data;
            }
        }, {
            "targets": 6,
            data: "suksesTransfer",
            "render": function (data) {
                return data;
            }
        }]
    });

    $('.sukses').one("click", function () {
        $('#suksesIncome').DataTable().ajax.reload();
    });

    $(".tableincomeSukses .reload").click(function () {
        $("#suksesIncome").DataTable().ajax.reload()
    })

    // kepala income
    $("#btnSubmitNonResi").click(function (e) {
        let kategori = $(".contentNonResi input[name=kategori]").val()
        let tanggal = $(".contentNonResi input[name=tanggal]").val()
        let transfer = $(".contentNonResi input[name=transfer]").val()

        if (tanggal == "") {
            $(".contentNonResi input[name=tanggal]").focus();
            $(".contentNonResi input[name=tanggal]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".contentNonResi input[name=tanggal]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".contentNonResi .alertNonResi").html("Tanggal non resi harus diisi!");
                } else {
                    $(".contentNonResi input[name=tanggal]").css({
                        "border-color": "green"
                    })
                    $(".contentNonResi .alertNonResi").empty();
                }
            }).keyup();
            return false;

        } else if (transfer == "") {
            $(".contentNonResi input[name=transfer]").focus();
            $(".contentNonResi input[name=transfer]").keyup(function () {
                let value = $(this).val();
                if (value == "") {
                    $(".contentNonResi input[name=transfer]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".contentNonResi .alertTransfer").html("Transfer non resi harus diisi!");
                } else {
                    $(".contentNonResi input[name=transfer]").css({
                        "border-color": "green"
                    })
                    $(".contentNonResi .alertTransfer").empty();
                }
            }).keyup();
            return false;

        } else {
            $.ajax({
                url: "pages/media/input_income.php",
                type: "POST",
                data: {
                    kategoriName: kategori,
                    tanggalName: tanggal,
                    transferName: transfer,
                },
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            type: 'error',
                            position: 'center',
                            title: 'Tanpa resi tanggal yang diinput sudah ada',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        Swal.fire({
                            type: 'success',
                            position: 'center',
                            title: 'Non resi terkirim',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        $(".contentNonResi .button-submit").css("cursor", "not-allowed")
                        $(".contentNonResi .btn-primary").css({
                            "background-color": "rgb(146, 211, 181)",
                            "color": "#fff",
                            "pointer-events": "none"
                        })
                        document.querySelector(".contentNonResi .btn-primary").innerHTML = "Please Wait!"
                        setTimeout(() => {
                            $(".contentNonResi .button-submit").css("cursor", "pointer")
                            $(".contentNonResi .btn-primary").css({
                                "background-color": "#5cb377",
                                "color": "#fff",
                                "pointer-events": "auto"
                            })
                            document.querySelector(".contentNonResi .btn-primary").innerHTML = "Laporkan"

                        }, 1500);

                        form.forEach(i => {
                            i.reset()
                        });

                        $("select").css({
                            "border-color": "#e7e9ed"
                        })
                        $("input").css({
                            "border-color": "#e7e9ed"
                        })

                        $(".contentNonResi p").empty()
                        $("#verifikasiNonResi").DataTable().ajax.reload()
                    }
                },
            });
        }
        e.preventDefault()
    })

    $('.incomeMedia').one("click", function () {
        $('#verifikasiIncome').DataTable().ajax.reload();
    });

    if (readCookie("id_pengurus") == "kepala_income") {
        // income pending
        $('#IncomePending').DataTable({
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
                <div class="text-center">${data["verStatus"] == "Pending" ? 
                    `
                        <a href="" class="text-danger" id="confirmIncomeMedia${data["verEdit"]}"><i class="bi bi-send-check" style="font-size: 1.2  rem; color: cornflowerblue;"></i></a>
                    ` : `-`}
                </div>
                <script>
                    // confirm table
                    $('#confirmIncomeMedia${data["verEdit"]}').click(function (e) {
                        if (confirm("Income ini akan dikirin dan sudah sesuai?")) {
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
                    return `<div class="text-center">Team ${data}</div>`;
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
                    return data == "Pending" ? `<span class="badge bg-warning">${data}</span>` : `<span class="badge bg-success">${data}</span>`
                }
            }]
        });

        $('.Ilaporan').one("click", function () {
            $('#IncomePending').DataTable().ajax.reload();
        });

        $(".tableIncomePending .reload").click(function () {
            $("#IncomePending").DataTable().ajax.reload()
        })

        // crosscheck income
        $('#crossCheckIncome').DataTable({
            "processing": true,
            "serverSide": false,
            "scrollX": true,
            "autoWidth": true,
            "ajax": {
                url: 'table_ajax/data_laporan_income.php',
                type: 'GET',
            },
            "deferRender": true,
            "destroy": true,
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            dom: 'Plfrtip',
            rowGroup: {
                // Uses the 'row group' plugin
                dataSrc: "suksesTanggal",
                startRender: null,
                endRender: function (rows, group) {
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
                        .append('<td colspan="6">Tanggal ' + group + ' (' + rows.count() + ') ' + '/ Income: ' + ' ' + salary + '</td>')
                        .append('<td> ' + salary + ' </td>')
                        .append('<td> </td>')
                }
            },
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
                    <a href="" class="text-danger" id="deleteIncomeCheck${data["suksesEdit"]}"><i class="bi bi-trash" style="font-size: 1.2  rem; color: red;"></i></a>
                </div>
                <script>
                    // confirm table
                    $('#deleteIncomeCheck${data["suksesEdit"]}').click(function (e) {
                        if (confirm("income akan dihapus, sudah yakin?")) {
                            var id = ${data["suksesEdit"]};
                            $.ajax({
                                url: 'pages/media/income_deleteCheck.php',
                                method: 'POST',
                                data: {
                                    id: id
                                },
                                success: function () {
                                    Swal.fire({
                                        type: 'success',
                                        position: 'center',
                                        title: 'Income berhasil dihapus',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    $('.Ilaporan').one("click", function () {
                                        $('#IncomePending').DataTable().ajax.reload();
                                    });
                                    $("#crossCheckIncome").DataTable().ajax.reload()
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
                    return Capitalize(data);
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
            }, {
                "targets": 8,
                data: "suksesTeam",
                "render": function (data) {
                    return `Team ${data}`;
                }
            }, {
                searchPanes: {
                    show: true,
                    initCollapsed: true
                },
                targets: [2, 3, 4, 5, 8]
            }, {
                searchPanes: {
                    show: false
                },
                targets: [0, 1, 6, 7]
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
                const pageTotal = api
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
                    const separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                }
                // Update footer
                $(api.column(7).footer()).html(
                    'Rp. ' + rupiah + ''
                );
            }
        });

        $('.sukses').one("click", function () {
            $('#crossCheckIncome').DataTable().ajax.reload();
        });

        $(".tableIncomeCrossCheck    .reload").click(function () {
            $("#crossCheckIncome").DataTable().ajax.reload()
        })

    }

})