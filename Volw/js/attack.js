﻿
document.oncontextmenu = function (){return false};

window.onmousemove = function(event){   //положение мыши
    cursorx = event.pageX;
    cursory = event.pageY;
};

//--------Центр героя--------
var sx = Hero.x + Hero.w/2;
var sy = Hero.y + Hero.h/2 +12;

onclick = function(){   //клик мыши
        attack = true;
        setTimeout(function(){attack = false;}, 200);
};

function attacka(){
    if(attack){
        sword(sx, sy, 100, 40, angle);
    }else{
        sword(sx, sy, 50, 20, angle);
    }
}

canvas.oncontextmenu = function(e) {
    if(!weaponry){weaponry=true;}else if(weaponry){weaponry=false;}
};

// ctx.onmousedown = function(e){ //Нажал
     
// };
 
// ctx.onmouseup = function(){  //Отпустил
 
// };

function sword(sx,sy,widsw,heisw,a){
    angle = Math.atan2(cursory-cy-112,cursorx-cx-52);

    if(angle){
        ctx.save();
        ctx.translate(sx,sy);
        ctx.rotate(angle);
        ctx.translate(-sx,-sy);
    }
    if(weaponry){ctx.drawImage(swd, sx-5,sy-10,widsw,heisw);}
    if(angle){
        ctx.restore();
    }

};



	    function lineTo(sx, sy, cursorx, cursory, red) {  // линия к курсору
          ctx.beginPath();
          ctx.strokeStyle = red;
          ctx.moveTo(sx, sy);
          ctx.lineTo(cursorx, cursory);
          ctx.stroke();
      };

//-----------------дальняя-атака-------------




var Arrow = [     //массив стрел
{x: sx, y: sy, w: 20, h:5, range: 400}, 
{x: 0, y: 0}, 
];

function drawArrow(){         //отрисовка стрелы
    ctx.fillRect(Arrow[0].x,Arrow[0].y,Arrow[0].w,Arrow[0].h);     
}


function moveArrow(){  // перемещение стрелы
	if(Arrow[0].x <= sx+Arrow[0].range){
		Arrow[0].x+=15;
	}
}







    
