import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let redLight = false
let orangeLight = false
let greenLight = false

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	const red = "0px 0px 35px 20px red"
	const orange = "0px 0px 35px 20px orange"
	const green = "0px 0px 35px 20px green"

	return (
		<div className="d-flex flex-column text-center">
			<p className="bg-dark m-0 p-2 align-self-center" style={{ width: "10px", height: "50px" }}> </p>
			<div className="badge bg-dark m-0 p-2 align-self-center">
				<p className="bg-danger m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === red ? red : "") }} onClick={() => (color === red ? setColor("") : setColor(red))}></p>
				<p className="bg-warning m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === orange ? orange : "") }} onClick={() => (color === orange ? setColor("") : setColor(orange))}></p>
				<p className="bg-success m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === green ? green : "") }} onClick={() => (color === green ? setColor("") : setColor(green))}></p>
			</div>
		</div >
	);
};

export default Home;
