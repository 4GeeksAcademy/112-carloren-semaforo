import React, { useState, useEffect } from "react";

let redLight = false
let orangeLight = false
let greenLight = false
let oneSecond = ""

const Home = () => {
	const [color, setColor] = useState("");
	const [clickedText, setClickedText] = useState("Cambiar cada segundo")
	const [clickedColor, setClickedColor] = useState("btn btn-success align-self-center m-3")
	const [hiddenCyan, setHiddenCyan] = useState(true)
	const [clickedCyanText, setClickedCyanText] = useState("Añadir luz cian")
	const [clickedCyan, setClickedCyan] = useState("btn btn-info align-self-center m-3")

	const red = "0px 0px 35px 20px red"
	const orange = "0px 0px 35px 20px orange"
	const green = "0px 0px 35px 20px green"
	const cyan = "0px 0px 35px 20px cyan"

	useEffect(() => {
		if (clickedText === "Parar") {
			oneSecond = setTimeout(lightSwitch, 1000)
		}
	}, [color]);

	function lightSwitch() {
		if (clickedCyanText === "Quitar luz cian") {
			clearInterval(oneSecond)
			color === cyan ? setColor(green) : (color === green ? setColor(orange) : (color === orange ? setColor(red) : setColor(cyan)))
		} else {
			clearInterval(oneSecond)
			color === green ? setColor(orange) : (color === orange ? setColor(red) : setColor(green))
		}
	}

	function timeSwitch() {
		if (clickedText === "Cambiar cada segundo") {
			setClickedColor("btn btn-danger align-self-center m-3")
			setClickedText("Parar")
			lightSwitch();
		} else {
			setClickedColor("btn btn-success align-self-center m-3")
			setClickedText("Cambiar cada segundo")
			clearInterval(oneSecond)

		}
	}

	function addCyan() {
		if (clickedCyanText === "Añadir luz cian") {
			setClickedCyanText("Quitar luz cian")
			setClickedCyan("btn btn-outline-info align-self-center m-3")
			document.getElementById("cyan").removeAttribute("hidden")
		} else {
			setClickedCyanText("Añadir luz cian")
			setClickedCyan("btn btn-info align-self-center m-3")
			setHiddenCyan(true)
			document.getElementById("cyan").hidden = true
		}
	}
	return (
		<div className="d-flex flex-column text-center">
			<p className="bg-dark m-0 p-2 align-self-center" style={{ width: "10px", height: "50px" }}> </p>
			<div className="badge bg-dark m-0 p-2 align-self-center">
				<p className="bg-danger m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === red ? red : "") }} onClick={() => (color === red ? setColor("") : setColor(red))}></p>
				<p className="bg-warning m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === orange ? orange : "") }} onClick={() => (color === orange ? setColor("") : setColor(orange))}></p>
				<p className="bg-success m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === green ? green : "") }} onClick={() => (color === green ? setColor("") : setColor(green))}></p>
				<p className="bg-info m-1 rounded-circle" id="cyan" style={{ width: "50px", height: "50px", WebkitBoxShadow: (color === cyan ? cyan : "") }} onClick={() => (color === cyan ? setColor("") : setColor(cyan))} hidden></p>
			</div>
			<div>
				<button className="btn btn-primary align-self-center m-3" onClick={lightSwitch}>Alternar</button>
				<button className={clickedColor} onClick={timeSwitch}>{clickedText}</button>
				<button className={clickedCyan} onClick={addCyan}>{clickedCyanText}</button>
			</div>
		</div >
	);
};

export default Home;
