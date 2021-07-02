ainscripto = [];
const agregarInscripcion = (torneo, user) =>{
    var info = ConvertToJSON(GetLocalStorageItem(`${torneo}`));
    if (!ainscripto.includes(torneo)){
        alert(`Inscripto con suceso al torneo ${info.nombre}, se encuentra en tu lista de Torneos en la parte inferioro de la página a la derecha`)
        $('#inscriptos').append($(`
            <li id='${torneo}'>
                <p>${info.nombre}</p>
                <p>${info.inicio}</p>
                <p>${info.hora}</p>
            </li>
        `));
        ainscripto.push(torneo);
    }else{
        alert('Ya te encuentras inscripto a este torneo.')
    }
    };