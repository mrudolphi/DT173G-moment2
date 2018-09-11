"use strict";

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() +1;
var day = today.getDate();


/* Prints todays date on startpage */
function start() {
	if (month < 10) {
		month = "0" + month;
	}

	if (day < 10) {
		day = "0" + day;
	}

	document.getElementById("start").innerHTML = "<h3>Idag är det " + year + "-" + month + "-" + day + "</h3>";
}