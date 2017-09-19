$(document).ready(function() {
	$('.wrap').click(function(event) {
		/* Act on the event */
	$('img').attr('width', '100');
	
	});
	$('a').attr('href', 'http://www.google.com');
});


//以下是44的 remove()語法
$(document).ready(function() {
	$('.remove').click(function(event) {
		/* Act on the event */
		$(this).parent().parent().remove();
	});
});