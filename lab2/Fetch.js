import Chalk from 'chalk';
import Axios from 'axios';

class Fetch {
    constructor(pokemon, color){
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch() {

        Axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)

        .then( (response) => {

            const pokemon = response.data;
            
            
            
            console.log( Chalk.hex(this.color)("This is a " + pokemon.name+ " and its ID is " + pokemon.id) );
        })
        .catch(function (error) {

            console.log( Chalk.red("Error: " + error) );
        });
    }
}

export default Fetch;
