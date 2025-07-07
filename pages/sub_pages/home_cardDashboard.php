<?php if (
    $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
    $_COOKIE["id_pengurus"] == "management_keuangan" ||
    $_COOKIE["id_pengurus"] == "kepala_pengajuan"
) { ?>
<div class="row g-4 mb-4 dashboard-top">
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Kegiatan Yayasan</h4>
                <div class="stats-figure anggaranBulanan"></div>
                <div class="stats-meta text-success">
                    Anggaran/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Kegiatan Yayasan</h4>
                <div class="stats-figure terpakaiBulanan"></div>
                <div class="stats-meta text-success">
                    Terpakai/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Kegiatan Yayasan</h4>
                <div class="stats-figure cashbackBulanan"></div>
                <div class="stats-meta">
                    Cashback/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>

<?php } elseif ($_COOKIE["id_pengurus"] == "sosial_media") { ?>
<div class="row g-4 mb-4 dashboard-top">
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeBulanLalu"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Lalu
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeBulanIni"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeTahunIni"></div>
                <div class="stats-meta text-success">
                    Income/Tahun Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeKemarin"></div>
                <div class="stats-meta text-success">
                    Income/Kemarin
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeHariIni"></div>
                <div class="stats-meta text-success">
                    Income/Hari Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>

<?php } elseif ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
<div class="row g-4 mb-4 dashboard-top">
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">FB Uang Saku I</h4>
                <div class="stats-figure incomeI"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">FB Uang Saku II</h4>
                <div class="stats-figure incomeII"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">IG Uang Saku</h4>
                <div class="stats-figure incomeIII"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">FB Sembako</h4>
                <div class="stats-figure incomeIG"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">IG Sembako</h4>
                <div class="stats-figure incomeIGII"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">FB Pembangunan</h4>
                <div class="stats-figure incomeIGIII"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">IG Pembangunan</h4>
                <div class="stats-figure incomeIGIV"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">FB Kesehatan</h4>
                <div class="stats-figure incomeFBKI"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Non Resi</h4>
                <div class="stats-figure iNonResi"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income Media</h4>
                <div class="stats-figure iMediaKemarin"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Lalu
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income Media</h4>
                <div class="stats-figure iMediaIni"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Keseluruhan Income Dgn Non Resi</h4>
                <div class="stats-figure iKeseluruhan"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>

<?php } elseif ($_COOKIE["username"] == "manager_fb" || $_COOKIE["username"] == "manager_ig") { ?>

<?php } elseif ( $_COOKIE["id_pengurus"] == "manager_facebook") { ?>
<div class="row g-4 mb-4 dashboard-top">
    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeKemarin"></div>
                <div class="stats-meta text-success">
                    Income/Kemarin
                </div>
            </div>
            <!--//app-card-body-->
            <div class="cardIncome">

            </div>
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeHariIni"></div>
                <div class="stats-meta text-success">
                    Income/Hari Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeBulanLalu"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Lalu
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeBulanIni"></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1">Total Income</h4>
                <div class="stats-figure incomeTahunIni"></div>
                <div class="stats-meta text-success">
                    Income/Tahun Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>
<?php } ?>