﻿
var Vil = [     //массив с поселенцами
{x: 400, y: 400, w: 40, h: 40}, 
{x: 0, y: 0}, 
];

function drawVil(){         //отрисовка поселенца
    ctx.fillRect(Vil[0].x,Vil[0].y,Vil[0].w,Vil[0].h);      
}

var storona = true; //переменная смены направления

var max = 50;   //максимальная величина рандома движения
var min = 1;    //минимальная величина рандома движения

var randVilX = Math.floor(Math.random() * (max - min + 1)) + min;  //рандом кординаты Х
var randVilY = Math.floor(Math.random() * (max - min + 1)) + min;  //рандом кординаты У

var VilX = Vil[0].x;    //х поселенца для дальнейшего сохранения
var VilY = Vil[0].y;     //у поселенца для дальнейшего сохранения

var moveVilX = VilX+randVilX; // координата 'X' к котрой поселенец должен двигаться
var moveVilY = VilY+randVilY; // координата 'Y' к котрой поселенец должен двигаться

function newRand(){     //новый рандом для новой координаты движения
    randVilX = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты Х
    randVilY = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты У
}

function saveVil(){ //сохранение координат после окончания движения
    VilX = Vil[0].x;  //сохранение х
    VilY = Vil[0].y;  //сохранение У
}

function saveMoveVil(){  //новые координаты к которым нужно двигаться
    if(storona){
        moveVilX = VilX+randVilX; //новая Х для движения: текущая + рандом
        moveVilY = VilY+randVilY; //новая У для движения: текущая + рандом
        storona = false;    // смана направления на -
        //console.log(moveVilX,moveVilY); //вывод в консоль новой точки движение
    }else
    if(!storona){
        moveVilX = VilX-randVilX; //новая Х для движения: текущая - рандом
        moveVilY = VilY-randVilY; //новая У для движения: текущая - рандом
        storona = true;  // смана направления на +
        //console.log(moveVilX,moveVilY); //вывод в консоль новой точки движение
    }
}

function moveVil(){  // перемещение поселенца
    if(true){
        if(moveVilX>VilX){
            if(VilX!=moveVilX){
                Vil[0].x+=1;
                saveVil();      //сохранение координат после окончания движения
            }
        }
        if(moveVilX<VilX){
            if(VilX!=moveVilX){
                Vil[0].x-=1;
                saveVil();      //сохранение координат после окончания движения
            }
        }
         if(moveVilY>VilY){
            if(VilY!=moveVilY){
                Vil[0].y+=1;
                saveVil();      //сохранение координат после окончания движения
            }
        }
        if(moveVilY<VilY){
            if(VilY!=moveVilY){
                Vil[0].y-=1;
                saveVil();      //сохранение координат после окончания движения
            }
        }
        if(VilX==moveVilX && VilY==moveVilY){
            newRand();
            saveMoveVil();  //новые координаты к которым нужно двигаться
        }
    }
}