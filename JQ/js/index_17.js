$(document).ready(function() {
	//slideDown 出現
	$('.button1').click(function(event) {
		$('.text1').slideDown(1000);
		
	});
	
	//slideToggle 上下滑動
	$('.button2').click(function(event) {
		$('.text2').slideToggle(1000);
	});

	//slideUp 關閉
	$('.button3').click(function(event) {
		$('.text3').slideUp(1000);
	});
});