<?php
error_reporting(0);
include "function.php";
if (isset($_POST['management'])) {
    $divisi = $_POST["management"];
?>

<?php if ($divisi == "Pembelian Barang") { ?>
<div class="input-group mb-2 listProgram">
    <span class="input-group-text" id="basic-addon1"><b>Qty</b></span>
    <input type="text" class="form-control rupiah" name="qty" maxlength="11" placeholder="qty perencaan"
        onkeypress="return hanyaAngka(event)" autocomplete="off">
    <span class="input-group-text" id="basic-addon1"><b>Pcs</b></span>
</div>

<label for="" class="form-label">
    <span class="alertQty text-danger"></span>
</label>

<script>
$('.rupiah').mask('000.000.000', {
    reverse: true
});
</script>

<?php } else { ?>
<input type="hidden" class="form-control" name="qty" value="0">
<?php } ?>


<?php } ?>