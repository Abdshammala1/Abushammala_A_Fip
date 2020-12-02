<?php

    include '../connect.php';
    
    // Escape user inputs for security
    $name = mysqli_real_escape_string($link, $_REQUEST['name']);
    $email = mysqli_real_escape_string($link, $_REQUEST['email']);
    $subject = mysqli_real_escape_string($link, $_REQUEST['subject']);
    $message = mysqli_real_escape_string($link, $_REQUEST['message']);
    
    // Attempt insert query execution
    $sql = "INSERT INTO portfolio (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";
    if(mysqli_query($link, $sql)){
        echo "1";
    } else{
        echo "0";
    }
    
    // Close connection
    mysqli_close($link);

?>