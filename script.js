
// totaalbedrag 
const totaalBedrag = document.querySelector("#totaalBedrag");
// min knop
const volwassenMin = document.querySelector("#volwassenMin");
const kinderenMin = document.querySelector("#kinderenMin");
const ouderenMin = document.querySelector("#ouderenMin");
// plus knop
const volwassenPlus = document.querySelector("#volwassenPlus");
const kinderenPlus = document.querySelector("#kinderenPlus");
const ouderenPlus = document.querySelector("#ouderenPlus");
// aantal per type
const volwassenAantal = document.querySelector("#volwassenAantal");
const kinderenAantal = document.querySelector("#kinderenAantal");
const ouderenAantal = document.querySelector("#ouderenAantal");

const volwassenPrijs = 20;
const kinderPrijs = 15;
const ouderenPrijs = 17;


// button volwassenplus onclick add 1 to volwassenAantal
volwassenPlus.addEventListener("click", () => {
    volwassenAantal.innerHTML = parseInt(volwassenAantal.innerHTML) + 1;
    totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) + volwassenPrijs;
});
// button volwassenmin onclick subtract 1 to volwassenAantal
volwassenMin.addEventListener("click", () => {
    if (volwassenAantal.innerHTML > 0) {
        volwassenAantal.innerHTML = parseInt(volwassenAantal.innerHTML) - 1;
        totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) - volwassenPrijs;
    }
});

// button kinderenplus onclick add 1 to kinderenAantal
kinderenPlus.addEventListener("click", () => {
    kinderenAantal.innerHTML = parseInt(kinderenAantal.innerHTML) + 1;
    totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) + kinderPrijs;
});
// button kinderenmin onclick subtract 1 to kinderenAantal
kinderenMin.addEventListener("click", () => {
    if (kinderenAantal.innerHTML > 0) {
    kinderenAantal.innerHTML = parseInt(kinderenAantal.innerHTML) - 1;
    totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) - kinderPrijs;
    }
});

// button ouderenplus onclick add 1 to ouderenAantal
ouderenPlus.addEventListener("click", () => {
    ouderenAantal.innerHTML = parseInt(ouderenAantal.innerHTML) + 1;
    totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) + ouderenPrijs;
});
// button ouderenmin onclick subtract 1 to ouderenAantal
ouderenMin.addEventListener("click", () => {
    if (ouderenAantal.innerHTML > 0) {
    ouderenAantal.innerHTML = parseInt(ouderenAantal.innerHTML) - 1;
    totaalBedrag.innerHTML = parseInt(totaalBedrag.innerHTML) - ouderenPrijs;
    }
});

// button reserveren onclick alert
const reserveren = document.querySelector("#reserveren");
reserveren.addEventListener("click", function (e) {
    console.log('button is clicked');
    alert(
        `U heeft ${volwassenAantal.innerHTML} volwassenen, ${kinderenAantal.innerHTML} kinderen en ${ouderenAantal.innerHTML} ouderen gereserveerd. Het totaalbedrag is €${totaalBedrag.innerHTML}.`
    );
});
