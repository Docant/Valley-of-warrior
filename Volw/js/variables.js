/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//-----------------Загрузка канваса-----------------
var canvas = document.getElementById("CVS");
var ctx = canvas.getContext("2d");
//-----------------Высота и ширина канваса-----------------
canvas.width = $(".Game").width();
canvas.height = $(".Game").height();
 
//----Параметры канваса----
var x = canvas.width;
var y = (canvas.height);
//----Центр канваса----
var cx = x/2;
var cy = y/2;

//-----Параметры меню игры-----

var inGame = false;

var pause = true;

var debug = false;

var optios = false;

var savs = false;

//-----------Переменные перемещения героя-----------
var wPessed = false;  
var sPessed = false;
var aPessed = false;
var dPessed = false;

//----------------Оружие героя----------------
//--Курсор--
var cursorx = 0;
var cursory = 0; 
//--Атака--
var attack = false;
var weaponry = false;
var angle = 0;

var swd = document.getElementById("sword1");

//------------------Скорости------------------
//Скорость персонажа
var speed = 10;
//Скорость моба
var speedMob = 1;
//------------------Герой------------------
var heroImg = document.getElementById("Hero1");
var Hero = {x: x/2, y: y/2, w: 41, h: 48, img: heroImg, wid:27, hei:32};

var nframe = 1;
var frposy = 0;
//Сторона зрения персонажа
var sidemove = "down";
//Сторона зрения моба
var sidemoveenemy = "right";
//---------------Камера---------------------------
var camera = {x: 0, y: 0};

//-----------Здания-----------

// Тайлы
var homeMed = document.getElementById("houseMedium");

// Размер тайла
var tileSize = 64;

//2240 Размер карты
var mapsize = 64*50;
//Малый дом
var small_home =[];
//Средний дом
var medium_home =[];
//Большой дом
var big_home =[];
//Пещера
var cave =[];

//-----------------Взаимодействие с окружением-----------------
//Взаимодействие
var interact = false;

//------------------Тип локации------------------
//"В здании"
var inBuilding = false;















