
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
	}   

function moveframes(){
	nframe+=1; 
	if(nframe>=4){nframe=1}
}

//----------------------------------------------
function Move(){
        if(aPessed){
			camera.x -=speed;	//a
			Vil[0].x +=speed;

			saveVil();
			moveVilX+=speed;

			sidemove = "left";
			moveframes()
			frposy = 32;
		}else
        if(dPessed){
			camera.x +=speed;	//d
			Vil[0].x -=speed;

			saveVil();
			moveVilX-=speed;

			sidemove = "right";
			moveframes()
			frposy = 64;
        }else
        if(wPessed){
			camera.y -=speed;  //w
			Vil[0].y +=speed;

			saveVil();
			moveVilY+=speed;

			sidemove = "up";
			moveframes()
			frposy = 96;
        }else
        if(sPessed){
			camera.y +=speed;	 //s
			Vil[0].y -=speed;

			saveVil();
			moveVilY-=speed;

			sidemove = "down";
			moveframes()
			frposy = 0;
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

// function VilMove(){
//  		if(aPessed){
// 			Vil[0].x +=speed;
// 		}else
//         if(dPessed){
// 			Vil[0].x -=speed;
//         }else
//         if(wPessed){ 
// 			Vil[0].y +=speed;
//         }else
//         if(sPessed){
// 			Vil[0].y -=speed;
//         }
// }
















