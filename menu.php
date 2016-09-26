<?php

# $start = $_GET["start"];
# $end = $_GET["end"];
$items = explode("\n", file_get_contents("menu.txt"));

$data;
foreach ($items as $item) {
	$contents = explode("|", $item);
	$data[] = array(
		"name" => $contents[0],
		"price" => $contents[1]
	);
}
header("Content-type: Application/json");
print json_encode($data);

?>
