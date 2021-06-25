class NuevoUsuario {
    constructor(usuario, contra){
        this.usuario = usuario;
        this.contra = contra;
    }
    asignarid(){
        this.id = usersid.length+1
        usersid.push(this.id);
    }
}