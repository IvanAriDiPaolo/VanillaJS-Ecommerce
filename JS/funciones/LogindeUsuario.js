/*Funcion para chequear existencias luego de apretar Ingresar en la pantalla principal*/
const login = (idusuario, idcontra) =>{
    if (chequearExistenciaU(idusuario) && chequearExistenciaC(idcontra)){
        return true;
    }
    
}