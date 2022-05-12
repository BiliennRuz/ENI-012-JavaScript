function validMorpion(input) {
    // declaration msgWinner
    let msgWinner = document.getElementById("winnerIs");
    
    // on recupere la valeur de l'input
    let joueur = input.value;
    if (joueur!= "x" && joueur!="o"){
        msgWinner.innerHTML = "tu peux jouer un x ou un o!";
    }
    // recuperer l'id
    let caseJouee=input.id
    // spliter pour recup le N° de ligne et colonne
    let colonne = caseJouee.split('')[1];
    let ligne= caseJouee.split('')[3];
    console.log(ligne, colonne);

    // affichage du tableau
    let table = document.getElementById("table");


    //test des 3 lignes

    let col1 = document.getElementById("c1l"+ligne);
    let col2 = document.getElementById("c2l"+ligne);
    let col3 = document.getElementById("c3l"+ligne);
    console.log(col1.value, col2.value, col3.value);

    if (col1.value == joueur && col2.value == joueur && col3.value  == joueur) {
        msgWinner.innerHTML = "The winner is " + joueur;
    //    table.disabled = false;
    } else {
    //    table.disabled = true;
    }

    //test des 3 colonnes

    let ligne1 = document.getElementById("c" + colonne + "l1");
    let ligne2 = document.getElementById("c" + colonne + "l2");
    let ligne3 = document.getElementById("c" + colonne + "l3");
    console.log(ligne1.value, ligne2.value, ligne3.value);

    if (ligne1.value == joueur && ligne2.value == joueur && ligne3.value  == joueur) {
        msgWinner.innerHTML="The winner is " + joueur;
    //    table.disabled = false;
    } else {
    //    table.disabled = true;
    }

    //test des 2 diagonales

    let diag1l1 = document.getElementById("c1l1");
    let diag2l2 = document.getElementById("c2l2");
    let diag3l3 = document.getElementById("c3l3");
    let diag3l1 = document.getElementById("c3l1");
    let diag1l3 = document.getElementById("c1l3");

    if(diag1l1.value == joueur && diag2l2.value==joueur && diag3l3.value==joueur){

        msgWinner.innerHTML="The winner is " + joueur;
        table.disabled = false;
    } else {
        table.disabled = true;
    }

    if(diag3l1.value == joueur && diag2l2.value==joueur && diag1l3.value==joueur){

        msgWinner.innerHTML="The winner is " + joueur;
        disable(table);
        table.disabled = false;
    } else {
        table.disabled = true;
    }






}

function disable(table_id) {
    var inputs=document.getElementById(table_id).getElementsByTagName('input');
    console.log(inputs);
    for(var i=0; i<inputs.length; ++i)
    inputs[i].disabled=true;
}

function checkTouche(event) {
    console.log("event: " + event);
  if (event != "x" && event != "o") {
    //do things
    document.removeEventListener('keypress', eventHandler);
  }

}
