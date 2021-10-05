import React, { useState } from "react";
import { fetchPokemon } from "../services/getPokemon";
import PokemonData from "./PokemonData";
import Search from "./search/Search";


const Pokemon = () =>{
    const [pokemon, setPokemon ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const getPokemon = async (request) => {
        setLoading(true);
        const response = await fetchPokemon(request);
        const result = await response.json();
        console.log(result);
        setPokemon(result);
        setLoading(false);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col justify-content-center align-items-center">
                    <Search getPokemon={getPokemon}/>

                    { !loading && pokemon ? (
                        <div>
                            <PokemonData 
                            sprite={pokemon.sprites.front_default}
                                name={pokemon.name} 
                            />
                        </div> 
                    ): null}
                </div>
            </div>
        </div>
    );
}


export default Pokemon;