<?php

if (!isset($_POST['e4'])) {
    $_POST['e4'] = 0 ;
}

if (!isset($_POST['e5'])) {
    $_POST['e5'] = 0 ;
}

if (!isset($_POST['e6'])) {
    $_POST['e6'] = 0 ;
}


$e4 = $_POST['e4'] ;
$e5 = $_POST['e5'] ;
$e6 = $_POST['e6'] ;

$notee4 = $e4*4 ;
$notee5 = $e5*5 ;
$notee6 = $e6*3 ;

$moyennetech = ($notee4 + $notee5 + $notee6)/12 ;

echo $moyennetech ;