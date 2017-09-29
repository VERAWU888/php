//ch11-110:回上一頁功能實作

//下一頁的功能
document.getElementById('next').onclick = function(){
	window.history.forward();
}

//ch11-111:透過JS設計列印功能
document.getElementById('print').onclick = function(){
	window.print();
}
document.getElementById('locat').onclick = function(){
	console.log(location);
}
document.getElementById('open').onclick = function(){
	window.open('http://www.google.com.tw');
}

//ch11-112:動態擷取瀏覽器高度 innerHeight
document.querySelector('.hero').style.height = window.innerHeight+"px"

//onresize可以讓背景隨著瀏覽器做伸縮
window.onresize = function(){
   document.querySelector('.hero').style.height = window.innerHeight+"px"
}