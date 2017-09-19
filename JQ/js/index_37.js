$(document).ready(function() {
	
	$('.question h3').click(function(event) {
		/*讓點擊到 h3 亮起來，其他h3移除 active樣式*/
		$(this).toggleClass('active');

		/*讓點擊到 h3 找到元素 .quesion，再找到裡面的p 判斷收闔*/
		$(this).parent().find('p').slideToggle();

        /*讓點擊到以外的 p 隱藏圯來*/
		$(this).parent().siblings().find('p').slideUp();

        /*讓點擊到以外的 h3 移除active樣式*/
		$(this).parent().siblings().find('h3').removeClass('active');


	});
});