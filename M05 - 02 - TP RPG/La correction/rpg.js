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
var Monstre = /** @class */ (function () {
    function Monstre() {
        this.DEGAT_BASE = 10;
        this.vivant = true;
    }
    Monstre.prototype.attaquer = function (joueur) {
        var lancerMonstre = De.getLancerDe();
        var lancerJoueur = De.getLancerDe();
        if (lancerMonstre > lancerJoueur) {
            joueur.subirDegat(this.DEGAT_BASE);
        }
    };
    Monstre.prototype.subirDegat = function () {
        this.vivant = false;
    };
    Monstre.prototype.isVivant = function () {
        return this.vivant;
    };
    return Monstre;
}());
var MonstreFacile = /** @class */ (function (_super) {
    __extends(MonstreFacile, _super);
    function MonstreFacile() {
        return _super.call(this) || this;
    }
    MonstreFacile.getScore = function () {
        return 1;
    };
    return MonstreFacile;
}(Monstre));
var MonstreDifficile = /** @class */ (function (_super) {
    __extends(MonstreDifficile, _super);
    function MonstreDifficile() {
        var _this = _super.call(this) || this;
        _this.DEGAT_MAGIQUE = 5;
        return _this;
    }
    MonstreDifficile.prototype.attaquer = function (joueur) {
        _super.prototype.attaquer.call(this, joueur);
        var lancerMonstre = De.getLancerDe();
        if (lancerMonstre != 6) {
            joueur.subirDegat(lancerMonstre * this.DEGAT_MAGIQUE);
        }
    };
    MonstreDifficile.getScore = function () {
        return 2;
    };
    return MonstreDifficile;
}(Monstre));
var Joueur = /** @class */ (function () {
    function Joueur() {
        this.pointDeVie = 150;
        this.nombreMonstresFacilesTue = 0;
        this.nombreMonstresDifficilesTue = 0;
    }
    Joueur.prototype.attaquer = function (monstre) {
        var lancerMonstre = De.getLancerDe();
        var lancerJoueur = De.getLancerDe();
        if (lancerJoueur >= lancerMonstre) {
            monstre.subirDegat();
            if (!monstre.isVivant()) {
                if (monstre.constructor['name'] == "MonstreFacile") {
                    this.nombreMonstresFacilesTue++;
                }
                else {
                    this.nombreMonstresDifficilesTue++;
                }
            }
        }
    };
    Joueur.prototype.subirDegat = function (degats) {
        var lancerJoueur = De.getLancerDe();
        if (lancerJoueur > 2) { // bouclier
            this.pointDeVie -= degats;
        }
        if (this.pointDeVie < 0) {
            this.pointDeVie = 0;
        }
    };
    Joueur.prototype.isVivant = function () {
        return this.pointDeVie > 0;
    };
    Joueur.prototype.getScore = function () {
        return this.nombreMonstresDifficilesTue * MonstreDifficile.getScore()
            + this.nombreMonstresFacilesTue * MonstreFacile.getScore();
    };
    Joueur.prototype.getNombreMonstresFacilesTue = function () {
        return this.nombreMonstresFacilesTue;
    };
    Joueur.prototype.getNombreMonstresDifficilesTue = function () {
        return this.nombreMonstresDifficilesTue;
    };
    return Joueur;
}());
var De = /** @class */ (function () {
    function De() {
    }
    De.getLancerDe = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    De.genererMonstreAlea = function () {
        var lancerDe = this.getLancerDe();
        if (lancerDe <= 3) {
            return new MonstreFacile();
        }
        else {
            return new MonstreDifficile();
        }
    };
    return De;
}());
// boucle de jeu principale
var hero = new Joueur();
var monstre = De.genererMonstreAlea();
do {
    hero.attaquer(monstre);
    if (monstre.isVivant()) {
        monstre.attaquer(hero);
    }
    else {
        monstre = De.genererMonstreAlea();
    }
} while (hero.isVivant());
console.log("Snif. Vous etes mort");
console.log("Vous avez tu\u00E9 ".concat(hero.getNombreMonstresFacilesTue(), " \nmonstres faciles et ").concat(hero.getNombreMonstresDifficilesTue(), " monstres difficiles.\nVous avez ").concat(hero.getScore(), " points."));
