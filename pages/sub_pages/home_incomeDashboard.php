<?php if ($_COOKIE["id_pengurus"] == "management_keuangan") { ?>
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
                <h4 class="stats-type mb-1">Income Tanpa Resi</h4>
                <div class="stats-figure incomeTanpaResi"></div>
                <div class="stats-meta">
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
                <h4 class="stats-type mb-1">Total Keseluruhan Income Media</h4>
                <div class="stats-figure incomeKeseluruhan"></div>
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
                <h4 class="stats-type mb-1">Total Keseluruhan Pemasukan Dgn Cashback </h4>
                <div class="stats-figure incomeCashback"></div>
                <div class="stats-meta text-success">
                    Income/Bulan
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>

<?php } else { ?>
<div class="row g-4 mb-4 dashboard-top">
    <div class="col-12 col-md-4 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <div class="col-auto">
                        <h4 class="app-card-title">FB Uang Saku I</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-I">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <div class="col-12 col-md-4 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-h
            .eader p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">FB Uang Saku II</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-II">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <!--//col-->
    <div class="col-12 col-md-4 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">IG Uang Saku</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-III">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <!--//col-->
    <div class="col-12 col-lg-6">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">FB Sembako</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-IG">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <!--//col-->
    <div class="col-12 col-lg-6">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">IG Sembako</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-IG-II">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-12 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">FB Pembangunan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-IG-III">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-12 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">IG Pembangunan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-IG-IV">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-12 col-lg-4">
        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">FB Kesehatan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4">

                <div class="intro py-2 income-team-FB-KI">
                    <div class="incomeHariKemarin"></div>
                    <div class="incomeHariIni"></div>
                    <div class="incomeBulanIni"></div>
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
                <h4 class="stats-type mb-1">Income Tanpa Resi</h4>
                <div class="stats-figure iNonResi"></div>
                <div class="stats-meta">
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
<?php } ?>