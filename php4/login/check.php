<?php
$id = $_GET['id'];
$pw = $_GET['pw'];

if($id == '1' && $pw == '1') {
 // echo $id . $pw;
 setcookie('id',$id,time()+3600);
 setcookie('pw',$pw,time()+3600);
 header("location:index.php");
} else {
 header("location:login.php");
}