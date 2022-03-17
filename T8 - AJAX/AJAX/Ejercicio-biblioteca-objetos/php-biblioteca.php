<?php
    header("Content-type: application/json; charset=utf-8");
    $input = json_decode(file_get_contents("php://input"), true);
    if($input["stock"] == 0){
        $input["disponible"] = false;
    }
    $output= $input;
    echo json_encode($output);
?>
