<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "root";
<<<<<<< HEAD
$dbname = "royalshoes";
=======
$dbname = "royal_shoes";
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
