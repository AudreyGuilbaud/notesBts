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

