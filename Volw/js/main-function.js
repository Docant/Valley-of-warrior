/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Main-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function draw() {
    if (!pause) {
        //Игрвое меню
        GameMenu();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Движение персонажа
        Move();
        //Пол
        renderMap();
        //Объекты
        renderBuilds();
        //Таверна
        renderTaverna();
        //Отрисовка персонажа
        ctx.drawImage(Hero.img, 27 * nframe, frposy, Hero.wid, Hero.hei, Hero.x, Hero.y, Hero.w, Hero.h);
        //Атака
        attacka();
        //Движение NPC
        moveVil();
        //Коллизия NPC
        coll_enemies();
    }
}

setInterval(draw, 1000 / 60);




//alert("bob");
