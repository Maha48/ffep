<!-- <html>
<head>
<script src="data.js" > </script>
</head> -->



<?php
require_once './vendor/autoload.php';
$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();
// نستطيع الان قراءة المتغيرات من الملف
$db_host = getenv('DB_host'); //استدعاء البيانات من الملف المحتوي على البيانات الحساسه
$db_username = getenv('DB_username');
$db_password = getenv('DB_password');
$Database = getenv('DB');
$connection = mysqli_connect($db_host, $db_username, $db_password, $Database,'8889');
// echo $_POST['subject'].$_POST['time'];

// if(isset($_POST['subject'])&& isset($_POST['time'])){
$subject=$_POST['subject'];
$time=$_POST['time'];
echo $subject;
echo $time;
     $E_update="UPDATE Examdata
            SET `exam_times`='$time' 
            WHERE Subject_ID='$subject' ";
             $EE_update=mysqli_query($connection,$E_update);
          //    if( mysqli_num_rows($EE_update)){
          //         echo "ok";
          //    }
// }
?>
<!-- </html> -->
