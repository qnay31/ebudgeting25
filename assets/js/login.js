'use strict';

$(document).ready(function () {
    $('#username').keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^a-zA-Z0-9_-]/g, function (str) {
            alert('Kamu menulis " ' + str + ' ".\n\ dimohon huruf dan angka saja.');
            return '';
        }));
    });
})

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

$(".login-form").on('submit', (function (e) {
    let username = $(".login-form input[name=username]").val()
    let password = $(".login-form input[name=password]").val()

    if (username == "") {
        $(".login-form input[name=username]").focus();
        $(".login-form input[name=username]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".login-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".login-form .alertUsername").html("Username Tidak Boleh Kosong!");
            } else {
                $(".login-form input[name=username]").css({
                    "border-color": "green"
                })
                $(".login-form .alertUsername").empty();
            }
        }).keyup();
        return false;

    } else if (password == "") {
        $(".login-form input[name=password]").focus();
        $(".login-form input[name=password]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".login-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".login-form .alertPassword").html("Password Tidak Boleh Kosong!");
            } else {
                $(".login-form input[name=password]").css({
                    "border-color": "green"
                })
                $(".login-form .alertPassword").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "home_login.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == "success") {
                    $(".btn-submit").css("cursor", "not-allowed")
                    $(".app-btn-primary").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".app-btn-primary").innerHTML = "Please Wait!"
                    swal({
                        title: 'Please Wait!',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        timer: 2000,
                        onOpen: () => {
                            swal.showLoading();
                        }
                    })
                    setTimeout(() => {
                        window.location = 'home'
                    }, 2000);

                } else if (data == "0") {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Username Tidak Terdaftar',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    $(".login-form input[name=username]").focus();
                    $(".app-btn-primary").css({
                        "background-color": "#15a362",
                        "color": "#fff"
                    })

                } else {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Password Salah',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    $(".login-form input[name=password]").focus();
                    $(".app-btn-primary").css({
                        "background-color": "#15a362",
                        "color": "#fff"
                    })
                }
            },
        });
    }
    e.preventDefault();
}));

