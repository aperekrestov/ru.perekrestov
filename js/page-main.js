let containerPage = document.querySelector('.container-page');
let containerHat = document.querySelector('.container-hat');
let imgMain1 = document.querySelector('.img-main-1');
let imgMain2 = document.querySelector('.img-main-2');
let footer = document.querySelector('.footer');
let menu = document.querySelector('.menu');

let containerChapters = document.querySelector('.container-chapters');
let chapter1 = document.querySelector('.chapter-1');
let chapter2 = document.querySelector('.chapter-2');
let chapter3 = document.querySelector('.chapter-3');
let chapter1Num = document.querySelector('.chapter-1-number');
let chapter2Num = document.querySelector('.chapter-2-number');
let chapter3Num = document.querySelector('.chapter-3-number');

let digital = document.querySelector('.digital');
let d = document.querySelector('.d');
let i = document.querySelector('.i');
let g = document.querySelector('.g');
let i2 = document.querySelector('.i-2');
let t = document.querySelector('.t');
let a = document.querySelector('.a');
let l = document.querySelector('.l');

let footerIconF = document.querySelector('.footer-icon-f');
let footerIconHh = document.querySelector('.footer-icon-hh');
let footerIconS = document.querySelector('.footer-icon-s');

function onResize() {

    /*
         ! !!! ВАЖНЫЙ СКРИПТ ДЕЛАЕТ ФУЛСКРИН ИЗОБРАЖЕНИЯ
        if (window.innerWidth / window.innerHeight <= 1.77777778) {
            let newScale = ((window.innerHeight * 100) / videoReel.clientHeight) / 100;
            TweenLite.to(videoReel, 0, {scale: newScale});
            videoReel.style.left = "calc(50% - " + 960 * newScale + "px)";
        } else {
            TweenLite.to(videoReel, 0, {scale: ((window.innerWidth * 100) / videoReel.clientWidth) / 100});
            videoReel.style.left = 0;
        }*/

    // imgMain1.style.height = (window.innerHeight * 85) / 100 + 'px';


    TweenLite.to(imgMain2, 0, {scale: 0.7});

    containerHat.style.height = (window.innerHeight * 85) / 100 + 'px';
    TweenLite.to(digital, 0, {scale: ((window.innerWidth * 100) / digital.clientWidth) / 100});

    imgMain1.style.top = parseInt(containerHat.style.height) - 300 + 'px';
    TweenLite.to(imgMain1, 0, {scale: 0.4});

    containerChapters.style.top = parseInt(containerHat.style.height) + 'px';
    containerChapters.style.height = window.innerHeight + 'px';

    footer.style.top = parseInt(containerChapters.style.top) + parseInt(containerChapters.style.height) - 200 + 'px';
    footer.style.height = window.innerHeight * 66 / 100 + "px";

    containerPage.style.height = parseInt(footer.style.top) + parseInt(footer.style.height) + 'px';
}


function onLoad() {
    window.focus();
    window.addEventListener("resize", onResize);
    menuLogic(menu);

    scrollerObject(containerHat, 0.05);
    scrollerObject(chapter1, 0.07);
    scrollerObject(chapter1Num, 0.07);
    scrollerObject(chapter2, 0.055);
    scrollerObject(chapter2Num, 0.055);
    scrollerObject(chapter3, 0.04);
    scrollerObject(chapter3Num, 0.04);

    effectFadeInOut(d);
    effectFadeInOut(i);
    effectFadeInOut(g);
    effectFadeInOut(i2);
    effectFadeInOut(t);
    effectFadeInOut(a);
    effectFadeInOut(l);

    effectHoverAndFollow(chapter1, document.querySelector('.chapter1-hover'));
    effectHoverAndFollow(chapter2, document.querySelector('.chapter2-hover'));
    effectHoverAndFollow(chapter3, document.querySelector('.chapter3-hover'));

    btnAction4(footerIconF);
    btnAction4(footerIconHh);
    btnAction4(footerIconS);

    TweenLite.to(digital, 1, {opacity: 1});

    onResize();
}

window.addEventListener("load", onLoad);
