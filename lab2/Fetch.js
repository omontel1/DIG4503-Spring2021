class Fetch {
 
    constructor(hasTail, legs, pokemon, color) {
        this.hasTail = hasTail; 
        this.legs = legs;
        this.pokemon = pokemon;     
        this.color = color;
    }
}

import axios from 'axios';

axios('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        const pokemon = response.data;
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });

export function Fetch(){
    return "This is a " + pokemon.name + " and its ID is " + pokemon.id;
    
}