$(".signup-form").on('submit', (function (e) {
    let fullName = $(".signup-form input[name=fullName]").val()
    let username = $(".signup-form input[name=username]").val()
    let password = $(".signup-form input[name=password]").val()
    let confirmPassword = $(".signup-form input[name=confirmPassword]").val()

    if (fullName == "") {
        $(".signup-form input[name=fullName]").focus();
        $(".signup-form input[name=fullName]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".signup-form input[name=fullName]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertNamaLengkap").html("Nama Lengkap Tidak Boleh Kosong!");

            } else if (value.length < 4) {
                $(".signup-form input[name=fullName]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertNamaLengkap").html("Nama Lengkap Terlalu Pendek!");

            } else {
                $(".signup-form input[name=fullName]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertNamaLengkap").empty();
            }
        }).keyup();
        return false;

    } else if (fullName.length < 4) {
        $(".signup-form input[name=fullName]").focus();
        $(".signup-form input[name=fullName]").keyup(function () {
            let value = $(this).val();
            if (value.length < 4) {
                $(".signup-form input[name=fullName]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertNamaLengkap").html("Nama Lengkap Terlalu Pendek!");

            } else {
                $(".signup-form input[name=fullName]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertNamaLengkap").empty();
            }
        }).keyup();
        return false;

    } else if (username == "") {
        $(".signup-form input[name=username]").focus();
        $(".signup-form input[name=username]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".signup-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertUsername").html("Username Tidak Boleh Kosong!");
            } else if (value.length < 4) {
                $(".signup-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertUsername").html("Username Terlalu Pendek!");

            } else {
                $(".signup-form input[name=username]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertUsername").empty();
            }
        }).keyup();
        return false;

    } else if (username.length < 4) {
        $(".signup-form input[name=username]").focus();
        $(".signup-form input[name=username]").keyup(function () {
            let value = $(this).val();
            if (value.length < 4) {
                $(".signup-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertUsername").html("Username Terlalu Pendek!");

            } else {
                $(".signup-form input[name=username]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertUsername").empty();
            }
        }).keyup();
        return false;

    } else if (password == "") {
        $(".signup-form input[name=password]").focus();
        $(".signup-form input[name=password]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".signup-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertPassword").html("Password Tidak Boleh Kosong!");

            } else if (value.length < 4) {
                $(".signup-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertPassword").html("Password Terlalu Pendek!");

            } else {
                $(".signup-form input[name=password]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertPassword").empty();
            }
        }).keyup();
        return false;

    } else if (password.length < 4) {
        $(".signup-form input[name=password]").focus();
        $(".signup-form input[name=password]").keyup(function () {
            let value = $(this).val();
            if (value.length < 4) {
                $(".signup-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertPassword").html("Password Terlalu Pendek!");

            } else {
                $(".signup-form input[name=password]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertPassword").empty();
            }
        }).keyup();
        return false;

    } else if (confirmPassword == "") {
        $(".signup-form input[name=confirmPassword]").focus();
        $(".signup-form input[name=confirmPassword]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".signup-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertConfirmPassword").html("Konfirmasi Password Tidak Boleh Kosong!");

            } else if (value.length < 4) {
                $(".signup-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertConfirmPassword").html("Konfirmasi Password Terlalu Pendek!");

            } else {
                $(".signup-form input[name=confirmPassword]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertConfirmPassword").empty();
            }
        }).keyup();
        return false;

    } else if (confirmPassword.length < 4) {
        $(".signup-form input[name=confirmPassword]").focus();
        $(".signup-form input[name=confirmPassword]").keyup(function () {
            let value = $(this).val();
            if (value.length < 4) {
                $(".signup-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertConfirmPassword").html("Konfirmasi Password Terlalu Pendek!");

            } else {
                $(".signup-form input[name=confirmPassword]").css({
                    "border-color": "green"
                })
                $(".signup-form .alertConfirmPassword").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "home_signup.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            // cache: false,
            processData: false,
            success: function (data) {
                if (data == "Name") {
                    Swal.fire({
                        type: 'info',
                        position: 'center',
                        title: 'Nama Telah Terdaftar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    $(".app-btn-primary").css({
                        "background-color": "#15a362",
                        "color": "#fff"
                    })

                } else if (data == "Username") {
                    Swal.fire({
                        type: 'info',
                        position: 'center',
                        title: 'Username Telah Terdaftar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    $(".app-btn-primary").css({
                        "background-color": "#15a362",
                        "color": "#fff"
                    })

                } else if (data == "Password") {
                    Swal.fire({
                        type: 'info',
                        position: 'center',
                        title: 'Konfirmasi Password Tidak Sama',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    $(".app-btn-primary").css({
                        "background-color": "#15a362",
                        "color": "#fff"
                    })

                } else {
                    $(".btn-submit").css("cursor", "not-allowed")
                    $(".app-btn-primary").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })

                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Daftar Akun Berhasil, Silahkan Masuk!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location = './'
                    }, 1500);
                }
            },
        });
    }
    e.preventDefault();
}));

$("#cekUser").on('click', (function (e) {
    e.preventDefault()
    let username = $(".resetpass-form input[name=username]").val()

    if (username == "") {
        $(".resetpass-form input[name=username]").focus();
        $(".resetpass-form input[name=username]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".resetpass-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertUsername").html("Username Tidak Boleh Kosong!");
            } else if (value.length < 4) {
                $(".resetpass-form input[name=username]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".signup-form .alertUsername").html("Username Terlalu Pendek!");

            } else {
                $(".resetpass-form input[name=username]").css({
                    "border-color": "green"
                })
                $(".resetpass-form .alertUsername").empty();
            }
        }).keyup();
        return false;
    } else {
        $.ajax({
            url: "home_register.php",
            type: "POST",
            data: {
                inputUsername: username,
                inputType: "cekUser"
            },
            success: function (data) {
                if (data == 0) {
                    $(".resetpass-form .alertUsername").html("Username Tidak Ditemukan!");
                    $(".resetpass-form input[name=username]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                } else {
                    $(".resetpass-form .alertUsername").empty()
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $('#reset-username').prop('readonly', true);
                    $(".reset-password").load("page_reset.php")
                    $("#cekUser").toggle()
                    $(".cekUser").html(`
                    <button class="btn btn-success w-100 text-white" id="ubahSandi">Ubah Sandi Baru</button>
                    `)

                }
            },
        });
    }
}))