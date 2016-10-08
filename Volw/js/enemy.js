var max = 10;
var min = 1;


var randVilX = Math.floor(Math.random() * (max - min + 1)) + min;
var randVilY = Math.floor(Math.random() * (max - min + 1)) + min;


// function getRandomArbitary(min, max)
// {
//   return Math.random() * (max - min) + min;
// }


var Vil = [ 
{x: 200, y: 200, w: 40, h: 40}, 
{x: 0, y: 0}, 
];

function drawVil(){
    ctx.fillRect(Vil[0].x,Vil[0].y,Vil[0].w,Vil[0].h);
}

var VilX = Vil[0].x;
var VilY = Vil[0].y;

function moveVil(){
        if(Vil[0].x != VilX+randVilX){
            Vil[0].x++;
        }else

        if(Vil[0].y != VilY+randVilY){
            Vil[0].y++;
        }
}
