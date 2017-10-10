<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>

	<title>Document</title>
</head>
<body>
	<div class="">
		<input type="text" class='search_value' name="product_name">
		<input type="button" class="button" value="submit">
	</div>
	<div id="div1"></div>
	
</body>

<script>
$(document).ready(function(){
    $(".button").click(function(){
        $.ajax({
        url: "keyword_back_end.php",
        cache: false,
        dataType: 'html',
        type: 'POST',
        // data: {arr1: 'hello'},
        data: $('.search_value').val(),
        success: function(result){
        	alert(result);
            $("#div1").html(result);

        },
        error: function() {
        	alert('gg');
        }
    	});
    });
});
</script>

</html>