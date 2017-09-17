<?php
if($_COOKIE['id'] == '1' && $_COOKIE['pw'] == '1') {
	echo $_COOKIE['id'];
    echo $_COOKIE['pw'];
} else {
	header("location:login.php");
}

