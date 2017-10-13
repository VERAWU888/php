<?php
// $product_name = $_POST['product_name'];

$product_name = array(
	'good' => $_POST['search_value'],
	'test' => $_POST['test'],
 );
echo json_encode($product_name);

