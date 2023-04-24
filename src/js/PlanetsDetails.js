import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const PlanetsDetails = () => {

    const [onePlanet, setOnePlanet] = useState({});
    const { id } = useParams();

    // DETALLES DEL PERSONAJE
    useEffect(() => {
        getPlanetDetails();
    }, []);

    const getPlanetDetails = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.swapi.tech/api/planets/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("AQUÍ", result);
                setOnePlanet(result.result.properties);
            })


            .catch(error => console.log('error', error));
    }

    return (
        <div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt={onePlanet.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <h2>{onePlanet.name}</h2>
                    <p>
                        <strong>Climate:</strong> {onePlanet.climate}
                    </p>
                    <p>
                        <strong>Created:</strong> {onePlanet.created}
                    </p>
                    <p>
                        <strong>Diameter:</strong> {onePlanet.diameter} cm
                    </p>
                    <p>
                        <strong>Gravity:</strong> {onePlanet.gravity} kg
                    </p>
                    <p>
                        <strong>Orbital Period:</strong> {onePlanet.orbital_period}
                    </p>
                    <p>
                        <strong>Population :</strong> {onePlanet.population}
                    </p>
                    <p>
                        <strong>Terrain:</strong> {onePlanet.terrain}
                    </p>

                </div>
            </div>


        </div>)
}


export default PlanetsDetails;