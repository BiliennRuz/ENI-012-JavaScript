// declaration d'une classe mère
let Sport = function(nom, description) {

    this.nom = nom;
    this.description = description;

    // définir des fonctions
    this.afficher = function() {
        console.log(this.nom + " " + this.description);
    }
}

// declaration d'une classe fille
let SportDeCompetition = function(nom, description, niveau) {
    // appel au constructeur de la calsse mère
    Sport.call(this, nom, description);
    // définition des attributs propres
    this.niveau = niveau;
}

let rugby = new SportDeCompetition("Rugby", "Un sport avec un ballon ovale", "internationnal");
console.log(rugby);
rugby.afficher();