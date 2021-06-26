$(document).ready(function(){
    $('.demenu').hide();
    $(".opciones").hide();
    $("#submit").click(function(){
        if ($('#idUser').val() != "" && $('#idPass').val() != ""){ 
            registrar();
            $(".box").animate({
                padding: "10px 10px",
            })
            $('#log').hide('slow');
            $(".box").animate({
                width: "95%",
                height: "95%",
            });
            $("#logo").animate({
                top: "0",
                
            });
            $(".opciones").show("slow");
        }else{
            alert("Completar datos requeridos, Usuario y Contraseña.")
        }
    });
    $("#menutorneo").click(function(){
        $('#cattorneos').show('')
        $('#torneos').show('slow');
        $('#creaciontorneo').hide();
        $('#cancelarcreacion').hide('fast','swing');
        if ($('#pags > div').length > 1){
            $('#pags').children().hide();
            $("#pags div:first-child").show();
        }else{
            $("#pags div:first-child").show();
        };
    });
    $("#creartorneo").click(function(){
        $('#pags').hide('slow');
        $('#creartorneo').hide('slow');
        if ($('#pags > div').length > 1){
            $('#pags').children().hide();
            $("#pags div:first-child").show();
        }else{
            $("#pags div:first-child").show();
        };
        $('#cattorneos').hide('')
        $('#buscador').hide('fast');
        $('#creaciontorneo').show('fast','swing');
        $('#cancelarcreacion').show('fast','swing');
        $("#cancelarcreacion").click(function(){
            $('#creartorneo').show('slow');
            $('#pags').show('slow');
            $('#cancelarcreacion').hide('fast','swing');
            $('#creaciontorneo').hide('fast','swing');
            $('#buscador').show('fast','swing');
        });
    });
    $("#crearTorneito").click(function(){
        if($('#idJuego option:selected').val() != "0" && $('#idNombre').val() != "" && $('#idPremio').val() != "" && $('#idInscriptos').val() != "" && $('#idOrganizador').val() != "" && $('#idRegistro').val() != "" && $('#idRegistrofin').val() != "" && $('#idDia').val() != "" && $('#idHora').val() != "" && $('#idDia').val() > $('#idRegistrofin').val() && $('#idRegistro').val() < $('#idRegistrofin').val()){
            $('#creartorneo').show('slow');
            $('#pags').show('slow');
            $('#creaciontorneo').hide('fast','swing');
            $('#cattorneos').show('slow')
            $('#buscador').show('slow');
            $('#cancelarcreacion').hide('slow');
            if ($('#pags > div').length > 1){
                $('#pags').children().hide();
                $("#pags div:first-child").show();
            }else{
                $("#pags div:first-child").show();
            };
            crearTorneo();
        }else{
            alert("Por favor verificar datos ingresados.\n" + "Puede que las fechas ingresadas sean erroneas o no sean coherentes.")
        }
    });

});

let n = 1;
$("#pags").on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
    if (delta < 0 && n > 0 && n < $("#pags > div").length) {
        n ++;
        $('#pags').children().hide();
        $(`#pags div:nth-child(${n})`).show();
    } else if (delta > 0 && n > 1 && n < $("#pags > div").length+1) {
        n --;
        $('#pags').children().hide();
        $(`#pags div:nth-child(${n})`).show()
}});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('#submit').trigger('click');
    }
});
