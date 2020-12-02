<?php

    include 'connect.php';
    
    // Attempt insert query execution
    $sql = "SELECT src FROM video";
    $result = mysqli_query($link, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_BOTH);
    
    echo json_encode($row[0]);

    // Close connection
    mysqli_close($link);

?>