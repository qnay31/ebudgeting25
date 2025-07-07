<div class="notifIncomeWait">
    <div class="list-notifIncomeWait">
        <div class="row justify-content-center">
            <div class="col-md-6 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 active btnIncomeMedia" href="#income">Income Media <span
                            class="notifIncomeMedia"></span></button>
                </div>
            </div>

            <div class="col-md-6 p-1">
                <div class="button-list">
                    <button class="btn btn-primary text-white w-100 btnNonResi" href="#noResi">Income Non Resi <span class="notifNonResi"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="app-card app-card-orders-table mb-5">
    <div class="app-card app-card-body">
        <h5 class="text-center mt-3 mb-2">Laporan <span class="title-table">Income Media</span></h5>

        <!-- table pending income -->
        <div class="tableIncomeWaiting">
            <div class="table-responsive">
                <table class="table table-striped table-bordered nowrap" id="IncomeWaiting">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Dilaporkan</th>
                            <th scope="col">Gedung</th>
                            <th scope="col">Tanggal income</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- server side -->
                    </tbody>

                </table>
            </div>
        </div>

        <!-- table pending income -->
        <div class="tableNonResiWaiting">
            <div class="table-responsive display-content">
                <table class="table table-striped table-bordered nowrap" id="nonResiWaiting">
                    <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh Data</span>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Dilaporkan</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Tanggal income</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
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