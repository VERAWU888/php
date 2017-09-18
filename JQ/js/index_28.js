$(document).ready(function() {
	
	//字體放大
	$('.font-b').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','24px')
	});

	//字體中
	$('.font-m').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','20px')
	});

	//字體縮小
	$('.font-s').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','16px')
	});
});