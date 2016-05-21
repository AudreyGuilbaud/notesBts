<?php
if (!isset($_POST['maths'])) {
    $_POST['maths'] = 0 ;
}

if (!isset($_POST['algo'])) {
    $_POST['algo'] = 0 ;
}

$maths = $_POST['maths'] ;
$algo = $_POST['algo'] ;

$notemaths = $maths*2 ;
$notealgo = $algo ;
$moyennemaths = ($notemaths + $notealgo)/3 ;

echo $moyennemaths ;

?>
