<div class="tab-pane fade" id="sukses" role="tabpanel" aria-labelledby="orders-cancelled-tab">
    <div class="app-card app-card-orders-table mb-5">
        <?php if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") { ?>
        <div class="app-card-body">

            <div class="list-sukses">
                <div class="row justify-content-center">
                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukProgram active" id="btnList">Program</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukLogistik" id="btnList">Logistik</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukAset" id="btnList">Aset Yayasan</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukMakan" id="btnList">Uang Makan</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukGaji" id="btnList">Gaji Karyawan</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukLain" id="btnList">Biaya Lainnya</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukMain" id="btnList">Maintenance</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukOperasional" id="btnList">Operasional</button>
                        </div>
                    </div>

                    <div class="col-md-2 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukPaud" id="btnList">PaudQu El-ZamZam</button>
                        </div>
                    </div>

                    <div class="col-md-3 p-1">
                        <div class="button-list">
                            <button class="btn btn-info text-white w-100 sukJasa" id="btnList">Pembayaran Jasa</button>
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="text-center py-3">Laporan <span class="title-table">Program</span></h5>

            <!-- table laporan program -->
            <div class="suksesLapProgram">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapProgram">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Program</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan logistik -->
            <div class="suksesLapLogistik">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapLogistik">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan aset -->
            <div class="suksesLapAset">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapAset">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Qty Rencana</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan uang makan -->
            <div class="suksesLapUangMakan">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapUangMakan">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan gaji Karyawan -->
            <div class="suksesLapGaji">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapGaji">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan biaya lainnya -->
            <div class="suksesLapLainnya">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapLainnya">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan biaya lainnya -->
            <div class="suksesLapMaintenance">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapMaintenance">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan operasional yayasan -->
            <div class="suksesLapOperasional">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapOperasional">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan paud qu -->
            <div class="suksesLapPaud">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapPaud">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!-- table laporan jasa -->
            <div class="suksesLapJasa">
                <div class="table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap listTable-success" id="lapJasa">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Pengajuan</th>
                                <th scope="col">Tgl Pengajuan</th>
                                <th scope="col">Perencanaan</th>
                                <th scope="col">Anggaran</th>
                                <th scope="col">Tgl Laporan</th>
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

                    </table>
                </div>
            </div>

            <!--//table-responsive-->
        </div>

        <?php } elseif ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
        <div class="app-card-body">
            <h5 class="text-center py-3">Income CrossCheck</h5>
            <!-- table income -->
            <div class="tableIncomeCrossCheck">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="crossCheckIncome">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Opsi</th>
                                <th scope="col">Pemegang</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
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
                                <th colspan="7" style="text-align: center;">Total</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <!--//table-responsive-->
        </div>

        <?php } else { ?>
        <div class="app-card-body">
            <h5 class="text-center py-3">Income Terverifikasi</h5>
            <!-- table income -->
            <div class="tableincomeSukses">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered nowrap table-list" id="suksesIncome">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Resi</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Bank</th>
                                <th scope="col">Income</th>
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