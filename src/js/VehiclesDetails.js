import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router';
import { Context } from './store/appContext';




const VehiclesDetails = () => {

    const { store, actions } = useContext(Context);


    const [oneVehicle, setOneVehicle] = useState({});
    const { id } = useParams();

    // DETALLES DEL PERSONAJE
    useEffect(() => {
        getVehicleDetails();
    }, []);

    const getVehicleDetails = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.swapi.tech/api/vehicles/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("AQUÍ", result);
                setOneVehicle(result.result.properties);
            })


            .catch(error => console.log('error', error));
    }

    return (
        <div>

            <div className="row mt-5">

                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                        alt={oneVehicle.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <h2>{oneVehicle.name}</h2>
                    <p>
                        <strong>Cargo Capacity:</strong> {oneVehicle.cargo_capacity}
                    </p>
                    <p>
                        <strong>Consumables:</strong> {oneVehicle.consumables}
                    </p>
                    <p>
                        <strong>Cost:</strong> {oneVehicle.cost_in_credits}
                    </p>
                    <p>
                        <strong>Crew:</strong> {oneVehicle.crew}
                    </p>
                    <p>
                        <strong>Length:</strong> {oneVehicle.length}
                    </p>
                    <p>
                        <strong>Model:</strong> {oneVehicle.model}
                    </p>
                    <p>
                        <strong>Passengers:</strong> {oneVehicle.passengers}
                    </p>

                    <button onClick={() => {
                        actions.selectElement(oneVehicle)
                        actions.addFavoritos()
                    }} className="btn btn-success">FAVORITOS</button>

                </div>
            </div>


        </div>)
}


export default VehiclesDetails;