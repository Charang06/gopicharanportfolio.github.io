<?php
// 1. Connect to MySQL
$conn = new mysqli("localhost", "root", "", "myformdb");

// 2. Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 3. Get data from form

$fname = $_POST['fname'] ?? '';
$email = $_POST['email'];
$phone = $_POST['phone'];
$subjects = $_POST['subjects'];
$massage = $_POST['massage'];

// 4. Insert into database
$sql = "INSERT INTO users (fname,email,phone,subjects,massage) VALUES ('$fname', '$email', '$phone', '$subjects', '$massage')";

if ($conn->query($sql) === TRUE) {
    echo "Data submitted successfully!";
} else {
    echo "Error: " . $conn->error;
}

// 5. Close connection
$conn->close();
?>
