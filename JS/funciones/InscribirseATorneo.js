ainscripto = [];
const agregarInscripcion = (torneo, user) =>{
    var info = ConvertToJSON(GetLocalStorageItem(`${torneo}`));
    if (!ainscripto.includes(torneo)){
        $('#inscriptos').append($(`
            <li id='${torneo}'>
                <p>${info.nombre}</p>
                <p>${info.dia}</p>
                <p>${info.hora}</p>
            </li>
        `));
        ainscripto.push(torneo);
    }else{
        alert('Ya te encuentras inscripto a este torneo.')
    }
    };