<div class="charts list-charts pb-2">
    <?php if (
        $dataLog["id_pengurus"] == "management_keuangan" ||
        $dataLog["id_pengurus"] == "kepala_pengajuan" ||
        $dataLog["id_pengurus"] == "ketua_yayasan"
        ) { ?>
    <div class="list-charts-programs">
        <div class="row justify-content-center">
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active" id="btnList" href="#program">Program</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#logistik">Logistik</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#aset">Aset Yayasan</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#makan">Uang Makan</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#gaji">Gaji Karyawan</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#lainnya">Biaya Lainnya</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#maintenance">Maintenance</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#operasional">Operasional</button>
                </div>
            </div>

            <div class="col-md-2 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#paud">PaudQu El-ZamZam</button>
                </div>
            </div>

            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#jasa">Pembayaran Jasa</button>
                </div>
            </div>

            <?php if (
                $dataLog["id_pengurus"] == "management_keuangan" ||
                $dataLog["id_pengurus"] == "ketua_yayasan"
            ) { ?>
            <div class="col-md-3 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100" id="btnList" href="#income">Income</button>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>

    <?php } else if(
        $dataLog["id_pengurus"] == "sosial_media" ||
        $dataLog["id_pengurus"] == "ketua_yayasan" ||
        $dataLog["id_pengurus"] == "kepala_income" ||
        $dataLog["id_pengurus"] == "manager_instagram" ||
        $dataLog["id_pengurus"] == "manager_facebook"
    ) { ?>
    <div class="list-charts-incomes">
        <div class="row justify-content-center">
            <div class="col-md-6 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active" id="btnList" href="#income">Income Media</button>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
</div>

<div class="charts-title py-3">
    <h5 class="text-center py-3">Grafik
        <?php if (
            $dataLog["id_pengurus"] == "kepala_income" ||
            $dataLog["id_pengurus"] == "sosial_media" ||
            $dataLog["id_pengurus"] == "manager_instagram" ||
            $dataLog["id_pengurus"] == "manager_facebook"

        ) { ?>
        <span class="title-charts">Income Media</span>

        <?php } else { ?>
        <span class="title-charts">Program</span>
        <?php } ?>
    </h5>
</div>

<?php if (
    $dataLog["id_pengurus"] == "management_keuangan" ||
    $dataLog["id_pengurus"] == "kepala_pengajuan" ||
    $dataLog["id_pengurus"] == "ketua_yayasan"
) { ?>
<div class="charts-program">
    <div class="row g-4 mb-4">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Program</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-program"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Pendidikan Yatim</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-pendidikan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Kesehatan Yatim</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-kesehatan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Asrama Yatim Yatim</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-asrama"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Santunan Bulanan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-santunan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Yatim Binaan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-binaan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Yatim Luar Binaan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-luarBinaan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>

<div class="charts-logistik">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Logistik</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-logistik"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-aset">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Aset Yayasan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-aset"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Pembangunan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-pembangunan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Pembelian Barang</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-pembelian"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-uangMakan">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Uang Makan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-uangMakan"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-gaji">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Gaji</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-gaji"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-lainnya">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Biaya Lainnya</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-lainnya"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-maintenance">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Maintenance</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-maintenance"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-operasional">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Operasional</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-operasional"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-paud">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Paud Qu Yayasan</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-paud"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->

<div class="charts-jasa">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Pembayaran Jasa</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-jasa"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->
<?php if (
     $dataLog["id_pengurus"] == "management_keuangan" ||
     $dataLog["id_pengurus"] == "ketua_yayasan"
) { ?>
<div class="charts-income">
    <div class="row g-4 mb-4 display-content">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Income</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-income"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Media</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-media"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Non Resi</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-nonResi"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->
<?php } ?>

<?php } else if ($dataLog["id_pengurus"] == "kepala_income") { ?>
<div class="charts-income">
    <div class="row g-4 mb-4">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Income</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-income"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Media</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-media"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-6">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Non Resi</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-nonResi"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<!--//row-->
<?php } else if (
    $dataLog["id_pengurus"] == "sosial_media" ||
    $dataLog["id_pengurus"] == "manager_instagram" ||
    $dataLog["id_pengurus"] == "manager_facebook"

) { ?>
<div class="charts-income">
    <div class="row g-4 mb-4">
        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Income</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-incomeMedia"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-12 col-lg-12">
            <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3 border-0">
                    <h4 class="app-card-title">Grafik Global Team Media</h4>
                </div>
                <!--//app-card-header-->
                <div class="app-card-body p-4">
                    <div class="chart-container">
                        <canvas id="chart-media"></canvas>
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>
</div>
<?php } ?>