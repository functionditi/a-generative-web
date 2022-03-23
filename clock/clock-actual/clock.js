function getTimex(){

//get data on time
var timex = new Date();

//set up variables
var hoursx = timex.getHours();
var minutesx = timex.getMinutes();
var secondsx = timex.getSeconds();

if (hoursx>12){
    hoursx-=12;
}

//interact with html
var clockx = document.querySelector('#time');

clockx.innerHTML =  hoursx + ":" + minutesx + ":" + secondsx +"<br>";

}



setInterval(getTimex, 1000)