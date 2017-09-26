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