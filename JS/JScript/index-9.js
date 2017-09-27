//ch9-84:event事件，告知當下元素資訊
var el = document.querySelector('.btn');

el.onclick = function(event){
  console.log(event);
}

//ch9-86:addEventListener 事件監聽
var el = document.querySelector('.btn2');
				  //選擇事件,代入匿名function,false
el.addEventListener('click',function(e){
	alert('hello');
},false)

//ch9-87:綁定事件的語法差異
var elOn = document.querySelector('.btnOn');
elOn.onclick = function (){
alert('on-1');
}
elOn.onclick = function (){
alert('on-2');
}

//事件監聽
var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click',function(){
	alert('add-1')
},false);
elAd.addEventListener('click',function(){
	alert('add-2')
},false);

//ch8-88:Event Bubbling, Event Capturing差異
var elbox = document.querySelector('.box');
elbox.addEventListener('click',function(){
	alert('box');
	console.log('box');
},false);
//false - 從指定元素往外找



























