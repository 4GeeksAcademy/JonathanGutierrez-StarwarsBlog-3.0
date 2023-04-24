import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const StarwarsPlanets = () => {


    const [planets, setPlanets] = useState([]);

    // Como lo hacemos para recuperar la parte dinámica de esta ruta? Y poder hacer la consulta a la API o Base de Datos para recuperar la información de un pokemon en especifico
    const params = useParams();
    console.log('variable params: ', params);



    useEffect(() => {
        getAllPlanets();

    }, [])

    const getAllPlanets = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.swapi.tech/api/planets", requestOptions)
            .then(response => response.json())
            .then(result => setPlanets(result.results))
            .catch(error => console.log('error', error));
    }




    return (

        <div className="row">
            {planets.map((planet, index) => {


                return (
                    <div key={planet.uid} className="col-md-3 my-5">
                        <Link to={`/StarwarsPlanets/${planet.uid}`}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                    }} />
                                <div className="card-body">
                                    <p className="card-text">
                                        {planet.name}
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

export default StarwarsPlanets;

