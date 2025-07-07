'use strict';
$("#btnSubmit").click(function (e) {
    let pengajuan = $(".contentProgram select[name=pengajuan]").val()
    let yatim = $(".contentProgram select[name=yatim]").val()
    let tglPengajuan = $(".contentProgram input[name=tglPengajuan]").val()
    let perencanaan = $(".contentProgram input[name=perencanaan]").val()
    let anggaran = $(".contentProgram input[name=anggaran]").val()
    if (pengajuan == "") {
        $(".contentProgram select[name=pengajuan]").focus();
        $(".contentProgram select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentProgram select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentProgram .alertProgram").html("Program tidak boleh kosong!");
            } else {
                $(".contentProgram select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".contentProgram .alertProgram").empty();
            }
        }).keyup();
        return false;

    } else if (yatim == "") {
        $(".contentProgram select[name=yatim]").focus();
        $(".contentProgram select[name=yatim]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentProgram select[name=yatim]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentProgram .alertYatim").html("Kategori tidak boleh kosong!");
            } else {
                $(".contentProgram select[name=yatim]").css({
                    "border-color": "green"
                })
                $(".contentProgram .alertYatim").empty();
            }
        }).keyup();
        return false;

    } else if (tglPengajuan == "") {
        $(".contentProgram input[name=tglPengajuan]").focus();
        $(".contentProgram input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentProgram input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentProgram .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentProgram input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentProgram .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentProgram input[name=perencanaan]").focus();
        $(".contentProgram input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentProgram input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentProgram .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentProgram input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentProgram .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentProgram input[name=anggaran]").focus();
        $(".contentProgram input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentProgram input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentProgram .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentProgram input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentProgram .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/program.php",
            data: {
                selectPengajuan: pengajuan,
                selectYatim: yatim,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentProgram .button-submit").css("cursor", "not-allowed")
                    $(".contentProgram .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentProgram .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentProgram .button-submit").css("cursor", "pointer")
                        $(".contentProgram .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentProgram .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $('#verifikasiProgram').DataTable().ajax.reload();
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()
})

$("#submitLogistik").click(function (e) {
    let pengajuan = $(".contentLogistik input[name=pengajuan]").val()
    let tglPengajuan = $(".contentLogistik input[name=tglPengajuan]").val()
    let perencanaan = $(".contentLogistik input[name=perencanaan]").val()
    let anggaran = $(".contentLogistik input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentLogistik input[name=tglPengajuan]").focus();
        $(".contentLogistik input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLogistik input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLogistik .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentLogistik input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentLogistik .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentLogistik input[name=perencanaan]").focus();
        $(".contentLogistik input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLogistik input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLogistik .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentLogistik input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentLogistik .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentLogistik input[name=anggaran]").focus();
        $(".contentLogistik input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLogistik input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLogistik .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentLogistik input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentLogistik .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/logistik.php",
            data: {
                selectPengajuan: pengajuan,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentLogistik .button-submit").css("cursor", "not-allowed")
                    $(".contentLogistik .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentLogistik .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentLogistik .button-submit").css("cursor", "pointer")
                        $(".contentLogistik .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentLogistik .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiLogistik").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitAset").click(function (e) {
    let kategori = $(".contentAset input[name=kategori]").val();
    let pengajuan = $(".contentAset select[name=pengajuan]").val()
    let qty = $(".contentAset input[name=qty]").val();
    let tglPengajuan = $(".contentAset input[name=tglPengajuan]").val()
    let perencanaan = $(".contentAset input[name=perencanaan]").val()
    let anggaran = $(".contentAset input[name=anggaran]").val()

    if (pengajuan == "") {
        $(".contentAset select[name=pengajuan]").focus();
        $(".contentAset select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentAset select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentAset .alertAset").html("Aset tidak boleh kosong!");
            } else {
                $(".contentAset select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".contentAset .alertAset").empty();
            }
        }).keyup();
        return false;

    } else if (qty == "") {
        $(".contentAset input[name=qty]").focus();
        $(".contentAset input[name=qty]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentAset input[name=qty]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentAset .alertQty").html("Qty tidak boleh kosong!");
            } else {
                $(".contentAset input[name=qty]").css({
                    "border-color": "green"
                })
                $(".contentAset .alertQty").empty();
            }
        }).keyup();
        return false;

    } else if (tglPengajuan == "") {
        $(".contentAset input[name=tglPengajuan]").focus();
        $(".contentAset input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentAset input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentAset .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentAset input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentAset .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentAset input[name=perencanaan]").focus();
        $(".contentAset input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentAset input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentAset .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentAset input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentAset .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentAset input[name=anggaran]").focus();
        $(".contentAset input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentAset input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentAset .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentAset input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentAset .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/aset.php",
            data: {
                inputKategori: kategori,
                selectPengajuan: pengajuan,
                inputQty: qty,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentAset .button-submit").css("cursor", "not-allowed")
                    $(".contentAset .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentAset .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentAset .button-submit").css("cursor", "pointer")
                        $(".contentAset .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentAset .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiAset").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()
    e.preventDefault()

})

$("#submitUMakan").click(function (e) {
    let kategori = $(".contentUangMakan input[name=kategori]").val();
    let tglPengajuan = $(".contentUangMakan input[name=tglPengajuan]").val()
    let perencanaan = $(".contentUangMakan input[name=perencanaan]").val()
    let anggaran = $(".contentUangMakan input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentUangMakan input[name=tglPengajuan]").focus();
        $(".contentUangMakan input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentUangMakan input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentUangMakan .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentUangMakan input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentUangMakan .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentUangMakan input[name=perencanaan]").focus();
        $(".contentUangMakan input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentUangMakan input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentUangMakan .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentUangMakan input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentUangMakan .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentUangMakan input[name=anggaran]").focus();
        $(".contentUangMakan input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentUangMakan input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentUangMakan .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentUangMakan input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentUangMakan .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/uang_makan.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentUangMakan .button-submit").css("cursor", "not-allowed")
                    $(".contentUangMakan .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentUangMakan .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentUangMakan .button-submit").css("cursor", "pointer")
                        $(".contentUangMakan .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentUangMakan .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiUangMakan").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitGaji").click(function (e) {
    let kategori = $(".contentGaji input[name=kategori]").val();
    let tglPengajuan = $(".contentGaji input[name=tglPengajuan]").val()
    let perencanaan = $(".contentGaji input[name=perencanaan]").val()
    let anggaran = $(".contentGaji input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentGaji input[name=tglPengajuan]").focus();
        $(".contentGaji input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentGaji input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentGaji .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentGaji input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentGaji .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentGaji input[name=perencanaan]").focus();
        $(".contentGaji input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentGaji input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentGaji .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentGaji input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentGaji .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentGaji input[name=anggaran]").focus();
        $(".contentGaji input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentGaji input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentGaji .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentGaji input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentGaji .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/gaji.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentGaji .button-submit").css("cursor", "not-allowed")
                    $(".contentGaji .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentGaji .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentGaji .button-submit").css("cursor", "pointer")
                        $(".contentGaji .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentGaji .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiGaji").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitLainnya").click(function (e) {
    let kategori = $(".contentLainnya input[name=kategori]").val();
    let tglPengajuan = $(".contentLainnya input[name=tglPengajuan]").val()
    let perencanaan = $(".contentLainnya input[name=perencanaan]").val()
    let anggaran = $(".contentLainnya input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentLainnya input[name=tglPengajuan]").focus();
        $(".contentLainnya input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLainnya input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLainnya .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentLainnya input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentLainnya .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentLainnya input[name=perencanaan]").focus();
        $(".contentLainnya input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLainnya input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLainnya .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentLainnya input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentLainnya .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentLainnya input[name=anggaran]").focus();
        $(".contentLainnya input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentLainnya input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentLainnya .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentLainnya input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentLainnya .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/lainnya.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentLainnya .button-submit").css("cursor", "not-allowed")
                    $(".contentLainnya .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentLainnya .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentLainnya .button-submit").css("cursor", "pointer")
                        $(".contentLainnya .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentLainnya .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiLainnya").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitMaintenance").click(function (e) {
    let kategori = $(".contentMaintenance input[name=kategori]").val();
    let tglPengajuan = $(".contentMaintenance input[name=tglPengajuan]").val()
    let perencanaan = $(".contentMaintenance input[name=perencanaan]").val()
    let anggaran = $(".contentMaintenance input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentMaintenance input[name=tglPengajuan]").focus();
        $(".contentMaintenance input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentMaintenance input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentMaintenance .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentMaintenance input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentMaintenance .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentMaintenance input[name=perencanaan]").focus();
        $(".contentMaintenance input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentMaintenance input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentMaintenance .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentMaintenance input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentMaintenance .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentMaintenance input[name=anggaran]").focus();
        $(".contentMaintenance input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentMaintenance input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentMaintenance .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentMaintenance input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentMaintenance .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/maintenance.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentMaintenance .button-submit").css("cursor", "not-allowed")
                    $(".contentMaintenance .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentMaintenance .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentMaintenance .button-submit").css("cursor", "pointer")
                        $(".contentMaintenance .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentMaintenance .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiMaintenance").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitOperasional").click(function (e) {
    let kategori = $(".contentOperasional input[name=kategori]").val();
    let tglPengajuan = $(".contentOperasional input[name=tglPengajuan]").val()
    let perencanaan = $(".contentOperasional input[name=perencanaan]").val()
    let anggaran = $(".contentOperasional input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentOperasional input[name=tglPengajuan]").focus();
        $(".contentOperasional input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentOperasional input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentOperasional .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentOperasional input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentOperasional .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentOperasional input[name=perencanaan]").focus();
        $(".contentOperasional input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentOperasional input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentOperasional .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentOperasional input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentOperasional .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentOperasional input[name=anggaran]").focus();
        $(".contentOperasional input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentOperasional input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentOperasional .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentOperasional input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentOperasional .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/operasional.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentOperasional .button-submit").css("cursor", "not-allowed")
                    $(".contentOperasional .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentOperasional .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentOperasional .button-submit").css("cursor", "pointer")
                        $(".contentOperasional .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentOperasional .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiOperasional").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitPaud").click(function (e) {
    let kategori = $(".contentPaud input[name=kategori]").val();
    let tglPengajuan = $(".contentPaud input[name=tglPengajuan]").val()
    let perencanaan = $(".contentPaud input[name=perencanaan]").val()
    let anggaran = $(".contentPaud input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentPaud input[name=tglPengajuan]").focus();
        $(".contentPaud input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentPaud input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentPaud .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentPaud input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentPaud .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentPaud input[name=perencanaan]").focus();
        $(".contentPaud input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentPaud input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentPaud .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentPaud input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentPaud .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentPaud input[name=anggaran]").focus();
        $(".contentPaud input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentPaud input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentPaud .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentPaud input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentPaud .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/paud.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentPaud .button-submit").css("cursor", "not-allowed")
                    $(".contentPaud .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentPaud .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentPaud .button-submit").css("cursor", "pointer")
                        $(".contentPaud .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentPaud .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiPaud").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

$("#submitJasa").click(function (e) {
    let kategori = $(".contentJasa input[name=kategori]").val();
    let tglPengajuan = $(".contentJasa input[name=tglPengajuan]").val()
    let perencanaan = $(".contentJasa input[name=perencanaan]").val()
    let anggaran = $(".contentJasa input[name=anggaran]").val()

    if (tglPengajuan == "") {
        $(".contentJasa input[name=tglPengajuan]").focus();
        $(".contentJasa input[name=tglPengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentJasa input[name=tglPengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentJasa .alertTgl").html("Tgl pengajuan tidak boleh kosong!");
            } else {
                $(".contentJasa input[name=tglPengajuan]").css({
                    "border-color": "green"
                })
                $(".contentJasa .alertTgl").empty();
            }
        }).keyup();
        return false;

    } else if (perencanaan == "") {
        $(".contentJasa input[name=perencanaan]").focus();
        $(".contentJasa input[name=perencanaan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentJasa input[name=perencanaan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentJasa .alertPerencanaan").html("Perencanaan tidak boleh kosong!");
            } else {
                $(".contentJasa input[name=perencanaan]").css({
                    "border-color": "green"
                })
                $(".contentJasa .alertPerencanaan").empty();
            }
        }).keyup();
        return false;

    } else if (anggaran == "") {
        $(".contentJasa input[name=anggaran]").focus();
        $(".contentJasa input[name=anggaran]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".contentJasa input[name=anggaran]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".contentJasa .alertAnggaran").html("Anggaran tidak boleh kosong!");
            } else {
                $(".contentJasa input[name=anggaran]").css({
                    "border-color": "green"
                })
                $(".contentJasa .alertAnggaran").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            type: 'POST',
            url: "pages/input/jasa.php",
            data: {
                inputKategori: kategori,
                inputTgl: tglPengajuan,
                inputRencana: perencanaan,
                inputAnggaran: anggaran

            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Pengajuan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    $(".contentJasa .button-submit").css("cursor", "not-allowed")
                    $(".contentJasa .btn-success").css({
                        "background-color": "rgb(146, 211, 181)",
                        "color": "#fff",
                        "pointer-events": "none"
                    })
                    document.querySelector(".contentJasa .btn-success").innerHTML = "Please Wait!"
                    setTimeout(() => {
                        $(".contentJasa .button-submit").css("cursor", "pointer")
                        $(".contentJasa .btn-success").css({
                            "background-color": "#5cb377",
                            "color": "#fff",
                            "pointer-events": "auto"
                        })
                        document.querySelector(".contentJasa .btn-success").innerHTML = "Input"

                    }, 2000);

                    form.forEach(i => {
                        i.reset()
                    });

                    $("#verifikasiJasa").DataTable().ajax.reload()
                }
            }
        });
    }

    $("select").css({
        "border-color": "#e7e9ed"
    })
    $("input").css({
        "border-color": "#e7e9ed"
    })
    $("#tampil").empty()
    $(".listProgram").empty()
    $(".contentProgram span").empty()
    $(".contentLogistik span").empty()
    $(".contentAset span").empty()
    $(".contentUangMakan span").empty()
    $(".contentGaji span").empty()
    $(".contentLainnya span").empty()
    $(".contentMaintenance span").empty()
    $(".contentOperasional span").empty()
    $(".contentPaud span").empty()
    $(".contentJasa span").empty()

    e.preventDefault()

})

