import React from "react";


export default function Search(props) {
    const [ search, setSearch ] = React.useState('');


    return(
        <div className="container-fluid">
            
            <h2 className="p-4 text-center">Buscar su Pokemon Preferido.</h2>
            <div className="row justify-content-center ">
                <div className="col-6 mb-4">
                    <input 
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="form-control" 
                    placeholder="Buscar Pokemon..."
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary btn-block" onClick={(e) => props.getPokemon(search)} >Buscar</button>
                </div>
            </div>
        </div>
    );
}

