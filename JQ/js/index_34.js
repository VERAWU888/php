$(document).ready(function() {
	$('.addCart').click(function(event) {
		/* Act on the event */
		$(this).parent().toggleClass('active');
	});
});

/*用parent去找到父層的元素來執行active
click 購物車(button) –––> 找到父元素(li) ––––> 去執行toggleClass */



/*$(document).ready(function() {
	$('.addCart').click(function(event) {
		
		$(this).toggleClass('active');
	});
});
*/