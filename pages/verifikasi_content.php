<div class="tab-pane fade" id="verifikasi" role="tabpanel" aria-labelledby="orders-paid-tab">
    <div class="app-card app-card-orders-table mb-5">
        <?php if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") { ?>
        <div class="app-card-body">

            <div class="list-verifikasi">
                <div class="row justify-content-center">
                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verProgram active"
                                id="btnList">Program</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verLogistik" id="btnList">Logistik</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verAset" id="btnList">Aset Yayasan</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verMakan" id="btnList">Uang Makan</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verGaji" id="btnList">Gaji Karyawan</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verLain" id="btnList">Biaya Lainnya</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verMain" id="btnList">Maintenance</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verOperasional"
                                id="btnList">Operasional</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verPaud" id="btnList">PaudQu El-ZamZam</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 verJasa" id="btnList">Pembayaran Jasa</button>
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="text-center py-3">Verifikasi <span class="title-table">Program</span></h5>

            <!-- table program -->
            <div class="tableProgram">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiProgram">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Program</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>

                    </table>
                </div>
            </div>

            <!-- table logistik -->
            <div class="tableLogistik">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiLogistik">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table aset yayasan -->
            <div class="tableAset">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiAset">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table uang makan -->
            <div class="tableUangMakan">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiUangMakan">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table  gaji karyawan -->
            <div class="tableGaji">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiGaji">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table biaya lainya -->
            <div class="tableLainnya">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiLainnya">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table maintenance -->
            <div class="tableMaintenance">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiMaintenance">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table operasional -->
            <div class="tableOperasional">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiOperasional">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table paud -->
            <div class="tablePaud">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiPaud">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table jasa -->
            <div class="tableJasa">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiJasa">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Diajukan Oleh</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>
            <!--//table-responsive-->
        </div>

        <?php } elseif($_COOKIE["id_pengurus"] == "kepala_income") { ?>
        <div class="list-verifikasi">
            <div class="row justify-content-center">
                <div class="col-md-6 p-1">
                    <div class="button-list incomeListMedia">
                        <button class="btn btn-info text-white w-100 incomeMedia active" href="#incomeMedia"
                            id="btnList">Income Media <span class="notifIncome"></span></button>

                    </div>
                </div>

                <div class="col-md-6 p-1">
                    <div class="button-list">
                        <button class="btn btn-info text-white w-100 incomeTanpaResi" href="#nonResi"
                            id="btnList">Income Tanpa Resi</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-card-body">

            <h5 class="text-center py-3">Tabel <span class="title-table">Income Media</span></h5>

            <!-- table income -->
            <div class="tableincome">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiIncome">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Akun</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Pemegang</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Bank</th>
                                <th scope="col">Income</th>
                                <th scope="col">Resi</th>
                                <th scope="col">Status</th>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- table non resi -->
            <div class="tableNonResi">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiNonResi">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Menu</th>
                                <th scope="col">kategori</th>
                                <th scope="col">Dilaporkan</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Pemasukan</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>
            <!--//table-responsive-->
        </div>

        <?php } else { ?>
        <div class="app-card-body">

            <h5 class="text-center py-3">Pending <span class="title-table">Income</span></h5>

            <!-- table income -->
            <div class="tableincome">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap table-list" id="verifikasiIncome">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Akun</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Bank</th>
                                <th scope="col">Income</th>
                                <th scope="col">Status</th>
                                <th scope="col">Resi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                    </table>
                </div>
            </div>
            <!--//table-responsive-->
        </div>
        <?php } ?>
        <!--//app-card-body-->
    </div>
    <!--//app-card-->
</div>