var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Joueur = /** @class */ (function () {
    function Joueur() {
        this.pv = 150;
        this.vivant = true;
        this.point = 0;
    }
    Joueur.prototype.Attaque = function (Monstre) {
        // tirage dé du joueur
        var deJoueur = new De;
        var tirageJoueur = deJoueur.LanceLeDe();
        // tirage dé du monstre
        var deMonstre = new De;
        var tirageMonstre = deMonstre.LanceLeDe();
        // test du gagnant
        if (tirageJoueur >= tirageMonstre) {
            console.log("Attaque du monstre : le monstre a perdu");
            Monstre[
            // joueur gange 1 point
            "this"].point += 1;
        }
        else {
            console.log("Attaque du monstre : le joueur a perdu");
            // joueur perd 10 pf
            this.SubitDegats(10);
        }
    };
    Joueur.prototype.SubitDegats = function (degats) {
        // tirage dé bouclier
        var deBouclier = new De;
        console.log("Protection bouclier ?");
        var tirageBouclier = deBouclier.LanceLeDe();
        if (tirageBouclier <= 2) {
            console.log("levée de bouclier, pas de dégat");
        }
        else {
            console.log("pas de bouclier, perte de 10 point de vie");
            this.pv = this.pv - degats;
        }
        console.log("Le joueur a " + this.point + "points");
    };
    return Joueur;
}());
var Monstre = /** @class */ (function () {
    function Monstre() {
        this.vivant = true;
    }
    return Monstre;
}());
var MonstreFacile = /** @class */ (function (_super) {
    __extends(MonstreFacile, _super);
    function MonstreFacile() {
        return _super.call(this) || this;
    }
    MonstreFacile.prototype.Attaque = function (Joueur) {
        // tirage dé du joueur
        var deJoueur = new De;
        var tirageJoueur = deJoueur.LanceLeDe;
        // tirage dé du monstre
        var deMonstre = new De;
        var tirageMonstre = deMonstre.LanceLeDe;
        // test du gagnant
        if (tirageMonstre > tirageJoueur) {
            console.log("Attaque du joueur : le monstre a gagné.");
            // joueur perd 10 pf
            Joueur.SubitDegats(10);
        }
        else {
            console.log("Attaque du joueur : le joueur a gagné.");
            // joueur gange 1 point
            Joueur.point += 1;
        }
    };
    MonstreFacile.prototype.SubitDegats = function () {
        this.vivant = false;
        console.log("Le monstre facile est mort");
    };
    return MonstreFacile;
}(Monstre));
var MonstreDificile = /** @class */ (function (_super) {
    __extends(MonstreDificile, _super);
    function MonstreDificile() {
        return _super.call(this) || this;
    }
    MonstreDificile.prototype.Attaque = function (Joueur) {
    };
    MonstreDificile.prototype.SubitDegats = function () {
        this.vivant = false;
        console.log("Le monstre difficile est mort");
    };
    MonstreDificile.prototype.SortMagique = function () {
    };
    return MonstreDificile;
}(Monstre));
var De = /** @class */ (function () {
    function De() {
        this.minFace = 1;
        this.maxFace = 6;
    }
    De.prototype.LanceLeDe = function () {
        this.valeur = Math.floor(Math.random() * (this.maxFace + 1 - this.minFace) + this.minFace);
        console.log("tirage du dé : " + this.valeur);
        return this.valeur;
    };
    return De;
}());
// initialisation des compteurs
var cntMonstreFacile = 0;
var cntMonstreDificile = 0;
// on instancie le héros
var heros = new Joueur();
// on instancie le monstre
var monstre;
// choix d'un monstre aléatoire arrive
var aleaMonstre = Math.floor(Math.random());
if (aleaMonstre == 0) {
    monstre = new MonstreFacile();
    console.log("Selection d'un monstre facile");
}
else {
    monstre = new MonstreDificile();
    console.log("Selection d'un monstre difficile");
}
// le héros attaque le monstre
heros.Attaque(monstre);
// puis si le monstre a survécu il attaque à son tour le héros
if (monstre.vivant) {
    monstre.Attaque(heros);
}
else {
}
// Affichage des compteurs
if (aleaMonstre == 0) {
    cntMonstreFacile += 1;
    console.log("Compteur de monstre facile vaincus : " + cntMonstreFacile);
}
else {
    cntMonstreDificile += 1;
    console.log("Compteur de monstre facile vaincus : " + cntMonstreDificile);
}
//Snif, vous êtes mort...
//Bravo !!! Vous avez tué 8 monstres faciles et 10 monstres difficiles. Vous avez 28 points.
