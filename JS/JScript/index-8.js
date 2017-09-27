//ch8-71: querySelector 選擇單一元素(只會抓第一筆資料來更新)

// var el = document.getElementById('titleId');
var el = document.querySelector('.titleClass em');
el.textContent = '1234'

//ch-72: querySeclectorall 可重複選取多個元素
var el = document.querySelectorAll('.titleClass em');
el[1].textContent= '567';
el[2].textContent= '567';

var elLen = el.length;
for(var i=0;i<elLen;i++){
	el[i].textContent = i+'123'
}

//ch8-73: setAttribute 增加標籤屬性

//把#變為google的連結
var el = document.querySelector('.stitle a');
el.setAttribute('href','http://www.google.com.tw');

//撈出href的屬性顯示在Console裡, .getAttribute可以改成.textContent or .innerHTML以撈取不同的值
var el3 = document.querySelector('.stitle a').getAttribute('href');
console.log(el3);

//把'str' 改變成 'strId'
var el2 = document.querySelector('.str');
el2.setAttribute('id','strId');

//ch8-75: innerHTML寫法
var el = document.getElementById('main');
var str = '<h1 class="orange">5678</h1>';
el.innerHTML = str+str;

//ch8-76: innerHTML
var el = document.querySelector('.list');
var link = 'http://www.books.com.tw';
var name = '書書';

el.innerHTML = '<li><a href="'+ link +'">'+name+'</a></li>';


//ch8-77: innerHTML與for的運用
var farms = [
{
	farmer: '伯斯',
	dogs: ['球球','皮皮'],
},
{
	farmer: '理查',
	dog: '酷樂'
}
];
var el = document.querySelector('.list2');
var farmLen = farms.length;
console.log(farmLen);
var str = '';
for (var i=0;i<farmLen;i++){
	var content = '<li>'+ farms[i].farmer +'</li>';
	str+=content;
}
el.innerHTML = str;


//ch8-78:createElement 寫法
var str = document.createElement('em');
str.textContent = '1234';
str.setAttribute('class','pink');
//增加子節點
document.querySelector('.title2').appendChild(str);


//ch8-79:createElement與for的運用
var farms = [
{
	farmer: '伯斯',
	dogs: ['球球','皮皮'],
},
{
	farmer: '理查',
	dog: '酷樂'
},
{
	farmer: '艾克',
	dogs: ['琪琪','貝利','溫斯頓']
}
];
var el = document.querySelector('.list3');
var farmLeng = farms.length;
for(var i=0;i<farmLeng;i++){
	var str = document.createElement('li');
	str.textContent = farms[i].farmer;
	el.appendChild(str);

}


//ch8-80:innerHTML被入侵的例子

// 可以信任的資料
var farms = [];

document.createElement('li');

document.getElementById('send').onclick = function(){
  var str = document.getElementById('content').value;
   
  document.getElementById('main2').innerHTML = str;
}




















