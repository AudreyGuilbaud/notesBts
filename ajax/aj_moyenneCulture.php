<?php
if (!isset($_POST['francais'])) {
    $_POST['francais'] = 0 ;
}

if (!isset($_POST['anglais'])) {
    $_POST['francais'] = 0 ;
}

$francais = $_POST['francais'] ;
$anglais = $_POST['anglais'] ;

$notefrancais = $francais*2 ;
$noteanglais = $anglais*2 ;
$moyenneculture = ($notefrancais + $noteanglais)/4 ;

echo $moyenneculture ;
