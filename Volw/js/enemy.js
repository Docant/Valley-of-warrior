
var Vil = [  //Массив с поселенцами
{x: streetObjects[0][0]+500, y: streetObjects[0][0]+500, w: 40, h: 40}, 
{x: 0, y: 0}, 
];

var moveToX = Vil[0].x+50;
var moveToY = Vil[0].y+100;

function newRand(vlposx,vlposy){
    moveToX = vlposx + Math.floor(Math.random() * (100 - (-100) + 1)) + (-100); // координата 'X' к котрой поселенец должен двигаться
    moveToY = vlposy + Math.floor(Math.random() * (100 - (-100) + 1)) + (-100); // координата 'Y' к котрой поселенец должен двигаться   
}

function moveVil(){  //Перемещение поселенца
    if(true){
        if(Vil[0].x<moveToX){
            Vil[0].x+=speedMob;
            sidemoveenemy = "right";
        }else
        if(Vil[0].x>moveToX){
            Vil[0].x-=speedMob;
            sidemoveenemy = "left";
        }else
         if(Vil[0].y<moveToY){
            Vil[0].y+=speedMob;
            sidemoveenemy = "down";
        }else
        if(Vil[0].y>moveToY){
            Vil[0].y-=speedMob;
            sidemoveenemy = "up";
        }else{
            newRand(Vil[0].x,Vil[0].y);
        }
        ctx.fillRect(Vil[0].x,Vil[0].y,Vil[0].w,Vil[0].h);  
    }
}