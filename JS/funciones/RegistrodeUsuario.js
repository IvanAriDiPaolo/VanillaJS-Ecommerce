usersid = []
function guardarUsuario(usuario){
    usuario.asignarid()
    console.log("Usuario registrado con suceso con el ID: " + usuario.id);
    console.log("Verificar usarios guardados con sessionStorage, los usuarios estan guardados por id en el array usersid.");
    var refusuario = JSON.stringify(usuario)
    sessionStorage.setItem(usuario.id, refusuario)
}

function chequearExistencia(idusuario){
    for (var i=1 ; i<usersid.length+1;i++){
        var check = JSON.parse(sessionStorage.getItem(i));
        if (idusuario == check.usuario){
            return true;
        } 
    }
    return false;
}