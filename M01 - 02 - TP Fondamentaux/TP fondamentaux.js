/*
Question 1
A l'aide de la méthode Math.random, écrivez un programme qui s'arrête lorsque tous les nombres de la plage [0;100[ sont tirés au sort.
Indiquer le nombre de tirage nécessaire.
*/

// init de la liste
let plage = [];
// init du compteur
let cnt = 0;

function find(rand) {
    for(i=0; i < plage.length; i++) {
        if (plage[i] == rand)
            return true;
    }
}

while (plage.length <= 100) {
    // créa du nb aléatoire
    rand = (Math.random()*100).toFixed(0);
    // test si déja tiré
    if (find(rand)) {
//        console.log(rand + " déja présent");
    }
    else {
        plage.push(rand);
//        console.log(rand + " ajouté");
    }
    //increment compteur
    cnt++;
    console.log("compteur : " + cnt);
}

plage.sort(function(a, b) {
    return a - b;
  });
console.log(plage);


/*
Question 2
Trier les lettres d’une phrase par ordre alphabétique. La phrase utilisée dans la solution est la suivante : 
"une chaine avec des lettres dans un certain ordre pour donner du sens"
*/

let phrase1 = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let listephrase1 = phrase1.split("");

console.log(listephrase1.sort());

/*
Question 3
Mettre en majuscule la première lettre de chaque mot d’une phrase. La phrase utilisée dans la solution est la suivante :
"une phrase sans majuscule"
*/

let phrase2 = "une phrase sans majuscule";
let listephrase2 = phrase2.split(" ");
console.log(listephrase2);

for (i=0 ; i < listephrase2.length ; i++) {

    // on decompose le mot
    let listemot = listephrase2[i].split("");
    // on passe la première lettre en maj
    listemot[0] = listemot[0].toUpperCase();
    // on recompose le mot
    let mot = "";
    for ( j = 0 ; j < listemot.length ; j++){
        mot += listemot[j];  
    }
    listephrase2[i] = mot;

}
// on recompose la phrase
let phrase = "";
for (i = 0 ; i < listephrase2.length ; i++) {
    phrase =  phrase + " " + listephrase2[i];
}
console.log(phrase);


/*
EXO BONUS :
Définir en JavaScript un tableau contenant des notes d'étudiants comprises
entre 0 et 20.
*/


let tableauNote = []
for (i=0 ; i<10 ; i++) {
    note = (Math.random()*20).toFixed(0);
    tableauNote.push(note);
}
console.log(tableauNote)