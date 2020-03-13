'use strict';

function videoPlayer2(obg) {
    let
        btnPlay = obg.querySelector('.play-pause-btn'),
        btnPlayOval = obg.querySelector('.play-pause-oval'),
        btnPlayTriangle = obg.querySelector('.play-icon'),
        mpos_left = 0,
        mpos_top = 0,
        mpos_block_left = 0,
        mpos_block_top = 0,
        numToRepositionX = 0,
        numToRepositionY = 0
    ;
    let playFlag = false;
    let video = obg.querySelector('.video-content');

    btnPlay.style.pointerEvents = "none";

    obg.addEventListener('mouseover', interactiveActivate);
    obg.addEventListener('mouseout', interactiveDeactivate);
    obg.addEventListener('click', playerClick);

    function onMouseMove(event) {
        mpos_left = event.offsetX == undefined ? event.layerX : event.offsetX;
        mpos_top = event.offsetY == undefined ? event.layerY : event.offsetY;

        mpos_block_left = mpos_left - obg.getBoundingClientRect().width;
        mpos_block_top = mpos_top - obg.getBoundingClientRect().height;

        if (mpos_left < obg.getBoundingClientRect().width / 2) {
            numToRepositionX = mpos_block_left - mpos_block_left / 2;
        } else {
            numToRepositionX = mpos_left / 2;
        }

        if (mpos_top < obg.getBoundingClientRect().height / 2) {
            numToRepositionY = mpos_block_top - mpos_block_top / 2;
        } else {
            numToRepositionY = mpos_top /2;
        }

        TweenLite.to(btnPlayOval, 0.75, {x: numToRepositionX / 6, y: numToRepositionY / 6, ease: Power1.easeOut});
        TweenLite.to(btnPlayTriangle, 0.75, {x: numToRepositionX / 10, y: numToRepositionY / 10, ease: Power1.easeOut});
    }

    function interactiveActivate() {
        obg.addEventListener('mousemove', onMouseMove);
        TweenLite.to(btnPlayOval, 0.5, {scale: 1.1, ease: Power1.easeOut});
    }

    function interactiveDeactivate() {
        obg.removeEventListener('mousemove', onMouseMove);
        TweenLite.to([btnPlayOval, btnPlayTriangle], 0.5, {scale: 1, x: 0, y: 0, ease: Power1.easeOut});
    }

    function videoEnded() {
        video.load();
        playFlag = false;
        TweenLite.to(btnPlay, 1, {scale: 1, ease: Back.easeOut});
        TweenLite.to(btnPlay, 1, {opacity: 1, ease: Back.easeOut});
    }

    function playerClick() {
        if (!playFlag) {
            video.play();
            video.addEventListener('ended', videoEnded, false);
            video.controls = false;
            playFlag = true;
            TweenLite.to(btnPlay, 0.5, {scale: 0.5, ease: Back.easeIn});
            TweenLite.to(btnPlay, 0.5, {opacity: 0, ease: Back.easeIn});
        }
    }
}
