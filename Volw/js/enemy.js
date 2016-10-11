
var Vil = [     //массив с поселенцами
{x: 400, y: 400, w: 40, h: 40}, 
{x: 0, y: 0}, 
];

function drawVil(){         //отрисовка поселенца
    ctx.fillRect(Vil[0].x,Vil[0].y,Vil[0].w,Vil[0].h);     
}

var max = 100;   //макс рандом
var min = -100;    //мин


var VilX = Vil[0].x;    //х поселенца для дальнейшего сохранения
var VilY = Vil[0].y;     //у поселенца для дальнейшего сохранения

var moveVilX = VilX+Math.floor(Math.random() * (max - min + 1)) + min; // координата 'X' к котрой поселенец должен двигаться
var moveVilY = VilY+Math.floor(Math.random() * (max - min + 1)) + min; // координата 'Y' к котрой поселенец должен двигаться

function newRand(){     //новый рандом для новой координаты движения
    randVilX = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты Х
    randVilY = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты У
}

function saveVil(){ //сохранение координат после окончания движения
    VilX = Vil[0].x;  //сохранение х
    VilY = Vil[0].y;  //сохранение У
}

function saveMoveVil(){  //новые координаты к которым нужно двигаться
    moveVilX = VilX+randVilX; //новая Х для движения: текущая + рандом
    moveVilY = VilY+randVilY; //новая У для движения: текущая + рандом
}

function moveVil(){  // перемещение поселенца
    if(true){
        if(moveVilX>VilX){
            Vil[0].x+=1;
            saveVil();      //сохранение координат после окончания движения
        }else
        if(moveVilX<VilX){
            Vil[0].x-=1;
            saveVil();      //сохранение координат после окончания движения
        }else
         if(moveVilY>VilY){
            Vil[0].y+=1;
            saveVil();      //сохранение координат после окончания движения
        }else
        if(moveVilY<VilY){
            Vil[0].y-=1;
            saveVil();      //сохранение координат после окончания движения
        }else{
            setInterval(newRand(),2000); 
            saveMoveVil();  //новые координаты к которым нужно двигаться
        }
    }
}
