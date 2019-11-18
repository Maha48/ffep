<form method="post" id="PSSFORM" >
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
$SSSD="SELECT DISTINCT Subject_ID FROM 
(SELECT DISTINCT e1.*  from Examdata e1 , Examdata e2
    WHERE e2.Student_ID=e1.Student_ID AND
    e1.Subject_ID!=e2.Subject_ID AND
    e1.exam_dates=e2.exam_dates  
    ORDER BY e1.exam_dates,`e1`.Student_ID) as ssd";
$ESSSD=mysqli_query($connection,$SSSD); 

echo " <select  name='SUB[]' multiple id='PSSSS'>";
foreach ($ESSSD as $sub){
$selectedsubject=$sub['Subject_ID'];
echo '<option value='.$selectedsubject.'>'.$selectedsubject.'</option>'; 
}
?>
</select>
<input class="button button5" type="submit" name='sb_se' ID="sb_se" value='processing selected subjects'onclick="myfunction2()">
</form>
