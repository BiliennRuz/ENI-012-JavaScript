/*
Exercice 1 : Ajouter dans le html un input de type texte ainsi qu'un paragraphe
 vide Ecrire une fonction javascript déclenchée quand l'utilisateur saisi du texte
 dans l'input et qui affiche la saisie dans le paragraphe OPTION : Prendre en
 compte la suppression des lettres
*/

let maClasse = document.getElementsByTagName("center");


// creation de l'input
let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder","votre texte");
// ajout de la fonction
inputText.setAttribute("onkeydown", "newCaractere(event)");
maClasse.appendChild(inputText);

// création du paragraphe
let p = document.createElement("p");
// ajout d'iun id
p.setAttribute("id", "monP");
document.body.appendChild(p);

let monText = "";

function newCaractere(event) {
    var x = event.key;
    console.log(x);
    if (x != "Backspace") {
        monText += x;
    } else {
        monText = monText.substring(0, monText.length - 1);
    }
    document.getElementById("monP").innerHTML = "Le texte saisi est: " + monText;
}

/*
Exercice 2 : Ajouter un champ de type password pour saisir le mot de passe et
 la confirmation du motDePasse. Faire une fonction javascript déclenchée quand
 l'utilisateur saisi du texte dans l'un des input pour afficher la vérification
 des mots de passe en temps réel dans un paragraphe en dessous
*/

// creation de l'input
let inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("id", "myPassword");
//inputPassword.setAttribute("class", "center");
// ajout de la fonction
inputPassword.setAttribute("onkeydown", "testPassword(event)");
document.body.appendChild(inputPassword);

// création du paragraphe
let p2 = document.createElement("p");
// ajout d'un id
p2.setAttribute("id", "monP2");
//p2.setAttribute("class", "center2");
document.body.appendChild(p2);

let monPassword = "";
let lePassword = "1234"

function testPassword(event) {
    var x = event.key;
    console.log(x);
    if (x != "Backspace") {
        monPassword += x;
    } else {
        monPassword = monText.substring(0, monText.length - 1);
    }
    if (monPassword == lePassword) {
        document.getElementById("monP2").innerHTML = "Le mot de passe est correcte";
        p2.style.color = "green";
    } else {
        document.getElementById("monP2").innerHTML = "Le mot de passe est incorrecte";
        p2.style.color = "red";
    }
}

/*
Exercice 3 : Ajouter un champ de type password pour saisir le mot de passe.
 Ajouter une icone avec un oeil. Au clic sur cet oeil, le mot de passe est révélé.
 Un autre clic cache le mot de passe.
*/

function togglePW(){
    document.querySelector('.eye').classList.toggle('slash');
    var password = document.querySelector('[name=password]');
    if(password.getAttribute('type') === 'password'){
      password.setAttribute('type', 'text');
    } else {
      password.setAttribute('type', 'password');
    }
  }