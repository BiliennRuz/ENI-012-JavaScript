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
console.log("hello from typescript");
var FigureGeometrique = /** @class */ (function () {
    function FigureGeometrique(couleur) {
        this.couleur = couleur;
    }
    FigureGeometrique.prototype.getCouleur = function () {
        return this.couleur;
    };
    FigureGeometrique.prototype.setCouleur = function (couleur) {
        this.couleur = couleur;
    };
    return FigureGeometrique;
}());
var Carre = /** @class */ (function (_super) {
    __extends(Carre, _super);
    function Carre(couleur, cote) {
        var _this = _super.call(this, couleur) || this;
        _this.cote = cote;
        return _this;
    }
    Carre.prototype.getCote = function () {
        return this.cote;
    };
    Carre.prototype.setCote = function (cote) {
        this.cote = cote;
    };
    Carre.prototype.calculPerimetre = function () {
        return 4 * this.cote;
    };
    Carre.prototype.calculAire = function () {
        return this.cote * this.cote;
    };
    return Carre;
}(FigureGeometrique));
//let figure = new FigureGeometrique("rouge");
//console.log(figure.getCouleur());
var carre = new Carre("vert", 5);
console.log(carre.getCouleur());
console.log(carre.calculPerimetre());
console.log(carre.calculAire());
