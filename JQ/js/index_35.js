$(document).ready(function() {

	$('.menu li').click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');

	});
});

/*只有選擇的選單2有效果，其它的選單沒有效果(全恢復成原本的樣式)*/