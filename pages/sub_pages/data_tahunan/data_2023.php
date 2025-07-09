<div class="row g-4 mb-4 dashboard-data-global py-3 justify-content-center">
    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-2 p-lg-4">
                <div class="stats-figure">Data Yayasan 2023</div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>

    <?php if (
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE["id_pengurus"] == "management_keuangan"
        
    ) { ?>
    <div class="col-xs-6 col-md-6 col-lg-6 select-data" id="pengeluaran">
        <div class="app-card app-card-stat shadow-sm h-100 bg-primary">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1 text-light">Pengeluaran</h4>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-6 col-md-6 col-lg-6 select-data" id="pemasukan">
        <div class="app-card app-card-stat shadow-sm h-100 bg-primary">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1 text-light">Pemasukan</h4>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } elseif ($_COOKIE["id_pengurus"] == "kepala_pengajuan") { ?>
    <div class="col-xs-12 col-md-12 col-lg-12 select-data" id="pengeluaran">
        <div class="app-card app-card-stat shadow-sm h-100 bg-primary">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1 text-light">Pengeluaran</h4>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } ?>

    <?php if (
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE["id_pengurus"] == "management_keuangan" ||
        $_COOKIE["id_pengurus"] == "kepala_pengajuan"
        ) { ?>

    <div class="row g-3 mb-2 pengeluaran-select" style="display: none">
        <div class="col-xs-12">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Periode <span class="title-dropdown"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-periode">
                    <li><a class="dropdown-item" href="#Global">Global</a></li>
                    <li><a class="dropdown-item" href="#Januari">Januari</a></li>
                    <li><a class="dropdown-item" href="#Februari">Februari</a></li>
                    <li><a class="dropdown-item" href="#Maret">Maret</a></li>
                    <li><a class="dropdown-item" href="#April">April</a></li>
                    <li><a class="dropdown-item" href="#Mei">Mei</a></li>
                    <li><a class="dropdown-item" href="#Juni">Juni</a></li>
                    <li><a class="dropdown-item" href="#Juli">Juli</a></li>
                    <li><a class="dropdown-item" href="#Agustus">Agustus</a></li>
                    <li><a class="dropdown-item" href="#September">September</a></li>
                    <li><a class="dropdown-item" href="#Oktober">Oktober</a></li>
                    <li><a class="dropdown-item" href="#November">November</a></li>
                    <li><a class="dropdown-item" href="#Desember">Desember</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <div class="stats-figure title-data-pengeluaran">Periode Global</div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-12 col-md-4 col-lg-4">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Anggaran</h4>
                    <div class="stats-figure anggaran"></div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-12 col-md-4 col-lg-4">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Terpakai</h4>
                    <div class="stats-figure terpakai"></div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-12 col-md-4 col-lg-4">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Cashback</h4>
                    <div class="stats-figure cashback"></div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="app-card app-card-stats-table shadow-sm">
            <div class="app-card-header p-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <h4 class="app-card-title">List Kegiatan Yayasan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body p-3 p-lg-4">
                <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th class="meta text-center">Daftar</th>
                                <th class="meta text-center stat-cell">Anggaran</th>
                                <th class="meta text-center stat-cell">Terpakai</th>
                                <th class="meta text-center stat-cell">Cashback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Program Yayasan</a></td>
                                <td class="stat-cell Program2023ListAnggaran"></td>
                                <td class="stat-cell Program2023LisTerpakai"></td>
                                <td class="stat-cell Program2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Logistik Yayasan</a></td>
                                <td class="stat-cell Logistik2023ListAnggaran"></td>
                                <td class="stat-cell Logistik2023LisTerpakai"></td>
                                <td class="stat-cell Logistik2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Aset Yayasan</a></td>
                                <td class="stat-cell Aset2023ListAnggaran"></td>
                                <td class="stat-cell Aset2023LisTerpakai"></td>
                                <td class="stat-cell Aset2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Uang Makan</a></td>
                                <td class="stat-cell Makan2023ListAnggaran"></td>
                                <td class="stat-cell Makan2023LisTerpakai"></td>
                                <td class="stat-cell Makan2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Gaji Karyawan</a></td>
                                <td class="stat-cell Gaji2023ListAnggaran"></td>
                                <td class="stat-cell Gaji2023LisTerpakai"></td>
                                <td class="stat-cell Gaji2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Biaya Lainnya</a></td>
                                <td class="stat-cell Lainnya2023ListAnggaran"></td>
                                <td class="stat-cell Lainnya2023LisTerpakai"></td>
                                <td class="stat-cell Lainnya2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Maintenance Yayasan</a></td>
                                <td class="stat-cell Maintenance2023ListAnggaran"></td>
                                <td class="stat-cell Maintenance2023LisTerpakai"></td>
                                <td class="stat-cell Maintenance2023ListCashback"></td>
                            </tr>


                            <tr>
                                <td><a>Operasional Yayasan</a></td>
                                <td class="stat-cell Operasional2023ListAnggaran"></td>
                                <td class="stat-cell Operasional2023LisTerpakai"></td>
                                <td class="stat-cell Operasional2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Paud Qu El-ZamZam</a></td>
                                <td class="stat-cell Paud2023ListAnggaran"></td>
                                <td class="stat-cell Paud2023LisTerpakai"></td>
                                <td class="stat-cell Paud2023ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Pembayaran Jasa</a></td>
                                <td class="stat-cell Jasa2023ListAnggaran"></td>
                                <td class="stat-cell Jasa2023LisTerpakai"></td>
                                <td class="stat-cell Jasa2023ListCashback"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <b>
                                        <div class="text-center">Total Keseluruhan</div>
                                    </b>
                                </td>
                                <td class="stat-cell total2023ListAnggaran"></td>
                                <td class="stat-cell total2023LisTerpakai"></td>
                                <td class="stat-cell total2023ListCashback"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!--//table-responsive-->
            </div>
            <!--//app-card-body-->
        </div>

        <div class="col-md-3">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100 active" id="program">Program</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="logistik">Logistik</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="aset">Aset Yayasan</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="makan">Uang Makan</button>
            </div>
        </div>

        <div class="col-md-3">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="gaji">Gaji Karyawan</button>
            </div>
        </div>

        <div class="col-md-3">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="lainnya">Biaya Lainnya</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="maintenance">Maintenance</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="operasional">Operasional</button>
            </div>
        </div>

        <div class="col-md-2">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="paud">PaudQu El-ZamZam</button>
            </div>
        </div>

        <div class="col-md-3">
            <div class="button-list">
                <button class="btn btn-primary text-white w-100" id="jasa">Pembayaran Jasa</button>
            </div>
        </div>

        <div class="app-card app-card-orders-table mb-5">
            <div class="app-card app-card-body">
                <h5 class="text-center mt-3 mb-2">Laporan <span class="title-table">Program</span> 2023</h5>

                <!-- table program -->
                <div class="table2023Program">
                    <div class="tables table-responsive">
                        <table class="table table-striped table-bordered nowrap table-list" id="program2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table logistik -->
                <div class="table2023Logistik">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="logistik2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table aset -->
                <div class="table2023Aset">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="aset2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table uang makan -->
                <div class="table2023Makan">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="makan2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table gaji karyawan -->
                <div class="table2023Gaji">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="gaji2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table biaya lainnya -->
                <div class="table2023Lainnya">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="lainnya2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table maintenance -->
                <div class="table2023Maintenance">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="maintenance2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table operasional -->
                <div class="table2023Operasional">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="operasional2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table paud qu -->
                <div class="table2023Paud">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="paud2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <!-- table jasa -->
                <div class="table2023Jasa">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="jasa2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
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
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php if (
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE["id_pengurus"] == "management_keuangan"
    ) { ?>
    <div class="row g-3 mb-2 pemasukan-select" style="display: none">
        <div class="col-xs-12">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Periode <span class="title-dropdown"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-periode">
                    <li><a class="dropdown-item" href="#Global">Global</a></li>
                    <li><a class="dropdown-item" href="#Januari">Januari</a></li>
                    <li><a class="dropdown-item" href="#Februari">Februari</a></li>
                    <li><a class="dropdown-item" href="#Maret">Maret</a></li>
                    <li><a class="dropdown-item" href="#April">April</a></li>
                    <li><a class="dropdown-item" href="#Mei">Mei</a></li>
                    <li><a class="dropdown-item" href="#Juni">Juni</a></li>
                    <li><a class="dropdown-item" href="#Juli">Juli</a></li>
                    <li><a class="dropdown-item" href="#Agustus">Agustus</a></li>
                    <li><a class="dropdown-item" href="#September">September</a></li>
                    <li><a class="dropdown-item" href="#Oktober">Oktober</a></li>
                    <li><a class="dropdown-item" href="#November">November</a></li>
                    <li><a class="dropdown-item" href="#Desember">Desember</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <div class="stats-figure title-data-pemasukan">Periode Global</div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Pemasukan Media Sosial</h4>
                    <div class="stats-figure incomeMedia"></div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Pemasukan Non Resi</h4>
                    <div class="stats-figure incomeNonResi"></div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="app-card app-card-stats-table shadow-sm">
            <div class="app-card-header p-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <h4 class="app-card-title">List Pemasukan Yayasan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body p-3 p-lg-4">
                <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th class="meta text-center">Daftar</th>
                                <th class="meta text-center stat-cell">Pemasukan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Pemasukan Team Faceook</a></td>
                                <td class="stat-cell teamI"></td>
                            </tr>
                            <tr>
                                <td><a>Pemasukan Team Instagram</a></td>
                                <td class="stat-cell teamII"></td>
                            <tr>
                                <td><a>Pemasukan Non Resi</a></td>
                                <td class="stat-cell iResi"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <b>
                                        <div class="text-center">Total Keseluruhan</center>
                                    </b>
                                </td>
                                <td class="stat-cell totalPemasukan"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!--//table-responsive-->
            </div>
            <!--//app-card-body-->
        </div>

        <?php if ($_COOKIE["id_pengurus"] == "ketua_yayasan") { ?>
        <div class="col-md-4">
            <div class="button-list-pemasukan">
                <button class="btn btn-primary text-white w-100 active" id="harian">Harian</button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="button-list-pemasukan">
                <button class="btn btn-primary text-white w-100" id="donatur">Donatur</button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="button-list-pemasukan">
                <button class="btn btn-primary text-white w-100" id="nonResi">Non Resi</button>
            </div>
        </div>

        <?php } else { ?>
        <div class="col-md-6">
            <div class="button-list-pemasukan">
                <button class="btn btn-primary text-white w-100 active" id="harian">Harian</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="button-list-pemasukan">
                <button class="btn btn-primary text-white w-100" id="nonResi">Non Resi</button>
            </div>
        </div>
        <?php } ?>

        <div class="app-card app-card-orders-table mb-5">
            <div class="app-card app-card-body title-pemasukan">
                <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Harian</span> 2023</h5>

                <!-- table income harian -->
                <div class="laporan2023Harian">
                    <div class="tables table-responsive">
                        <table class="table table-striped table-bordered nowrap" id="harian2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
                            <thead>
                                <tr style="text-align: center;">
                                    <th scope="col">No</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Tanggal Transfer</th>
                                    <th scope="col">Periode</th>
                                    <th scope="col">Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- server side -->
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="5" style="text-align: center;">Total</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- table laporan income -->
                <div class="laporan2023Income">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="income2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
                            <thead>
                                <tr style="text-align: center;">
                                    <th scope="col">No</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Nama Akun</th>
                                    <th scope="col">Nama Donatur</th>
                                    <th scope="col">Tanggal Transfer</th>
                                    <th scope="col">Periode</th>
                                    <th scope="col">Bank</th>
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
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- table laporan non resi -->
                <div class="laporan2023NonResi">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="nonresi2023">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh
                                Data</span>
                            <thead>
                                <tr style="text-align: center;">
                                    <th scope="col">No</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">Tanggal Transfer</th>
                                    <th scope="col">Periode</th>
                                    <th scope="col">Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- server side -->
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="4" style="text-align: center;">Total</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>

    <?php } else if(
        $_COOKIE["id_pengurus"] == "kepala_income" || 
        $_COOKIE["id_pengurus"] == "manager_facebook"
    ) { ?>
    <span class="pemasukan-select">
        <div class="col-xs-12">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Periode <span class="title-dropdown"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-periode">
                    <li><a class="dropdown-item" href="#Global">Global</a></li>
                    <li><a class="dropdown-item" href="#Januari">Januari</a></li>
                    <li><a class="dropdown-item" href="#Februari">Februari</a></li>
                    <li><a class="dropdown-item" href="#Maret">Maret</a></li>
                    <li><a class="dropdown-item" href="#April">April</a></li>
                    <li><a class="dropdown-item" href="#Mei">Mei</a></li>
                    <li><a class="dropdown-item" href="#Juni">Juni</a></li>
                    <li><a class="dropdown-item" href="#Juli">Juli</a></li>
                    <li><a class="dropdown-item" href="#Agustus">Agustus</a></li>
                    <li><a class="dropdown-item" href="#September">September</a></li>
                    <li><a class="dropdown-item" href="#Oktober">Oktober</a></li>
                    <li><a class="dropdown-item" href="#November">November</a></li>
                    <li><a class="dropdown-item" href="#Desember">Desember</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <div class="stats-figure title-data-pemasukan">Periode Global</div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </span>

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Media Sosial</h4>
                <div class="stats-figure incomeMedia"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Non Resi</h4>
                <div class="stats-figure incomeNonResi"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="app-card app-card-stats-table shadow-sm">
        <div class="app-card-header p-3">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <h4 class="app-card-title">List Pemasukan Yayasan</h4>
                </div>
                <!--//col-->
            </div>
            <!--//row-->
        </div>
        <!--//app-card-header-->
        <div class="app-card-body p-3 p-lg-4">
            <div class="table-responsive">
                <table class="table table-bordered mb-0">
                    <thead>
                        <tr>
                            <th class="meta text-center">Daftar</th>
                            <th class="meta text-center stat-cell">Pemasukan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a>Pemasukan Facebook</a></td>
                            <td class="stat-cell teamI"></td>
                        </tr>
                        <tr>
                            <td><a>Pemasukan Instagram</a></td>
                            <td class="stat-cell teamII"></td>
                        </tr>
                        <tr>
                            <td><a>Pemasukan Non Resi</a></td>
                            <td class="stat-cell iResi"></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <b>
                                    <div class="text-center">Total Keseluruhan</div>
                                </b>
                            </td>
                            <td class="stat-cell totalPemasukan"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <!--//table-responsive-->
        </div>
        <!--//app-card-body-->
    </div>

    <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
    <div class="col-md-4">
        <div class="button-list-pemasukan">
            <button class="btn btn-primary text-white w-100 active" id="harian">Harian</button>
        </div>
    </div>

    <div class="col-md-4">
        <div class="button-list-pemasukan">
            <button class="btn btn-primary text-white w-100" id="donatur">Donatur</button>
        </div>
    </div>

    <div class="col-md-4">
        <div class="button-list-pemasukan">
            <button class="btn btn-primary text-white w-100" id="nonResi">Non Resi</button>
        </div>
    </div>
    <?php } ?>

    <div class="app-card app-card-orders-table mb-5">
        <div class="app-card app-card-body title-pemasukan">
            <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Harian</span> 2023</h5>

            <?php } else { ?>
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Donatur</span> 2023</h5>
            <?php } ?>

            <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <!-- table income harian -->
            <div class="laporan2023Harian">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="harian2023">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Team</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="5" style="text-align: center;">Total</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <!-- table laporan income -->
            <div class="laporan2023Income">
                <div class="tables table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap" id="income2023">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pemegang</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Bank</th>
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
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <!-- table laporan non resi -->
            <div class="laporan2023NonResi">
                <div class="tables table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap" id="nonresi2023">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- server side -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="4" style="text-align: center;">Total</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <?php } else { ?>
            <!-- table laporan income -->
            <div class="laporan2023Income">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="income2023">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pemegang</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Bank</th>
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
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
    <?php } else { ?>
    <span class="pemasukan-select">
        <div class="col-xs-12">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Periode <span class="title-dropdown"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-periode">
                    <li><a class="dropdown-item" href="#Global" id="00">Global</a></li>
                    <li><a class="dropdown-item" href="#Januari" id="01">Januari</a></li>
                    <li><a class="dropdown-item" href="#Februari" id="02">Februari</a></li>
                    <li><a class="dropdown-item" href="#Maret" id="03">Maret</a></li>
                    <li><a class="dropdown-item" href="#April" id="04">April</a></li>
                    <li><a class="dropdown-item" href="#Mei" id="05">Mei</a></li>
                    <li><a class="dropdown-item" href="#Juni" id="06">Juni</a></li>
                    <li><a class="dropdown-item" href="#Juli" id="07">Juli</a></li>
                    <li><a class="dropdown-item" href="#Agustus" id="08">Agustus</a></li>
                    <li><a class="dropdown-item" href="#September" id="09">September</a></li>
                    <li><a class="dropdown-item" href="#Oktober" id="10">Oktober</a></li>
                    <li><a class="dropdown-item" href="#November" id="11">November</a></li>
                    <li><a class="dropdown-item" href="#Desember" id="12">Desember</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <div class="stats-figure title-data-pemasukan">Periode Global</div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </span>

    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Pemasukan</h4>
                <div class="stats-figure incomeMedia"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <span class="list-account-income23"></span>
    <div class="app-card app-card-orders-table mb-5">
        <div class="app-card app-card-body title-pemasukan">
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Donatur</span> 2023</h5>
            <!-- table laporan income -->
            <div class="laporan2023Income">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="income2023">
                        <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">No</th>
                                <th scope="col">Pemegang</th>
                                <th scope="col">Nama Akun</th>
                                <th scope="col">Nama Donatur</th>
                                <th scope="col">Tanggal Transfer</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Bank</th>
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
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
</div>