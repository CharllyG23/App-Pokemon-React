const baseUrl = 'http://pokeapi.co/api/v2';

const request = {
    pokemon: "pokemon"
}

export async function fetchPokemon(pokemon){
    console.log(`${baseUrl}/${request.pokemon}/${pokemon}`);
    return fetch(`${baseUrl}/${request.pokemon}/${pokemon}`)
}