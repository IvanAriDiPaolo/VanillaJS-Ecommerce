$(document).ready(function(){
    $('#log').hide();
    $('#reg').hide();
    $('#torneosinscripto').hide();
    $('.demenu').hide();
    $('.opciones').hide();
    $('.slider > img').hide();
    /*Cada uno de los botones ajustados a cada parte*/
    $('#regg').click(function(){
        /*Función para que cuando apretes enter se registre*/
        $(document).keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                $('#submitr').trigger('click');
            }
        });
        $('#logreg').hide('slow');
        $('#reg').show('slow');
        $(".box").animate({
            width: "320px",
            height: "390px",
        });
    })
    $('#logg').click(function(){
        /*Función para que cuando apretes enter se registre*/
        $(document).keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                $('#submitl').trigger('click');
            }
        });
        $('#logreg').hide('slow');
        $('#log').show('slow');
        $(".box").animate({
            width: "320px",
            height: "350px",
        });
    })
    $('#usuarionuevo').click( function(e) {
        e.preventDefault();
        $('#log').hide('slow');
        $('#logreg').hide('slow');
        $('#reg').show('slow');
        $(".box").animate({
            width: "320px",
            height: "390px",
        });
        return false;
    });
    $('#concuenta').click( function(e) {
        e.preventDefault();
        $('#reg').hide('slow');
        $('#logreg').hide('slow');
        $('#log').show('slow');
        $(".box").animate({
            width: "320px",
            height: "350px",
        });
    })
    $("#submitr").click(function(){
        if ($('#idUserr').val() != "" && $('#idPassr').val() != "" && $('#idPassr').val() == $('#idPassrr').val() && ($('#idPassr').val()).length > 5 && ($('#idPassrr').val()).length > 5){ 
            if (registrar()){
                $('#reg').hide('slow');
                $('#logreg').hide('slow');
                $('#log').show('slow');
                $(".box").animate({
                    width: "320px",
                    height: "350px",
                });
                alert('Registrado correctamente, ahora logueate con tu cuenta por favor.')
            }
        }else{
            alert('Las contraseñas no coinciden o los datos ingresados son inválidos.\nRecordá que el usuario y la contraseña deben \ncontar con al menos 6 caracteres cada uno.')
        }
    });
    $("#submitl").click(function(){
        if (login($('#idUserl').val(), $('#idPassl').val())){
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
            var usuarioactual = $('#idUserl').val();
            $('#idOrganizador').attr("placeholder", usuarioactual);
            $('#idOrganizador').val(usuarioactual);
            $('#torneosinscripto').show('slow');
            $('#torneitosinscripto').hide();
            $('#imgtx').hide();
            $("#home").show('slow');
        }else{
            alert('Usuario no registrado, por favor registrarse.')
        }
    });
    $("#menutorneo").click(function(){
        $('.box > div').hide('slow');
        $('#cattorneos').show('slow');
        $('#torneos').show('slow');
        $('#creaciontorneo').hide();
        $('#cancelarcreacion').hide('fast','swing');
        $(".menu").attr("disabled", false);
        $("#menutorneo").attr("disabled", true);
        if ($('#pags > div').length > 1){
            $('#pags').children().hide();
            $("#pags div:first-child").show();
        }else{
            $("#pags div:first-child").show();
        };
    });
    $('#menuhome').click(function(){
        $('.box > div').hide('slow');
        $('#home').show('slow');
        $(".menu").attr("disabled", false);
        $("#menuhome").attr("disabled", true);
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
    $("#imgt").click(function(){
            $('#torneitosinscripto').show('slow');
            $('#imgtx').show('slow');
            $("#imgtx").click(function(){
                    $('#torneitosinscripto').hide('slow');
                    $('#imgtx').hide('slow');
            });
    });
});
/*Función para el scrolldown y up de la sección de torneos*/
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

