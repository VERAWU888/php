$(document).ready(function() {
	$('.start1').click(function(event) {
		/* Act on the event */
		$('.box1').slideUp(1000).slideDown(2000).slideUp(1000).slideDown(2000); 
	});
	
	$('.start2').click(function(event) {
		/* Act on the event */
		$('.box2').hide(1000).show(2000).hide(1000).show(2000); 
			
	});

});