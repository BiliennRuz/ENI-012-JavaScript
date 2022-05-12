class Joueur {

    private pv:number;
    private vivant:boolean;
    private point:number;

    constructor() {
        this.pv = 150;
        this.vivant = true;
        this.point = 0;
    }

    public Attaque(Monstre) {
        // tirage dé du joueur
        let deJoueur = new De;
        let tirageJoueur = deJoueur.LanceLeDe();
        // tirage dé du monstre
        let deMonstre = new De;
        let tirageMonstre = deMonstre.LanceLeDe();
        // test du gagnant
        if (tirageJoueur >= tirageMonstre) {
            console.log("Attaque du monstre : le monstre a perdu");
            Monstre.
            // joueur gange 1 point
            this.point += 1;
        } else {
            console.log("Attaque du monstre : le joueur a perdu");
            // joueur perd 10 pf
            this.SubitDegats(10);
        }
    }

    public SubitDegats(degats:number) {
        // tirage dé bouclier
        let deBouclier = new De;
        console.log("Protection bouclier ?")
        let tirageBouclier:number = deBouclier.LanceLeDe();
        if (tirageBouclier <= 2) {
            console.log("levée de bouclier, pas de dégat");
        } else {
            console.log("pas de bouclier, perte de 10 point de vie");
            this.pv -= degats;
        }
        console.log("Le joueur a " + this.point + " points");

    }
}

abstract class Monstre {

    protected vivant:boolean;

    constructor() {
        this.vivant = true;
    }

    abstract Attaque(Joueur);

    abstract SubitDegats();

}

class MonstreFacile extends Monstre{

    constructor() {
        super();
    }

    public Attaque(Joueur) {
        // tirage dé du joueur
        let deJoueur = new De;
        let tirageJoueur = deJoueur.LanceLeDe;
        // tirage dé du monstre
        let deMonstre = new De;
        let tirageMonstre = deMonstre.LanceLeDe;
        // test du gagnant
        if (tirageMonstre > tirageJoueur) {
            console.log("Attaque du joueur : le monstre a gagné.");
            // joueur perd 10 pf
            Joueur.SubitDegats(10);
        } else {
            console.log("Attaque du joueur : le joueur a gagné.");
            // joueur gange 1 point
            Joueur.point += 1;
        }
    }

    public SubitDegats() {
        this.vivant = false;
        console.log("Le monstre facile est mort")
    }

}

class MonstreDificile extends Monstre{

    constructor() {
        super();
    }

    public Attaque(Joueur) {

    }

    public SubitDegats() {
        this.vivant = false;
        console.log("Le monstre difficile est mort")
    }

    public SortMagique() {

    }

}

class De {

    private valeur:number;
    private MINFACE:number = 1;
    private MAXFACE:number = 6;

    constructor() {
    }

    public LanceLeDe():number {
        this.valeur = Math.floor(Math.random() * (this.MAXFACE + 1 - this.MINFACE) + this.MINFACE);
        console.log("tirage du dé : " + this.valeur);
        return this.valeur;
    }
}

// initialisation des compteurs
let cntMonstreFacile:number = 0;
let cntMonstreDificile:number = 0;
// on instancie le héros
let heros = new Joueur();


// on instancie le monstre
let monstre;
// choix d'un monstre aléatoire arrive
let aleaMonstre = Math.floor(Math.random());
if (aleaMonstre == 0) {
    monstre = new MonstreFacile();
    console.log("Selection d'un monstre facile")
} else {
    monstre = new MonstreDificile();
    console.log("Selection d'un monstre difficile")
}
// le héros attaque le monstre
heros.Attaque(monstre);
// puis si le monstre a survécu il attaque à son tour le héros
if (monstre.vivant) {
    monstre.Attaque(heros);
} else {
    




}

// Affichage des compteurs
if (aleaMonstre == 0) {
    cntMonstreFacile +=1;
} else {
    cntMonstreDificile += 1;
}
console.log("Vous avez tué " + cntMonstreFacile + " monstres faciles et " + cntMonstreDificile + " monstres difficiles")





//Snif, vous êtes mort...
//Bravo !!! Vous avez tué 8 monstres faciles et 10 monstres difficiles. Vous avez 28 points.