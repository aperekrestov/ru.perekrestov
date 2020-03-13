'use strict';

function effectFadeInOut(obj){

    obj.addEventListener('mouseover', interactiveActivate);
    obj.addEventListener('mouseout', interactiveDeactivate);

    function interactiveActivate(){
        TweenLite.to(obj, 0.5, {opacity:0.35, ease:Power1.easeOut});
    }
    function interactiveDeactivate(){
        TweenLite.to(obj, 0.6, {opacity:1, ease:Power1.easeOut});
    }
}

