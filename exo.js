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