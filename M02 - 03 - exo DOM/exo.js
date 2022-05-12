/*
Exercice :
1 - Récupérer l'élément ayant pour id "main-content"
2 - Récupérer  les éléments ayant la classe "important"
3 - Récupérer les élements articles
4 -Récupérer  les élements "li" : Element 10, Element 11 et
Element 12 en même temps
5 - Récupérer  l'élément li : Element 4
6 - Récupérer  tous les premiers elements "li" de
nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
*/

// 1 - Récupérer l'élément ayant pour id "main-content"
let element1 = document.getElementById("main-content");
console.log(element1);

// 2 - Récupérer  les éléments ayant la classe "important"
let elements2 = document.getElementsByClassName("important");
console.log(elements2);

// 3 - Récupérer les élements articles
let elements3 = document.getElementsByTagName("article");
console.log(elements3);

// 4 -Récupérer  les élements "li" : Element 10, Element 11 et Element 12 en même temps
let elements4 = document.querySelectorAll("div.important li");
console.log(elements4);

// 5 - Récupérer  l'élément li : Element 4
let element5 = document.querySelector("ul.important li");
console.log(element5);

// 6 - Récupérer  tous les premiers elements "li" de nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
let elements6 = document.querySelectorAll("ul li:first-child");
console.log(elements6);
let elements6b = document.querySelectorAll("ul li:nth-child(2n+1"); // recupère tous les impaires
console.log(elements6b);

/*
Exercice :
En utilisant javascript :
- créer un nouvel élément de type paragraphe
- ajouter le texte "Salut tout le monde !" dans ce paragraphe
- créer un élément de type div ayant pour id "divJavascript"
- ajouter le paragraphe créer dans la question 1 dans le div
- changer le couleur du paragraphe en bleu et mettre le mot "monde" en gras
- ajouter le div dans votre body
*/

// - créer un nouvel élément de type paragraphe
let newP = document.createElement("p");

// - ajouter le texte "Salut tout le monde !" dans ce paragraphe
newP.innerHTML = "Salut tout le <strong>monde</strong> !";
//autre solution pour mettre en gras :
//newP.innerHTML = "Salut tout le <span id=\"monde\">monde</span> !";

// - créer un élément de type div ayant pour id "divJavascript"
let maDiv = document.createElement("div");
maDiv.setAttribute("id", "divJavascript");

// - ajouter le paragraphe créer dans la question 1 dans le div
maDiv.appendChild(newP);

// - ajouter le div dans votre body
document.body.appendChild(maDiv)

// - changer le couleur du paragraphe en bleu et mettre le mot "monde" en gras
newP.style.color = "blue";

//autre solution pour mettre en gras :
//let monde = document.getElementById("monde");
monde.style.fontWeigth = "bold";




