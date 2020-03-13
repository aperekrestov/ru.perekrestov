'use strict';

function btnAction4(obj){
    obj.addEventListener('mouseover', interactiveActivate);
    obj.addEventListener('mouseout', interactiveDeactivate);

    function interactiveActivate(){
        TweenLite.to(obj, 1, {opacity:0.25});
    }
    function interactiveDeactivate(){
        TweenLite.to(obj, 0.25, {opacity:1});
    }
}


/*
'use strict';

function btnAction4(obj){
    let container, layer;

    container = obj;
    container.addEventListener('mouseover', interactiveActivate);
    container.addEventListener('mouseout', interactiveDeactivate);
    layer = container.querySelector('.btn-line');

    TweenLite.to(layer, 0, {css:{'transformOrigin': '0 0'}});
    TweenLite.to(layer, 0, {scaleX:0});

    function interactiveActivate(){
        TweenLite.to(layer, 0.6, {scaleX:1, ease:Power4.easeOut});
    }
    function interactiveDeactivate(){
        TweenLite.to(layer, 0.6, {scaleX:0, ease:Power4.easeOut});
    }
}

*/
