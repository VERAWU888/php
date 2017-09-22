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
count(8);*/