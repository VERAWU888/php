<?php 

//初始化一個cURL對象
$curl = curl_init();

//設置你需要抓取的URL 
curl_setopt($curl, CURLOPT_URL, 'http://search.books.com.tw/search/query/key/apple%E7%AD%86%E9%9B%BB');

//設置首標
curl_setopt($curl，CURLOPT_HEADER，1);

//設置cURL參數，要求結果保存到字符串中還是輸出到屏幕上。
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

//運行cURL，請求網頁
$data = curl_exec($curl);

$data = (string)$data;
echo $data;
exit;

//關閉URL請求
curl_close($curl);

//顯示獲得的數據
// var_dump($data);
// echo(strops($data,'<!--若無勾選選項時,可將下方input_buy的div整個拿掉-->'));
// exit;

print_r(explode('',$data));