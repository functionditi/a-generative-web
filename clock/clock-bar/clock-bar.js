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

    ctx.fillStyle = '#AC8FBF';
    ctx.fillRect(10, 0, hoursx*10, 100);

    ctx.fillStyle = '#24A669';
    ctx.fillRect(10, 100, minutesx*10, 100);

    ctx.fillStyle = '#F2541B';
    ctx.fillRect(10, 200,  secondsx*10, 100);

   

  
}


setInterval(getTime, 1);
