export class Pokemon {

    id:number;
    nom:String;
    image:String;
    types:Array<String>;

    constructor(id:number, nom:String, image:String, types:Array<String>) {
        this.id = id;
        this.nom = nom;
        this.image = image;
        this.types = types;
    }
}