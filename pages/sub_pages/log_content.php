<div class="app-card app-card-orders-table mb-5">
    <div class="app-card app-card-body">
        <h5 class="text-center mt-3 mb-2">Data Log Ebudgeting</h5>

        <!-- table program -->
        <div class="tableLog">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap table-list" id="logActivity">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <?php if ($_COOKIE["id_pengurus"] == "admin_web") { ?>

                            <th scope="col">Menu</th>
                            <?php } ?>
                            <th scope="col">Nama</th>
                            <th scope="col">Posisi</th>
                            <th scope="col">Ip Address</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Pukul</th>
                            <th scope="col" style="text-align: center;">Riwayat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>
    </div>
    <!--//app-card-header-->
</div>