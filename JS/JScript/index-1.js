
//index-1.html的彈跳視窗
alert('Holle Nice to see you !!');

//index-2.html的ID(),textContent
document.getElementById('title1').textContent = '修改後的標題';

//ch3-13:變數 number 介紹，加減乘除
var cookiePrice = 35;
document.getElementById('price').textContent = cookiePrice;

//ch3-14:變數 string 介紹
var polite = "Holle ";
var indexName = "Chris ";
var totalPolite = polite + indexName + "你好";
document.getElementById('myName').textContent = totalPolite;

//ch13-15:如何輸出內容
var score = 90
console.log(score);

//ch3-17:變數-數字新增刪除修改
var cookiePrice = 35;
var myMoney = 15;
var total = cookiePrice - myMoney;
var five = cookiePrice * 5;
document.getElementById('cookiePriceId').textContent = cookiePrice;
document.getElementById('myMoneyId').textContent = myMoney;
document.getElementById('totalId').textContent = total;
document.getElementById('five').textContent = five;