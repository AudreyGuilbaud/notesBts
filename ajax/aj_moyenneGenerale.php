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

if (!isset($_POST['e4'])) {
    $_POST['e4'] = 0 ;
}

if (!isset($_POST['e5'])) {
    $_POST['e5'] = 0 ;
}

if (!isset($_POST['e6'])) {
    $_POST['e6'] = 0 ;
}

$francais = $_POST['francais'] ;
$anglais = $_POST['anglais'] ;
$maths = $_POST['maths'] ;
$algo = $_POST['algo'] ;
$ecodroit = $_POST['ecodroit'] ;
$e4 = $_POST['e4'] ;
$e5 = $_POST['e5'] ;
$e6 = $_POST['e6'] ;

$notefrancais = $francais*2 ;
$noteanglais = $anglais*2 ;
$notemaths = $maths*2 ;
$notealgo = $algo ;
$noteecodroit = $ecodroit*3 ;
$notee4 = $e4*4 ;
$notee5 = $e5*5 ;
$notee6 = $e6*3 ;
$moyennegenerale = ($notemaths + $notealgo + $notefrancais + $noteanglais + $noteecodroit + $notee4 + 
        $notee5 + $notee6)/22 ;

echo $moyennegenerale ;

?>

