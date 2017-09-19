$(document).ready(function() {
	$('.cart > li > a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		//選到的ul，以外的ul都隱藏起來
		$(this).parent().siblings().find('ul').slideUp();
		//選到的ul做出折疊效果
		$(this).parent().find('ul').slideToggle();

	});
});