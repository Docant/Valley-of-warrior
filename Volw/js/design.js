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
	$("#CVS").show();
	$("#main_menu").hide();
	camera = {x: 0, y: 0};
}

function newGameMenu(){
		if(inGame){
		$("#Exit, #Continue, #NewGame").hide();
		$("#BacktoGame, #Exittomenu").show();
	}else{
		$("#NewGame, #Continue, #Exit").show();
		$("#BacktoGame, #Exittomenu").hide();
	}
}

function GamePause(){
	if(!pause){
		pause = true;
		$("#CVS").hide();
		$("#main_menu").show();
	}else if(pause){
		pause = false;
		$("#CVS").show();
		$("#main_menu").hide();
	}
}

function options(){

}
function saves(){

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
		
		if(!saves){saves = true;$("#saves").show();}
		else if(saves){saves = false;$("#saves").hide();}
		break;
		case 5: //Options
		
		if(!optios){optios = true;$("#options").show();}
		else if(optios){optios = false;$("#options").hide();}
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















