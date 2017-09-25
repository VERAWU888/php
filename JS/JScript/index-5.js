//ch5-34:陣列array 寫法
var cornField = [];
cornField.push(5);
cornField.push(8);
cornField.push(6);

cornField [0] = 10;

cornField[3] = 100;

console.log('我總共有'+cornField.length+'個玉米田');

console.log(cornField);

//ch5-36:物件object 寫法, 37:物件+function的運用
var farm = {
	farmer: '斯伯',
	duck:3,
	dog:['亨利', '琪琪'],
	goDinner: function(){
		console.log(farm.farmer+',該回家吃晚餐');
	},
	poultrytotal: function(){
		var num = farm.chick + farm.duck;
		console.log('我家的農場共有'+num+'隻家禽');
	}
};
farm.chick = 15;//加在外面需要前面加上farm，也可以加在var farm = {}

farm.goDinner();
farm.poultrytotal();

console.log(farm.farmer);
console.log(farm.chick);
console.log('我的農場裡的第一隻狗叫'+farm.dog[0]);

//家裡的人
var house = {
	room: 3,
	father: 'Ed', 
	mother: 'Reene',
	son:['Luker','Lucas']
};
console.log(house.son[0]);

//ch5-38:物件+陣列設計流程
var sweetyshop = [
	{
		maker: '莉雅',
		cookies: 7,
		cake: 8,
		pie: 4,
		roll: 5,
		bread: 6
	},
	{
		maker: ['曼達琳','妮娜'],
		cookies: 8,
		cake: 7,
		pie: 5,
		roll: 4,
		bread: 5
	}
];

console.log(sweetyshop[1].maker[0])









