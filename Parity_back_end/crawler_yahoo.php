<?php 
//初始化一個cURL對象
$curl = curl_init();

//設置你需要抓取的URL 
curl_setopt($curl, CURLOPT_URL, 'view-source:https://tw.search.buy.yahoo.com/search/shopping/product?p=pc&qt=product&cid=0&clv=0&cid_path=');

//設置首標
curl_setopt($curl，CURLOPT_HEADER，1);

//設置cURL參數，要求結果保存到字符串中還是輸出到屏幕上。
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

//運行cURL，請求網頁
$data = curl_exec($curl);

//關閉URL請求
curl_close($curl);

// $data = explode('prods',$data);

//顯示獲得的數據
echo($data);