<?php  
require '../../function.php';
error_reporting(0);

if(isset($_POST["data_id"])){
	$data_id = $_POST["data_id"];
	$output = "";
	$q = mysqli_query($conn, "SELECT * FROM input_income_media WHERE id = '$data_id'");

    $query = mysqli_query($conn, "SELECT * FROM input_income_media WHERE id = '$data_id' ");
    $hasil = mysqli_fetch_assoc($query);
    $akun = $hasil["nama_akun"];
    $donatur = $hasil["nama_donatur"];
    $nama_akun  = ucwords($akun);
    $new_desk   = ucwords($donatur);
    
    // die(var_dump($s3));
    $output .= '
    <div class="table-responsive">  
        <div class="owl-carousel owl-theme">'; 
        $output .= 
        $i = "Bukti Resi $nama_akun - $new_desk";
        $sql = $q;
        while($data = mysqli_fetch_array($sql))
        {
            $output .= ' 
            <div class="item mt-2">  
            <img src="assets/images/resi/'.$data["resi"].' " alt="">
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