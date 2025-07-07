<div class="row g-4 mb-4 dashboard-data-global py-3 justify-content-center">
    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-2 p-lg-4">
                <div class="stats-figure">Data Yayasan 2022</div>
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
                                <td class="stat-cell Program2022ListAnggaran"></td>
                                <td class="stat-cell Program2022LisTerpakai"></td>
                                <td class="stat-cell Program2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Logistik Yayasan</a></td>
                                <td class="stat-cell Logistik2022ListAnggaran"></td>
                                <td class="stat-cell Logistik2022LisTerpakai"></td>
                                <td class="stat-cell Logistik2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Aset Yayasan</a></td>
                                <td class="stat-cell Aset2022ListAnggaran"></td>
                                <td class="stat-cell Aset2022LisTerpakai"></td>
                                <td class="stat-cell Aset2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Uang Makan</a></td>
                                <td class="stat-cell Makan2022ListAnggaran"></td>
                                <td class="stat-cell Makan2022LisTerpakai"></td>
                                <td class="stat-cell Makan2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Gaji Karyawan</a></td>
                                <td class="stat-cell Gaji2022ListAnggaran"></td>
                                <td class="stat-cell Gaji2022LisTerpakai"></td>
                                <td class="stat-cell Gaji2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Biaya Lainnya</a></td>
                                <td class="stat-cell Lainnya2022ListAnggaran"></td>
                                <td class="stat-cell Lainnya2022LisTerpakai"></td>
                                <td class="stat-cell Lainnya2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Maintenance Yayasan</a></td>
                                <td class="stat-cell Maintenance2022ListAnggaran"></td>
                                <td class="stat-cell Maintenance2022LisTerpakai"></td>
                                <td class="stat-cell Maintenance2022ListCashback"></td>
                            </tr>


                            <tr>
                                <td><a>Operasional Yayasan</a></td>
                                <td class="stat-cell Operasional2022ListAnggaran"></td>
                                <td class="stat-cell Operasional2022LisTerpakai"></td>
                                <td class="stat-cell Operasional2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Paud Qu El-ZamZam</a></td>
                                <td class="stat-cell Paud2022ListAnggaran"></td>
                                <td class="stat-cell Paud2022LisTerpakai"></td>
                                <td class="stat-cell Paud2022ListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Pembayaran Jasa</a></td>
                                <td class="stat-cell Jasa2022ListAnggaran"></td>
                                <td class="stat-cell Jasa2022LisTerpakai"></td>
                                <td class="stat-cell Jasa2022ListCashback"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <b>
                                        <center>Total Keseluruhan</center>
                                    </b>
                                </td>
                                <td class="stat-cell total2022ListAnggaran"></td>
                                <td class="stat-cell total2022LisTerpakai"></td>
                                <td class="stat-cell total2022ListCashback"></td>
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
                <h5 class="text-center mt-3 mb-2">Laporan <span class="title-table">Program</span> 2022</h5>

                <!-- table program -->
                <div class="table2022Program">
                    <div class="tables table-responsive">
                        <table class="table table-striped table-bordered nowrap table-list" id="program2022">
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
                <div class="table2022Logistik">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="logistik2022">
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
                <div class="table2022Aset">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="aset2022">
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
                <div class="table2022Makan">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="makan2022">
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
                <div class="table2022Gaji">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="gaji2022">
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
                <div class="table2022Lainnya">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="lainnya2022">
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
                <div class="table2022Maintenance">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="maintenance2022">
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
                <div class="table2022Operasional">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="operasional2022">
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
                <div class="table2022Paud">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="paud2022">
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
                <div class="table2022Jasa">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap table-list" id="jasa2022">
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
    <div class="row g-4 mb-4 pemasukan-select" style="display: none">
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
                                <td><a>Pemasukan Media Facebook</a></td>
                                <td class="stat-cell iFacebook"></td>
                            </tr>
                            <tr>
                                <td><a>Pemasukan Media Instagram</a></td>
                                <td class="stat-cell iInstagram"></td>
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
                                        <center>Total Keseluruhan</center>
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
                <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Harian</span> 2022</h5>

                <!-- table income harian -->
                <div class="laporan2022Harian">
                    <div class="tables table-responsive">
                        <table class="table table-striped table-bordered nowrap" id="harian2022">
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
                <div class="laporan2022Income">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="income2022">
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
                <div class="laporan2022NonResi">
                    <div class="tables table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="nonresi2022">
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
        $_COOKIE["id_pengurus"] == "manager_facebook" ||
        $_COOKIE["id_pengurus"] == "manager_instagram"
    ) { ?>
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
                            <td><a>Pemasukan Media Facebook</a></td>
                            <td class="stat-cell iFacebook"></td>
                        </tr>
                        <tr>
                            <td><a>Pemasukan Media Instagram</a></td>
                            <td class="stat-cell iInstagram"></td>
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
                                    <center>Total Keseluruhan</center>
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
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Harian</span> 2022</h5>

            <?php } else { ?>
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Donatur</span> 2022</h5>
            <?php } ?>

            <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <!-- table income harian -->
            <div class="laporan2022Harian">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="harian2022">
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
            <div class="laporan2022Income">
                <div class="tables table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap" id="income2022">
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
            <div class="laporan2022NonResi">
                <div class="tables table-responsive display-content">
                    <table class="table table-striped table-bordered nowrap" id="nonresi2022">
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
            <div class="laporan2022Income">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="income2022">
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
    <span class="list-account-income"></span>
    <div class="app-card app-card-orders-table mb-5">
        <div class="app-card app-card-body title-pemasukan">
            <h5 class="text-center mt-3 mb-2">Data <span class="title-table">Donatur</span> 2022</h5>
            <!-- table laporan income -->
            <div class="laporan2022Income">
                <div class="tables table-responsive">
                    <table class="table table-striped table-bordered nowrap" id="income2022">
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