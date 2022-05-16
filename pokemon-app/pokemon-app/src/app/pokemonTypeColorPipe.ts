import { Pipe, PipeTransform } from '@angular/core';
/**
 * Créer un pipe qui transforme le type de pokémon dans sa bonne couleur
 */
@Pipe({name:'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform{
    transform(type:string) {
        let classColor:string = "chip grey";
        switch (type) {
            case 'PLANTE' :
                classColor = "chip green lighten-2";
                break;
            case 'EAU' :
                classColor = "chip blue accent-2";
                break;
            case 'POISON' :
                classColor = "chip deep-purple lighten-2";
                break;
            case 'FEU' :
                classColor = "chip red darken-1";
                break;
            case 'VOL' :
                classColor = "chip blue lighten-2";
                break;
        }
        return classColor;
    }
}