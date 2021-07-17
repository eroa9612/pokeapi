
import {POKEMONS} from '../api/apiURL';

  export function  favPokemon(value) {
        const pokemons = getPokemons();
        if(pokemons.includes(value)){
                var i = pokemons.indexOf( value );
                i !== -1 && pokemons.splice( i, 1 );
                localStorage.setItem(POKEMONS, JSON.stringify(pokemons) )
        }else{
        pokemons.push(value);
        localStorage.setItem(POKEMONS, JSON.stringify(pokemons) )
        }

    }

    export function getPokemons() {
        const pokemons = localStorage.getItem(POKEMONS)
        if(!pokemons) return [];

        return JSON.parse(pokemons)
    }
