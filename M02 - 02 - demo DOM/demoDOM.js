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
