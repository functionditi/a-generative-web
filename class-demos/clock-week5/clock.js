function getTimex(){

//get data on time
var timex = new Date();

//set up variables
var hoursx = timex.getHours();
var minutesx = timex.getMinutes();
var secondsx = timex.getSeconds();

//interact with html
var clockx = document.querySelector('#clock');
clockx.innerHTML =  hoursx + ":" + minutesx + ":" + secondsx;

}

getTimex()