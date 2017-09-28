//ch10-101:setItem, getItem 基本操作
/*
var str = 'tom';
localStorage.setItem("myName",str);

console.log(localStorage.getItem('myName'));
*/
var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall')

function saveName(e){
	var str = document.querySelector('.textClass').value;
	localStorage.setItem('myName',str);

}

btn.addEventListener('click',saveName);
call.addEventListener('click',function(){
	var str = localStorage.getItem('myName');
	alert('你的名字叫做'+ str);
})
