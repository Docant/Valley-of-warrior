
// ---------------------------------------Передвижение персонажа---------------------------
    document.addEventListener("keydown", keyDownHandler, false); 
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {   //Уравление кнопками
		//alert(e.keyCode);
		switch(e.keyCode){
			case 65:
			aPessed = true;     //a
			break;
			case 68:
			dPessed = true;     //d
			break;
			case 87:
			wPessed = true;     //w
			break;
			case 83:
			sPessed = true;     //s
			break;
			case 192:
			if(!debug){debug = true;}else if(debug){debug = false;}
			break;
			case 27:
			GameMenu(0);
			break;
			case 69:
			interact = true;
			break;
		}
	}
	function keyUpHandler(e) {	 //Уравление кнопками
		switch(e.keyCode){
			case 65:
			aPessed = false;    //a
			break;
			case 68:
			dPessed = false;    //d
			break;
			case 87:
			wPessed = false;    //w
			break;
			case 83:
			sPessed = false;    //s
			break;
			case 69:
			interact = false;
			break;
		}
	}   

function moveframes(){
	nframe+=1; 
	if(nframe>=6){nframe=1}
}

//----------------------------------------------
function Move(){
        if(aPessed){
            // Hero.x -=speed; //a
			camera.x -=speed;
			sidemove = "left";
			moveframes()
			frposy = 32;

			Vil[0].x +=speed;
		}else
        if(dPessed){
            // Hero.x +=speed; //d
			camera.x +=speed;
			sidemove = "right";
			moveframes()
			frposy = 64;
						
			Vil[0].x -=speed;
        }else
        if(wPessed){
            // Hero.y -=speed;  //w
			camera.y -=speed;
			sidemove = "up";
			moveframes()
			frposy = 96;
						
			Vil[0].y +=speed;
        }else
        if(sPessed){
           // Hero.y +=speed; //s
			camera.y +=speed;
			sidemove = "down";
			moveframes()
			frposy = 0;
		
			Vil[0].y -=speed;
        }
		// if(!wPessed && !sPessed && !aPessed && !dPessed){
		// 	frposy = 130;
		// 	camera.y +=0;
		// }
		//Коллизия персонажа
		coll_Char();
    }



















