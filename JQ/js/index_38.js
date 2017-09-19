$(document).ready(function() {
	$('.cart > li > a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).parent().siblings().find('ul').slideUp();
		$(this).parent().find('ul').slideToggle();

	});
});