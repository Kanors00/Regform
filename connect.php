<?php
    $firstName =$_POST['firstname'];
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
    $submit =$_POST['submit'];


//DB Connect
$conn = new mysqli('localhost','root','','regform');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into regform(firstName, lastName, birthdate, email, number, gender, country, 
    state, city, address, pincode)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)");
$stmt->bind_param("ssisisssssi", $firstName, $lastName, $birthdate, $email, $number, $gender, $country, $state, 
$city, $address, $pincode,);
$stmt->execute();
echo "Successfully Registered! We will email you your roll number and class, Thank you!";
$stmt->close();
$conn->close();
}





?>
