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

		

	 <!-- 比價商品 -->
    <div id="Product"> 
        <ul class="mod_grid_layout mod_price_comparison pure-g theme_general_border">
            <li class="mod_price_comparison_list pure-u" itemscope="" itemtype="http://schema.org/Product">
                <div class="mod_price_comparison_product">
                    <a class="link_ghost" href="#">
                        <img src="img/bgimg.jpg">
                        <div class="mod_price_comparison_container">
                            <h4 class="normal" itemprop="name">Canon EF 8-15mm f/4L fisheye USM 魚眼鏡頭</h4>
                        </div>
                    </a>
                        <div class="mod_price_comparison_container_bottom">
                            <ol>
                                <li class="mod_price_comparison_items pure-g" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                <meta itemprop="priceCurrency" content="TWD">
                                    <a href="#" target="_blank" itemprop="url" rel="nofollow">
                                        <span class="pure-u-3-5 ellipsis small mod_grid_layout_shop" itemprop="seller">Yahoo!奇摩超級商城</span>
                                        <span class="pure-u-2-5 ellipsis price large money" itemprop="price" content="32930">32,930</span>
                                    </a>
                                </li>
                                <li class="mod_price_comparison_items pure-g" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                    <meta itemprop="priceCurrency" content="TWD">
                                        <a href="#" target="_blank" itemprop="url" rel="nofollow">
                                            <span class="pure-u-3-5 ellipsis small mod_grid_layout_shop" itemprop="seller">Yahoo!奇摩購物中心</span>
                                            <span class="pure-u-2-5 ellipsis price large money" itemprop="price" content="33136">33,136</span>
                                        </a>
                                </li>
                                <li class="mod_price_comparison_items pure-g" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                    <meta itemprop="priceCurrency" content="TWD">
                                    <a href="#" target="_blank" itemprop="url" rel="nofollow">
                                        <span class="pure-u-3-5 ellipsis small mod_grid_layout_shop" itemprop="seller">蝦皮商城</span>
                                        <span class="pure-u-2-5 ellipsis price large money" itemprop="price" content="33269">33,269</span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                </div>
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