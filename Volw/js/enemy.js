
var Vil = [     //массив с поселенцами
{x: 400, y: 400, w: 40, h: 40,VilX: 0, VilY: 0, moveVilX: 0, moveVilY: 0, randVilX: 0, randVilY: 0}, 
{x: 450, y: 400, w: 40, h: 40,VilX: 0, VilY: 0, moveVilX: 0, moveVilY: 0, randVilX: 0, randVilY: 0}, 
{x: 500, y: 400, w: 40, h: 40,VilX: 0, VilY: 0, moveVilX: 0, moveVilY: 0, randVilX: 0, randVilY: 0} 
];

function drawVil(){         //отрисовка поселенца
    for(var i=0;i<Vil.length;i++){
        ctx.fillRect(Vil[i].x,Vil[i].y,Vil[i].w,Vil[i].h);   
    } 
}

var max = 100;     //макс рандом
var min = -100;    //мин рандом

for(var i=0;i<Vil.length;i++){
    Vil[i].VilX = Vil[i].x;    //х поселенца для дальнейшего сохранения
    Vil[i].VilY = Vil[i].y;     //у поселенца для дальнейшего сохранения
}
for(var i=0;i<Vil.length;i++){
    Vil[i].moveVilX = Vil[i].VilX+Math.floor(Math.random() * (max - min + 1)) + min; // координата 'X' к котрой поселенец должен двигаться
    Vil[i].moveVilY = Vil[i].VilY+Math.floor(Math.random() * (max - min + 1)) + min; // координата 'Y' к котрой поселенец должен двигаться
}

function newRand(){     //новый рандом для новой координаты движения
    for(var i=0;i<Vil.length;i++){
        Vil[i].randVilX = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты Х
        Vil[i].randVilY = Math.floor(Math.random() * (max - min + 1)) + min; //рандом кординаты У
    }
}

function saveVil(){ //сохранение координат после окончания движения
    for(var i=0;i<Vil.length;i++){
        Vil[i].VilX = Vil[i].x;  //сохранение х
        Vil[i].VilY = Vil[i].y;  //сохранение У
    }
}

function saveMoveVil(){  //новые координаты к которым нужно двигаться
    for(var i=0;i<Vil.length;i++){
     Vil[i].moveVilX = Vil[i].VilX+Vil[i].randVilX; //новая Х для движения: текущая + рандом
        Vil[i].moveVilY = Vil[i].VilY+Vil[i].randVilY; //новая У для движения: текущая + рандом
    }
}

function moveVil(){  // перемещение поселенца
    for(var i=0;i<Vil.length;i++){
        if(true){
            if(Vil[i].moveVilX > Vil[i].VilX){
                for(var i=0;i<Vil.length;i++){
                        Vil[i].x+=1;
                        saveVil();      //сохранение координат после окончания движения
                }
            }else
            if(Vil[i].moveVilX<Vil[i].VilX){
            for(var i=0;i<Vil.length;i++){
                        Vil[i].x-=1;
                        saveVil();      //сохранение координат после окончания движения
                }
            }else
            if(Vil[i].moveVilY>Vil[i].VilY){
                for(var i=0;i<Vil.length;i++){
                        Vil[i].y+=1;
                        saveVil();      //сохранение координат после окончания движения
                }
            }else
            if(Vil[i].moveVilY<Vil[i].VilY){
            for(var i=0;i<Vil.length;i++){
                        Vil[i].y-=1;
                        saveVil();      //сохранение координат после окончания движения
                }
            }else{
                setInterval(newRand(),2000); 
                saveMoveVil();  //новые координаты к которым нужно двигаться
            }
        }
    }
}
