$(document).ready(function() {
	//toggleClass 觸發效果
	$('.button1').click(function(event) {
		$('.text1').toggleClass('active');
	});

	
	//.removeClass('active'); 移除效果
	$('.button2').click(function(event) {
		$('.text2').removeClass('active');
			
	});

	//.addClass('active'); 出現效果
	$('.button3').click(function(event) {
		$('.text3').addClass('active');
		
	});

	/* toggleClass搭配css3 Transition 做出fadeToggle淡入淡出的效果
	(fadeToggle少做，因為會造成電腦的負擔)*/
	$('.button4').click(function(event) {
		$('.text4').toggleClass('active');
	});
});