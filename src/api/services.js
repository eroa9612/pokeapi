import axios from 'axios';
import {pokeAPI} from '../api/apiURL';

let response = [];

export default {
    async pokemons() {
        response = await axios.get(pokeAPI + 'pokemon');
        return response.data.results;
    },

    async pokemon(name) {
        response = await axios.get(pokeAPI + `pokemon/${name}`);
        return response.data
    },

}