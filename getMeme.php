<?php

$fileName="test";
$allMemes = scandir("memes");
$fileName = $allMemes[mt_rand(0,count($allMemes))];

echo json_encode($fileName);

?>