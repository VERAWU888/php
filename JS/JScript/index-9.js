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
//ch8-89:stopPropagation 中止冒泡事件
var elbox = document.querySelector('.box');
elbox.addEventListener('click',function(){
	alert('你沒有點擊到 box');
	console.log('你沒有點擊到 box');
},false);

var elbox = document.querySelector('.point');
elbox.addEventListener('click',function(e){
	e.stopPropagation();
	alert('point');
	console.log('point');
},false);
//false (事件氣泡 Event Bubbling)- 從指定元素往外層找
//true (事件捕捉 Event Capturing)- 從最外層往裡面找到指定元素
//若不寫的話，預設是false
//stopPropagation 停止監聽的指令，阻止執行其它的指令進行下一個行為，只執行想要的指令就好

//ch8-90:preventDefault 取消預設觸發行為
var el = document.querySelector('.link');
el.addEventListener('click',function(e){
	//取消默認行為
	//原本的連結會到指定的網頁
	//submit 按鈕，先透過js去查詢表單有無錯誤, 在post去傳送
	e.preventDefault();
	console.log('test');
})

//ch9-91: e.target 了解目前所在元素位置
var el = document.querySelector('.header');

el.addEventListener('click',function(e){
	console.log(e.target.nodeName);
},false);


//ch9-92:change
var area = document.getElementById('areaId');
var list = document.querySelector('.list');

var country = [
    {
        farmer: '克里斯',
        place: '前鎮區'
    },
    {
        farmer: '羅伯',
        place: '苓雅區'
    }
    ,{
        farmer: '強森',
        place: '苓雅區'
    }
]
var len = country.length;

function updateList(e){
    var select = e.target.value;
    var str='';
    for(var i=0;len>i;i++){
        if(select== country[i].place){
            str += '<li>'+country[i].farmer+'</li>'
        }
    }
    list.innerHTML = str;
}
area.addEventListener('change',updateList,false)




















