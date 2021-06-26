// usar el window.onload
const LoadDataBaseFromJSON = () => {
    $.getJSON("./data/torneos.json", function (torneos){
        let torneoJSON = ConvertToString(torneos);
        SetLocalStorage(LocalStorageGlobalVariables.Torneos, torneoJSON);
        var listat = ConvertToJSON(localStorage.getItem('Torneos'));
        localStorage.clear();
        listat.forEach(element => {
            SetLocalStorage(element.id,ConvertToString(element));
            publicarTorneo(element)});
    });
    $.getJSON("./data/usuarios.json", function (usuarios){
        let usuariosJSON = ConvertToString(usuarios);
        SetSessionStorage(SessionsStorageGlobalVariables.Usuarios, usuariosJSON);
        var listau = ConvertToJSON(sessionStorage.getItem('Usuarios'));
        sessionStorage.clear();
        listau.forEach(element => {
            SetSessionStorage(element.id,ConvertToString(element));
    });
    })
};

window.onload = LoadDataBaseFromJSON()
