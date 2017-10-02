//ch13-118: 透過XMLHttpRequest物件跨瀏覽器撈資料

// var xhr = new XMLHttpRequest();

// readyState
// 0 - 你已經產生一個XMLHttpRequest,但是還沒連結到你要撈的資料
// 1 - 你用了 open(),但你還沒把資料傳送過去
// 2 - 偵測到你有用 send
// 3 - loading
// 4 - 你撈到資料了，數據已經完全接收到了


// 格式：get(讀取資料), post(傳送資料到伺服器)
// xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
// 格式、要讀取的網址、同步與非同步

// xhr.send(null);
//        空的資料

//ch13-119 & 120: AJAX非同步觀念
var xhr = new XMLHttpRequest();
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
// true: 非同步，它不會等資料傳回來，就讓程式繼續往下跑，等到回傳指令才會自然回傳
// false: 同步，它會等資料傳回來，才讓程式繼續往下跑
//一般情況下，因為跑的資料太多太大了所以都用 true ，如果用false等它跑完會費很多時間。
xhr.send(null);


xhr.onload = function(){
	console.log(xhr.responseText);
	var str = JSON.parse(xhr.responseText);
	document.querySelector('.message').textContent = str[0].name;
}
// 1. 建立一個 xmlhttprequest
// 2. 傳送到對方伺服器要資料
// 3. 回傳資料到自己的瀏覽器
// 4. 拿到資料後再看要怎麼處理












