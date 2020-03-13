'use strict';

function btnAction3(obj){
    let container, layer1, layer2;

    container = obj;
    container.addEventListener('mouseover', interactiveActivate);
    container.addEventListener('mouseout', interactiveDeactivate);
    // layer1 = container.querySelector('.layer1');
    layer2 = container.querySelector('.layer2');
    TweenLite.to(layer2, 0, {scaleX:0});

    function interactiveActivate(){
        // TweenLite.to(layer1, 1, {scale:1.1, ease:Power4.easeOut});
        TweenLite.to(layer2, 0.6, {scaleX:1, ease:Power4.easeOut});
    }
    function interactiveDeactivate(){
        // TweenLite.to(layer1, 1, {scale:1, ease:Power4.easeOut});
        TweenLite.to(layer2, 0.6, {scaleX:0, ease:Power4.easeOut});
    }
}

