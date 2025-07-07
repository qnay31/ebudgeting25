<div class="list-laporan-sukses">
    <div class="list-laporan">
        <?php if (
            $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
            $_COOKIE["id_pengurus"] == "management_keuangan" ||
            $_COOKIE["id_pengurus"] == "ketua_yayasan") { ?>
        <div class="row justify-content-center">
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active btnProgram" id="btnList">Program</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnLogistik" id="btnList">Logistik</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnAset" id="btnList">Aset Yayasan</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnUangMakan" id="btnList">Uang Makan</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnGaji" id="btnList">Gaji Karyawan</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnLainnya" id="btnList">Biaya Lainnya</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnMaintenance" id="btnList">Maintenance</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnOperasional" id="btnList">Operasional</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPaud" id="btnList">PaudQu El-ZamZam</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnJasa" id="btnList">Pembayaran Jasa</button>
                </div>
            </div>

            <?php if ($_COOKIE["id_pengurus"] == "management_keuangan") { ?>
            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnIncomeHarian" id="btnList">Income Harian</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnIncomeNonResi" id="btnList">Income Non Resi</button>
                </div>
            </div>
            <?php } ?>

            <?php if ($_COOKIE["id_pengurus"] == "ketua_yayasan") { ?>
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnIncomeHarian" id="btnList">Income Harian</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnIncomeNonResi" id="btnList">Income Non Resi</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 incomeAkun" id="btnList">Income Akun</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnLaporanAkun" id="btnList">Akun</button>
                </div>
            </div>
            <?php } ?>
        </div>

        <?php } elseif ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
        <div class="row justify-content-center">
            <div class="col-md-4 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active incomeHarian" id="btnList">Income Harian</button>
                </div>
            </div>

            <div class="col-md-4 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 incomeAkun" id="btnList">Income Akun</button>
                </div>
            </div>

            <div class="col-md-4 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 incomeNonResi" id="btnList">Income Non Resi</button>
                </div>
            </div>
        </div>

        <?php } else { ?>
        <div class="row justify-content-center">
            <div class="col-md-6 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active btnIncome" id="btnList">Income</button>
                </div>
            </div>

            <div class="col-md-6 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnLaporanAkun" id="btnList">Akun</button>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
</div>

<div class="app-card app-card-orders-table mb-5">
    <div class="app-card app-card-body">

        <?php if (
            $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
            $_COOKIE["id_pengurus"] == "management_keuangan" ||
            $_COOKIE["id_pengurus"] == "ketua_yayasan"
            ) { ?>
        <h5 class="text-center mt-3 mb-2">Laporan Global <span class="title-table">Program</span></h5>
        <!-- table program -->
        <div class="tableLaporanProgram">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanProgram">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Program</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="5" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table logistik -->
        <div class="tableLaporanLogistik">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanLogistik">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table aset -->
        <div class="tableLaporanAset">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanAset">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Jenis</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Qty Perencanaan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Qty Pemakaian</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="6" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="4"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table uang makan -->
        <div class="tableLaporanMakan">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanMakan">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table gaji karyawan -->
        <div class="tableLaporanGaji">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanGaji">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table biaya lainnya -->
        <div class="tableLaporanLainnya">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanLainnya">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table maintenance -->
        <div class="tableLaporanMaintenance">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanMaintenance">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table operasional -->
        <div class="tableLaporanOperasional">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanOperasional">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table paud qu -->
        <div class="tableLaporanPaud">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanPaud">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table jasa -->
        <div class="tableLaporanJasa">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="laporanJasa">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Tgl laporan</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th colspan="3"></th>
                            <th></th>
                            <th></th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

        <!-- table income harian -->
        <div class="laporanIncomeHarian">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="incomeHarian">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Team</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="5" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- table laporan non resi -->
        <div class="laporanTableNonResi">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="laporanNonResi">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <?php if ($_COOKIE["id_pengurus"] == "ketua_yayasan") { ?>
        <!-- table laporan income -->
        <div class="laporanTableIncome">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="laporanIncome">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Akun</th>
                            <th scope="col">Pemegang</th>
                            <th scope="col">Nama Akun</th>
                            <th scope="col">Nama Donatur</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Bank</th>
                            <th scope="col">Income</th>
                            <th scope="col">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="8" style="text-align: center;">Total</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- table laporan income -->
        <div class="laporanTableAkunMedia">
            <div class="laporanTable display-content">
                <div class="list-media-akun mr-2">
                    <div class="btn btn-primary facebook active" id="mediaFacebook">Facebook</div>
                    <div class="btn btn-primary instagram" id="mediaInstagram">Instagram</div>
                </div>
                <div class="table-facebook">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered nowrap" id="lapTableAkunFacebook">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Tanggal Laporan</th>
                                    <th scope="col">Periode</th>
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
                            <tfoot>
                                <tr>
                                    <th colspan="6" style="text-align: center;">Total</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div class="table-instagram">
                    <div class="table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="lapTableAkunInstagram">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Tanggal Laporan</th>
                                    <th scope="col">Periode</th>
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
                            <tfoot>
                                <tr>
                                    <th colspan="7" style="text-align: center;">Total</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <?php } ?>

        <?php } elseif ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
        <h5 class="text-center mt-3 mb-2">Laporan Global <span class="title-table">Income Harian</span></h5>

        <!-- table income harian -->
        <div class="laporanIncomeHarian">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap" id="incomeHarian">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Team</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="5" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- table laporan income -->
        <div class="laporanTableIncome">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="laporanIncome">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Akun</th>
                            <th scope="col">Pemegang</th>
                            <th scope="col">Nama Akun</th>
                            <th scope="col">Nama Donatur</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Bank</th>
                            <th scope="col">Income</th>
                            <th scope="col">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="8" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- table laporan non resi -->
        <div class="laporanTableNonResi">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="laporanNonResi">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <?php } else { ?>
        <h5 class="text-center mt-3 mb-2">Laporan Global <span class="title-table">Income</span></h5>

        <!-- table laporan income -->
        <div class="laporanTableIncome">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap" id="laporanIncome">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Akun</th>
                            <th scope="col">Pemegang</th>
                            <th scope="col">Nama Akun</th>
                            <th scope="col">Nama Donatur</th>
                            <th scope="col">Tanggal Transfer</th>
                            <th scope="col">Periode</th>
                            <th scope="col">Bank</th>
                            <th scope="col">Income</th>
                            <th scope="col">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="8" style="text-align: center;">Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- table laporan akun -->
        <div class="laporanTableAkunMedia">
            <div class="laporanTable display-content">
                <div class="list-media-akun mr-2">
                    <div class="btn btn-primary facebook active" id="mediaFacebook">Facebook</div>
                    <div class="btn btn-primary instagram" id="mediaInstagram">Instagram</div>
                </div>
                <div class="table-facebook">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered nowrap" id="lapTableAkunFacebook">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Tanggal Laporan</th>
                                    <th scope="col">Periode</th>
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
                            <tfoot>
                                <tr>
                                    <th colspan="6" style="text-align: center;">Total</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div class="table-instagram">
                    <div class="table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="lapTableAkunInstagram">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Tanggal Laporan</th>
                                    <th scope="col">Periode</th>
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
                            <tfoot>
                                <tr>
                                    <th colspan="7" style="text-align: center;">Total</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--//table-responsive-->
        <?php } ?>
    </div>
    <!--//app-card-header-->
</div>