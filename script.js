// get current year for footer
var currentYear = new Date().getFullYear();
var oldYear = currentYear - 1;
var currentDate = new Date();
var yearElement = document.getElementById("year");
currentDate.setMonth(currentDate.getMonth() - 8);
yearElement.innerHTML = "©2022 Channel Zero, All Rights Reserved.";