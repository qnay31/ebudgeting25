<?php
error_reporting(0);
include "../../function.php";
if (isset($_POST['listMenuProgram'])) {
    $id = $_POST["listMenuProgram"];

    $query  = mysqli_query($conn, "SELECT * FROM input_program WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>
<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Program :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="program" value="<?= $data["program"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Kategori :</b></span>
    <input type="text" class="form-control" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_pengajuan"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= $data["deskripsi"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuLogistik'])) {
    $id = $_POST["listMenuLogistik"];

    $query  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["logistik"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_pengajuan"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuAset'])) {
    $id = $_POST["listMenuAset"];

    $query  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Jenis :</b></span>
    <input type="text" class="form-control" name="jenis" value="<?= $data["jenis"] ?>" readonly>
</div>

<?php if ($data["jenis"] == "Pembelian Barang") { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Qty :</b></span>
    <input type="text" class="form-control" value="<?= $data["qty_anggaran"]; ?> Pcs" readonly>
</div>
<?php } ?>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>

<?php if ($data["jenis"] == "Pembelian Barang") { ?>
<div class="input-group mb-2 listAset">
    <span class="input-group-text" id="basic-addon1"><b>Qty</b></span>
    <input type="text" class="form-control rupiah" name="qty" maxlength="11" placeholder="qty perencaan"
        onkeypress="return hanyaAngka(event)" autocomplete="off">
    <span class="input-group-text" id="basic-addon1"><b>Pcs</b></span>
</div>
<p class="alertQty text-danger"></p>

<script>
$('.rupiah').mask('000.000.000', {
    reverse: true
});
</script>

<?php } else { ?>
<input type="hidden" class="form-control" name="qty" value="0">
<?php } ?>

<?php } ?>

<?php } elseif (isset($_POST['listMenuMakan'])) {
    $id = $_POST["listMenuMakan"];

    $query  = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuGaji'])) {
    $id = $_POST["listMenuGaji"];

    $query  = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuLainnya'])) {
    $id = $_POST["listMenuLainnya"];

    $query  = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuMaintenance'])) {
    $id = $_POST["listMenuMaintenance"];

    $query  = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuOperasional'])) {
    $id = $_POST["listMenuOperasional"];

    $query  = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } elseif (isset($_POST['listMenuJasa'])) {
    $id = $_POST["listMenuJasa"];

    $query  = mysqli_query($conn, "SELECT * FROM input_jasa WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["kategori"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_dibuat"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>

<?php } else {
    $id = $_POST["listMenuPaud"];

    $query  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE id = '$id'");
    $data   = $query->fetch_assoc();
?>

<?php if ($id > 0) { ?>
<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Pengajuan :</b></span>
    <input type="hidden" name="key" value="<?= $data["id"]; ?>">
    <input type="text" class="form-control" name="kategori" value="<?= $data["program"] ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Tanggal Pengajuan :</b></span>
    <input type="text" class="form-control" value="<?= date('d-m-Y', strtotime($data["tgl_pengajuan"])); ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Perencanaan :</b></span>
    <input type="text" class="form-control" value="<?= ucwords($data["deskripsi"]) ?>" readonly>
</div>

<div class="input-group mb-1">
    <span class="input-group-text" id="basic-addon1"><b>Anggaran :</b></span>
    <input type="text" class="form-control" value="Rp. <?= number_format($data["dana_anggaran"],0,"." , ".") ?>"
        readonly>
</div>
<?php } ?>


<?php $conn->close(); } ?>