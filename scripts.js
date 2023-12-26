document.getElementById("izracunaj").addEventListener("click", function() {
    var inputVisine = document.getElementById("visina");
    var inputPoluprecnika = document.getElementById("poluprecnik");

    console.log('visina:', inputVisine.value);
    console.log('poluprecnik:', inputPoluprecnika.value);

    var visina = parseFloat(inputVisine.value);
    var poluprecnik = parseFloat(inputPoluprecnika.value);

    console.log("parsed visina:", visina);
    console.log("parsed poluprecnik", poluprecnik);



    if (isNaN(visina) || isNaN(poluprecnik)) {
        alert("Molim vas da unesete validne vrijednosti za visinu i poluprecnik")
        return;
    }

    var zapremina = Math.PI * Math.pow(poluprecnik, 2) * visina;

    var rezultatDiv = document.getElementById("rezultat");
    rezultatDiv.innerHTML = zapremina.toFixed(4);
});