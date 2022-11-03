/*

function gibAlterAus (name2, zahl2) {
	
console.log(name2 + " ist " + zahl2 + " Jahre alt.");	
	
	
}

console.log("das ist ein test");

var name = "Houssem";
var zahl = 28;


gibAlterAus(name,zahl);


name = "Skander";
zahl = 45;

gibAlterAus(name,zahl);

name = "Ahmed";
zahl = 12;

gibAlterAus(name,zahl);

*/


function timeToLastCourse() {
	//Datum Heute
	var today = new Date();
	
	//Datum letwter Kurstag: 14.01.2019
	var lastCourse= new Date("2019-01-14");

	// Umwandlung von Millisekunden in Tage
	var difference = (lastCourse - today) / 1000 / 60 / 60 / 24;
	
	difference = Math.floor(difference);
	
	document.getElementById("timeToLastCourse").textContent =  difference + " Tage.";
	
	console.log(difference);
}

timeToLastCourse();



function checkForm() {
	/* Wert des Feldes Nachricht */
	var message = document.getElementsByName("message")[0].value;
	
	/* Wert des Feldes Email */
	var email = document.getElementsByName("email")[0].value;;
	
	/* Fehlermeldungen */
	var errorMessages = "";
	
	
	if (message === "") {
		
		errorMessages = "Bitte füllen Sie das Feld Nachrichten.\n"
		
		
		
	}
	
	if (email === "") {
		
		errorMessages += "Bitte füllen Sie das Feld E-mail."
		
		
		
	} else if (email.indexOf("@") === -1) {
		
		errorMessages += "Bitte eine korrekt E-Mail eintragen.\n";
		
		
	}
	
	
	if (errorMessages === "") {
		
		errorMessages = "Danke  für die Eingabe von korrekten Daten!";
		
		
	}
		
	alert(errorMessages);
	
}

document.getElementById("submitButton").addEventListener("click", checkForm);


























