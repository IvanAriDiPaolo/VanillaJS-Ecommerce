class NuevoTorneo{
    constructor(juego, nombre, premio, inscriptos, organizador, registro, registrofin, inicio, hora){
        this.juego = juego;
        this.nombre = nombre;
        this.premio = premio;
        this.inscriptos = inscriptos;
        this.organizador = organizador;
        this.registro = registro;
        this.registrofin = registrofin;
        this.inicio = inicio;
        this.hora = hora; 
    }
    asignarid(){
        this.id = ("T"+(torneosid.length+1));
        torneosid.push(this.id);
    }
}