'use strict';

function videoPlayer(player) {
    let playFlag = false;
    let playIcon = player.querySelector('.play-icon');
    let pauseIcon = player.querySelector('.pause-icon');
    let playPauseBtn = player.querySelector('.play-pause-btn');
    let playText = player.querySelector('.video-play-text');
    let videoPoster = player.querySelector('.video-poster');
    let video = player.querySelector('.video-content');

    player.addEventListener('mouseover', playerOver);
    player.addEventListener('mouseout', playerOut);
    player.addEventListener('click', playerClick);
    TweenLite.to(playPauseBtn, 0, {alpha: 0});
    TweenLite.to(playPauseBtn, 0, {scale: 0.5});

    function videoEnded() {
        // video.muted = false;
        video.load();
        playFlag = false;
        TweenLite.to(pauseIcon, 0.25, {scale: 0});
        TweenLite.to(playIcon, 0.25, {opacity: 1});
        TweenLite.to(playIcon, 0.25, {scale: 1});
        TweenLite.to([playText, videoPoster], 0.25, {opacity: 1});
        TweenLite.to(playPauseBtn, 0, {alpha: 0});
        TweenLite.to(playPauseBtn, 0, {scale: 0.5});
    }

    function playerClick() {
        if (playFlag) {
            TweenLite.to([playText, videoPoster], 0.25, {opacity: 1});
            playFlag = false;
            TweenLite.to(pauseIcon, 0.25, {scale: 0});
            TweenLite.to(playIcon, 0.25, {opacity: 1});
            TweenLite.to(playIcon, 0.25, {scale: 1});
            video.pause();
        } else {
            TweenLite.to([playText, videoPoster], 0.25, {opacity: 0});
            playFlag = true;
            TweenLite.to(playIcon, 0.25, {scale: 0});
            TweenLite.to(pauseIcon, 0.25, {opacity: 1});
            TweenLite.to(pauseIcon, 0.25, {scale: 1});
            video.play();
            video.controls = false;
            video.addEventListener('ended', videoEnded, false);
        }

        TweenLite.to(playPauseBtn, 0.1, {
            scale: 0.8, onComplete: function () {
                TweenLite.to(playPauseBtn, 0.1, {scale: 1});
            }
        });
    }

    function playerOver(event) {
        player.addEventListener('mousemove', onMouseMove);
        TweenLite.to(playPauseBtn, 0.75, {alpha: 1});
        TweenLite.to(playPauseBtn, 0.5, {scale: 1, ease: Back.easeOut});
        let mpos_left = event.offsetX === undefined ? event.layerX : event.offsetX;
        let mpos_top = event.offsetY === undefined ? event.layerY : event.offsetY;
        let numToRepositionX = mpos_left - player.offsetWidth / 2;
        let numToRepositionY = mpos_top - player.offsetHeight / 2 - 24;
        TweenLite.to(playPauseBtn, 1, {x: numToRepositionX, y: numToRepositionY, ease: Power2.easeOut});
    }

    function playerOut() {
        player.removeEventListener('mousemove', onMouseMove);
        TweenLite.to(playPauseBtn, 0.75, {alpha: 0});
        TweenLite.to(playPauseBtn, 0.5, {scale: 0.5, ease: Back.easeIn});
    }

    function onMouseMove(event) {
        let mpos_left = event.offsetX === undefined ? event.layerX : event.offsetX;
        let mpos_top = event.offsetY === undefined ? event.layerY : event.offsetY;
        let numToRepositionX = mpos_left - player.offsetWidth / 2;
        let numToRepositionY = mpos_top - player.offsetHeight / 2 - 24;
        TweenLite.to(playPauseBtn, 1, {x: numToRepositionX, y: numToRepositionY, ease: Power2.easeOut});
    }
}