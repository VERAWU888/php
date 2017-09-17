<?php
$id = $_POST['id'];
$pw = $_POST['pw'];

if($id == 'Lily' && $pw == 'like') {
 // echo $id . $pw;
 setcookie('id',$id,time()+3600);
 setcookie('pw',$pw,time()+3600);
 header("location:index.php");
} else {
 header("location:login.php");
}

