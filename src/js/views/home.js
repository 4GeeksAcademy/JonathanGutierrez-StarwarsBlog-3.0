import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import StarwarsCharacters from "./StarwarsCharacters";
import StarwarsPlanets from "./StarwarsPlanets";
import StarwarsVehicles from "./StarwarsVehicles";


export const Home = () => {

	return (<div>

		<div className="text-center mt-5">
			<div className="characters"> <h1>CHARACTERS</h1></div>
			<StarwarsCharacters />
		</div>

		<div className="text-center mt-5">
			<div className="planets"><h1>PLANETS</h1></div>
			<StarwarsPlanets />
		</div>

		<div className="text-center mt-5">
			<div className="vehicles"><h1>VEHICLES</h1></div>
			<StarwarsVehicles />
		</div>
	</div>)



};
