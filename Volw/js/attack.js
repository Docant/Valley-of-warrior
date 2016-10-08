
window.onmousemove = function(event){   //положение мыши
    cursorx = event.pageX;
    cursory = event.pageY;
};

//--------Центр героя--------
var sx = Hero.x + Hero.w/2;
var sy = Hero.y + Hero.h/2;

var swd = document.getElementById("sword1");
// window.onclick = function(){   //клик мыши
// 
// };
// 
// ctx.onmousedown = function(){ //Нажал
    //  
// };
// 
// ctx.onmouseup = function(){  //Отпустил
// 
// };

var sword = function(sx,sy,w,h,a){
    var dx = sx;  
    var dy = sy;

    angle = Math.atan2(cursory-cy-70,cursorx-cx-30);

    if(angle){
        ctx.save();
        ctx.translate(dx,dy);
        ctx.rotate(angle);
        ctx.translate(-dx,-dy);
    }
    ctx.drawImage(swd, sx,sy,w,h);
    if(angle){
        ctx.restore();
    }

};





    
