$(document).ready(function () {
    var $modal = $('#modal-image');
    var image = document.getElementById('sample_image');
    var cropper;

    //$("body").on("change", ".image", function(e){
    $('#upload_image').change(function (event) {
        var files = event.target.files;
        var done = function (url) {
            image.src = url;
            $modal.modal('show');
        };

        if (files && files.length > 0) {
            reader = new FileReader();
            reader.onload = function (event) {
                done(reader.result);
            };
            reader.readAsDataURL(files[0]);
            //}
        }
    });

    $modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3,
            preview: '.preview',
            cropBoxResizable: false,
        });
    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
    });

    $("#crop").click(function (e) {
        e.preventDefault()
        canvas = cropper.getCroppedCanvas({
            width: 225,
            height: 225,
        });

        canvas.toBlob(function (blob) {
            //url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64data = reader.result;
                var imageId = $("#crop").data("id")
                $.ajax({
                    url: "./pages/profil/changeProfil.php",
                    method: "POST",
                    data: {
                        image: base64data
                    },
                    success: function (data) {
                        Swal.fire({
                            type: 'success',
                            position: 'center',
                            title: 'Profil berhasil diubah',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        $modal.modal('hide');
                        $('.newProfil .profile-image').attr('src', data);

                        $(".delete-button-image").css("display", "block")
                    }
                });
            }
        });
    });

    $("#hapusImage").click(function (e) {
        e.preventDefault()

        const dataId = $("#hapusImage").data("id")
        if (confirm("Foto profil akan dihapus?")) {
            $.ajax({
                url: 'pages/profil/deleteProfil.php',
                method: 'POST',
                data: {
                    id: dataId
                },
                success: function (data) {
                    Swal.fire({
                        type: 'success',
                        position: 'center',
                        title: 'Foto profil Berhasil Dihapus',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    $('.newProfil .profile-image').attr('src', data);
                    $(".delete-button-image").css("display", "none")
                }
            });
        } else {
            return false;
        }
    })
})