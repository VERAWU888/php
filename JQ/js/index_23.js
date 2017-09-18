$(document).ready(function() {
	$('.close').click(function(event) {
		/* preventDefault取消連結 */
		event.preventDefault();
		$('.box').slideUp();
	});
});