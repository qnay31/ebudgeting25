<div id="app-sidepanel" class="app-sidepanel">
    <div id="sidepanel-drop" class="sidepanel-drop"></div>
    <div class="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
        <div class="app-branding">
            <a class="app-logo" href="#dashboard" id="dashboard"><img class="logo-icon me-2"
                    src="assets/images/logo_favicon.png" alt="logo"><span class="logo-text">Ebudgeting</span></a>

        </div>
        <!--//app-branding-->

        <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
            <ul class="app-menu list-unstyled accordion" id="menu-accordion">
                <li class="nav-item">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link active" href="#dashboard" id="dashboard">
                        <span class="nav-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->

                <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
                <?php } else { ?>
                <li class="nav-item">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <!-- <a class="nav-link" href="#dokumen" id="dokumen">
                        <span class="nav-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-folder" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                                <path fill-rule="evenodd"
                                    d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Dokumen</span>
                    </a> -->
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->
                <li class="nav-item">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link" href="#laporan" id="laporan">
                        <span class="nav-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path fill-rule="evenodd"
                                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                                <circle cx="3.5" cy="5.5" r=".5" />
                                <circle cx="3.5" cy="8" r=".5" />
                                <circle cx="3.5" cy="10.5" r=".5" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Laporan</span>
                    </a>
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->
                <?php } ?>

                <?php if (
                    $_COOKIE['id_pengurus'] == "manager_instagram" || 
                    $_COOKIE['id_pengurus'] == "manager_facebook" ||
                    $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
                    $_COOKIE["id_pengurus"] == "kepala_income") { ?>
                <li class="nav-item">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link" href="#pengurus" id="pengurus">
                        <span class="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-people" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Pengurus</span>
                    </a>
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->
                <?php } ?>
                <?php if ($_COOKIE['id_pengurus'] == "management_keuangan") { ?>
                <li class="nav-item has-submenu">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link submenu-toggle" id="collapseMenu" href="#" data-bs-toggle="collapse"
                        data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                        <span class="nav-icon">
                            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-files" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z" />
                                <path
                                    d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Menu</span>
                        <span class="submenu-arrow">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                        <!--//submenu-arrow-->
                    </a>
                    <!--//nav-link-->
                    <div id="submenu-1" class="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                        <ul class="submenu-list list-unstyled">
                            <li class="submenu-item"><a class="submenu-link notification" id="notif"
                                    href="#notif">Pengajuan</a>
                            </li>

                            <li class="submenu-item"><a class="submenu-link notifContent-laporan" id="notifLaporan"
                                    href="#notifLaporan">Laporan</a>
                            </li>

                            <li class="submenu-item"><a class="submenu-link notifContent-income" id="notifIncome"
                                    href="#notifIncome">Income</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <!--//nav-item-->
                <?php } ?>

                <?php if (
                    $_COOKIE['id_pengurus'] == "kepala_pengajuan" || 
                    $_COOKIE['id_pengurus'] == "sosial_media" ||
                    $_COOKIE["id_pengurus"] == "kepala_income") { ?>
                <li class="nav-item has-submenu">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link submenu-toggle" href="#" id="collapseMenu" data-bs-toggle="collapse"
                        data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                        <span class="nav-icon">
                            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-columns-gap"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                            </svg>
                        </span>
                        <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
                        <span class="nav-link-text">CheckList</span>

                        <?php } else { ?>
                        <span class="nav-link-text">Input</span>
                        <?php } ?>
                        <span class="submenu-arrow">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                        <!--//submenu-arrow-->
                    </a>
                    <!--//nav-link-->
                    <div id="submenu-2" class="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                        <ul class="submenu-list list-unstyled">
                            <li class="submenu-item">
                                <?php if ($_COOKIE["id_pengurus"] =="kepala_pengajuan") { ?>
                                <a class="submenu-link" id="iLaporan" href="#iLaporan">Pengajuan</a>

                                <?php } else { ?>
                                <a class="submenu-link" id="iLaporan" href="#iLaporan">Income</a>
                                <?php } ?>
                            </li>
                        </ul>
                    </div>
                </li>
                <?php } ?>
                <!--//nav-item-->

                <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
                <?php } else { ?>
                <?php if ($_COOKIE['id_pengurus'] == "sosial_media") { ?>
                <li class="nav-item" style="display: none">

                    <?php } else { ?>
                <li class="nav-item">
                    <?php } ?>
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link" href="#charts" id="charts">
                        <span class="nav-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-line"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Grafik</span>
                    </a>
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->

                <li class="nav-item">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <a class="nav-link" href="#data" id="dataAll">
                        <span class="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-activity" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                            </svg>
                        </span>
                        <span class="nav-link-text">Data Tahunan</span>
                    </a>
                    <!--//nav-link-->
                </li>
                <!--//nav-item-->
                <?php } ?>
            </ul>
            <!--//app-menu-->
        </nav>
        <div class="app-sidepanel-footer pb-2">
            <nav class="app-nav app-nav-footer">
                <ul class="app-menu footer-menu list-unstyled">
                    <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                    <?php if ($_COOKIE['id_pengurus'] == "kepala_income") { ?>
                    <!--//nav-item-->
                    <li class="nav-item">
                        <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                        <a class="nav-link" href="https://alkiromamanah.com/admin" target="blank_">
                            <span class="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                    class="bi bi-shield-check" viewBox="0 0 16 16">
                                    <path
                                        d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                    <path
                                        d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </span>
                            <span class="nav-link-text">Cek Donasi Website <span class="new-fitur">New</span></span>
                        </a>
                        <!--//nav-link-->
                    </li>
                    <?php } ?>
                    <!--//nav-item-->
                    <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
                    <?php } else { ?>
                    <?php } ?>
                    <li class="nav-item">

                        <a class="nav-link" href="#account" id="account">
                            <span class="nav-icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                    <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </span>
                            <span class="nav-link-text">Pengaturan Akun</span>
                        </a>
                        <!--//nav-link-->
                    </li>
                    <!--//nav-item-->

                    <?php if (
                        $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
                        $_COOKIE['id_pengurus'] == "admin_web"
                    ) { ?>
                    <li class="nav-item">
                        <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                        <a class="nav-link" href="#log" id="log">
                            <span class="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                    class="bi bi-clock-history">
                                    <path
                                        d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                    <path
                                        d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </span>
                            <span class="nav-link-text">Log Aktivitas</span>
                        </a>
                        <!--//nav-link-->
                    </li>
                    <!--//nav-item-->

                    <?php } ?>
                </ul>
                <!--//footer-menu-->
            </nav>
        </div>
        <!--//app-sidepanel-footer-->
        <!--//app-nav-->

    </div>
    <!--//sidepanel-inner-->
</div>
<!--//app-sidepanel-->