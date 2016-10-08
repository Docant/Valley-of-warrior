/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Main-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function draw(){
    if(!pause){
     //Игрвое меню
     GameMenu();
	 ctx.clearRect(0, 0, canvas.width, canvas.height);
     //Движение персонажа
     Move();
     //Пол
     renderMap();
     //Объекты
     renderBuilds();
	 //Отрисовка персонажа
     ctx.drawImage(Hero.img, 27*nframe, frposy, Hero.wid, Hero.hei, Hero.x,Hero.y,Hero.w,Hero.h);
     //Меч
     sword(sx,sy,50,10,angle);
    } 
}

setInterval(draw, 1000/60);




//alert("bob");
