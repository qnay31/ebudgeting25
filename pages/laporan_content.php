<div class="tab-pane fade" id="Ilaporan" role="tabpanel" aria-labelledby="orders-pending-tab">
    <div class="app-card app-card-orders-table mb-5">
        <div class="app-card-body">
            <?php if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") { ?>
            <div class="form-input">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Daftar Laporan
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Daftar Laporan</a></li>
                        <li><a class="dropdown-item" href="#program">Program <span
                                    class="icon-notif notifProgram"></span></a></li>
                        <li><a class="dropdown-item" href="#logistik">Logistik <span
                                    class="icon-notif notifLogistik"></span></a></li>
                        <li><a class="dropdown-item" href="#aset">Aset Yayasan <span
                                    class="icon-notif notifAset"></span></a></li>
                        <li><a class="dropdown-item" href="#makan">Uang Makan <span
                                    class="icon-notif notifMakan"></span></a></li>
                        <li><a class="dropdown-item" href="#gaji">Gaji Karyawan <span
                                    class="icon-notif notifGaji"></span></a></li>
                        <li><a class="dropdown-item" href="#lainnya">Biaya Lainnya <span
                                    class="icon-notif notifLainnya"></span></a></li>
                        <li><a class="dropdown-item" href="#maintenance">Maintenance <span
                                    class="icon-notif notifMaintenance"></span></a></li>
                        <li><a class="dropdown-item" href="#operasional">Operasional <span
                                    class="icon-notif notifOperasional"></span></a></li>
                        <li><a class="dropdown-item" href="#paud">PaudQu El-ZamZam <span
                                    class="icon-notif notifPaud"></span></a></li>
                        <li><a class="dropdown-item" href="#jasa">Pembayaran Jasa <span
                                    class="icon-notif notifJasa"></span></a></li>
                    </ul>
                </div>

                <!-- Form Program -->
                <div class="laporanProgram formContent">
                    <form action="" method="post" id="form" class="formLapProgram" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuProgram">
                                <?php 
                                $qProgram   = mysqli_query($conn, "SELECT * FROM input_program WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qProgram2  = mysqli_query($conn, "SELECT * FROM input_program WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numProgram = $qProgram2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qProgram)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuProgram">Laporan</label>
                            <p class="alertProgram text-danger"></p>
                        </div>

                        <?php if ($numProgram > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div class="text-center">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageProgram" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageProgram" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')">
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporProgram">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Logistik -->
                <div class="laporanLogistik formContent">
                    <form action="" method="post" id="form" class="formLapLogistik" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuLogistik">
                                <?php 
                                $qLogistik   = mysqli_query($conn, "SELECT * FROM input_logistik WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qLogistik2  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numLogistik = $qLogistik2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qLogistik)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuLogistik">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numLogistik > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageLogistik" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageLogistik" style="display: none">

                                <?php } ?>

                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')">
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporLogistik">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Aset -->
                <div class="laporanAset formContent">
                    <form action="" method="post" id="form" class="formLapAset" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuAset">
                                <?php 
                                $qAset   = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qAset2  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numAset = $qAset2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qAset)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuAset">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numAset > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageAset" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageAset" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')">
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporAset">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Uang Makan -->
                <div class="laporanUangMakan formContent">
                    <form action="" method="post" id="form" class="formLapUangMakan" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuMakan">
                                <?php 
                                $qUangMakan   = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qUangMakan2  = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numUangMakan = $qUangMakan2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qUangMakan)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuMakan">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numUangMakan > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageUangMakan" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageUangMakan" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')">
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporUangMakan">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Gaji -->
                <div class="laporanGaji formContent">
                    <form action="" method="post" id="form" class="formLapGaji" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuGaji">
                                <?php 
                                $qGaji   = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qGaji2  = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numGaji = $qGaji2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qGaji)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuGaji">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numGaji > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageGaji" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageGaji" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporGaji">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Biaya Lainnya -->
                <div class="laporanLainnya formContent">
                    <form action="" method="post" id="form" class="formLapLainnya" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuLainnya">
                                <?php 
                                $qLainnya   = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qLainnya2  = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numLainnya = $qLainnya2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qLainnya)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuLainnya">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numLainnya > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageLainnya" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageLainnya" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporLainnya">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Maintenance -->
                <div class="laporanMaintenance formContent">
                    <form action="" method="post" id="form" class="formLapMaintenance" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuMaintenance">
                                <?php 
                                $qMaintenan   = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qMaintenan2  = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numMaintenan = $qMaintenan2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qMaintenan)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuMaintenance">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numMaintenan > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageMaintenance" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageMaintenance" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporMaintenance">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Operasional -->
                <div class="laporanOperasional formContent">
                    <form action="" method="post" id="form" class="formLapOperasional" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuOperasional">
                                <?php 
                                $qOperasional   = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qOperasional2  = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numOperasional = $qOperasional2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qOperasional)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuOperasional">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numOperasional > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageOperasional" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageOperasional" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporOperasional">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Paud Qu -->
                <div class="laporanPaud formContent">
                    <form action="" method="post" id="form" class="formLapPaud" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuPaud">
                                <?php 
                                $qPaud   = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qPaud2  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numPaud = $qPaud2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qPaud)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuPaud">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numPaud > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pagePaud" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pagePaud" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporPaud">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>

                <!-- Form Jasa -->
                <div class="laporanJasa formContent">
                    <form action="" method="post" id="form" class="formLapJasa" enctype="multipart/form-data">
                        <div class="form-floating my-2">
                            <input type="hidden" name="id" value="kepala_pengajuan">
                            <input type="hidden" name="posisi" value="Kepala Pengajuan">
                            <select class="form-select" name="pengajuan" aria-label="Default select example"
                                id="listMenuJasa">
                                <?php 
                                $qJasa   = mysqli_query($conn, "SELECT * FROM input_jasa WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $qJasa2  = mysqli_query($conn, "SELECT * FROM input_jasa WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
                                $numJasa = $qJasa2->num_rows;
                                ?>
                                <option selected value="">Pilih Salah Satu Laporan</option>
                                <?php while($data = mysqli_fetch_array($qJasa)) { ?>
                                <option value="<?= $data["id"]; ?>"><?= ucwords($data["deskripsi"]); ?></option>
                                <?php } ?>
                            </select>
                            <label for="listMenuJasa">Laporan</label>
                            <p class="alertPengajuan text-danger"></p>
                        </div>

                        <?php if ($numJasa > 0) { ?>
                        <span class="infoForm" style="display: none">
                            <div style="text-align: center;">
                                <h5>Tidak ada yang perlu dilaporkan</h5>
                            </div>
                        </span>
                        <div class="display-pageJasa" style="display: block">

                            <?php } else { ?>
                            <span class="infoForm" style="display: block">
                                <div style="text-align: center;">
                                    <h5>Tidak ada yang perlu dilaporkan</h5>
                                </div>
                            </span>
                            <div class="display-pageJasa" style="display: none">

                                <?php } ?>
                                <div class="form-group mb-2 listLaporan" id="listLaporan">
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date" name="tglLaporan"
                                        placeholder="Tanggal Laporan">
                                    <label for="date">Tanggal Laporan</label>
                                    <p class="alertTglLaporan text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInputa" name="pemakaian"
                                        placeholder="Rencana Pemakaian">
                                    <label for="floatingInputa">Pemakaian</label>
                                    <p class="alertPemakaian text-danger"></p>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control rupiah" id="floatingInputGroup1"
                                        name="terpakai" placeholder="10.000.000" onkeypress="return hanyaAngka(event)">
                                    <label for="floatingInputGroup1">Terpakai</label>
                                    <p class="alertTerpakai text-danger"></p>
                                </div>

                                <div id="disabledSelect" class="form-text mb-2">
                                    Lampirkan Foto/Maks. 5 Foto (Maks 10mb/foto)
                                </div>

                                <div class="file-drop-area">
                                    <span class="choose-file-button">Pilih Gambar</span>
                                    <span class="file-message">or drag and drop files here</span>
                                    <input type="file" name="image[]" id="files" class="file-input"
                                        accept=".jpg,.jpeg,.png" multiple="3" required
                                        oninvalid="this.setCustomValidity('Lampirkan Foto')"
                                        oninput="this.setCustomValidity('')" />
                                </div>
                                <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>

                                <div class="form-text mb-2">
                                    <label for="berkas" class="form-label">Lampirkan Excel (Maks. 5mb)</label>
                                    <input id="berkas" type="file" name="excel" class="form-control"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        required oninvalid="this.setCustomValidity('Lampirkan Excel')"
                                        oninput="this.setCustomValidity('')" />
                                </div>

                                <div class="button-submit mb-2">
                                    <button class="btn btn-success w-100 text-white" type="submit"
                                        id="btnLaporJasa">Laporkan</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>

            <?php } elseif ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <!-- table pending income -->
            <div class="tableIncomePending">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="IncomePending">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Dilaporkan</th>
                                <th scope="col">Team</th>
                                <th scope="col">Tanggal income</th>
                                <th scope="col">Income</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>

                    </table>
                </div>
            </div>
            <?php } else { ?>
            <div class="form-input">
                <div class="button">
                    <a class="btn btn-primary text-white w-100 mb-3" data-bs-toggle="modal"
                        data-bs-target="#modalLaporan">
                        Buat Laporan Akun
                    </a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="modalLaporan" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Input Laporan</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="forms">
                                    <div class="inputLaporanAkunNew">
                                        <form action="" method="post">
                                            <div class="form-floating mb-1">
                                                <select class="form-select akunNew" name="akun"
                                                    aria-label="Default select example" id="akunNew">
                                                </select>

                                                <label for="floatingSelect">Nama Akun</label>
                                                <span class="alertAkun text-danger"></span>
                                            </div>

                                            <div class="form-floating mb-1">
                                                <input type="date" class="form-control" id="floatingInputTanggal"
                                                    name="tanggal" placeholder="Tanggal Laporan">
                                                <label for="floatingInputTanggal">Tanggal Laporan</label>
                                                <span class="alertTanggal text-danger"></span>
                                            </div>

                                            <div class="listInputLaporan">
                                                <div class="input-facebook" style="display: none">
                                                    <div class="form-floating mb-1">
                                                        <input type="text" class="form-control rupiah"
                                                            id="floatingInputTeman" name="teman"
                                                            placeholder="Total Teman"
                                                            onkeypress="return hanyaAngka(event)">
                                                        <label for="floatingInputTeman">Total Teman</label>
                                                        <span class="alertTeman text-danger"></span>
                                                    </div>

                                                    <div class="form-floating mb-1">
                                                        <input type="text" class="form-control rupiah"
                                                            id="floatingInputAdd" name="add" placeholder="Total Add"
                                                            onkeypress="return hanyaAngka(event)">
                                                        <label for="floatingInputAdd">Total Add</label>
                                                        <span class="alertAdd text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="input-instagram" style="display: none">
                                                    <div class="form-floating mb-1">
                                                        <input type="text" class="form-control rupiah"
                                                            id="floatingInputPengikut" name="pengikut"
                                                            placeholder="Total Pengikut"
                                                            onkeypress="return hanyaAngka(event)">
                                                        <label for="floatingInputPengikut">Total Pengikut</label>
                                                        <span class="alertPengikut text-danger"></span>
                                                    </div>

                                                    <div class="form-floating mb-1">
                                                        <input type="text" class="form-control rupiah"
                                                            id="floatingInputMengikuti" name="mengikuti"
                                                            placeholder="Total Mengikuti"
                                                            onkeypress="return hanyaAngka(event)">
                                                        <label for="floatingInputMengikuti">Total Mengikuti</label>
                                                        <span class="alertMengikuti text-danger"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-floating mb-1">
                                                <input type="text" class="form-control rupiah"
                                                    id="floatingInputSerangan" name="serangan"
                                                    placeholder="Total Serangan" onkeypress="return hanyaAngka(event)">
                                                <label for="floatingInputSerangan">Total Serangan</label>
                                                <span class="alertSerangan text-danger"></span>
                                            </div>

                                            <div class="form-floating mb-1">
                                                <input type="text" class="form-control rupiah" id="floatingInputDonatur"
                                                    name="donatur" placeholder="Total Donatur"
                                                    onkeypress="return hanyaAngka(event)">
                                                <label for="floatingInputDonatur">Total Donatur</label>
                                                <span class="alertDonatur text-danger"></span>
                                            </div>

                                            <div class="form-floating mb-1">
                                                <input type="text" class="form-control rupiah" id="floatingInputRespon"
                                                    name="respon" placeholder="Total Respon"
                                                    onkeypress="return hanyaAngka(event)">
                                                <label for="floatingInputRespon">Total Respon
                                                    (insyaallah,norek,belumbisabantu,dsb)</label>
                                                <span class="alertRespon text-danger"></span>
                                            </div>

                                            <div class="form-floating mb-1">
                                                <input type="text" class="form-control rupiah"
                                                    id="floatingInputNoRespon" name="noRespon"
                                                    placeholder="Total Tidak Respon"
                                                    onkeypress="return hanyaAngka(event)">
                                                <label for="floatingInputNoRespon">Total Tidak Respon</label>
                                                <span class="alertNoRespon text-danger"></span>
                                            </div>

                                            <div class="form-floating mb-2">
                                                <input type="text" class="form-control rupiah"
                                                    id="floatingInputTransfer" name="transfer"
                                                    placeholder="Total Transfer" onkeypress="return hanyaAngka(event)">
                                                <label for="floatingInputTransfer">Total Transfer</label>
                                                <span class="alertTransfer text-danger"></span>
                                            </div>

                                            <div class="input-submit-media">
                                                <div class="submit-facebook" style="display: none">
                                                    <div class="button-submitLaporan">
                                                        <button type="submit" name="input"
                                                            class="btn btn-primary text-white w-100"
                                                            id="submitLaporanAkunFacebook">Laporkan</button>
                                                    </div>
                                                </div>

                                                <div class="submit-instagram" style="display: none">
                                                    <div class="button-submitLaporan">
                                                        <button type="submit" name="input"
                                                            class="btn btn-primary text-white w-100"
                                                            id="submitLaporanAkunInstagram">Laporkan</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kembali</button>
                            </div>
                        </div>
                    </div>
                </div>


                <h5 class="text-center py-3 titleLaporan">Laporan Akun Media <span class="title-media">Facebook</span>
                </h5>
                <span class="text-danger" style="font-size: .9rem;">&nbsp; *Laporan teman/pengikut hanya bisa diubah
                    hari ini dan kemarin</span>

                <!-- table laporan program -->
                <div class="tableLaporanAkun">
                    <div class="list-tableLaporanAkun">
                        <span class="btn btn-primary facebook w-25 active" id="akunFB">Facebook</span>
                        <span class="btn btn-primary instagram w-25" id="akunIG">Instagram</span>
                    </div>

                    <div class="laporanAkunFB">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered nowrap" id="laporanAkunFacebook">
                                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                    Data</span>
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Menu</th>
                                        <th scope="col">Akun</th>
                                        <th scope="col">Tanggal Laporan</th>
                                        <th scope="col">Teman</th>
                                        <th scope="col">Add Teman</th>
                                        <th scope="col">Teman Baru</th>
                                        <th scope="col">Hapus Teman</th>
                                        <th scope="col">Serangan</th>
                                        <th scope="col">Respon</th>
                                        <th scope="col">Tdk Respon</th>
                                        <th scope="col">Donatur</th>
                                        <th scope="col">Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- server side -->
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div class="laporanAkunIG">
                        <div class="table-responsive display-content">
                            <table class="table table-striped table-bordered nowrap" id="laporanAkunInstagram">
                                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                    Data</span>
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Menu</th>
                                        <th scope="col">Akun</th>
                                        <th scope="col">Tanggal Laporan</th>
                                        <th scope="col">Pengikut</th>
                                        <th scope="col">Mengikuti</th>
                                        <th scope="col">Pengikut Baru</th>
                                        <th scope="col">Mengikuti Baru</th>
                                        <th scope="col">Hapus Pengikut</th>
                                        <th scope="col">Hapus Mengikuti</th>
                                        <th scope="col">Serangan</th>
                                        <th scope="col">Respon</th>
                                        <th scope="col">Tdk Respon</th>
                                        <th scope="col">Donatur</th>
                                        <th scope="col">Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- server side -->
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
        <!--//app-card-body-->
    </div>
    <!--//app-card-->
</div>