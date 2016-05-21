$(document).ready(function () {
    $('input[name|="txt_francais"], input[name|="txt_anglais"]').change(function () {
        var francais = $('#txt_francais').val();
        var anglais = $('#txt_anglais').val() ;
        $.ajax({
            url: "ajax/aj_moyenneCulture.php",
            type: "POST",
            data: {francais : francais, anglais : anglais},
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
        var algo = $('#txt_algo').val() ;
        $.ajax({
            url: "ajax/aj_moyenneMaths.php",
            type: "POST",
            data: {maths : maths, algo : algo},
            success: function (data)
            {
                $("#partie_maths").val(data);
            }
        });
    });
});

$(document).ready(function () {
    $('#txt_ecodroit').change(function () {
        var value = $(this).val() ;
        $("#partie_ecodroit").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e4').change(function () {
        var value = $(this).val() ;
        $("#partie_e4").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e5').change(function () {
        var value = $(this).val() ;
        $("#partie_e5").val(value);
    });
});

$(document).ready(function () {
    $('#txt_e6').change(function () {
        var value = $(this).val() ;
        $("#partie_e6").val(value);
    });
});
