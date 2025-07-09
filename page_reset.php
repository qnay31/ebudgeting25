<div class="password mb-2">
    <span toggle="#password-field" class="show-password toggle-password"><span class="showMe">Tampilkan</span>
        Password</span>
    <label class="sr-only" for="password-field">Password</label>
    <input name="password" type="password" class="form-control signup-password" id="password-field"
        placeholder="Password" maxlength='32' autocomplete="off">
    <p class="alertPassword text-danger"></p>
</div>
<div class="password mb-2">
    <span toggle="#password-field2" class="show-password toggle-password"><span class="showMe2">Tampilkan</span>
        Password</span>
    <label class="sr-only" for="password-field2">Password</label>
    <input id="password-field2" name="confirmPassword" type="password" class="form-control signup-password"
        placeholder="Konfirmasi Password" maxlength='32' autocomplete="off">
    <p class="alertConfirmPassword text-danger"></p>
</div>

<script>
$(".toggle-password").click(function() {

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

$(".resetpass-form").on('submit', (function(e) {
    let username = $(".resetpass-form input[name=username]").val()
    let password = $(".resetpass-form input[name=password]").val()
    let confirmPassword = $(".resetpass-form input[name=confirmPassword]").val()

    if (password == "") {
        $(".resetpass-form input[name=password]").focus();
        $(".resetpass-form input[name=password]").keyup(function() {
            let value = $(this).val();
            if (value == "") {
                $(".resetpass-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertPassword").html("Password Tidak Boleh Kosong!");

            } else if (value.length < 4) {
                $(".resetpass-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertPassword").html("Password Terlalu Pendek!");

            } else {
                $(".resetpass-form input[name=password]").css({
                    "border-color": "green"
                })
                $(".resetpass-form .alertPassword").empty();
            }
        }).keyup();
        return false;

    } else if (password.length < 4) {
        $(".resetpass-form input[name=password]").focus();
        $(".resetpass-form input[name=password]").keyup(function() {
            let value = $(this).val();
            if (value.length < 4) {
                $(".resetpass-form input[name=password]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertPassword").html("Password Terlalu Pendek!");

            } else {
                $(".resetpass-form input[name=password]").css({
                    "border-color": "green"
                })
                $(".resetpass-form .alertPassword").empty();
            }
        }).keyup();
        return false;

    } else if (confirmPassword == "") {
        $(".resetpass-form input[name=confirmPassword]").focus();
        $(".resetpass-form input[name=confirmPassword]").keyup(function() {
            let value = $(this).val();
            if (value == "") {
                $(".resetpass-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertConfirmPassword").html(
                    "Konfirmasi Password Tidak Boleh Kosong!");

            } else if (value.length < 4) {
                $(".resetpass-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertConfirmPassword").html(
                    "Konfirmasi Password Terlalu Pendek!");

            } else {
                $(".resetpass-form input[name=confirmPassword]").css({
                    "border-color": "green"
                })
                $(".resetpass-form .alertConfirmPassword").empty();
            }
        }).keyup();
        return false;

    } else if (confirmPassword.length < 4) {
        password
        $(".resetpass-form input[name=confirmPassword]").focus();
        $(".resetpass-form input[name=confirmPassword]").keyup(function() {
            let value = $(this).val();
            if (value.length < 4) {
                $(".resetpass-form input[name=confirmPassword]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".resetpass-form .alertConfirmPassword").html(
                    "Konfirmasi Password Terlalu Pendek!");

            } else {
                $(".resetpass-form input[name=confirmPassword]").css({
                    "border-color": "green"
                })
                $(".resetpass-form .alertConfirmPassword").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "home_register.php",
            type: "POST",
            data: {
                inputUsername: username,
                inputPassword: password,
                inputConfirmPassword: confirmPassword,
                inputType: "savePassword"
            },
            success: function(data) {
                if (data == "noConfirm") {
                    $(".resetpass-form input[name=confirmPassword]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".resetpass-form .alertConfirmPassword").html(
                        "Konfirmasi password tidak sama!");

                } else if (data == 1) {
                    $(".resetpass-form input[name=confirmPassword]").css({
                        "box-shadow": "none",
                        "border-color": "red"
                    })
                    $(".resetpass-form .alertConfirmPassword").html(
                        "Password ini sama yang kamu gunakan saat ini!");

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Password Berhasil Diganti!!',
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
</script>