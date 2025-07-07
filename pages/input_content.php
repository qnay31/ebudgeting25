<div class="tab-pane fade show active" id="input" role="tabpanel" aria-labelledby="orders-all-tab">
    <div class="app-card app-card-orders-table shadow-sm mb-5">
        <div class="app-card-body">
            <?php if ($_SESSION["id_pengurus"] == "kepala_pengajuan") { ?>
            <div class="form-input">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Daftar Pengajuan
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Daftar Pengajuan</a></li>
                        <li><a class="dropdown-item" href="#">Program</a></li>
                        <li><a class="dropdown-item" href="#">Logistik</a></li>
                        <li><a class="dropdown-item" href="#">Aset Yayasan</a></li>
                        <li><a class="dropdown-item" href="#">Uang Makan</a></li>
                        <li><a class="dropdown-item" href="#">Gaji Karyawan</a></li>
                        <li><a class="dropdown-item" href="#">Biaya Lainnya</a></li>
                        <li><a class="dropdown-item" href="#">Maintenance</a></li>
                        <li><a class="dropdown-item" href="#">Operasional</a></li>
                        <li><a class="dropdown-item" href="#">PaudQu El-ZamZam</a></li>
                        <li><a class="dropdown-item" href="#">Pembayaran Jasa</a></li>
                    </ul>
                </div>

                <!-- Form Program -->
                <div class="contentProgram formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <select class="form-select" name="pengajuan" aria-label="Default select example" id="menuProgram">
                                <option selected value="">Pilih Salah Satu Program</option>
                                <option value="Program Santunan Bulanan">Santunan Bulanan</option>
                                <option value="Program Pendidikan Yatim">Pendidikan Yatim</option>
                                <option value="Program Kesehatan Yatim">Kesehatan Yatim</option>
                                <option value="Program Santunan Yatim">Santunan Yatim</option>
                                <option value="Program Uang Saku Yatim">Uang Saku Yatim</option>
                                <option value="Program Ceria Yatim">Ceria Yatim</option>
                                <option value="Program Belanja Yatim">Belanja Yatim</option>
                                <option value="Program Papan Yatim">Papan Yatim</option>
                                <option value="Program Bakti Sosial">Bakti Sosial</option>
                                <option value="Program Sembako Yatim">Sembako Yatim</option>
                                <option value="Program Pesantren Yatim">Pesantren Yatim</option>
                                <!--<option value="Program Asrama Yatim">Asrama Yatim</option>-->
                                <option value="Program Tabungan Yatim">Tabungan Yatim</option>
                                <option value="Program Uang Makan">Uang Makan</option>
                                <option value="Program Kegiatan Asrama">Kegiatan Asrama</option>
                                <option value="Hampers">Hampers</option>
                                <option value="Zakat Fitrah">Zakat Fitrah</option>
                            </select>
                            <label for="floatingSelect">Program</label>
                            <span class="alertProgram text-danger"></span>
                        </div>

                        <div class="form-group mb-2" id="listProgram">
                        </div>

                        <div class="form-floating mb-2">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana Anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="btnSubmit">Input</button>
                        </div>
                    </form>

                    <!-- Modal -->
                    <div class="modal fade" id="modalSekolah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Isi Nama Sekolah Yatim</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form method="post" id="form2">
                                        <div class="mb-3 forms-sekolah">
                                            <div id="disabledSelect" class="form-text mb-2">
                                                Nama Sekolah
                                            </div>
                                            <input type="text" class="form-control" name="schollName" placeholder="TK/SD/MI/SMP/SMK" id="akunName"
                                                style="text-transform: capitalize;" autocomplete="off">
                                            <span class="pesan text-danger"></span>
                                        </div>

                                        <div class="button">
                                            <input type="button" name="simpanSekolah" id="Submit" class="btn btn-primary text-white w-100" value="Simpan">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Logistik -->
                <div class="contentLogistik formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="text" class="form-control" name="pengajuan" id="floatingInputa" value="Logistik Gedung" readonly>
                            <label for="floatingInputa">Logistik</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="date" class="form-control" name="tglPengajuan" id="date" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" name="perencanaan" id="floatingInputa" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating">
                            <input type="text" class="form-control rupiah" name="anggaran" id="floatingInputGroup1" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitLogistik">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Aset -->
                <div class="contentAset formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Aset Yayasan">
                            <select class="form-select" aria-label="Default select example" name="pengajuan" id="management">
                                <option selected value="">Pilih Salah Satu Aset</option>
                                <option value="Pembelian Barang">Pembelian Barang</option>
                                <option value="Pembangunan">Pembangunan</option>
                            </select>
                            <label for="floatingSelect">Aset</label>
                            <span class="alertAset text-danger"></span>
                        </div>

                        <div class="input-group disabled" id="bagian">
                        </div>

                        <div class="form-floating mb-2">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitAset">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Uang Makan -->
                <div class="contentUangMakan formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Uang Makan">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitUMakan">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Gaji -->
                <div class="contentGaji formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Gaji Karyawan">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitGaji">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Biaya Lainnya -->
                <div class="contentLainnya formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Biaya Lainnya">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitLainnya">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Maintenance -->
                <div class="contentMaintenance formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Maintenance">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitMaintenance">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Operasional -->
                <div class="contentOperasional formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Operasional Yayasan">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitOperasional">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Paud Qu -->
                <div class="contentPaud formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Paud Qu">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitPaud">Input</button>
                        </div>
                    </form>
                </div>

                <!-- Form Jasa -->
                <div class="contentJasa formContent">
                    <form action="" method="post" id="form">
                        <div class="form-floating my-2">
                            <input type="hidden" name="kategori" value="Jasa">
                            <input type="date" class="form-control" id="date" name="tglPengajuan" placeholder="Tanggal Pengajuan">
                            <label for="date">Tanggal Pengajuan</label>
                            <span class="alertTgl text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputa" name="perencanaan" placeholder="Rencana anggaran">
                            <label for="floatingInputa">Perencanaan</label>
                            <span class="alertPerencanaan text-danger"></span>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputGroup1" name="anggaran" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputGroup1">Anggaran</label>
                            <span class="alertAnggaran text-danger"></span>
                        </div>

                        <div class="button-submit mb-2">
                            <button class="btn btn-success w-100 text-white" id="submitJasa">Input</button>
                        </div>
                    </form>
                </div>
            </div>

            <?php } elseif($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <!-- Form Non Resi -->
            <div class="contentNonResi">
                <form action="" method="post" id="form">
                    <div class="input-group mb-2">
                        <span class="input-group-text" id="basic-addon1"><b>Income</b></span>
                        <input type="text" class="form-control" name="kategori" value="Tanpa Resi" readonly>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="date" class="form-control" id="date" name="tanggal" placeholder="Tanggal Non Resi">
                        <label for="date">Tanggal Non Resi</label>
                        <p class="alertNonResi text-danger"></p>
                    </div>

                    <div class="form-floating mb-2">
                        <input type="text" class="form-control rupiah" id="floatingInputNonResi" name="transfer" placeholder="10.000.000"
                            onkeypress="return hanyaAngka(event)">
                        <label for="floatingInputNonResi">Total Non Resi</label>
                        <p class="alertTransfer text-danger"></p>
                    </div>

                    <div class="button-submit mb-2">
                        <button class="btn btn-primary w-100 text-white" id="btnSubmitNonResi">Input</button>
                    </div>
                </form>
            </div>

            <?php } else { ?>
            <div class="form-input">
                <div class="button">
                    <a class="btn btn-secondary w-100 mb-3" data-bs-toggle="modal" data-bs-target="#modalAkun">
                        Tambah Akun Baru
                    </a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="modalAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Input Akun Baru</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="forms">
                                    <form action="" method="post">

                                        <div class="mb-2">
                                            <div id="disabledSelect" class="form-text mb-2">
                                                Nama Akun
                                            </div>
                                            <input type="text" class="form-control" name="akunName" placeholder="Nama Akun" autocomplete="off">
                                            <span class="pesan text-danger"></span>
                                        </div>

                                        <div class="form-floating mb-2">
                                            <select class="form-select" name="sosialMedia" aria-label="Default select example">
                                                <option selected value="">- Pilih Salah Satu Sosial Media -</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Instagram">Instagram</option>
                                            </select>
                                            <label for="floatingSelect">Pilih Kategori Akun</label>
                                            <span class="alertSosialMedia text-danger"></span>
                                        </div>

                                        <div class="teamAdminMediaSosial"></div>

                                        <div class="button">
                                            <input type="submit" name="saveAkun" class="btn btn-primary text-white w-100" value="Tambah Akun" id="saveAkun">
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kembali</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="inputIncome">
                    <a id="refreshAkun" class="btn app-btn-secondary mb-2">Refresh Akun</a>
                    <form action="" method="post" class="formIncome" id="form" enctype="multipart/form-data">
                        <div class="form-floating mb-2">
                            <select class="form-select akunNew" name="akun" aria-label="Default select example" id="akunNew">
                            </select>
                            <label for="floatingSelect">Nama Akun</label>
                            <p class="alertAkun text-danger"></p>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputDonatur" name="namaDonatur" placeholder="Nama Donatur">
                            <label for="floatingInputDonatur">Nama Donatur</label>
                            <p class="alertDonatur text-danger"></p>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="date" class="form-control" id="floatingInputTanggal" name="tanggal" placeholder="Tanggal Transfer">
                            <label for="floatingInputTanggal">Tanggal Transfer</label>
                            <p class="alertTanggal text-danger"></p>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="time" class="form-control" id="floatingInputJam" name="jam" placeholder="Jam Transfer">
                            <label for="floatingInputJam">Jam Transfer</label>
                            <p class="alertJam text-danger"></p>
                        </div>

                        <div class="form-floating mb-2">
                            <select class="form-select" name="bank" aria-label="Default select example">
                                <option selected value="">- Pilih Salah Satu Bank -</option>
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
                            <label for="floatingSelect">Pilih Bank</label>
                            <p class="alertBank text-danger"></p>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rupiah" id="floatingInputTransfer" name="transfer" placeholder="10.000.000"
                                onkeypress="return hanyaAngka(event)">
                            <label for="floatingInputTransfer">Jumlah Transfer</label>
                            <p class="alertTransfer text-danger"></p>
                        </div>
                        
                        <div id="disabledSelect" class="form-text mb-2">
                            Lampirkan Resi
                        </div>

                        <div class="file-drop-area">
                            <span class="choose-file-button">Pilih Gambar</span>
                            <span class="file-message">or drag and drop files here</span>
                            <input type="file" name="resi" id="files" class="file-input" accept=".jpg,.jpeg,.png"
                                required oninvalid="this.setCustomValidity('Lampirkan Resi')"
                                oninput="this.setCustomValidity('')">
                        </div>
                        <div class="divImageMediaPreview" id="divImageMediaPreview"> </div>
                        
                        <div class="button-submit">
                            <button type="submit" name="input" class="btn btn-primary text-white w-100" id="submitIncome">Laporkan</button>
                        </div>
                    </form>
                </div>
            </div>
            <?php } ?>

        </div>
        <!--//app-card-body-->
    </div>

</div>