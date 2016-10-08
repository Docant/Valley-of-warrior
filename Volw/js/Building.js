/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Building-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

for(i=0;i<25;i++){
	small_home[i]={w: 200, h: 150, img: 'blue'}
	medium_home[i]={w: 250, h: 376, img: homeMed}
	big_home[i]={w: 500, h: 200, img: 'yellow'}
	cave[i]={w: 350, h: 250, img: 'red'}
}

function smHome(px,py,sn){
	ctx.fillStyle = small_home[sn].img;
    ctx.fillRect(px-camera.x,py-camera.y,small_home[sn].w,small_home[sn].h);
	coll_Char(px,py,sn)
}
function mdHome(px,py,mn){
    ctx.drawImage(medium_home[mn].img, px-camera.x,py-camera.y,medium_home[mn].w,medium_home[mn].h);
}
function bgHome(px,py,bn){
	ctx.fillStyle = big_home[bn].img;
    ctx.fillRect(px-camera.x,py-camera.y,big_home[bn].w,big_home[bn].h);
}

// Подставление тайла в зависимости от числа в переменной «map»
// Настройка карты
var tiles = {
    0: [0,0],
    1: [64, 0],
    2: [128, 0],
    3: [192, 0],
    4: [256, 0],
    5: [320, 0],
    6: [384, 0],
    7: [448, 0],
    8: [512, 0],
    9: [576, 0],
    10: [0, 64],
    11: [64, 64],
    12: [128, 64],
    13: [192, 64],
    14: [256, 64],
    15: [320, 64],
    16: [384, 64],
    17: [448, 64],
    18: [512, 64],
    19: [576, 64],
    20: [0, 128],
    21: [64, 128],
    22: [128, 128],
    23: [192, 128],
    24: [256, 128],
    25: [320, 128],
    26: [384, 128],
    27: [448, 128],
    28: [512, 128],
    29: [576, 128],
    30: [0, 192],
    31: [64, 192],
    32: [128, 192],
    33: [192, 192],
    34: [256, 192],
    35: [320, 192],
    36: [384, 192],
    37: [448, 192],
    38: [512, 192],
    39: [576, 192],
};

// Отрисовка карты в цикле по тайлмапе
function renderMap(){
    for (var i=0,l=ground.length; i<l; i++) {
        var posY = (64 * i)-camera.y;
        for (var j=0,jl=ground[i].length; j<jl; j++) {
            var posX = (64 * j)-camera.x;
            ctx.drawImage(tilesBCG, tiles[ground[i][j]][0], tiles[ground[i][j]][1], tileSize, tileSize, posX, posY, tileSize, tileSize);
        }
    }
}
function renderBuilds(){
    for (var i=1,l=floor.length; i<l; i++) {
        var posY = (64 * i)-camera.y;
        for (var j=1,jl=floor[i].length; j<jl; j++) {
            var posX = (64 * j)-camera.x;
            ctx.drawImage(tilesBCG, tiles[floor[i][j]][0], tiles[floor[i][j]][1], tileSize, tileSize, posX, posY, tileSize, tileSize);
            coll_Char(posX,posY,tileSize,i,j);
        }
    }
}
















