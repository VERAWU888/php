$(document).ready(function() {
	$('.open').click(function(event) {
		/* Act on the event */
		$('.box1').delay(0).fadeIn();
		$('.box2').delay(1000).slideDown();
		$('.box3').delay(2000).show(0);
	});
});

/*show()的括號一定要寫上秒數(寫0也ok)，不然比box2早出現
fadeIn 和 slideDown 不需要寫秒數，但要寫也沒關係*/

/*$(document).ready(function() {
	$('.open').click(function(event) {
		$('.box1').delay(0).slideDown();
		$('.box2').delay(1000).slideDown();
		$('.box3').delay(2000).slideDown();
	});
});
不管是show, fadeIn, slideDown都是可以的哦*/