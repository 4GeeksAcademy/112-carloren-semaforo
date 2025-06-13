import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let redLight = false
let orangeLight = false
let greenLight = false

//create your first component
const Home = () => {
	const [red, setRed] = useState("");
	const [orange, setOrange] = useState("");
	const [green, setGreen] = useState("");

	function lightRed() {
		setOrange("")
		orangeLight = false
		setGreen("")
		greenLight = false
		if (!redLight) {
			setRed("0px 0px 35px 20px red")
			redLight = true
		} else {
			setRed("")
			redLight = false
		}
	}
	function lightOrange() {
		setRed("")
		redLight = false
		setGreen("")
		greenLight = false
		if (!orangeLight) {
			setOrange("0px 0px 35px 20px orange")
			orangeLight = true
		} else {
			setOrange("")
			orangeLight = false
		}
	}

	function lightGreen() {
		setOrange("")
		orangeLight = false
		setRed("")
		redLight = false
		if (!greenLight) {
			setGreen("0px 0px 35px 20px green")
			greenLight = true
		} else {
			setGreen("")
			greenLight = false
		}
	}


	return (
		<div className="d-flex flex-column text-center">
			<p className="bg-dark m-0 p-2 align-self-center" style={{ width: "10px", height: "50px" }}> </p>
			<div className="badge bg-dark m-0 p-2 align-self-center">
				<p className="bg-danger m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: red }} onClick={lightRed}></p>
				<p className="bg-warning m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: orange }} onClick={lightOrange}></p>
				<p className="bg-success m-1 rounded-circle" style={{ width: "50px", height: "50px", WebkitBoxShadow: green }} onClick={lightGreen}></p>
			</div>
		</div >
	);
};

export default Home;
