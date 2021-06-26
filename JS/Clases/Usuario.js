class NuevoUsuario {
    constructor(usuario, contra){
        this.usuario = usuario;
        this.contra = contra;
    }
    asignarid(){
        this.id = 'S' + usersid.length+1;
        usersid.push('S'+this.id);
    }
}