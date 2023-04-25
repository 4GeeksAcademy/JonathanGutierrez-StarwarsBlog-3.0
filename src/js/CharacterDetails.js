import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router';
import { Context } from './store/appContext';




const CharacterDetails = () => {

    const { store, actions } = useContext(Context);


    const [oneCharacter, setOneCharacter] = useState({});
    const { id } = useParams();

    // DETALLES DEL PERSONAJE
    useEffect(() => {
        getCharacterDetails();
    }, []);

    const getCharacterDetails = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.swapi.tech/api/people/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("AQUÍ", result);
                setOneCharacter(result.result.properties);
            })


            .catch(error => console.log('error', error));
    }

    return (
        <div>

            <div className="row mt-5">

                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        alt={oneCharacter.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <h2>{oneCharacter.name}</h2>
                    <p>
                        <strong>Birth Year:</strong> {oneCharacter.birth_year}
                    </p>
                    <p>
                        <strong>Gender:</strong> {oneCharacter.gender}
                    </p>
                    <p>
                        <strong>Height:</strong> {oneCharacter.height} cm
                    </p>
                    <p>
                        <strong>Mass:</strong> {oneCharacter.mass} kg
                    </p>
                    <p>
                        <strong>Eye Color:</strong> {oneCharacter.eye_color}
                    </p>
                    <p>
                        <strong>Hair Color:</strong> {oneCharacter.hair_color}
                    </p>
                    <p>
                        <strong>Skin Color:</strong> {oneCharacter.skin_color}
                    </p>

                    <button onClick={() => {
                        actions.selectElement(oneCharacter)
                        actions.addFavoritos()
                    }} className="btn btn-success">FAVORITOS</button>

                </div>
            </div>


        </div>)
}


export default CharacterDetails;