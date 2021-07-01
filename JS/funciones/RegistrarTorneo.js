torneosid = []
/*Registra el torneo en el localstorage*/
function registrarTorneo(torneo){
    if (torneo.id == null){
        torneo.asignarid()
    }
    publicarTorneo(torneo)
    console.log("Torneo registrado con el ID: " + torneo.id + " organizado por " + torneo.organizador);
    console.log("Verificar torneos guardados en localStorage.");
    var reftorneo = JSON.stringify(torneo)
    localStorage.setItem(torneo.id, reftorneo)
}
/*Chequea la existencia de los torneos segun el nombre de los mismos*/
function chequearExistenciaTN(idnombre){
    for (Element in localStorage){
        if(Element.includes('T')&&Element.length<10){
            var check = JSON.parse(localStorage.getItem(Element));
            if (idnombre == check.nombre){
                return true;
            } 
        }
    }
    return false;
}