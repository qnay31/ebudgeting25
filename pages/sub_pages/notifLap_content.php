<div class="notifLaporan">
    <div class="list-notifLaporan">
        <div class="row justify-content-center">
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active btnNotPengajuanProgram" id="btnList" href="#program">Program <span
                            class="icon-notif notifProgram"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanLogistik" id="btnList" href="#logistik">Logistik <span
                            class="icon-notif notifLogistik"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list"><button class="btn btn-primary text-white w-100 btnNotLaporanAset" id="btnList" href="#aset">Aset Yayasan <span
                            class="icon-notif notifAset"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanUangMakan" id="btnList" href="#makan">Uang Makan <span
                            class="icon-notif notifMakan"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanGaji" id="btnList" href="#gaji">Gaji Karyawan <span
                            class="icon-notif notifGaji"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanLainnya" id="btnList" href="#lainnya">Biaya Lainnya <span
                            class="icon-notif notifLainnya"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanMaintenance" id="btnList" href="#maintenance">Maintenance <span
                            class="icon-notif notifMaintenance"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanOperasional" id="btnList" href="#operasional">Operasional <span
                            class="icon-notif notifOperasional"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanPaud" id="btnList" href="#paud">PaudQu El-ZamZam <span
                            class="icon-notif notifPaud"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNotLaporanJasa" id="btnList" href="#jasa">Pembayaran Jasa <span
                            class="icon-notif notifJasa"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="app-card app-card-orders-table mb-5">
    <div class="app-card app-card-body">
        <h5 class="text-center mt-3 mb-2">Laporan Pengajuan <span class="title-table">Program</span></h5>

        <!-- table program -->
        <div class="tableNotLaporanProgram">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap table-list" id="notLaporanProgram">
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
                            <th scope="col">Pemakaian</th>
                            <th scope="col">Terpakai</th>
                            <th scope="col">Cashback</th>
                            <th scope="col">Resi</th>
                            <th scope="col">File/Berkas</th>
                            <th scope="col">Status Laporan</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>
    </div>

    <!-- table logistik -->
    <div class="tableNotLaporanLogistik">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanLogistik">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table aset yayasan -->
    <div class="tableNotLaporanAset">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanAset">
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
                        <th scope="col">Qty Pemakaian</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table uang makan -->
    <div class="tableNotLaporanMakan">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanMakan">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table gaji karyawan -->
    <div class="tableNotLaporanGaji">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanGaji">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table biaya lainnya -->
    <div class="tableNotLaporanLainnya">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanLainnya">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table Maintenance -->
    <div class="tableNotLaporanMaintenance">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanMaintenance">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table operasional -->
    <div class="tableNotLaporanOperasional">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanOperasional">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table paud qu -->
    <div class="tableNotLaporanPaud">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanPaud">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>

    <!-- table jasa -->
    <div class="tableNotLaporanJasa">
        <div class="table-responsive display-content">
            <table class="table table-striped table-bordered nowrap table-list" id="notLaporanJasa">
                <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">No</th>
                        <th scope="col">Pengajuan</th>
                        <th scope="col">Tgl Pengajuan</th>
                        <th scope="col">Perencanaan</th>
                        <th scope="col">Anggaran</th>
                        <th scope="col">Tgl laporan</th>
                        <th scope="col">Pemakaian</th>
                        <th scope="col">Terpakai</th>
                        <th scope="col">Cashback</th>
                        <th scope="col">Resi</th>
                        <th scope="col">File/Berkas</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- server side -->
                </tbody>

            </table>
        </div>
    </div>
    <!--//app-card-header-->
</div>