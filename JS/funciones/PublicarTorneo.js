/*Funcion para publicar torneos y verificar si hay 3 en la misma pagina entonces crear una nueva*/
function publicarTorneo(torneo){
    if ($('#pags > div >ul :last-child').length %27 == 0 || $('#pags > div').length == 0){
        $('#pags').append(`<div id=${$('#pags > div').length+1 }></div>`);
    }
    ($(`<ul id=${torneo.id}> </ul>`).appendTo($('#pags div:last-child')).append(
    $(`<li><img src=${torneo.juego}></img></li>
    <li><h2>Nombre: ${torneo.nombre}</h2></li>
    <li><h3>Premio: ${torneo.premio}</h3></li>
    <li><h4>Cupos: ${torneo.inscriptos}</h4></li>
    <li><h4>Organizador: ${torneo.organizador}</h4></li>
    <li><h4>Inicio del Registro: ${torneo.registro}</h4></li>
    <li><h4>Final del Registro: ${torneo.registrofin}</h4></li>
    <li><h4>Dia y Horario: ${torneo.inicio} a las ${torneo.hora}</h4></li>
    <input type="button" value="Inscribirse" class="btnInscripcion" id="ins${torneo.id}" onclick="agregarInscripcion(${torneo.id})"></input>`)))}