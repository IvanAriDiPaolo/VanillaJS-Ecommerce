class TorneoInscripto{
    constructor(usuario, torneo){
        this.usuario = usuario,
        this.torneo1 = torneo,
        this.torneo2 = torneo,
        this.torneo3 = torneo,
        this.torneo4 = torneo,
        this.torneo5 = torneo
    };
}
/* La verdad iba a hacer que quede guardado en el LocalStorage que cada vez que un usuario
se registra a un torneo quede guardado pero despues de perder 3 horas craneando como seria, me di cuenta
que sin una base de datos no sería muy posible por lo que decidí que sea por sesión la cantidad de torneos inscriptos. */