import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const StarwarsVehicles = () => {

    const [vehicles, setVehicles] = useState([]);


    // Como lo hacemos para recuperar la parte dinámica de esta ruta? Y poder hacer la consulta a la API o Base de Datos para recuperar la información de un pokemon en especifico
    const params = useParams();
    console.log('variable params: ', params);

    //PERSONAJES
    useEffect(() => {
        getAllvehicles();
    }, [])

    const getAllvehicles = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.swapi.tech/api/vehicles", requestOptions)
            .then(response => response.json())
            .then(result => setVehicles(result.results))
            .catch(error => console.log('error', error));
    }





    return (

        <div className="row">
            {vehicles.map((vehicle, index) => {
                return (
                    <div key={vehicles.uid} className="col-md-3 my-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                }} />
                            <div className="card-body">
                                <p className="card-text">
                                    {vehicle.name}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    );
};

export default StarwarsVehicles;

