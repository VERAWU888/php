//typeof()可以偵測所輸入的值是字串、數字、還是其它。
//例如：typeof(num),偵測是字串
//num = parseInt(num)可以把字串轉換成數字

document.getElementById('countId').onclick = function(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum
}

//ch4-29:function搭配 return 的寫法
//計算漢堡的總價，用return的語法
function getHamParice(num){
	var HamPrice = 50;
	var total = HamPrice * num;

	return total;
}

var tom = getHamParice(20);
var john = getHamParice(10);
console.log(john);


/*function count(price){
 
    //(2)在count函數中因為全館衣服打8折所以先乘上0.8
    //(3)但是因為需要加收10%營業稅，所以把乘上0.8的價格再丟入addTax函數
 
    return addTax(price*0.8);
 
    //(5)等到 addTax回傳結果後再回傳到(1)
}
 
function addTax(price){
 
    //(4)在addTax當中因為需要加收10%營業稅所以乘上1.1，並回傳結果
 
    return price*1.1;
}
 
//(1)我們想要計算一件衣服的價格所以呼叫 count 函數而衣服為 500 元
console.log(count(500));
*/

