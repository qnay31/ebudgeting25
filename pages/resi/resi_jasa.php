<?php  
require '../../function.php';
error_reporting(0);

if(isset($_POST["data_id"])){
	$data_id = $_POST["data_id"];
	$output = "";
	$q = mysqli_query($conn, "SELECT * FROM galeri_jasa WHERE nomor_id = '$data_id'");

    $query = mysqli_query($conn, "SELECT * FROM input_jasa WHERE id = '$data_id' ");
    $hasil = mysqli_fetch_assoc($query);
    $deskripsi = $hasil["pemakaian"];
    $new_desk   = ucwords($deskripsi);
    
    // die(var_dump($s3));
    $output .= '
    <div class="table-responsive">  
        <div class="owl-carousel owl-theme">'; 
        $output .= 
        $i = "Bukti Resi $new_desk";
        $sql = $q;
        while($data = mysqli_fetch_array($sql))
        {
            $output .= ' 
            <div class="item">  
            <img src="assets/images/laporan/jasa/'.$data["dokumentasi"].' " alt="">
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
        loop: false,
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
</script>