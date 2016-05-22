<?php

if (!isset($_POST['francais'])) {
    $_POST['francais'] = 0 ;
}

if (!isset($_POST['anglais'])) {
    $_POST['anglais'] = 0 ;
}

if (!isset($_POST['maths'])) {
    $_POST['maths'] = 0 ;
}

if (!isset($_POST['algo'])) {
    $_POST['algo'] = 0 ;
}

if (!isset($_POST['ecodroit'])) {
    $_POST['ecodroit'] = 0 ;
}

$francais = $_POST['francais'] ;
$anglais = $_POST['anglais'] ;
$maths = $_POST['maths'] ;
$algo = $_POST['algo'] ;
$ecodroit = $_POST['ecodroit'] ;

$notefrancais = $francais*2 ;
$noteanglais = $anglais*2 ;
$notemaths = $maths*2 ;
$notealgo = $algo ;
$noteecodroit = $ecodroit*3 ;

$moyennegenerales = ($notemaths + $notealgo + $notefrancais + $noteanglais + $noteecodroit)/10 ;

echo $moyennegenerales ;
