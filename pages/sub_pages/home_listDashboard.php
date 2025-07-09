<div class="row g-4 mb-4">
    <div class="col-12 col-lg-12">
        <?php if (
            $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
            $_COOKIE["id_pengurus"] == "management_keuangan" ||
            $_COOKIE["id_pengurus"] == "ketua_yayasan"
        ) { ?>
        <div class="app-card app-card-stats-table h-100 shadow-sm">
            <div class="app-card-header p-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <h4 class="app-card-title">List Kegiatan Yayasan</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body p-3 p-lg-4">
                <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th class="meta text-center">Daftar</th>
                                <th class="meta text-center stat-cell">Anggaran</th>
                                <th class="meta text-center stat-cell">Terpakai</th>
                                <th class="meta text-center stat-cell">Cashback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Program Yayasan</a></td>
                                <td class="stat-cell ProgramListAnggaran"></td>
                                <td class="stat-cell ProgramLisTerpakai"></td>
                                <td class="stat-cell ProgramListCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Logistik Yayasan</a></td>
                                <td class="stat-cell LogistikListAnggaran"></td>
                                <td class="stat-cell LogistikLisTerpakai"></td>
                                <td class="stat-cell LogistikListCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Aset Yayasan</a></td>
                                <td class="stat-cell AsetListAnggaran"></td>
                                <td class="stat-cell AsetLisTerpakai"></td>
                                <td class="stat-cell AsetListCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Uang Makan</a></td>
                                <td class="stat-cell MakanListAnggaran"></td>
                                <td class="stat-cell MakanLisTerpakai"></td>
                                <td class="stat-cell MakanListCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Gaji Karyawan</a></td>
                                <td class="stat-cell GajiListAnggaran"></td>
                                <td class="stat-cell GajiLisTerpakai"></td>
                                <td class="stat-cell GajiListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Biaya Lainnya</a></td>
                                <td class="stat-cell LainnyaListAnggaran"></td>
                                <td class="stat-cell LainnyaLisTerpakai"></td>
                                <td class="stat-cell LainnyaListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Maintenance Yayasan</a></td>
                                <td class="stat-cell MaintenanceListAnggaran"></td>
                                <td class="stat-cell MaintenanceLisTerpakai"></td>
                                <td class="stat-cell MaintenanceListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Operasional Yayasan</a></td>
                                <td class="stat-cell OperasionalListAnggaran"></td>
                                <td class="stat-cell OperasionalLisTerpakai"></td>
                                <td class="stat-cell OperasionalListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Paud Qu El-ZamZam</a></td>
                                <td class="stat-cell PaudListAnggaran"></td>
                                <td class="stat-cell PaudLisTerpakai"></td>
                                <td class="stat-cell PaudListCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Pembayaran Jasa</a></td>
                                <td class="stat-cell JasaListAnggaran"></td>
                                <td class="stat-cell JasaLisTerpakai"></td>
                                <td class="stat-cell JasaListCashback"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <b>
                                        <div class="text-center">Total Keseluruhan</div>
                                    </b>
                                </td>
                                <td class="stat-cell totalListAnggaran"></td>
                                <td class="stat-cell totalLisTerpakai"></td>
                                <td class="stat-cell totalListCashback"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!--//table-responsive-->
            </div>
            <!--//app-card-body-->
        </div>

        <?php } else { ?>
        <div class="app-card app-card-stats-table h-100 shadow-sm">
            <div class="app-card-header p-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <h4 class="app-card-title">List Rincian Program</h4>
                        <p class="titlegair"></p>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <div id="output"></div>
            <!--//app-card-header-->
            <div class="app-card-body p-3 p-lg-4">
                <div class="table-responsive tableAkun-list">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th class="meta text-center">Nama Program</th>
                                <th class="meta text-center stat-cell">Anggaran</th>
                                <th class="meta text-center stat-cell">Terpakai</th>
                                <th class="meta text-center stat-cell">Cashback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Santunan Bulanan</a></td>
                                <td class="stat-cell santunanAnggaran"></td>
                                <td class="stat-cell santunanTerpakai"></td>
                                <td class="stat-cell santunanCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Pendidikan Yatim</a></td>
                                <td class="stat-cell pendidikanAnggaran"></td>
                                <td class="stat-cell pendidikanTerpakai"></td>
                                <td class="stat-cell pendidikanCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Kesehatan Yatim</a></td>
                                <td class="stat-cell kesehatanAnggaran"></td>
                                <td class="stat-cell kesehatanTerpakai"></td>
                                <td class="stat-cell kesehatanCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Asrama Yatim</a></td>
                                <td class="stat-cell asramaAnggaran"></td>
                                <td class="stat-cell asramaTerpakai"></td>
                                <td class="stat-cell asramaCashback"></td>
                            </tr>
                            <tr>
                                <td><a>Yatim Binaan</a></td>
                                <td class="stat-cell binaanAnggaran"></td>
                                <td class="stat-cell binaanTerpakai"></td>
                                <td class="stat-cell binaanCashback"></td>
                            </tr>

                            <tr>
                                <td><a>Yatim Luar Binaan</a></td>
                                <td class="stat-cell luarBinaanAnggaran"></td>
                                <td class="stat-cell luarBinaanTerpakai"></td>
                                <td class="stat-cell luarBinaanCashback"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <b>
                                        <div class="text-center">Total Keseluruhan</div>
                                    </b>
                                </td>
                                <td class="stat-cell programListAnggaran"></td>
                                <td class="stat-cell programListTerpakai"></td>
                                <td class="stat-cell programListCashback"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!--//table-responsive-->
            </div>
            <!--//app-card-body-->
        </div>
        <?php } ?>
        <!--//app-card-->
    </div>
    <!--//col-->
</div>