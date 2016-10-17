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
			}	
			  if(sidemove == "up"){
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
			  //Для воды будет отталкивание в половину меньше, течение
			// if(streetObjects[i][j] == 29){
			// 	push(2);
			// }else
		  	if(streetObjects[i][j] != 0 && streetObjects[i][j] != 48){
					push(1);
		  	}
		  	if(streetObjects[i][j] == 48){
					act(true);
		  	}
		}
}
//Коллизия с таверной
function taverna_coll_Char(posX,posY,tSize, i,j){
	
	var CollX = false;
	var CollY = false;
  		if ((Hero.x + Hero.w >= posX) && (Hero.x <= posX + tSize)){CollX = true;}
  		if ((Hero.y + Hero.h >= posY) && (Hero.y <= posY + tSize)){CollY = true;}  
			 
  		if (CollX && CollY){
		  	if(taverna[i][j] != 47 && taverna[i][j] != 17){
					push(1);
		  	}
				if(taverna[i][j] == 47){
					act(false);
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
//-----------------------Коллизия моба-----------------------

function coll_NPC(){

	
}








