var datex;
var hoursx;
var minutesx;
var secondsx;
var millisecondsx;
var clockx;

function getTime(){
    datex=new Date();
    hoursx=datex.getHours();
    minutesx=datex.getMinutes();
    secondsx=datex.getSeconds();
    //millisecondsx=datex.getMilliseconds();

    if (hoursx>12){
    hoursx-=12;
    }

    clockx=document.querySelector("#time");
    //clockx.innerHTML= hoursx+":"+minutesx+":"+secondsx;
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.lineWidth = 14;


    ctx.strokeStyle = '#AC8FBF';
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height/2, 50*hoursx*0.1, 110*hoursx*0.1, 0,2* Math.PI, 0, 2*Math.PI);
ctx.stroke();

ctx.strokeStyle = '#24A669';
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height/2, 50*minutesx*0.1, 110*minutesx*0.1, 0,2* Math.PI, 0, 2*Math.PI);
ctx.stroke();

    ctx.strokeStyle = '#F2541B';
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height/2, 50*secondsx*0.1, 110*secondsx*0.1, 0,2* Math.PI, 0, 2*Math.PI);
ctx.stroke();






   

  
}


setInterval(getTime, 1);
