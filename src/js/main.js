"use strict";

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
document.getElementById("start").innerHTML += "Idag är det " + year + ":" + month + ":" + day;