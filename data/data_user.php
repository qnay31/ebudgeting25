<?php
    require './../function.php';
    $no=0;
    $qOnline    = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id NOT LIKE '$dataLog[id]' AND id_pengurus NOT LIKE 'admin_web' ORDER BY nama ASC ");
?>
<?php while ($usr = $qOnline -> fetch_assoc()) { ?>
<div class="item p-2">
    <div class="row gx-2 justify-content-between align-items-center">
        <div class="col-auto">
            <img class="profile-image rounded-circle" src="./assets/images/profiles/<?= $usr["profil"]; ?>" alt="">
        </div>
        <!--//col-->
        <div class="col">
            <div class="info">
                <div class="desc online-name">
                    <?= ucwords($usr["nama"]) ?> <br>
                    <span class="online-posisi">
                        <?= ucwords($usr["posisi"]) ?>
                    </span>
                </div>

            </div>
        </div>
        <!--//col-->
    </div>
    <!--//row-->
</div>
<?php } ?>