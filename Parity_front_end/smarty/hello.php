<?php
require "./libs/Smarty.class.php";

$tpl = new Smarty;
$tpl->assign("title", "測試用的網頁標題");
$tpl->assign("content", "測試用的網頁內容");
// 上面兩行也可以用這行代替
// $tpl->assign(array("title" => "測試用的網頁標題", "content" => "測試用的網頁內容"));
$tpl->display('hello.html');