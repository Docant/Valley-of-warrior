/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Collisions-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function push(pforce){
	if(sidemove == "right"){
	  //Отталкиваение влево
	  camera.x -=speed/pforce;
	}if(sidemove == "left"){
		//Отталкиваение вправо
	  camera.x +=speed/pforce;
	}
	if(sidemove == "down"){
	  //Отталкивание вверх
	  camera.y -=speed/pforce;
	
	} if(sidemove == "up"){
	  //Отталкиваение вниз
	  camera.y +=speed/pforce;
	}
}

//Коллизия
function coll_Char(posX,posY,tSize, i,j){

	var CollX = false;
	var CollY = false;

  		if ((Hero.x + Hero.w >= posX) && (Hero.x <= posX + tSize)){CollX = true;}
  		if ((Hero.y + Hero.h >= posY) && (Hero.y <= posY + tSize)){CollY = true;}  
			  //alert(i,j);
  		if (CollX && CollY){
			  //Для воды будет отталкивание в половину меньше, течение)
			// if(floor[i][j] == 29){
			// 	push(2);
			// }else
		  	if(floor[i][j] != 0){
				push(1);
		  	}
		}
}

function coll_Cam(){
    //Ограничение по X
		if(camera.x > (mapsize-x/2)-100) {
		 		camera.x = (mapsize - x/2)-100;
		}else if(camera.x < 64-x/2){
			camera.x = 64-x/2;
		}
		  //Ограничение по Y
		if(camera.y > (mapsize-y/2)-110){
		 		camera.y = (mapsize - y/2)-110;
		}else if(camera.y < 64-y/2){
			camera.y = 64-y/2;
		}
}










