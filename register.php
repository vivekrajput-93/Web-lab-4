<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "user_password";
    $dbname = "WIMS2021";

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['emailAddress'];
    $password = $_POST['password'];
    $address = $_POST['address'];
    $mobileNo = $_POST['mobileNo'];
    $gender = $_POST['gender'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO users (first_name, last_name, email_address, password, address, mobile_no, gender)
    VALUES ('$firstName', '$lastName', '$email', '$password', '$address', '$mobileNo', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration Successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>