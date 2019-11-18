<html>
<head>
<link rel="stylesheet" type="text/css" href="data.css">
</head>
<table>
<?php 
//include 'connection_database.php';
require_once './vendor/autoload.php';
$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();
// نستطيع الان قراءة المتغيرات من الملف
$db_host = getenv('DB_host'); //استدعاء البيانات من الملف المحتوي على البيانات الحساسه
$db_username = getenv('DB_username');
$db_password = getenv('DB_password');
$Database = getenv('DB');
$connection = mysqli_connect($db_host, $db_username, $db_password, $Database,'8889');

$test='CREATE TEMPORARY table search 
SELECT distinct Class_ID,Subject_ID ,exam_days,exam_dates,exam_times,Subject_name,lecturer_name FROM 
    (SELECT DISTINCT e1.*  from Examdata e1 , Examdata e2
        WHERE e2.Student_ID=e1.Student_ID AND
        e1.Subject_ID!=e2.Subject_ID AND
        e1.exam_dates=e2.exam_dates  
        ORDER BY e1.exam_dates,`e1`.Student_ID) as ssd';
$t=mysqli_query($connection,$test);
// $out=[];

if(isset($_POST["search"])) {
    $srq=$_POST["search"];

    $ser="SELECT * FROM search  where
     Class_ID like  '%$srq%'    or Subject_ID like   '%$srq%'
     or Student_ID like  '%$srq%'   or Subject_name like   '%$srq%'  or lecturer_name like   '%$srq%' or exam_days like   '%$srq%'    or
     exam_dates like  '%$srq%'  or exam_times like   '%$srq%' ";
    $qr=mysqli_query($connection,$ser)or die("Error in query: $qr. " . mysqli_error());
    $count=mysqli_num_rows($qr);
    $out="";
    if($count == 0){
        $out="no";
    }
    else{
        while($row=mysqli_fetch_array($qr)){
            // $out[]=$row;
            $out .= "<tr>";
            $out .= '<td> Student ID: ' . $row["Student_ID"] . '</td></tr>';
            // $out .= '<tr style="display:none;">';
            $out .= "<tr>";
            $out .= '<td class="myDIV">' . $row["Class_ID"] . '</td>';
            $out .= '<td class="myDIV">' . $row["Subject_ID"] . '</td>';
            $out .= '<td class="myDIV">' . $row["Subject_name"] .'</td>';
            $out .= '<td class="myDIV">' . $row["lecturer_name"] .'</td>';
            $out .= '<td class="myDIV">' . $row["exam_days"] . '</td>';
            $out .= '<td class="myDIV">' . $row["exam_dates"] . '</td>';
            $out .= '<td class="myDIV">' . $row["exam_times"] . '</td></tr>';
            $out .= "</tr>";

        }
    }
}
echo $out;
// echo json_encode($out);
?>
</table>