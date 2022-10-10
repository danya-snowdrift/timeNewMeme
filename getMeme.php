<?php

$fileName="test";
$allMemes = array_diff(scandir("memes"), array(".", ".."));
$fileName = $allMemes[array_rand($allMemes)];
echo $fileName;

//echo json_encode($allMemes);

?>