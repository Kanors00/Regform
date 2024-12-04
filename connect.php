<?php
    /*$firstName =$_POST['firstname'];
    $lastName =$_POST['lastname'];
    $birthdate =$_POST['birthdate'];
    $email = $_POST['email'];
    $number =$_POST['number'];
    $gender =$_POST['gender'];
    $country =$_POST['country'];
    $state =$_POST['state'];
    $City =$_POST['City'];
    $address =$_POST['address'];
    $pincode =$_POST['pincode'];
    //$submit =$_POST['submit'];


//DB Connect
$conn = new mysqli('localhost','root','','from');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into from(firstName, lastName, birthdate, email, number, gender, country, 
    state, city, address, pincode)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)");
$stmt->bind_param("ssisisssssi", $firstName, $lastName, $birthdate, $email, $number, $gender, $country, $state, 
$City, $address, $pincode,);
$stmt->execute();
echo "Successfully Registered! We will send you an email for your roll number and class, Thank you!";
$stmt->close();
$conn->close();
}*/



?>


<?php
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$birthdate = $_POST['birthdate'];
$email = $_POST['email'];
$number = $_POST['number'];
$gender = $_POST['gender'];
$country = $_POST['country'];
$state = $_POST['state'];
$City = $_POST['City'];
$address = $_POST['address'];
$pincode = $_POST['pincode'];

// DB Connect
$host = "localhost";
$dbname = "test";
$username= "root";
$password= "";

$conn = mysqli_connect('localhost', 
                        'root', 
                        '', 
                        'test');
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}
$sql = "INSERT INTO regform (firstName, lastName, birthdate, email, number, gender, country, 
    state, city, address, pincode)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
    die (mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ssisisssssi",$firstName, $lastName, $birthdate, $email, $number, $gender, $country, $state, $City, $address, $pincode);

mysqli_stmt_execute($stmt);

echo"Successfully Registered! We will send you an email for your roll number and class, Thank you!";
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);


/*} else {
    $stmt = $conn->prepare("INSERT INTO `test` (firstName, lastName, birthdate, email, number, gender, country, 
    state, city, address, pincode) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisisssssi", $firstName, $lastName, $birthdate, $email, $number, $gender, $country, $state, $City, $address, $pincode);
    $stmt->execute();
    echo "Successfully Registered! We will send you an email for your roll number and class, Thank you!";
    $stmt->close();
    $conn->close();
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
}*/
?>