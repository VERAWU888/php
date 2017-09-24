//ch4-22:function的寫法
function greet(){
    console.log('Hello');
    console.log('請問您想要點什麼？')
}

greet();

//ch4-23:function帶參數
function count(oneNum){
	var total = oneNum * 10;
	console.log('總數等於:'+total);
}
count(10);

/*或者是以下的寫法
function count(oneNum,twoNum){
	var total = oneNum + twoNum;
	console.log('總價格 :'+total+"元");
}
count(8,10);*/

//ch4-24:全域與區域變數

//全域變數(是在function 之外)
var total;

function count(oneNum,twoNum){
	total = oneNum * twoNum;
	console.log("總價格" + total + "元")
}
count (8,10);
console.log(total);

/*function count(oneNum,twoNum){
	//區域變數(是在function 之內，並且running完function的內容，就會消滅掉了)
	var total = oneNum * twoNum;
	console.log("總價格" + total + "元")
}
count (8,10);
console.log(total);*/

//function有hositing的概念，因為function不論設在開頭還是下面，都會優先執行function的內容




