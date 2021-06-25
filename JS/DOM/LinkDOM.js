const AplicarDatosTorneoAlDOM = (_torneo) => {
    let etiquetasDOM = [
        "juego",
        "nombre",
        "premio",
        "inscriptos",
        "organizador",
        "registro",
        "registrofin",
        "dia",
        "hora"
    ]
etiquetasDOM.forEach(element => {
    if(element == "juego"){
        var elementDOM = document.getElementById(element)
        elementDOM.src = _torneo[element];
    }else{
        var elementDOM = document.getElementById(element)
        elementDOM.innerHTML = _torneo[element];
    }

});
}
