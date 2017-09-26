//ch7-57:for 寫法
//初始狀態;條件;更新內容
for (var i=0;i<3;i++){
	console.log(i)
}

for (var i=0;i<10;i++){
	console.log(i+'*'+i+'='+ i*i)
	//0*0=0
	//1*1=1
}

//ch7-58:for-array 寫法
var farms = [
{
	farmer: '斯伯',
	field: 6
},
{
	farmer: '查理',
	field: 10
}
]
var farmsTotal = farms.length;
for (var i=0;i<farmsTotal;i++){
	console.log('第'+ (i+1) +'農場主人是'+farms[i].farmer)
}

//ch7-59: for-if 寫法
var farms = [
  {
    farmer: '克特',
    field: 6,
    chick: 200
  },
  {
    farmer: '理斯特',
    field: 10,
    chick: 50,
  },
  {
    farmer: '約翰',
    field: 6,
    chick: 120
  }
]
// 顯示哪些農場的小雞超過100隻以上

var farmsTotal = farms.length;

for(var i =0;i<farmsTotal;i++){
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'的小雞超過100隻以上');
    }
}

// ch7-60:for-i++寫法
i = i+1
i+= 1
i++
// 以上都在console裡練習的

//ch7-61: for加總
var farms = [
{
	farmer: '克特',
	field: 6,
	chick: 200,
	banana: 5000
},
{
	farmer: '理斯特',
	field: 10,
    chick: 50,
    banana: 1000
},
{
	farmer: '約翰',
    field: 6,
    chick: 120,
    banana: 3215
}
]
// 計算今年的香蕉採收總數
var farmsTotal = farms.length;
var bananaTotal = 0;

for(var i =0;i<farmsTotal;i++){
	bananaTotal+= farms[i].banana;
}
console.log('今年村子的香蕉採收量:'+bananaTotal);

//ch7-62: for-break的運用

//我要找一個農場，買50隻小雞
var farmsTotal = farms.length;
for(var i =0;i<farmsTotal;i++){
	if(farms[i].chick>50){
		console.log(farms[i].farmer+'的小雞剛好夠');
		farms[i].chick -= 50;
		console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick);
		break;
	}
}
console.log(farms[0].chick);













