$(document).ready(function() {
	//fadeIn 淡入
	$('.button1').click(function(event) {
		$('.text1').fadeIn(3000);
		
	});
	
	//fadeOut 淡出
	$('.button2').click(function(event) {
		$('.text2').fadeOut(3000);
			
	});

	//fadeToggle 淡入淡出，可以open & close
	$('.button3').click(function(event) {
		$('.text3').fadeToggle(3000);
	});
});