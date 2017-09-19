$(document).ready(function() {
//只有click的選單，會變blue
	$('.menu li').click(function(event) {
		$(this).addClass('active');

	});
});



/*$(document).ready(function() {

	$('.menu li').click(function(event) {
		$('.menu li').addClass('active');

	});
});
這個語法是click一個選單就會全選並且為blue*/