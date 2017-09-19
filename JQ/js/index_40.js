/* 39的內容，使用html(),text()載入內容

$(document).ready(function() {
	$('.box').html('<h1>哈哈你看不到我</h1>');
	//$(".box h1").text('哈哈你看不到');
});*/

$(document).ready(function() {
  // click範例
  $('.box1').html('<h1>用jQuery的動態產生的</h1>');
  $(".main1").click(function(event) {
    event.preventDefault();
    alert('有效！');
    //要執行的程式碼
  });
 
  // on 範例
  $('.main2').on('click', 'h1', function(event) {
    event.preventDefault();
    //要執行的程式碼
    alert('有效！');

  });
  $('.box3').html('<h1>用jQuery的動態產生的</h1>');
});
