<?php  
require '../../function.php';
error_reporting(0);

if(isset($_POST["data_id"])){
	$data_id = $_POST["data_id"];
	$output = "";
	$q = mysqli_query($conn, "SELECT * FROM input_income_media WHERE id = '$data_id'");

    $query = mysqli_query($conn, "SELECT * FROM input_income_media WHERE id = '$data_id' ");
    $hasil = mysqli_fetch_assoc($query);
    $nama_akun = $hasil["nama_akun"];
    $new_desk   = ucwords($nama_akun);
    
    // die(var_dump($s3));
    $output .= '
    <div class="table-responsive">  
        <div class="owl-carousel owl-theme">'; 
	$output .= 
    $i = "";
    $sql = $q;
    while($data = mysqli_fetch_array($sql))
    {
        $output .= '    
        <div class="content-kwitansi"> 
            <div class="kwitansi-box" id="content'.$data_id.'">
                <div class="logo-image">
                    <img src="./assets/images/logo_favicon.png" alt="">
                </div>

                <div class="box">
                    <div class="box-white">
                        <div class="uangTransfer">
                            <span>Rp. '.number_format($data['jumlah_tf'],0,"." , ".").'</span>
                        </div>
                        <div class="keterangan">
                            Terimakasih telah berdonasi kepada Yayasan Alkirom Amanah
                        </div>
                        <hr>
                        <div class="detail-donatur">
                            <span class="detailDonasi mb-3"><b>Donasi Berhasil!</b></span>
                            <div class="row">
                                <div class="col-6 mb-2"><b>Nama Akun :</b></div>
                                <div class="col-6 mb-2 text-end">'.ucwords($data['nama_akun']).'</div>

                                <div class="col-6 mb-2"><b>Donatur :</b></div>
                                <div class="col-6 mb-2 text-end">'.ucwords($data['nama_donatur']).'</div>

                                <div class="col-6 mb-2"><b>Tanggal :</b></div>
                                <div class="col-6 mb-2 text-end">'.date('d-m-Y', strtotime($data['tanggal_tf'])).' '.$data["jam_tf"].'</div>

                                <div class="col-6 mb-2"><b>Bank :</b></div>
                                <div class="col-6 mb-2 text-end">'.$data["bank"].'</div>

                                <div class="col-6 mb-2"><b>Status :</b></div>
                                <div class="col-6 mb-2 text-end"><span class="badge bg-success">Success <i class="bi bi-check-circle-fill"></i></span></div>
                            </div>
                        <hr>
                        </div>
                        <div class="dukungan">
                            <span>Semoga berkah dan bermanfaat untuk anak - anak yatim kami serta semoga Allah SWT membalas
                                kebaikannya dengan berlipat ganda, Aamiin Yaa Rabbal Alamin</span>
                        </div>
                        <div class="powered">
                            <span>Powered By Yayasan Alkirom Amanah.</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-danger w-100 text-white" id="download-page-as-image'.$data_id.'">Simpan Resi</button>
        </div> 
    ';
    }
$output .= "
</div>
</div>";

echo $output;
}

$conn->close();

?>

<script>
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

setUpDownloadPageAsImage();

function dec2hex(dec) {
    return dec.toString(16).padStart(2, "0")
}

// generateId :: Integer -> String
function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

// console.log(generateId(20))

var nameSS = "AlkiromAmanah_resi_";
var randString = generateId(20);
var nameEkstensi = ".png";

var gabungString = nameSS.concat(randString).concat(nameEkstensi);

function setUpDownloadPageAsImage() {
    let id = '<?= $data_id  ?>'
    document.getElementById("download-page-as-image" + id).addEventListener("click", function() {
        html2canvas($('#content' + id)[0], {
            maxWidth: 325,
            maxHeight: 590
        }).then(function(canvas) {
            console.log(canvas);
            simulateDownloadImageClick(canvas.toDataURL(), gabungString);
        });
    });
}

function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download !== 'string') {
        window.open(uri);
    } else {
        link.href = uri;
        link.download = filename;
        accountForFirefox(clickLink, link);
    }
}

function clickLink(link) {
    link.click();
}

function accountForFirefox(click) { // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
}
</script>