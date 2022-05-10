/*
Exercice 1 : Ajouter dans le html un input de type texte ainsi qu'un paragraphe
 vide Ecrire une fonction javascript déclenchée quand l'utilisateur saisi du texte
 dans l'input et qui affiche la saisie dans le paragraphe OPTION : Prendre en
 compte la suppression des lettres
*/

// creation de l'input
let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
// ajout de la fonction
inputText.setAttribute("onkeydown", "newCaractere(event)");
document.body.appendChild(inputText);

// création du paragraphe
let p = document.createElement("p");
// ajout d'iun id
p.setAttribute("id", "monP");
document.body.appendChild(p);

p.innerHTML = "texte saisi :";

let monText = "";


function newCaractere(event) {
    var x = event.key;
    console.log(x);
    document.getElementById("monP").innerHTML = "Le texte saisi est: " + monText + x;
    if (x != "Backspace") {
        monText += x;
    }
    
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



/*
Exercice 3 : Ajouter un champ de type password pour saisir le mot de passe.
 Ajouter une icone avec un oeil. Au clic sur cet oeil, le mot de passe est révélé.
 Un autre clic cache le mot de passe.
*/