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

//ch10-102:透過JSON.parse, JSON.stringify來編譯資料
// 1.將array 轉為 string -JSON.stringify()
// 2.將string 轉為 array -JSON.parse()
//學以上兩點是因為 localStorage 只會保存 string 資料

var country = [
{
	farmer: '盧卡斯'
}
];
var countryString = JSON.stringify(country);
console.log(countryString);
localStorage.setItem('countryItem',countryString);

var getData = localStorage.getItem('countryItem');
var getDataAry = JSON.parse(getData);

console.log(getDataAry[0].farmer);

//ch10-103:data 透過dataset讀取自定資料
var list = document.querySelector('.list');

//確認點擊的農夫是誰
function checkList(e){
  var num = e.target.dataset.num;
  var dog = e.target.dataset.dog;
  console.log('農夫標號是'+num);
  console.log('有'+dog+'隻狗');
}
list.addEventListener('click',checkList,false);

//ch10-104:dataset, array 運用
var country = [
{
	farmer: '達克',
},
{
	farmer: '柯特'
}
];
var list2 = document.querySelector('.list2');
//更新農場資訊
function updateList(){
	var str = '';
	var len = country.length;
	for(var i=0;len>i;i++){
		str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
	}
	list2.innerHTML = str;
}
updateList();
function checkList2(e){
	var num = e.target.nodeName;
	if(num !=="LI"){return}
	var str = e.target.dataset.num;
	console.log('您現在選擇的農夫是'+country[str].farmer);
}

list2.addEventListener('click',checkList2);

















