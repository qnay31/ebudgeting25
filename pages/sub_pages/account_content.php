<div class="row gy-4">
    <div class="col-12 col-lg-6">
        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <div class="col-auto">
                        <div class="app-icon-holder">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>
                        <!--//icon-holder-->

                    </div>
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">Profile</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-12">
                            <div class="item-data account-image image_area newProfil">
                                <form method="post" class="mb-2">
                                    <label for="upload_image">
                                        <img src="./assets/images/profiles/<?= $profil; ?>" id="uploaded_image"
                                            class="profile-image rounded-circle" />
                                        <div class="overlay">
                                            <a class="btn-sm app-btn-secondary" style="cursor: pointer">Ganti Foto</a>
                                        </div>
                                        <input type="file" name="image" class="image" id="upload_image"
                                            style="display:none" accept=".jpg,.jpeg,.png">
                                    </label>
                                </form>
                                <?php
                                    $qFoto  = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$dataLog[id]'");
                                    $dFoto  = $qFoto->fetch_assoc();
                                ?>
                                <?php if ($dFoto["profil"] !== "profil.png") { ?>
                                <span class="delete-button-image" style="display: block">
                                    <?php } else { ?>
                                    <span class="delete-button-image" style="display: none">

                                        <?php } ?>
                                        <a class="btn app-btn-secondary text-danger" style="cursor: pointer"
                                            id="hapusImage" data-id="<?= $dataLog["id"]; ?>">hapus
                                            foto</a>
                                    </span>
                            </div>

                            <div class="modal fade" id="modal-image" data-bs-backdrop="static" data-bs-keyboard="false"
                                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="modalLabel">Atur gambar sebelum diupload</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="img-container">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <img src="" id="sample_image" />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="preview"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Kembali</button>
                                            <button type="button" class="btn btn-primary text-white" id="crop"
                                                data-id="<?= $dataLog["id"]; ?>">Crop</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Nama</strong></div>
                            <div class="item-data"><?= ucwords($nama); ?></div>
                        </div>
                    </div>
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center changeUsername">
                        <div class="col-auto">
                            <div class="item-label"><strong>Username</strong></div>
                            <div class="item-data"><?= $username; ?></div>
                        </div>
                        <!--//col-->
                        <?php if (
                            $_COOKIE['id_pengurus'] == "sosial_media") { ?>
                        <div class="col text-end">
                            <a class="btn-sm app-btn-secondary" style="cursor: pointer">Ubah</a>
                        </div>
                        <!--//col-->
                        <?php } ?>
                    </div>
                    <!--//row-->

                    <?php if (
                        $_COOKIE['id_pengurus'] == "sosial_media"
                    ) { ?>
                    <form action="" method="post" id="formUsername" class="formChangeUsername py-2"
                        style="display: none">
                        <div class="form-floating mb-2">
                            <input type="hidden" name="id" value="<?= $dataLog["id"]; ?>">
                            <input type="text" class="form-control" name="newUsername" id="username"
                                placeholder="Username Baru" maxlength='32' autocomplete="off" value="<?= $username; ?>">
                            <label for="username">Username Baru</label>
                            <span class="alertNewUserName text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitNewUsernameName">Simpan</button>
                        </div>
                    </form>
                    <?php } ?>

                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Posisi</strong></div>
                            <div class="item-data">
                                <?= $dataLog["posisi"]; ?>
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Yayasan</strong></div>
                            <div class="item-data">
                                Yayasan Alkirom Amanah
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->

                <?php if (
                        $_COOKIE['id_pengurus'] == "sosial_media"
                    ) { ?>
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center changeNameAccount">
                        <div class="col-auto">
                            <div class="item-label"><strong>Daftar Akun</strong></div>

                            <div class="list-account"></div>
                        </div>
                        <!--//col-->
                        <div class="col text-end">
                            <a class="btn-sm app-btn-secondary" style="cursor: pointer">Ubah</a>
                            <span class="btn-sm app-btn-secondary" id="hapus" style="cursor: pointer">Hapus</span>
                        </div>
                    </div>
                    <!--//row-->
                    <form action="" method="post" id="formNameAccount" class="formChangeNameAccount py-2"
                        style="display: none">
                        <div class="form-floating mb-2">
                            <input type="hidden" name="id" value="<?= $dPengurus["id"]; ?>">
                            <select class="form-select akunNew" name="akun" id="setting-account"
                                aria-label="Default select example" style="font-size: 13px">
                            </select>
                            <label for="setting-account">Nama Akun</label>
                            <span class="alertAkun text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" name="newNameAccount" id="accountName"
                                placeholder="Nama Baru" maxlength='32' autocomplete="off">
                            <label for="accountName">Nama Akun Baru</label>
                            <span class="alertNewNameAccount text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitNewNameAccount">Simpan</button>
                        </div>
                    </form>

                    <form action="" method="post" id="formDelete" class="formDeleteNameAccount py-2"
                        style="display: none">
                        <div class="form-floating mb-2">
                            <input type="hidden" name="id" value="<?= $dPengurus["id"]; ?>">
                            <select class="form-select akunNew" name="akun" id="setting-delete-account"
                                aria-label="Default select example" id="akunNew" style="font-size: 13px">
                            </select>
                            <label for="setting-delete-account">Nama Akun</label>
                            <span class="alertAkun text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-danger w-100 text-white" id="deleteAccountName">Hapus</button>
                        </div>
                    </form>
                </div>
                <!--//item-->
                <?php } ?>

                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center changePassword">
                        <div class="col-auto">
                            <div class="item-label"><strong>Kata Sandi</strong></div>
                        </div>
                        <!--//col-->

                        <div class="col text-end">
                            <a class="btn-sm app-btn-secondary" style="cursor: pointer">Ubah</a>
                        </div>
                    </div>
                    <!--//row-->
                    <form action="" method="post" id="formPassword" class="formChangePassword py-2"
                        style="display: none">
                        <div class="password mb-2">
                            <input type="hidden" name="id" value="<?= $dataLog["id"]; ?>">
                            <span toggle="#password-field" class="show-password toggle-password"><span
                                    class="showMe">Tampilkan</span>
                                Password</span>
                            <label class="sr-only" for="password-field">Password</label>
                            <input name="password" type="password" class="form-control signup-password"
                                id="password-field" placeholder="Password Baru" maxlength='32' autocomplete="off">
                            <p class="alertPassword text-danger"></p>
                        </div>

                        <div class="password mb-2">
                            <span toggle="#password-field2" class="show-password toggle-password"><span
                                    class="showMe2">Tampilkan</span>
                                Password</span>
                            <label class="sr-only" for="password-field2">Password</label>
                            <input id="password-field2" name="confirmPassword" type="password"
                                class="form-control signup-password" placeholder="Konfirmasi Password" maxlength='32'
                                autocomplete="off">
                            <p class="alertConfirmPassword text-danger"></p>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitNewPassword">Simpan</button>
                        </div>
                    </form>
                </div>
                <!--//item-->
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>
<!--//row-->