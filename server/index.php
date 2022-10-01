<?php

$type = $_GET['q'];

// queries
$statcmd = 2;
$papecmd = 3;
$officmd = 1;
$envecmd = 4;

//echo($type);
//$jsonoutput = json_encode($type);
switch ($type) {
    case 'stationary':
        getProducts($statcmd);
        break;
    case 'paper':
        getProducts($papecmd);
        break;
    case 'office':
        getProducts($officmd);
        break;
    case 'envelopes':
        getProducts($envecmd);
        break;
}

function getProducts($arg) {

    include('config.php');

    //echo($arg);
    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    if ($con -> connect_error) {
        die("Connection error");
    }

    $sqlquery = "SELECT * FROM products WHERE p_c_id = $arg";
    $result = mysqli_query($con, $sqlquery);
    if (!$result) {
        echo("no result");
    }

    $output = [];

    while ($r = mysqli_fetch_assoc($result)) {
        $output[] = $r;
    }

    //echo($result);

    echo json_encode($output);
}

?>