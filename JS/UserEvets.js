/*Se registra al usuario segun los datos ingresados y luego chequea si existe o no.*/
function registrar() {
    iduser = document.getElementById("idUserr").value;
    idpass = document.getElementById("idPassr").value;
    if(!chequearExistenciaU(iduser)){
        var nuevo = new NuevoUsuario(iduser,idpass)
        guardarUsuario(nuevo)
        return true;
    }
    else{
        alert('Usuario ya existente, por favor inicie sesión o restablezca su contraseña.')
        $('#reg').hide('slow');
        $('#log').show('slow');
        $(".box").animate({
            width: "320px",
            height: "350px",
        });
        return false;
    }
}
/*Funcion para crear el torneo y agregarl o al DOM luego de la funcion AplicarDatosTorneoAlDOM*/
function crearTorneo() {
    var idJuego = $('#idJuego').val();
    var idNombre = $('#idNombre').val();
    var idPremio = $('#idPremio').val();
    var idInscriptos = $('#idInscriptos').val();
    var idOrganizador = $('#idOrganizador').val();
    var idRegistro = $('#idRegistro').val();
    var idRegistrofin = $('#idRegistrofin').val();
    var idDia = $('#idDia').val();
    var idHora = $('#idHora').val();
    if(!chequearExistenciaTN(idNombre)){
        var nuevo = new NuevoTorneo(idJuego,idNombre,idPremio,idInscriptos,idOrganizador,idRegistro,idRegistrofin,idDia,idHora); 
        registrarTorneo(nuevo);
        AplicarDatosTorneoAlDOM(nuevo)
    }
    else{
        alert("Un torneo con este nombre ya se encuentra resgistrado, por favor verificar en localStorage.")
    }
}