/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Design-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(document).ready(function() {
	//var JQ = jQuery.noConflict();
});

//~~Плэер~~
// var py = document.getElementById('play').style;
// var pe = document.getElementById('pause').style;
// var audio = document.getElementById('audio');

function PlayerSettings(){
   if(audio.paused || audio.ended){      
      audio.play();
	  py.display = 'block';
	  pe.display = 'none';
   }else{      
      audio.pause();
	  py.display = 'none';
	  pe.display = 'block';
   }
}

function screenDeb(j,i){
    if(debug){
    //Настройки текста
	ctx.fillStyle = "#fff";
    ctx.font = "20px Minecraft";
	//Данные Игры
	ctx.fillText("X: " + j, 25, 30);
	ctx.fillText("Y: " + i, 25, 60);

	
	}
}

function newGame(){
	pause = false;
	document.getElementById("CVS").style.display = "block";
	document.getElementById("main_menu").style.display = "none";
	camera = {x: 0, y: 0};
}

function newGameMenu(){
		if(inGame){
		document.getElementById("NewGame").style.display = "none";
		document.getElementById("Continue").style.display = "none";
		document.getElementById("Exit").style.display = "none";
		document.getElementById("BacktoGame").style.display = "block";
		document.getElementById("Exittomenu").style.display = "block";
	}else{
		document.getElementById("NewGame").style.display = "block";
		document.getElementById("Continue").style.display = "block";
		document.getElementById("Exit").style.display = "block";
		document.getElementById("BacktoGame").style.display = "none";
		document.getElementById("Exittomenu").style.display = "none";
	}
}

function GamePause(){
	if(!pause){
		pause = true;
		document.getElementById("CVS").style.display = "none";
		document.getElementById("main_menu").style.display = "block";
	}else if(pause){
		pause = false;
		document.getElementById("CVS").style.display = "block";
		document.getElementById("main_menu").style.display = "none";
	}
}

function options(){

}

function GameMenu(buttnum){
	switch(buttnum){
		case 0: //ESC
		GamePause();
		break;
		case 1: //New Game
		inGame = true;
		newGameMenu();
		newGame();
		break;
		case 2: //Back to Game
		GamePause();
		break;
		case 3: //Continue
		break;
		case 4: //Saves
		break;
		case 5: //Options
		
		if(!optios){optios = true;document.getElementById("options").style.display = 'block';}
		else if(optios){optios = false;document.getElementById("options").style.display = 'none';}
		break;
		case 6: //Save and Quit to menu
		pause = true;
		inGame = false;
		newGameMenu();
		break;
		case 7: //Exit
		break;
	}
}















