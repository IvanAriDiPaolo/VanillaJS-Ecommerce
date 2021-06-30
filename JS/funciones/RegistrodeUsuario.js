usersid = []
function guardarUsuario(usuario){
    usuario.asignarid()
    console.log("Usuario registrado con suceso con el ID: " + usuario.id);
    console.log("Verificar usarios guardados con sessionStorage, los usuarios estan guardados por id en el array usersid.");
    var refusuario = JSON.stringify(usuario)
    sessionStorage.setItem(usuario.id, refusuario)
}

function chequearExistenciaU(idusuario){
    for (Element in sessionStorage){
        if(Element.includes('S')&&Element.length<10){
            var check = JSON.parse(sessionStorage.getItem(Element));
            if (idusuario == check.usuario){
                return true;
            } 
        }
    }
    return false;
}

const chequearExistenciaC = (idcontra) => {
    for (Element in sessionStorage){
        if(Element.includes('S')&&Element.length<10){
            var check = JSON.parse(sessionStorage.getItem(Element));
            if (idcontra == check.contra){
                console.log('golasdas')
                return true;
            } 
        }
    }
    return false;
}