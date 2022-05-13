abstract class Monstre {
    protected vivant:boolean;
    protected DEGAT_BASE:number = 10;

    constructor(){
        this.vivant = true;
    }

    attaquer(joueur:Joueur) {
        let lancerMonstre:number = De.getLancerDe();
        let lancerJoueur:number = De.getLancerDe();
        if(lancerMonstre > lancerJoueur){
            joueur.subirDegat(this.DEGAT_BASE);
        }
    }

    subirDegat() {
        this.vivant = false;
    }

    isVivant() {
        return this.vivant;
    }

}

class MonstreFacile extends Monstre {

    constructor(){
        super();
    }

    static getScore(): number {
        return 1;
    }

}

class MonstreDifficile extends Monstre {

    private DEGAT_MAGIQUE:number = 5;

    constructor(){
        super();
    }

    attaquer(joueur:Joueur) {
        super.attaquer(joueur);
        let lancerMonstre:number = De.getLancerDe();
        if(lancerMonstre !=6){
            joueur.subirDegat(lancerMonstre * this.DEGAT_MAGIQUE);
        }
    }

    static getScore(): number {
        return 2;
    }
}

class Joueur {

    private pointDeVie:number;
    private nombreMonstresFacilesTue:number;
    private nombreMonstresDifficilesTue:number;

    constructor(){
        this.pointDeVie = 150;
        this.nombreMonstresFacilesTue = 0;
        this.nombreMonstresDifficilesTue = 0;
    }

    attaquer(monstre:Monstre) {
        let lancerMonstre:number = De.getLancerDe();
        let lancerJoueur:number = De.getLancerDe();
        if(lancerJoueur >= lancerMonstre) {
            monstre.subirDegat();
            if(!monstre.isVivant()){
                if(monstre.constructor['name'] == "MonstreFacile"){
                    this.nombreMonstresFacilesTue++;
                } else {
                    this.nombreMonstresDifficilesTue++;
                }
            }
        }
    }

    subirDegat(degats:number){
        let lancerJoueur:number = De.getLancerDe();
        if(lancerJoueur > 2){ // bouclier
            this.pointDeVie -= degats;
        }
        if(this.pointDeVie < 0){
            this.pointDeVie = 0;
        }
    }

    isVivant(): boolean{
        return this.pointDeVie > 0;
    }

    getScore(){
        return this.nombreMonstresDifficilesTue * MonstreDifficile.getScore() 
        + this.nombreMonstresFacilesTue * MonstreFacile.getScore();
    }

    getNombreMonstresFacilesTue(): number {
        return this.nombreMonstresFacilesTue;
    }

    getNombreMonstresDifficilesTue(): number {
        return this.nombreMonstresDifficilesTue;
    }

}

class De {

    constructor(){
    }

    static getLancerDe(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    static genererMonstreAlea(): Monstre{
        let lancerDe = this.getLancerDe();
        if(lancerDe <=3){
            return new MonstreFacile();
        } else {
            return new MonstreDifficile();
        }
    }
}

// boucle de jeu principale

let hero = new Joueur();
let monstre = De.genererMonstreAlea();

do {
    hero.attaquer(monstre);
    if(monstre.isVivant()){
        monstre.attaquer(hero);
    } else {
        monstre = De.genererMonstreAlea();
    }
} while(hero.isVivant());

console.log("Snif. Vous etes mort");
console.log(`Vous avez tué ${hero.getNombreMonstresFacilesTue()} 
monstres faciles et ${hero.getNombreMonstresDifficilesTue()} monstres difficiles.
Vous avez ${hero.getScore()} points.`);

