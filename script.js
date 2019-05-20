// variables
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3"); 


// js actions

color1.addEventListener("input", gradientImplementation);
color1.addEventListener("input", gradientImplementation);


// functions

function gradientImplementation() {
	body.style.background = "linear-gradient(to right, " + color1.value 
	+ ", " + color2.value + ")";

	css.textContent = "RGB 1: "+ color1.value + ", RGB 2: " + color2.value;
}