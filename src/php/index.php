<?php
 $link = mysqli_connect("localhost","root"," ","user_login");
 if(mysqli_connect_error()){
    die("error");
 }
 $query = "SELECT * FROM users";
 if($result = mysqli_query($link, $query)){
    $row = mysqli_fetch_array($result);
    print_r($row);
 }
