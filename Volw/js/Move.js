
// ---------------------------------------Передвижение персонажа---------------------------
    document.addEventListener("keydown", keyDownHandler, false); 
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {   //Уравление кнопками 
		//alert(e.keyCode);
		if(e.keyCode == 65) {
			aPessed = true;     //a
		}
		if(e.keyCode == 68) {
			dPessed = true;     //d
		}
        if(e.keyCode == 87) {
			wPessed = true;     //w
		}
		if(e.keyCode == 83) {
			sPessed = true;     //s
		}
		if(e.keyCode == 192){
			if(!debug){debug = true;}else if(debug){debug = false;}
		}
		if(e.keyCode == 27 && inGame){
			GameMenu(0);
		}
		if(e.keyCode == 69){
			interact = true;
		}
	}
	function keyUpHandler(e) {	 //Уравление кнопками
		if(e.keyCode == 65) {
			aPessed = false;    //a
		}
		if(e.keyCode == 68) {
			dPessed = false;    //d
		}
        if(e.keyCode == 87) {
			wPessed = false;    //w
		}
		if(e.keyCode == 83) {
			sPessed = false;    //s
		}
		if(e.keyCode == 69){
			interact = false;
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
			saveVil();
			moveVilX+=speed;
			
			Arrow[0].x+=speed;
		}else
        if(dPessed){
            // Hero.x +=speed; //d
			camera.x +=speed;
			sidemove = "right";
			moveframes()
			frposy = 64;
						
			Vil[0].x -=speed;
			saveVil();
			moveVilX-=speed;
			
			Arrow[0].x-=speed;
        }else
        if(wPessed){
            // Hero.y -=speed;  //w
			camera.y -=speed;
			sidemove = "up";
			moveframes()
			frposy = 96;
						
			Vil[0].y +=speed;
			saveVil();
			moveVilY+=speed;
			
			Arrow[0].y+=speed;
        }else
        if(sPessed){
           // Hero.y +=speed; //s
			camera.y +=speed;
			sidemove = "down";
			moveframes()
			frposy = 0;
		
			Vil[0].y -=speed;
			saveVil();
			moveVilY-=speed;

			Arrow[0].y-=speed;
        }
		
		// if(!wPessed && !sPessed && !aPessed && !dPessed){
		// 	frposy = 130;
		// 	camera.y +=0;
		// }
		//Коллизия персонажа
		coll_Char();
     	//Коллизия границ
     	coll_Cam();
    }



















