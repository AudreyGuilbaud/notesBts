$(document).ready(function () {
    $('input[name|="txt_francais"], input[name|="txt_anglais"]').change(function () {
        var francais = $('#txt_francais').val();
        var anglais = $('#txt_anglais').val();
        $.ajax({
            url: "ajax/aj_moyenneCulture.php",
            type: "POST",
            data: {francais: francais, anglais: anglais},
            success: function (data)
            {
                $("#partie_culture").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('input[name|="txt_maths"], input[name|="txt_algo"]').change(function () {
        var maths = $('#txt_maths').val();
        var algo = $('#txt_algo').val();
        $.ajax({
            url: "ajax/aj_moyenneMaths.php",
            type: "POST",
            data: {maths: maths, algo: algo},
            success: function (data)
            {
                $("#partie_maths").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('input[name|="txt_francais"], input[name|="txt_anglais"], input[name|="txt_maths"], \n\
    input[name|="txt_algo"], input[name|="txt_ecodroit"], input[name|="txt_e4"], input[name|="txt_e5"], \n\
    input[name|="txt_e6"]').change(function () {
        var francais = $('#txt_francais').val();
        var anglais = $('#txt_anglais').val();
        var maths = $('#txt_maths').val();
        var algo = $('#txt_algo').val();
        var ecodroit = $('#txt_ecodroit').val();
        var e4 = $('#txt_e4').val();
        var e5 = $('#txt_e5').val();
        var e6 = $('#txt_e6').val();
        $.ajax({
            url: "ajax/aj_moyenneGenerale.php",
            type: "POST",
            data: {francais: francais, anglais : anglais, maths: maths, algo: algo, ecodroit : ecodroit, e4:e4, e5:e5, e6:e6},
            success: function (data)
            {
                $("#txt_resultat").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('input[name|="txt_francais"], input[name|="txt_anglais"], input[name|="txt_maths"], \n\
    input[name|="txt_algo"], input[name|="txt_ecodroit"]').change(function () {
        var francais = $('#txt_francais').val();
        var anglais = $('#txt_anglais').val();
        var maths = $('#txt_maths').val();
        var algo = $('#txt_algo').val();
        var ecodroit = $('#txt_ecodroit').val();
        
        $.ajax({
            url: "ajax/aj_moyenneMatieresGen.php",
            type: "POST",
            data: {francais: francais, anglais : anglais, maths: maths, algo: algo, ecodroit : ecodroit},
            success: function (data)
            {
                $("#moyenne_gen").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('input[name|="txt_e4"], input[name|="txt_e5"], input[name|="txt_e6"]').change(function () {
        var e4 = $('#txt_e4').val();
        var e5 = $('#txt_e5').val();
        var e6 = $('#txt_e6').val();
        $.ajax({
            url: "ajax/aj_moyenneMatieresTech.php",
            type: "POST",
            data: {e4:e4, e5:e5, e6:e6},
            success: function (data)
            {
                $("#moyenne_tech").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('#txt_ecodroit').change(function () {
        var value = $(this).val();
        $("#partie_ecodroit").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e4').change(function () {
        var value = $(this).val();
        $("#partie_e4").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e5').change(function () {
        var value = $(this).val();
        $("#partie_e5").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e6').change(function () {
        var value = $(this).val();
        $("#partie_e6").val(value);
    });
});
