//ch6-43:比較運算 ==, !== 
var myMonth = 4;
var thisMonth = 9;
var birthdayCheck = myMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = nowPeople !== totalPeople;
console.log(allPeopleNoHereCheck);
document.getElementById('peopleId').textContent = allPeopleNoHereCheck;
