'use strict';

function btnAction1(obj){
    let container, layer1, layer2;

    container = obj;
    container.addEventListener('mouseover', interactiveActivate);
    container.addEventListener('mouseout', interactiveDeactivate);

    layer1 = container.querySelector('.layer1');
    layer2 = container.querySelector('.layer2');

    function onMouseMove(e){ 
        let x = e.offsetX==undefined?e.layerX:e.offsetX;
        let y = e.offsetY==undefined?e.layerY:e.offsetY;
        let numToRepositionX = x - container.offsetWidth/2;
        let numToRepositionY = y - container.offsetHeight/2;
        // console.log(numToRepositionX);

        TweenLite.to(layer1, 0.75, {x:numToRepositionX/10, y:numToRepositionY/2, ease: Power1.easeOut}); 
        TweenLite.to(layer2, 0.75, {x:numToRepositionX/20, y:numToRepositionY/10, ease: Power1.easeOut}); 
    }
    function interactiveActivate(){
        container.addEventListener('mousemove', onMouseMove);
        TweenLite.to(layer2, 0.5, {scale:1.2, ease:Power1.easeOut});
    }
    function interactiveDeactivate(){
        container.removeEventListener('mousemove', onMouseMove);
        TweenLite.to([layer1, layer2], 0.5, {scale:1, x:0, y:0, ease:Power1.easeOut});
    }
}

