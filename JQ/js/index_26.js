$(document).ready(function() {

	$('.dropdown').click(function(event) {
		/* 需要點擊選單，選單才會自動下拉 */
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});
});