<?php 
    // error_reporting(0);
    session_start();
    
    include './../function.php';
    $getID      = $_GET["id"];
    $getTeam    = $_GET["team"];
    $kategori    = $_GET["kategori"];
    $query  = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id_pengurus = '$getTeam' ORDER BY `posisi` ASC, nama ASC");
?>

<div class="form-floating my-2">
    <select class="form-select" name="listName" aria-label="Default select example" id="menuAkun<?= $getID; ?>">
        <option selected value="">Pilih Salah Satu Pengurus</option>

        <?php while ($data = mysqli_fetch_array($query)) { ?>
        <option value="<?= $data['nama'];?>">
            <?= ucwords($data['nama']) ?>
        </option>
        <?php 
            $conn->close();
        } ?>

    </select>
    <label for="floatingSelect">Nama Pengurus</label>
    <span class="alertNama text-danger"></span>
</div>

<div id="detailName<?= $getID; ?>"></div>

<script>
$("#menuAkun<?= $getID; ?>").change(function() {
    var menuAkun = $("#menuAkun<?= $getID; ?>").val();
    var id = `<?= $getID; ?>`
    var kategori = `<?= $kategori; ?>`
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "pages/input/input_list/detail_akun.php",
        data: {
            menuAkun: menuAkun,
            kategori: kategori
        },
        success: function(data) {
            $("#detailName" + id).html(data);
        }
    });
});
</script>