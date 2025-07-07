<div class="row g-4 mb-4 dashboard-data-global py-3">
    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-2 p-lg-4">
                <div class="stats-figure">Data Yayasan 2021</div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <?php if (
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE["id_pengurus"] == "management_keuangan" ||
        $_COOKIE["id_pengurus"] == "kepala_pengajuan"
        ) { ?>

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

    <div class="app-card app-card-stats-table h-100 shadow-sm">
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
                            <td class="stat-cell Program2021ListAnggaran"></td>
                            <td class="stat-cell Program2021LisTerpakai"></td>
                            <td class="stat-cell Program2021ListCashback"></td>
                        </tr>

                        <tr>
                            <td><a>Bakti Sosial</a></td>
                            <td class="stat-cell Baksos2021ListAnggaran"></td>
                            <td class="stat-cell Baksos2021LisTerpakai"></td>
                            <td class="stat-cell Baksos2021ListCashback"></td>
                        </tr>

                        <tr>
                            <td><a>Logistik Yayasan</a></td>
                            <td class="stat-cell Logistik2021ListAnggaran"></td>
                            <td class="stat-cell Logistik2021LisTerpakai"></td>
                            <td class="stat-cell Logistik2021ListCashback"></td>
                        </tr>
                        <tr>
                            <td><a>Aset Yayasan</a></td>
                            <td class="stat-cell Aset2021ListAnggaran"></td>
                            <td class="stat-cell Aset2021LisTerpakai"></td>
                            <td class="stat-cell Aset2021ListCashback"></td>
                        </tr>
                        <tr>
                            <td><a>Produksi Yayasan</a></td>
                            <td class="stat-cell Produksi2021ListAnggaran"></td>
                            <td class="stat-cell Produksi2021LisTerpakai"></td>
                            <td class="stat-cell Produksi2021ListCashback"></td>
                        </tr>
                        <tr>
                            <td><a>Gaji Karyawan</a></td>
                            <td class="stat-cell Gaji2021ListAnggaran"></td>
                            <td class="stat-cell Gaji2021LisTerpakai"></td>
                            <td class="stat-cell Gaji2021ListCashback"></td>
                        </tr>

                        <tr>
                            <td><a>Humas Yayasan</a></td>
                            <td class="stat-cell Humas2021ListAnggaran"></td>
                            <td class="stat-cell Humas2021LisTerpakai"></td>
                            <td class="stat-cell Humas2021ListCashback"></td>
                        </tr>

                        <tr>
                            <td><a>Maintenance Yayasan</a></td>
                            <td class="stat-cell Maintenance2021ListAnggaran"></td>
                            <td class="stat-cell Maintenance2021LisTerpakai"></td>
                            <td class="stat-cell Maintenance2021ListCashback"></td>
                        </tr>

                        <tr>
                            <td><a>Operasional Yayasan</a></td>
                            <td class="stat-cell Operasional2021ListAnggaran"></td>
                            <td class="stat-cell Operasional2021LisTerpakai"></td>
                            <td class="stat-cell Operasional2021ListCashback"></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <b>
                                    <center>Total Keseluruhan</center>
                                </b>
                            </td>
                            <td class="stat-cell total2021ListAnggaran"></td>
                            <td class="stat-cell total2021LisTerpakai"></td>
                            <td class="stat-cell total2021ListCashback"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <!--//table-responsive-->
        </div>
        <!--//app-card-body-->
    </div>


    <?php if (
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE["id_pengurus"] == "management_keuangan"
    ) { ?>
    <div class="col-xs-12 col-md-4 col-lg-4">
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

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Kotak Amal</h4>
                <div class="stats-figure kotakAmal"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Celengan</h4>
                <div class="stats-figure celengan"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="app-card app-card-stats-table h-100 shadow-sm">
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
                            <td><a>Pemasukan Kotak Amal</a></td>
                            <td class="stat-cell iKotak"></td>
                        </tr>
                        <tr>
                            <td><a>Pemasukan Celengan</a></td>
                            <td class="stat-cell iCelengan"></td>
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
    <?php } ?>

    <?php } else if(
        $_COOKIE["id_pengurus"] == "kepala_income" || 
        $_COOKIE["id_pengurus"] == "manager_facebook" ||
        $_COOKIE["id_pengurus"] == "manager_instagram"
    ) { ?>
    <div class="col-xs-12 col-md-4 col-lg-4">
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

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Kotak Amal</h4>
                <div class="stats-figure kotakAmal"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Pemasukan Celengan</h4>
                <div class="stats-figure celengan"></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="app-card app-card-stats-table h-100 shadow-sm">
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
                            <td><a>Pemasukan Kotak Amal</a></td>
                            <td class="stat-cell iKotak"></td>
                        </tr>
                        <tr>
                            <td><a>Pemasukan Celengan</a></td>
                            <td class="stat-cell iCelengan"></td>
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
    <?php } ?>
</div>