import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from 'react-icons/bs';

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">

			{store.favoritos.map((fav, index) => {
				return (
					<div key={fav.uid} className="col-md-3 my-5">

						<div className="card" style={{ width: "18rem" }}>

							<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`} alt={fav.name}

								onError={(e) => {
									// Si la imagen no se carga, reemplazarla por una imagen de marcador de posición
									e.target.onerror = null;
									e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
								}} />
							<div className="card-body">
								<p className="card-text">
									{fav.name}
								</p>
								<BsFillTrash3Fill onClick={() => actions.removeFavorite(fav)} className='icon_trash' />
							</div>
						</div>

					</div>
				);
			})}
		</div>
	);
};

