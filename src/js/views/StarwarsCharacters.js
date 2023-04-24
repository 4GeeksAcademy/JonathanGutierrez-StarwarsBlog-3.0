import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


const StarwarsCharacters = () => {

    const [characters, setCharacters] = useState([]);

    // Obtener todos los personajes
    useEffect(() => {
        getAllCharacters();
    }, []);

    const getAllCharacters = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.swapi.tech/api/people", requestOptions)
            .then(response => response.json())
            .then(result => {
                // Almacenar los resultados en el estado "characters"
                console.log(result.results);
                setCharacters(result.results);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="row">
            {/* Mapear todos los personajes en una card */}
            {characters.map((character, index) => {
                return (
                    <div key={character.uid} className="col-md-3 my-5">
                        <Link to={`/StarwarsCharacters/${character.uid}`}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name}
                                    onError={(e) => {
                                        // Si la imagen no se carga, reemplazarla por una imagen de marcador de posición
                                        e.target.onerror = null;
                                        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                    }} />
                                <div className="card-body">
                                    <p className="card-text">
                                        {character.name}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default StarwarsCharacters;
