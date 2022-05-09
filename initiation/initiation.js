console.log("Hello World JS file");

// déclarer des variables
var nombre = 2; // variable globale
let nombre2 = 5; // variable locale

// faiblement typée (boolean, number, string)
console.log(nombre2); // affiche "5"
nombre2 = "toto";
console.log(nombre2); // affiche "toto"

let resultat = nombre + 3;
console.log(resultat); // affiche "5"

let prenom = "Adrien";
console.log("Bonjour " + prenom); // affiche "Bonjour Adrien"

console.log(1 > 3); // affiche "false"

let chiffre = 1;
let chiffreString = "1";
console.log(chiffre == chiffreString); // affiche "true"

// cast + affichage type
let chiffreCast = Number(chiffreString);
console.log(typeof chiffreCast); // affiche "number")
console.log(chiffre == chiffreString); // affiche "true")

// égalité stricte : === et !==
console.log(chiffre === chiffreString); // affiche "false"

//boolean
console.log(true && false); // affiche "false"
console.log(true || false); // affiche "true"
console.log(false || false); // affiche "false"
console.log(true || true); // affiche "true"
console.log(true && true); // affiche "true"

let drapeau = "vert";
let mer = "calme";
let surveille = true;

if(drapeau != "rouge") {
    console.log("\nj'ai le droit d'aller me baigner"); // affiche "j'ai le droit d'aller me baigner"
}

if(drapeau != "rouge" && surveille) {
    console.log("\nla baignade est autorisée et surveillée"); // affiche "la baignade est autorisée et surveillée"
}

if(surveille || (mer == "calme" && drapeau == "vert")) {
    console.log("\nla baignade est autorisée si elle est surveillée");
    console.log("Sans surveillance, elle est autorisée en cas de mer calme et drapeau vert");
    
}

let monTableau = ["Printemps", "été", "Automne", "Hiver"];
console.log(monTableau); // affiche "(4) ['Printemps', 'été', 'Automne', 'Hiver']"
for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

monTableau.push("toto");
for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

function direBonjour(prenom) {
    console.log("bonjour " + prenom + " !! coment ça va ?");
}
direBonjour("Dom");
