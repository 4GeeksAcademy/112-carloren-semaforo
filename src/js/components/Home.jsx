import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let redLight = false
let orangeLight = false
let greenLight = false
let oneSecond = ""



//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [clickedText, setClickedText] = useState("Cambiar cada segundo")
	const [clickedColor, setClickedColor] = useState("btn btn-success align-self-center m-3")

	const red = "0px 0px 35px 20px red"
	const orange = "0px 0px 35px 20px orange"
	const green = "0px 0px 35px 20px green"

	function lightSwitch() {
		color === green ? setColor(orange) : (color === orange ? setColor(red) : setColor(green))
	}

	function timeSwitch() {
		if (clickedText === "Cambiar cada segundo") {
			setClickedColor("btn btn-danger align-self-center m-3")
			setClickedText("Parar")
			// lightSwitch();
			let i = 0

			oneSecond = setInterval(() => {
				i++
				lightSwitch()
				console.log(i, color)
			}, 1000)
		} else {
			setClickedColor("btn btn-success align-self-center m-3")
			setClickedText("Cambiar cada segundo")
			clearInterval(oneSecond)

		}

	}

	return (
		<div className="d-flex flex-column text-center">
			<p className="bg-dark m-0 p-2 align-self-center" style={{ width: "10px", height: "50px" }}> </p>
			<div className="badge bg-dark m-0 p-2 align-self-center">
				<p className="bg-danger m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === red ? red : "") }} onClick={() => (color === red ? setColor("") : setColor(red))}></p>
				<p className="bg-warning m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === orange ? orange : "") }} onClick={() => (color === orange ? setColor("") : setColor(orange))}></p>
				<p className="bg-success m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === green ? green : "") }} onClick={() => (color === green ? setColor("") : setColor(green))}></p>
			</div>
			<div>
				<button className="btn btn-primary align-self-center m-3" onClick={lightSwitch}>Alternar</button>
				<button className={clickedColor} onClick={timeSwitch}>{clickedText}</button>
				<button className="btn btn-info align-self-center m-3">Añadir luz cian</button>
			</div>
		</div >
	);
};

export default Home;
