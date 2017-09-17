<?php

if ($_COOKIE['id'] == 'Lily' && $_COOKIE['pw'] == 'like' ) {
  echo $_COOKIE['id'];
  echo $_COOKIE['pw']
} else {
   header("location:login2.php");
}