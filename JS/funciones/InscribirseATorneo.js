ainscripto = [];
const agregarInscripcion = (torneo) =>{
    let id = $(torneo).attr('id')
    var info = ConvertToJSON(GetLocalStorageItem(`${id}`));
    console.log(info)
    if (!ainscripto.includes(id)){
        alert(`Inscripto con suceso al torneo ${info.nombre}, se encuentra en tu lista de Torneos en la parte inferioro de la página a la derecha`)
        $('#inscriptos').append($(`
            <li id='${id}'>
                <p>${info.nombre}</p>
                <p>${info.inicio}</p>
                <p>${info.hora}</p>
            </li>
        `));
        ainscripto.push(id);
    }else{
        alert('Ya te encuentras inscripto a este torneo.')
    }
    };