/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Locations-JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var lastPosX = 0;
    var lastPosY = 0;

function act(inBuilding){
    if(interact && inBuilding){
         lastPosX = camera.x+100;
         lastPosY = camera.y;
         camera.x = -2135;
         camera.y = -940;
    }
    if(interact && !inBuilding){
        // alert(lastPosX + " " + lastPosY);
        camera.x = lastPosX;
        camera.y = lastPosY;

    }
}


























