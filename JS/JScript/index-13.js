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
/*

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

*/

//ch13-121: HTTP狀態碼
//status:200 - 資料有正確回傳，有撈到
//status:404 - 資料讀取錯誤，沒有撈到
/*
var xhr = new XMLHttpRequest();
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
xhr.send(null);

xhr.onload = function(){
	console.log(xhr.responseText);
	if(xhr.status == 200){
		var str = JSON.parse(xhr.responseText);
		document.querySelector('.message').textContent = str[0].name;
	}else{
		console.log('資料讀取錯誤！！');
	}
}
*/

//ch13-122: 什麼是Cross-Origin Resource Sharing(CORS)

//CORS - 是否可以跨網域撈取資料,若網址未開啟CORS,便不能撈取資料了
//www.test-cors.org 可以幫忙檢查是否有開啟CORS


//ch13-123:使用JSONP進行跨網域存取

/*
function getData(data) {
 console.log(data);
 document.querySelector('.infromation').textContent = data[0].SiteName;
}
*/


//ch13-126:AJAX POST寫法

 //註冊(練習時，帳號要改，不然會顯示帳號已註冊了)
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=rita@gail.com&password=ilovey');


/* 
//登入
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=rita@gail.com&password=ilovey');
*/


//ch13-128:AJAX JSON POST寫法

//註冊(練習時，帳號要改，不然會顯示帳號已註冊了)
var account = {
	email: 'paino@gmail.com',
	password:'nn888666'
}
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader('Content-type','application/json');
var data = JSON.stringify(account);
xhr.send(data);

/*
//登入
var account = {
	email: 'paino@gmail.com',
	password:'nn888666'
}
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
xhr.setRequestHeader('Content-type','application/json');
var data = JSON.stringify(account);
xhr.send(data);

*/

//ch13-129:AJAX 實物範例設計 註冊 


var send = document.querySelector('.send');

send.addEventListener('click',signup,false);

function signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr =  callbackData.message;
        
        if(veriStr =="帳號註冊成功"){
            alert('帳號註冊成功！！');
        }else{
            alert("帳號註冊失敗！");
        }
    }
}



//ch13-130:AJAX 實物範例設計 登入


var submit = document.querySelector('.submit');

submit.addEventListener('click',signin,false);

function signin(){
    var email2Str = document.querySelector('.email').value;
    var password2Str = document.querySelector('.password2').value;
    var account2 = {};
    account2.email = email2Str;
    account2.password2 = password2Str;
    
    var xhr = new XMLHttpRequest();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
	xhr.setRequestHeader('Content-type','application/json');
	var data = JSON.stringify(account);
	xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var comfirmStr = callbackData.message;

        if(comfirmStr =="登入成功"){
            alert('登入成功！！');
        }else{
            alert("此帳號不存在或帳號密碼錯誤！");
        }
    }
}


