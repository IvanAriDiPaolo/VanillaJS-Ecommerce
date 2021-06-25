torneosid = []
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

function chequearExistenciaTN(idnombre){
    for (var i=1 ; i<torneosid.length+1;i++){
        var check = JSON.parse(localStorage.getItem(("T")+i));
        if (idnombre == check.nombre){
            return true;
        } 
    }
    return false;
}