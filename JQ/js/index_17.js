$(document).ready(function() {
	//this is event1
	$('.button1').click(function(event) {
		$('.text1').slideDown(1000);
		
	});
	
	$('.button2').click(function(event) {
		$('.text2').slideToggle(1000);
	});

	$('.button3').click(function(event) {
		$('.text3').slideUp(1000);
	});
});