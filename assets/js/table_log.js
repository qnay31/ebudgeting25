if (readCookie("id_pengurus") == "ketua_yayasan") {
    function logActivity() {
        $('#logActivity').DataTable({
            "scrollX": true,
            "processing": true,
            "serverSide": true,
            "scrollCollapse": true,
            deferRender: true,
            dom: 'lfrtip',
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            "ajax": "table_ajax/data_log_history.php",
            "order": [
                [4, "desc"]
            ],
            // "autoWidth": true,
            columnDefs: [{
                "targets": 0,
                "render": function (data, type, row, meta) {
                    return `<center>${meta.row + meta.settings._iDisplayStart + 1}</center>`;
                }
            }, {
                "targets": 1,
                data: "logNama",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 2,
                data: "logPosisi",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 3,
                data: "logIp",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 4,
                data: "logTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "logJam",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "logAktivitas",
                "render": function (data) {
                    return data;
                }
            }, {
                targets: [4],
                orderData: [0, 4]
            }, {
                targets: [5],
                orderData: [1, 5]
            }],
        });

    }

} else {
    function logActivity() {
        $('#logActivity').DataTable({
            "scrollX": true,
            "processing": true,
            "serverSide": true,
            "scrollCollapse": true,
            deferRender: true,
            dom: 'lfrtip',
            "lengthMenu": [
                [10, 25, 50, 100, 500],
                [10, 25, 50, 100, 500]
            ],
            "ajax": "table_ajax/data_log_history.php",
            "order": [
                [5, "desc"]
            ],
            // "autoWidth": true,
            columnDefs: [{
                "targets": 0,
                "render": function (data, type, row, meta) {
                    return `<center>${meta.row + meta.settings._iDisplayStart + 1}</center>`;
                }
            }, {
                "targets": 1,
                data: "logId",
                "render": function (data) {

                    var edit =
                        `
                    <center>
                        <a href="" id="btnDeleteLog${data}"><i class="bi bi-trash"></i></a>
                    </center>
    
                    <script>
                        // Delete Table
                        $('#btnDeleteLog${data}').click(function (e) {
                            if (confirm("Data log akan dihapus ini?")) {
                                var id = ${data};
                                $.ajax({
                                    url: 'pages/delete/delete_log.php',
                                    method: 'POST',
                                    data: {
                                        id: id
                                    },
                                    success: function () {
                                        Swal.fire({
                                            type: 'success',
                                            position: 'center',
                                            title: 'Log berhasil dihapus',
                                            showConfirmButton: false,
                                            timer: 1000
                                        })
                                        $("#logActivity").DataTable().ajax.reload()
                                    }
                                });
                            } else {
                                return false;
                            }
    
                            e.preventDefault()
                        });
                        
                    </script>
                    `
                    return edit
                }
            }, {
                "targets": 2,
                data: "logNama",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 3,
                data: "logPosisi",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 4,
                data: "logIp",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 5,
                data: "logTanggal",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 6,
                data: "logJam",
                "render": function (data) {
                    return data;
                }
            }, {
                "targets": 7,
                data: "logAktivitas",
                "render": function (data) {
                    return data;
                }
            }, {
                targets: [5],
                orderData: [0, 5]
            }, {
                targets: [6],
                orderData: [2, 6]
            }],
        });

    }
}

$("#log").one('click', function () {
    logActivity()
})

$(".tableLog .reload").click(function () {
    $("#logActivity").DataTable().ajax.reload()
})