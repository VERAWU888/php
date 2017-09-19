$(document).ready(function() {
  $('.cart li').click(function(event) {
    $(this).find('h3').toggleClass('active');
  });
});


/*父元素是 cart
  第二個子元素是 ul
  第三個子元素是 li
  最後的子元素是 h3*/