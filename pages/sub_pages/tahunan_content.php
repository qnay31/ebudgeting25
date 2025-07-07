<div class="all-data">
    <div class="list-all-data">
        <div class="row justify-content-center">
            <?php if ($_COOKIE["id_pengurus"] == "sosial_media") { ?>
            <div class="col-md-4 p-1">
                <div class="button-list" id="dataDonatur22">
                    <button class="btn btn-primary text-white w-100 active" href="#data2022">Data 2022</button>
                </div>
            </div>

            <div class="col-md-4 p-1">
                <div class="button-list" id="dataDonatur23">
                    <button class="btn btn-primary text-white w-100" href="#data2023">Data 2023</button>
                </div>
            </div>

            <?php } else { ?>
            <div class="col-md-4 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active" href="#data2021">Data 2021</button>
                </div>
            </div>

            <div class="col-md-4 p-1">
                <div class="button-list" id="dataDonatur22">
                    <button class="btn btn-primary text-white w-100" href="#data2022">Data 2022</button>
                </div>
            </div>

            <div class="col-md-4 p-1">
                <div class="button-list" id="dataDonatur23">
                    <button class="btn btn-primary text-white w-100" href="#data2023">Data 2023</button>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</div>

<?php if ($_COOKIE["id_pengurus"] == "sosial_media") { ?>
<div class="dataGlobal2022">
    <?php include 'data_tahunan/data_2022.php'; ?>
</div>

<div class="dataGlobal2023 display-content">
    <?php include 'data_tahunan/data_2023.php'; ?>
</div>

<?php } else { ?>
<div class="dataGlobalTahun">
    <?php include 'data_tahunan/data_2021.php'; ?>
</div>

<div class="dataGlobal2022 display-content">
    <?php include 'data_tahunan/data_2022.php'; ?>
</div>

<div class="dataGlobal2023 display-content">
    <?php include 'data_tahunan/data_2023.php'; ?>
</div>
<?php } ?>