'use strict';

function effectHoverAndFollow(btn, hover) {
    btn.addEventListener('mouseover', btnOver);
    btn.addEventListener('mouseout', btnOut);

    function btnOver() {
        btn.addEventListener('mousemove', btnMouseMove);
        TweenLite.to(hover, 0, {scale: 0.5});
        TweenLite.to(hover, 0.75, {alpha: 1});
        TweenLite.to(hover, 0.5, {scale: 1, ease: Back.easeOut});
    }

    function btnOut() {
        btn.removeEventListener('mousemove', btnMouseMove);
        TweenLite.to(hover, 0.4, {alpha: 0, ease: Power1.easeOut});
        TweenLite.to(hover, 0.5, {scale: 0, ease: Back.easeIn});
    }

    function btnMouseMove(event) {
        // let y = event.offsetY==undefined?event.layerY:event.offsetY;
        let numToRepositionX = event.pageX - window.innerWidth/2;
        let numToRepositionY = event.pageY - window.innerHeight;

        TweenLite.to(hover, 1, {x: numToRepositionX, y: numToRepositionY, ease: Power2.easeOut});
    }
}

