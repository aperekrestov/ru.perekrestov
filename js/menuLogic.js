'use strict';

function menuLogic(apMenu) {
    let menuFlag = false,
        menuBrickBlock = document.querySelector('.menu-brick-block'),
        menuClose = document.querySelector('.menu-close'),
        menuBrick1 = document.querySelector('.menu-brick-1'),
        menuBrick2 = document.querySelector('.menu-brick-2'),
        menuBrick3 = document.querySelector('.menu-brick-3'),
        menuBrick4 = document.querySelector('.menu-brick-4'),
        menuBrick5 = document.querySelector('.menu-brick-5'),
        menuBrick6 = document.querySelector('.menu-brick-6'),
        menuBrick7 = document.querySelector('.menu-brick-7'),
        menuBrick8 = document.querySelector('.menu-brick-8'),
        menuBrick9 = document.querySelector('.menu-brick-9'),

        menuBgDark = document.querySelector('.menu-bg-dark'),
        menuBgLeft = document.querySelector('.menu-bg-left'),
        menuBgRight = document.querySelector('.menu-bg-right'),

        menuButtonsBlock = document.querySelector('.menu-buttons-block'),
        name = document.querySelector('.name'),
        contacts = document.querySelector('.contacts'),
        iconBlock = document.querySelector('.icon-block'),
        iconF = document.querySelector('.icon-f'),
        iconI = document.querySelector('.icon-i'),
        iconS = document.querySelector('.icon-s'),
        alexeyPerekrestovText = document.querySelector('.alexey-perekrestov-text'),
        digitalArtistText = document.querySelector('.digital-artist-text'),
        letsTalkText = document.querySelector('.lets-talk-text'),
        phoneText = document.querySelector('.phone-text'),
        emailText = document.querySelector('.email-text'),
        aboutText = document.querySelector('.about-text'),
        btnMain = document.querySelector('.btn-main'),
        menuContainer = document.querySelector('.menu-container'),
        menuBtnMain = document.querySelector('.menu-btn-main'),
        menuBtnCoding = document.querySelector('.menu-btn-coding'),
        menuBtnUxui = document.querySelector('.menu-btn-uxui'),
        menuBtnCg = document.querySelector('.menu-btn-cg');

    TweenLite.to([menuBgLeft, menuBgRight], 0, {scaleY: 0});

    function constructorMouseOver(obj) {
        TweenLite.to(obj.target, 0.25, {opacity: 0.5, ease: Power1.easeOut});
    }

    function constructorMouseOut(obj) {
        TweenLite.to(obj.target, 0.25, {opacity: 1, ease: Power1.easeOut});
    }


    btnAction4(menuBtnMain);
    btnAction4(menuBtnCoding);
    btnAction4(menuBtnUxui);
    btnAction4(menuBtnCg);

    iconF.addEventListener('mouseover', constructorMouseOver);
    iconF.addEventListener('mouseout', constructorMouseOut);
    iconI.addEventListener('mouseover', constructorMouseOver);
    iconI.addEventListener('mouseout', constructorMouseOut);
    iconS.addEventListener('mouseover', constructorMouseOver);
    iconS.addEventListener('mouseout', constructorMouseOut);


    apMenu.addEventListener('click', menuClick);
    menuBgDark.addEventListener('click', menuClick);


    function menuClick() {
        if (!menuFlag) {
            menuFlag = true;
            TweenLite.to(menuBrick1, 0.7, {
                x: 6,
                y: 6,
                ease: Back.easeIn,
                onComplete: function () {
                    TweenLite.to(menuClose, 0, {scale: 0.5});
                    TweenLite.to(menuBrickBlock, 0.1, {opacity: 0, ease: Power1.easeOut});
                    TweenLite.to(menuClose, 0.5, {opacity: 1, scale: 1, ease: Power1.easeOut});
                }
            });
            TweenLite.to(menuBrick2, 0.75, {y: 10, ease: Back.easeIn});
            TweenLite.to(menuBrick3, 0.8, {x: -6, y: 6, ease: Back.easeIn});
            TweenLite.to(menuBrick4, 0.85, {x: 10, ease: Back.easeIn});
            TweenLite.to(menuBrick6, 0.9, {x: -10, ease: Back.easeIn});
            TweenLite.to(menuBrick7, 0.95, {x: 6, y: -6, ease: Back.easeIn});
            TweenLite.to(menuBrick8, 1, {y: -10, ease: Back.easeIn});
            TweenLite.to(menuBrick9, 1.05, {x: -6, y: -6, ease: Back.easeIn});
            menuContainer.style.pointerEvents = 'auto';

            TweenLite.to(iconBlock, 0.25, {opacity: 1, ease: Power1.easeIn, delay: 1.1});
            TweenLite.to(contacts, 0.25, {opacity: 1, ease: Power1.easeIn, delay: 1.35});
            TweenLite.to(aboutText, 0.25, {opacity: 1, ease: Power1.easeIn, delay: 0.9});
            TweenLite.to(menuButtonsBlock, 0.25, {opacity: 1, ease: Power1.easeIn, delay: 1.1});
            TweenLite.to(name, 0.25, {opacity: 1, ease: Power1.easeIn, delay: 0.75});
            TweenLite.to(menuBgDark, 1.25, {opacity: 0.75, ease: Power1.easeIn});
            TweenLite.to(menuBgLeft, 2, {scaleY: 0.9, ease: Power4.easeInOut});
            TweenLite.to(menuBgRight, 2, {scaleY: 0.9, ease: Power4.easeInOut, delay: 0.2});

            //отменяем прокрутку
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function () {
                window.scrollTo(x, y);
            };
        } else {
            menuFlag = false;
            TweenLite.to(menuClose, 0.1, {opacity: 0});
            TweenLite.to(menuBrickBlock, 0.15, {opacity: 1, ease: Power1.easeOut});
            TweenLite.to(menuBrick9, 0.6, {x: 0, y: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick8, 0.65, {y: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick7, 0.7, {x: 0, y: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick6, 0.75, {x: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick4, 0.8, {x: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick3, 0.85, {x: 0, y: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick2, 0.9, {y: 0, ease: Back.easeOut});
            TweenLite.to(menuBrick1, 0.95, {x: 0, y: 0, ease: Back.easeOut});

            // document.body.style.overflow = 'scroll';
            menuContainer.style.pointerEvents = 'none';
            TweenLite.to(menuBgDark, 1.75, {opacity: 0, ease: Power4.easeIn});
            TweenLite.to(iconBlock, 0.25, {opacity: 0, ease: Power1.easeIn, delay: 0.75});
            TweenLite.to(contacts, 0.25, {opacity: 0, ease: Power1.easeIn, delay: 0.5});
            TweenLite.to(aboutText, 0.25, {opacity: 0, ease: Power1.easeIn, delay: 1.05});
            TweenLite.to(menuButtonsBlock, 0.25, {opacity: 0, ease: Power1.easeIn, delay: 0.8});
            TweenLite.to(name, 0.25, {opacity: 0, ease: Power1.easeIn, delay: 1.2});
            TweenLite.to(menuBgLeft, 2, {scaleY: 0, ease: Power4.easeInOut, delay: 0.2});
            TweenLite.to(menuBgRight, 2, {scaleY: 0, ease: Power4.easeInOut});
            TweenLite.to(menuBgRight, 1, {opacity: 1.5});
            window.onscroll = function () {
            };
        }
    }
}






