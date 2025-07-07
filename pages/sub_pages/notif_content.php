<div class="notif">
    <div class="list-notif">
        <div class="row justify-content-center">
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active btnPengajuanProgram" id="btnList" href="#program">Program <span
                            class="icon-notif notifProgram"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPengajuanLogistik" id="btnList" href="#logistik">Logistik <span
                            class="icon-notif notifLogistik"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPengajuanAset" id="btnList" href="#aset">Aset Yayasan <span
                            class="icon-notif notifAset"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPengajuanMakan" id="btnList" href="#makan">Uang Makan <span
                            class="icon-notif notifMakan"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnAjuGaji" id="btnList" href="#gaji">Gaji Karyawan <span
                            class="icon-notif notifGaji"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnAjuLainnya" id="btnList" href="#lainnya">Biaya Lainnya <span
                            class="icon-notif notifLainnya"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPengajuanMaintenance" id="btnList" href="#maintenance">Maintenance <span
                            class="icon-notif notifMaintenance"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnPengajuanOperasional" id="btnList" href="#operasional">Operasional <span
                            class="icon-notif notifOperasional"></span></button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnAjuPaud" id="btnList" href="#paud">PaudQu El-ZamZam <span
                            class="icon-notif notifPaud"></span></button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnAjuJasa" id="btnList" href="#jasa">Pembayaran Jasa <span
                            class="icon-notif notifJasa"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="app-card app-card-orders-table mb-5">
    <div class="app-card app-card-body">
        <h5 class="text-center mt-3 mb-2">Pengajuan <span class="title-table">Program</span></h5>

        <!-- table program -->
        <div class="tablePengajuanProgram">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanProgram">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Program</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>

        <!-- table logistik -->
        <div class="tablePengajuanLogistik">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanLogistik">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanAset">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanAset">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Qty Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanMakan">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanMakan">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanGaji">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanGaji">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanLainnya">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanLainnya">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>

        <!-- table maintenance -->
        <div class="tablePengajuanMaintenance">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanMaintenance">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanOperasional">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanOperasional">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>

        <!-- table paudqu -->
        <div class="tablePengajuanPaud">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanPaud">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
        <div class="tablePengajuanJasa">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap table-list" id="pengajuanJasa">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">No</th>
                            <th scope="col">Pengajuan</th>
                            <th scope="col">Tgl Pengajuan</th>
                            <th scope="col">Perencanaan</th>
                            <th scope="col">Anggaran</th>
                            <th scope="col">Status</th>
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
    <!--//app-card-header-->
</div>