
document.oncontextmenu = function (){return false};

window.onmousemove = function(event){   //положение мыши
    cursorx = event.pageX;
    cursory = event.pageY;
};

//--------Центр героя--------
var sx = Hero.x + Hero.w/2;
var sy = Hero.y + Hero.h/2;

onclick = function(){   //клик мыши
        attack = true;
        setTimeout(function(){attack = false;}, 200);
};

function attacka(){
    if(attack){
        sword(sx, sy, 100, 20, angle);
    }else{
        sword(sx, sy, 50, 10, angle);
    }
}

canvas.oncontextmenu = function(e) {
    if(!weaponry){weaponry=true;}else if(weaponry){weaponry=false;}
};

// ctx.onmousedown = function(e){ //Нажал
     
// };
// 
// ctx.onmouseup = function(){  //Отпустил
// 
// };

function sword(sx,sy,widsw,heisw,a){
    var dx = sx;  
    var dy = sy;

    angle = Math.atan2(cursory-cy-70,cursorx-cx-30);

    if(angle){
        ctx.save();
        ctx.translate(dx,dy);
        ctx.rotate(angle);
        ctx.translate(-dx,-dy);
    }
    if(weaponry){ctx.drawImage(swd, sx,sy,widsw,heisw);}
    if(angle){
        ctx.restore();
    }

};





    
