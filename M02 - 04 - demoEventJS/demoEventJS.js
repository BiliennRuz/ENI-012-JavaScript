let compteur = 0;

function compteurIncrement() {
    compteur++;
    let p = document.getElementById("paragrapheCompteur");
    p.innerHTML = "Vous avez cliqué " + compteur + " fois";
}

function changeColor(buton) {
    buton.style.backgroundColor = "rgb(" + getRandomInt(256) +","+ getRandomInt(256) +","+ getRandomInt(256)+")";
}

function getRandomInt(borneMax) {
    return Math.floor(Math.random() * borneMax);
}