// ======== end input pengajuan ===== \\
$(".formLapProgram").on('submit', (function (e) {
    $(".laporanProgram .button-submit").css("cursor", "not-allowed")
    $(".laporanProgram .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanProgram .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanProgram select[name=pengajuan]").val()
    let tglLaporan = $(".laporanProgram input[name=tglLaporan]").val()
    let pemakaian = $(".laporanProgram input[name=pemakaian]").val()
    let terpakai = $(".laporanProgram input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanProgram .button-submit").css("cursor", "pointer")
            $(".laporanProgram .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanProgram .btn-success").innerHTML = "Laporkan"
    
        }, 1500);
        
        $(".laporanProgram select[name=pengajuan]").focus();
        $(".laporanProgram select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanProgram select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanProgram .alertProgram").html("Harus pilih salah satu!");
            } else {
                $(".laporanProgram select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanProgram .alertProgram").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanProgram .button-submit").css("cursor", "pointer")
            $(".laporanProgram .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanProgram .btn-success").innerHTML = "Laporkan"
    
        }, 1500);
        
        $(".laporanProgram input[name=tglLaporan]").focus();
        $(".laporanProgram input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanProgram input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanProgram .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanProgram input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanProgram .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanProgram .button-submit").css("cursor", "pointer")
            $(".laporanProgram .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanProgram .btn-success").innerHTML = "Laporkan"
    
        }, 1500);
        
        $(".laporanProgram input[name=pemakaian]").focus();
        $(".laporanProgram input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanProgram input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanProgram .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanProgram input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanProgram .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanProgram .button-submit").css("cursor", "pointer")
            $(".laporanProgram .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanProgram .btn-success").innerHTML = "Laporkan"
    
        }, 1500);
        
        $(".laporanProgram input[name=terpakai]").focus();
        $(".laporanProgram input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanProgram input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanProgram .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanProgram input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanProgram .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_program.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuProgram").empty()
                        $("#listMenuProgram").append(`
                        <option selected value="">Pilih Salah Satu Laporan</option>
                        `)

                        $(".laporanProgram .infoForm").css("display", "block")
                        $(".display-pageProgram").css("display", "none")

                    } else {
                        $("#listMenuProgram").empty()
                        $("#listMenuProgram").append(`
                        ${data}
                        `)
                    }

                    $(".laporanProgram #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanProgram p").empty()

                    $('#lapProgram').DataTable().ajax.reload();
                }
                
                setTimeout(() => {
                    $(".laporanProgram .button-submit").css("cursor", "pointer")
                    $(".laporanProgram .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanProgram .btn-success").innerHTML = "Laporkan"
            
                }, 1500);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapLogistik").on('submit', (function (e) {
    $(".laporanLogistik .button-submit").css("cursor", "not-allowed")
    $(".laporanLogistik .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanLogistik .btn-success").innerHTML = "Please Wait!"

    let pengajuan = $(".laporanLogistik select[name=pengajuan]").val()
    let tglLaporan = $(".laporanLogistik input[name=tglLaporan]").val()
    let pemakaian = $(".laporanLogistik input[name=pemakaian]").val()
    let terpakai = $(".laporanLogistik input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanLogistik .button-submit").css("cursor", "pointer")
            $(".laporanLogistik .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLogistik .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanLogistik select[name=pengajuan]").focus();
        $(".laporanLogistik select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLogistik select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLogistik .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanLogistik select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanLogistik .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanLogistik .button-submit").css("cursor", "pointer")
            $(".laporanLogistik .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLogistik .btn-success").innerHTML = "Laporkan"
    
        }, 2000);

        $(".laporanLogistik input[name=tglLaporan]").focus();
        $(".laporanLogistik input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLogistik input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLogistik .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanLogistik input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanLogistik .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanLogistik .button-submit").css("cursor", "pointer")
            $(".laporanLogistik .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLogistik .btn-success").innerHTML = "Laporkan"
    
        }, 2000);

        $(".laporanLogistik input[name=pemakaian]").focus();
        $(".laporanLogistik input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLogistik input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLogistik .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanLogistik input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanLogistik .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanLogistik .button-submit").css("cursor", "pointer")
            $(".laporanLogistik .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLogistik .btn-success").innerHTML = "Laporkan"
    
        }, 2000);

        $(".laporanLogistik input[name=terpakai]").focus();
        $(".laporanLogistik input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLogistik input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLogistik .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanLogistik input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanLogistik .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_logistik.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuLogistik").empty()
                        $("#listMenuLogistik").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanLogistik .infoForm").css("display", "block")
                        $(".display-pageLogistik").css("display", "none")

                    } else {
                        $("#listMenuLogistik").empty()
                        $("#listMenuLogistik").append(`
                        ${data}
                        `)
                    }

                    $(".laporanLogistik #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanLogistik p").empty()

                    $("#lapLogistik").DataTable().ajax.reload()
                }
                
                setTimeout(() => {
                    $(".laporanLogistik .button-submit").css("cursor", "pointer")
                    $(".laporanLogistik .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanLogistik .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapAset").on('submit', (function (e) {
    $(".laporanAset .button-submit").css("cursor", "not-allowed")
    $(".laporanAset .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanAset .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanAset select[name=pengajuan]").val()
    let qty = $(".laporanAset input[name=qty]").val()
    let tglLaporan = $(".laporanAset input[name=tglLaporan]").val()
    let pemakaian = $(".laporanAset input[name=pemakaian]").val()
    let terpakai = $(".laporanAset input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanAset .button-submit").css("cursor", "pointer")
            $(".laporanAset .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanAset select[name=pengajuan]").focus();
        $(".laporanAset select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanAset select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanAset .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanAset select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanAset .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (qty == "") {
        setTimeout(() => {
            $(".laporanAset .button-submit").css("cursor", "pointer")
            $(".laporanAset .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanAset input[name=qty]").focus();
        $(".laporanAset input[name=qty]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanAset input[name=qty]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanAset .alertQty").html("Qty laporan tidak boleh kosong!");
            } else {
                $(".laporanAset input[name=qty]").css({
                    "border-color": "green"
                })
                $(".laporanAset .alertQty").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanAset .button-submit").css("cursor", "pointer")
            $(".laporanAset .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanAset input[name=tglLaporan]").focus();
        $(".laporanAset input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanAset input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanAset .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanAset input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanAset .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanAset .button-submit").css("cursor", "pointer")
            $(".laporanAset .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanAset input[name=pemakaian]").focus();
        $(".laporanAset input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanAset input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanAset .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanAset input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanAset .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanAset .button-submit").css("cursor", "pointer")
            $(".laporanAset .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanAset input[name=terpakai]").focus();
        $(".laporanAset input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanAset input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanAset .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanAset input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanAset .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuAset").empty()
                        $("#listMenuAset").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanAset .infoForm").css("display", "block")
                        $(".display-pageAset").css("display", "none")

                    } else {
                        $("#listMenuAset").empty()
                        $("#listMenuAset").append(`
                        ${data}
                        `)
                    }

                    $(".laporanAset #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanAset p").empty()

                    $("#lapAset").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanAset .button-submit").css("cursor", "pointer")
                    $(".laporanAset .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanAset .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapUangMakan").on('submit', (function (e) {
    $(".laporanUangMakan .button-submit").css("cursor", "not-allowed")
    $(".laporanUangMakan .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanUangMakan select[name=pengajuan]").val()
    let tglLaporan = $(".laporanUangMakan input[name=tglLaporan]").val()
    let pemakaian = $(".laporanUangMakan input[name=pemakaian]").val()
    let terpakai = $(".laporanUangMakan input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanUangMakan .button-submit").css("cursor", "pointer")
            $(".laporanUangMakan .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanUangMakan select[name=pengajuan]").focus();
        $(".laporanUangMakan select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanUangMakan select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanUangMakan .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanUangMakan select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanUangMakan .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanUangMakan .button-submit").css("cursor", "pointer")
            $(".laporanUangMakan .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanUangMakan input[name=tglLaporan]").focus();
        $(".laporanUangMakan input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanUangMakan input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanUangMakan .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanUangMakan input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanUangMakan .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanUangMakan .button-submit").css("cursor", "pointer")
            $(".laporanUangMakan .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanUangMakan input[name=pemakaian]").focus();
        $(".laporanUangMakan input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanUangMakan input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanUangMakan .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanUangMakan input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanUangMakan .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanUangMakan .button-submit").css("cursor", "pointer")
            $(".laporanUangMakan .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanUangMakan input[name=terpakai]").focus();
        $(".laporanUangMakan input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanUangMakan input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanUangMakan .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanUangMakan input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanUangMakan .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })


                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuMakan").empty()
                        $("#listMenuMakan").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanUangMakan .infoForm").css("display", "block")
                        $(".display-pageUangMakan").css("display", "none")

                    } else {
                        $("#listMenuMakan").empty()
                        $("#listMenuMakan").append(`
                        ${data}
                        `)
                    }

                    $(".laporanUangMakan #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanUangMakan p").empty()

                    $("#lapUangMakan").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanUangMakan .button-submit").css("cursor", "pointer")
                    $(".laporanUangMakan .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanUangMakan .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapGaji").on('submit', (function (e) {
    $(".laporanGaji .button-submit").css("cursor", "not-allowed")
    $(".laporanGaji .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanGaji .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanGaji select[name=pengajuan]").val()
    let tglLaporan = $(".laporanGaji input[name=tglLaporan]").val()
    let pemakaian = $(".laporanGaji input[name=pemakaian]").val()
    let terpakai = $(".laporanGaji input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanGaji .button-submit").css("cursor", "pointer")
            $(".laporanGaji .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanGaji .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanGaji select[name=pengajuan]").focus();
        $(".laporanGaji select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanGaji select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanGaji .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanGaji select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanGaji .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanGaji .button-submit").css("cursor", "pointer")
            $(".laporanGaji .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanGaji .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanGaji input[name=tglLaporan]").focus();
        $(".laporanGaji input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanGaji input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanGaji .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanGaji input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanGaji .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanGaji .button-submit").css("cursor", "pointer")
            $(".laporanGaji .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanGaji .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanGaji input[name=pemakaian]").focus();
        $(".laporanGaji input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanGaji input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanGaji .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanGaji input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanGaji .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanGaji .button-submit").css("cursor", "pointer")
            $(".laporanGaji .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanGaji .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
    
        $(".laporanGaji input[name=terpakai]").focus();
        $(".laporanGaji input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanGaji input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanGaji .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanGaji input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanGaji .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuGaji").empty()
                        $("#listMenuGaji").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanGaji .infoForm").css("display", "block")
                        $(".display-pageGaji").css("display", "none")

                    } else {
                        $("#listMenuGaji").empty()
                        $("#listMenuGaji").append(`
                        ${data}
                        `)
                    }

                    $(".laporanGaji #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanGaji p").empty()

                    $("#lapGaji").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanGaji .button-submit").css("cursor", "pointer")
                    $(".laporanGaji .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanGaji .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapLainnya").on('submit', (function (e) {
    $(".laporanLainnya .button-submit").css("cursor", "not-allowed")
    $(".laporanLainnya .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanLainnya .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanLainnya select[name=pengajuan]").val()
    let tglLaporan = $(".laporanLainnya input[name=tglLaporan]").val()
    let pemakaian = $(".laporanLainnya input[name=pemakaian]").val()
    let terpakai = $(".laporanLainnya input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanLainnya .button-submit").css("cursor", "pointer")
            $(".laporanLainnya .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLainnya .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanLainnya select[name=pengajuan]").focus();
        $(".laporanLainnya select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLainnya select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLainnya .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanLainnya select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanLainnya .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanLainnya .button-submit").css("cursor", "pointer")
            $(".laporanLainnya .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLainnya .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanLainnya input[name=tglLaporan]").focus();
        $(".laporanLainnya input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLainnya input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLainnya .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanLainnya input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanLainnya .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanLainnya .button-submit").css("cursor", "pointer")
            $(".laporanLainnya .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLainnya .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanLainnya input[name=pemakaian]").focus();
        $(".laporanLainnya input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLainnya input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLainnya .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanLainnya input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanLainnya .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanLainnya .button-submit").css("cursor", "pointer")
            $(".laporanLainnya .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanLainnya .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanLainnya input[name=terpakai]").focus();
        $(".laporanLainnya input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanLainnya input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanLainnya .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanLainnya input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanLainnya .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuLainnya").empty()
                        $("#listMenuLainnya").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanLainnya .infoForm").css("display", "block")
                        $(".display-pageLainnya").css("display", "none")

                    } else {
                        $("#listMenuLainnya").empty()
                        $("#listMenuLainnya").append(`
                        ${data}
                        `)
                    }

                    $(".laporanLainnya #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanLainnya p").empty()

                    $("#lapLainnya").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanLainnya .button-submit").css("cursor", "pointer")
                    $(".laporanLainnya .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanLainnya .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapMaintenance").on('submit', (function (e) {
    $(".laporanMaintenance .button-submit").css("cursor", "not-allowed")
    $(".laporanMaintenance .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanMaintenance select[name=pengajuan]").val()
    let tglLaporan = $(".laporanMaintenance input[name=tglLaporan]").val()
    let pemakaian = $(".laporanMaintenance input[name=pemakaian]").val()
    let terpakai = $(".laporanMaintenance input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanMaintenance .button-submit").css("cursor", "pointer")
            $(".laporanMaintenance .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanMaintenance select[name=pengajuan]").focus();
        $(".laporanMaintenance select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanMaintenance select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanMaintenance .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanMaintenance select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanMaintenance .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanMaintenance .button-submit").css("cursor", "pointer")
            $(".laporanMaintenance .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanMaintenance input[name=tglLaporan]").focus();
        $(".laporanMaintenance input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanMaintenance input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanMaintenance .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanMaintenance input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanMaintenance .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanMaintenance .button-submit").css("cursor", "pointer")
            $(".laporanMaintenance .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanMaintenance input[name=pemakaian]").focus();
        $(".laporanMaintenance input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanMaintenance input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanMaintenance .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanMaintenance input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanMaintenance .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanMaintenance .button-submit").css("cursor", "pointer")
            $(".laporanMaintenance .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Laporkan"
        
        }, 2000);
        
        $(".laporanMaintenance input[name=terpakai]").focus();
        $(".laporanMaintenance input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanMaintenance input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanMaintenance .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanMaintenance input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanMaintenance .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuMaintenance").empty()
                        $("#listMenuMaintenance").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanMaintenance .infoForm").css("display", "block")
                        $(".display-pageMaintenance").css("display", "none")

                    } else {
                        $("#listMenuMaintenance").empty()
                        $("#listMenuMaintenance").append(`
                        ${data}
                        `)
                    }

                    $(".laporanMaintenance #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanMaintenance p").empty()

                    $("#lapMaintenance").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanMaintenance .button-submit").css("cursor", "pointer")
                    $(".laporanMaintenance .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanMaintenance .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapOperasional").on('submit', (function (e) {
    $(".laporanOperasional .button-submit").css("cursor", "not-allowed")
    $(".laporanOperasional .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanOperasional .btn-success").innerHTML = "Please Wait!"
                    
    let pengajuan = $(".laporanOperasional select[name=pengajuan]").val()
    let tglLaporan = $(".laporanOperasional input[name=tglLaporan]").val()
    let pemakaian = $(".laporanOperasional input[name=pemakaian]").val()
    let terpakai = $(".laporanOperasional input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanOperasional .button-submit").css("cursor", "pointer")
            $(".laporanOperasional .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanOperasional .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanOperasional select[name=pengajuan]").focus();
        $(".laporanOperasional select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanOperasional select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanOperasional .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanOperasional select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanOperasional .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanOperasional .button-submit").css("cursor", "pointer")
            $(".laporanOperasional .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanOperasional .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanOperasional input[name=tglLaporan]").focus();
        $(".laporanOperasional input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanOperasional input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanOperasional .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanOperasional input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanOperasional .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanOperasional .button-submit").css("cursor", "pointer")
            $(".laporanOperasional .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanOperasional .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanOperasional input[name=pemakaian]").focus();
        $(".laporanOperasional input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanOperasional input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanOperasional .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanOperasional input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanOperasional .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanOperasional .button-submit").css("cursor", "pointer")
            $(".laporanOperasional .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanOperasional .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanOperasional input[name=terpakai]").focus();
        $(".laporanOperasional input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanOperasional input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanOperasional .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanOperasional input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanOperasional .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuOperasional").empty()
                        $("#listMenuOperasional").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanOperasional .infoForm").css("display", "block")
                        $(".display-pageOperasional").css("display", "none")

                    } else {
                        $("#listMenuOperasional").empty()
                        $("#listMenuOperasional").append(`
                        ${data}
                        `)
                    }

                    $(".laporanOperasional #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanOperasional p").empty()

                    $("#lapOperasional").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanOperasional .button-submit").css("cursor", "pointer")
                    $(".laporanOperasional .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanOperasional .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapJasa").on('submit', (function (e) {
    $(".laporanJasa .button-submit").css("cursor", "not-allowed")
    $(".laporanJasa .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanJasa .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanJasa select[name=pengajuan]").val()
    let tglLaporan = $(".laporanJasa input[name=tglLaporan]").val()
    let pemakaian = $(".laporanJasa input[name=pemakaian]").val()
    let terpakai = $(".laporanJasa input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanJasa .button-submit").css("cursor", "pointer")
            $(".laporanJasa .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanJasa .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanJasa select[name=pengajuan]").focus();
        $(".laporanJasa select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanJasa select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanJasa .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanJasa select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanJasa .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanJasa .button-submit").css("cursor", "pointer")
            $(".laporanJasa .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanJasa .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanJasa input[name=tglLaporan]").focus();
        $(".laporanJasa input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanJasa input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanJasa .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanJasa input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanJasa .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanJasa .button-submit").css("cursor", "pointer")
            $(".laporanJasa .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanJasa .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanJasa input[name=pemakaian]").focus();
        $(".laporanJasa input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanJasa input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanJasa .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanJasa input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanJasa .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanJasa .button-submit").css("cursor", "pointer")
            $(".laporanJasa .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanJasa .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanJasa input[name=terpakai]").focus();
        $(".laporanJasa input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanJasa input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanJasa .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanJasa input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanJasa .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_management.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuJasa").empty()
                        $("#listMenuJasa").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanJasa .infoForm").css("display", "block")
                        $(".display-pageJasa").css("display", "none")

                    } else {
                        $("#listMenuJasa").empty()
                        $("#listMenuJasa").append(`
                        ${data}
                        `)
                    }

                    $(".laporanJasa #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanJasa p").empty()

                    $("#lapJasa").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanJasa .button-submit").css("cursor", "pointer")
                    $(".laporanJasa .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanJasa .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

$(".formLapPaud").on('submit', (function (e) {
    $(".laporanPaud .button-submit").css("cursor", "not-allowed")
    $(".laporanPaud .btn-success").css({
        "background-color": "rgb(146, 211, 181)",
        "color": "#fff",
        "pointer-events": "none"
    })
    document.querySelector(".laporanPaud .btn-success").innerHTML = "Please Wait!"
    
    let pengajuan = $(".laporanPaud select[name=pengajuan]").val()
    let tglLaporan = $(".laporanPaud input[name=tglLaporan]").val()
    let pemakaian = $(".laporanPaud input[name=pemakaian]").val()
    let terpakai = $(".laporanPaud input[name=terpakai]").val()

    if (pengajuan == "") {
        setTimeout(() => {
            $(".laporanPaud .button-submit").css("cursor", "pointer")
            $(".laporanPaud .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanPaud .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanPaud select[name=pengajuan]").focus();
        $(".laporanPaud select[name=pengajuan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanPaud select[name=pengajuan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanPaud .alertPengajuan").html("Harus pilih salah satu!");
            } else {
                $(".laporanPaud select[name=pengajuan]").css({
                    "border-color": "green"
                })
                $(".laporanPaud .alertPengajuan").empty();
            }
        }).keyup();
        return false;

    } else if (tglLaporan == "") {
        setTimeout(() => {
            $(".laporanPaud .button-submit").css("cursor", "pointer")
            $(".laporanPaud .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanPaud .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanPaud input[name=tglLaporan]").focus();
        $(".laporanPaud input[name=tglLaporan]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanPaud input[name=tglLaporan]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanPaud .alertTglLaporan").html("Tgl laporan tidak boleh kosong!");
            } else {
                $(".laporanPaud input[name=tglLaporan]").css({
                    "border-color": "green"
                })
                $(".laporanPaud .alertTglLaporan").empty();
            }
        }).keyup();
        return false;

    } else if (pemakaian == "") {
        setTimeout(() => {
            $(".laporanPaud .button-submit").css("cursor", "pointer")
            $(".laporanPaud .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanPaud .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanPaud input[name=pemakaian]").focus();
        $(".laporanPaud input[name=pemakaian]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanPaud input[name=pemakaian]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanPaud .alertPemakaian").html("Pemakaian tidak boleh kosong!");
            } else {
                $(".laporanPaud input[name=pemakaian]").css({
                    "border-color": "green"
                })
                $(".laporanPaud .alertPemakaian").empty();
            }
        }).keyup();
        return false;

    } else if (terpakai == "") {
        setTimeout(() => {
            $(".laporanPaud .button-submit").css("cursor", "pointer")
            $(".laporanPaud .btn-success").css({
                "background-color": "#5cb377",
                "color": "#fff",
                "pointer-events": "auto"
            })
            document.querySelector(".laporanPaud .btn-success").innerHTML = "Laporkan"
    
        }, 2000);
        
        $(".laporanPaud input[name=terpakai]").focus();
        $(".laporanPaud input[name=terpakai]").keyup(function () {
            let value = $(this).val();
            if (value == "") {
                $(".laporanPaud input[name=terpakai]").css({
                    "box-shadow": "none",
                    "border-color": "red"
                })
                $(".laporanPaud .alertTerpakai").html("Terpakai tidak boleh kosong!");
            } else {
                $(".laporanPaud input[name=terpakai]").css({
                    "border-color": "green"
                })
                $(".laporanPaud .alertTerpakai").empty();
            }
        }).keyup();
        return false;

    } else {
        $.ajax({
            url: "pages/laporan/laporan_paud.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Pengajuan sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 2) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File Excel Sudah ada',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 3) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'Ukuran foto terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data == 4) {
                    Swal.fire({
                        type: 'error',
                        position: 'center',
                        title: 'File excel terlalu besar',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Laporan terkirim',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    form.forEach(i => {
                        i.reset()
                    });

                    if (data == 0) {
                        $("#listMenuPaud").empty()
                        $("#listMenuPaud").append(
                            `
                            <option selected value="">Pilih Salah Satu Laporan</option>
                            `
                        )

                        $(".laporanPaud .infoForm").css("display", "block")
                        $(".display-pagePaud").css("display", "none")

                    } else {
                        $("#listMenuPaud").empty()
                        $("#listMenuPaud").append(`
                        ${data}
                        `)
                    }

                    $(".laporanPaud #listLaporan").empty()
                    $(".file-message").html("or drag and drop files here")
                    $(".divImageMediaPreview").empty()
                    $("select").css({
                        "border-color": "#e7e9ed"
                    })
                    $("input").css({
                        "border-color": "#e7e9ed"
                    })
                    $(".laporanPaud p").empty()

                    $("#lapPaud").DataTable().ajax.reload()
                }
                setTimeout(() => {
                    $(".laporanPaud .button-submit").css("cursor", "pointer")
                    $(".laporanPaud .btn-success").css({
                        "background-color": "#5cb377",
                        "color": "#fff",
                        "pointer-events": "auto"
                    })
                    document.querySelector(".laporanPaud .btn-success").innerHTML = "Laporkan"

                }, 2000);
            },
        });
    }
    e.preventDefault();
}));

// end input laporan pengajuan \\