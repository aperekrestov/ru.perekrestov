'use strict';

function setListeners(obj){
    let container;
    let numToRepositionX;

    container = obj;
    container.addEventListener('mouseover', interactiveActivate);
    container.addEventListener('mouseout', interactiveDeactivate);

    function onMouseMove(e){ 
        let x = e.offsetX==undefined?e.layerX:e.offsetX;
        // let y = e.offsetY==undefined?e.layerY:e.offsetY;

        if(x<window.innerWidth/2){
            numToRepositionX = x - window.innerWidth/2;
        }

    }
    function interactiveActivate(){
        container.addEventListener('mousemove', onMouseMove);
    }
    function interactiveDeactivate(){
        container.removeEventListener('mousemove', onMouseMove);
    }
}

