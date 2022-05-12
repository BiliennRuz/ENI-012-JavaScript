console.log("hello from typescript");

abstract class FigureGeometrique {

    private couleur:String;

    constructor(couleur:String) {
        this.couleur = couleur;
    }

    getCouleur():String {
        return this.couleur
    }

    setCouleur(couleur) {
        this.couleur = couleur;
    }

    abstract calculAire():number;

}

class Carre extends FigureGeometrique {

    private cote:number;

    constructor(couleur:String, cote:number) {
        super(couleur);
        this.cote = cote;
    }

    getCote():number {
        return this.cote;
    }

    setCote(cote) {
        this.cote = cote;
    }

    calculPerimetre():number {
        return 4 * this.cote;
    }

    public calculAire() {
        return this.cote * this.cote;
    }

}

//let figure = new FigureGeometrique("rouge");
//console.log(figure.getCouleur());
let carre = new Carre("vert", 5);
console.log(carre.getCouleur());
console.log(carre.calculPerimetre());
console.log(carre.calculAire());