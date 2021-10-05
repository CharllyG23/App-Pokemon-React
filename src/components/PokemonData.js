import React from "react";
import './PokemonData.css'

export default function PokemonData(props){

    return(
        <div className="row justify-content-center  "> 
            <div className="col-3 pokemon ">
                <img src={props.sprite} alt={props.name}/>
                <h4 className="card-title">{props.name}</h4>
            </div>
        </div>
    );
}