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
};

window.onload = LoadDataBaseFromJSON()
