// 1 - récupérer les éléments par id
// "document" représente le point de départ de notre DOM
let monParagraphe = document.getElementById("monParagraphe");
console.log(monParagraphe);

// 2 - récupérer par la classe
let contenus = document.getElementsByClassName("contenu");
console.log(contenus);
for (let contenu of contenus) {
    console.log(contenu);
}

// 3 - récupérer par le type de balise
let articles = document.getElementsByTagName("article");
console.log(articles);

// 4 - selection complexe unique
let paragrapheContenu = document.querySelector("#maDiv p.contenu");
console.log(paragrapheContenu);

// 5 - selection complexe multiple
let elements = document.querySelectorAll("article, p");
console.log(elements);

//////////////////////////
// modifier le DOM
//////////////////////////

// modifier le contenu d'un paragraphe
let p = document.getElementById("monParagraphe");
// 1 - textContent : permet d'insérer du text dans un élément
// 2 - innerHTML : permet d'insérer du HTML dans un élément
//p.textContent = "Message généré par JavaScript";
p.innerHTML = "Message généré par <strong>JavaScript</strong>";

// modifier la classe d'un élément
p.classList.add("rouge");

// modifier le style
p.style.color = "red";

// fabriquer des nouveaux éléments du DOM
let maDiv = document.getElementById("maDiv"); // je recupère ma div
let input = document.createElement("input"); // je fabrique un input
input.setAttribute("type", "pasword"); // je le met en type password
maDiv.appendChild(input); // je n'oublie pas d'ajouter mon élément à ma div