//ch6-43:比較運算 ==, !== 
var myMonth = 4;
var thisMonth = 9;
var birthdayCheck = myMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = nowPeople !== totalPeople;
console.log(allPeopleNoHereCheck);
document.getElementById('peopleId').textContent = allPeopleNoHereCheck;

// == 等於， !== 不等於
// === 是判斷(嚴謹模式)，例: 8 === 7 是false
//比較運算子 >  >=  <  <=
//邏輯運算子 && and,  || or,  ! no

var myBill = 1250;
var VIP = false;
var andCheck = myBill > 1000 && VIP == true;
var orCheck = myBill > 1000 || VIP == true;

document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;

//ch6-49:if程式碼
var hungry = "飽足";
if(hungry == "飢餓"){
	console.log("我現在好餓哦！");
}else{
	console.log("我現在一點都吃不下了");
	console.log("我們走，買單吧");
}

//ch6-51:else if 寫法
var hungry = 5;
// hungry 程度: 1~10
function eat(food){
	console.log("我現在想吃"+food);
}
if(hungry <= 3){
	eat('pizza');
}else if(hungry <= 5 && hungry >3){
	eat('salad');
}else if(hungry == 7){
	eat('soda cookies');
}else{
	console.log('我現在不想吃東西')
}

//ch6-53:switch 寫法
var light = "blue";
function lightFun(str){
	console.log("目前是"+str+'警戒');
}
switch(light){
	default:
		alert('安全中');
	break;
	case 'red':
		alert('紅色警戒');
		alert('非常危險！');
	break;
	case 'yellow':
		alert('黃色警戒');
		alert('快躲回房子');
	case 'blue':
		alert('藍色警戒');
		alert('還算安全');
	break;
}















