<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<title>比價網</title>
</head>
<body>

	<!-- 搜尋 -->
   <div id="search_bar">
   	<form action="">
   		<input type="text" class="search_product" placeholder="產品搜尋…" >
   		<input type="button" class="search_btn" value="搜尋">
   	</form>
   </div>
    <div id="div1"></div>

    <!-- 排序 -->
        <div class="topmenu">
            <ul>
                <li><a href="#">價格高低</a></li>
                <li><a href="#">相關度</a></li>
                <li><a href="#">排序</a></li>
            </ul>
        </div>

		

	<div class="container">
		<h4>熱門比價網</h4>
		<ul class="">
			<li>
				<div>
					<a href="">
						<div>
							<ol>
								<li></li>
								<li></li>
								<li></li>
							</ol>
						</div>
					</a>
				</div>
			</li>
			<li>
				<div><a href=""></a></div>
			</li>
			<li>
				<div><a href=""></a></div>
			</li>
			<li>
				<div><a href=""></a></div>
			</li>
			<li>
				<div><a href=""></a></div>
			</li>
		</ul>
	</div>
	
</body>

<script>
// $(document).ready(function(){
    $(".search_btn").click(function(){
        $.ajax({
	        url: "keyword_back_end.php",
	        dataType: 'html',
	        type: 'POST',
	        // data: {arr1: 'hello'},
	        data: {
	        	'search_value' : $('.search_product').val(),
	        	'test' : 1
	        },
	        success: function(result){
	        	// alert(result);
	        	console.log(result);
	        	alert(result.good);
	            $("#div1").html(result.good);

	        },
	        error: function() {
	        	alert('gg');
	        }
    	});
    });
// });
</script>

</html>