let MAX_SCALE_COLLECTION_PIC = 1.6;
let containerPage = document.querySelector('.container-page');
let containerHat = document.querySelector('.container-hat');
let menu = document.querySelector('.menu');

let containerUnite = document.querySelector('.container-unite');
let uniteMockup = document.querySelector('.unite-mockup');
let containerUnite2 = document.querySelector('.container-unite-2');
let uniteVideoContainer = document.querySelector('.unite-video-container');
let containerUniteCollection = document.querySelector('.container-unite-collection');
let uniteCollectionImg = document.querySelector('.unite-collection-img');
let uniteCollectionTint = document.querySelector('.unite-collection-tint');

let containerOdeon = document.querySelector('.container-odeon');
let odeonSite = document.querySelector('.odeon-site');
let odeonSl = document.querySelector('.odeon-sl');
let odeonText = document.querySelector('.odeon-text');
let odeonTint = document.querySelector('.odeon-tint');

let containerVsk1 = document.querySelector('.container-vsk-1');
let vskMockup = document.querySelector('.vsk-mockup');

let footer = document.querySelector('.footer');
let footerBtnMain = document.querySelector('.footer-btn-main');
let footerBtnCoding = document.querySelector('.footer-btn-coding');
let footerBtnUxui = document.querySelector('.footer-btn-uxui');
let footerBtnCg = document.querySelector('.footer-btn-cg');
let footerIconF = document.querySelector('.footer-icon-f');
let footerIconHh = document.querySelector('.footer-icon-hh');
let footerIconS = document.querySelector('.footer-icon-s');

let odeonTintStartIntToFade = 0;

function onResizeUxUi() {
    let newScalePicture = ((100 * window.innerWidth) / 2880) / 100;
    let newScaleVideo = ((80 * window.innerWidth) / 1920) / 100;
    let newScaleSite = ((50 * window.innerWidth) / 1440) / 100;

    containerHat.style.height = (window.innerHeight * 85) / 100 + 'px';

    containerUnite.style.top = parseInt(containerHat.style.height) + 'px';
    containerUnite.style.height = 1191 * newScalePicture + 180 + 'px';
    TweenLite.to(uniteMockup, 0, {scale: newScalePicture});

    containerUnite2.style.top = parseInt(containerUnite.style.top) + parseInt(containerUnite.style.height) + 'px';
    containerUnite2.style.height = 1080 * newScaleVideo + 180 + 220 + 'px';
    uniteVideoContainer.style.width = (1920 * (newScaleVideo * 100)) / 100 + 'px';
    uniteVideoContainer.style.height = (1080 * (newScaleVideo * 100)) / 100 + 'px';

    containerUniteCollection.style.top = parseInt(containerUnite2.style.top) + parseInt(containerUnite2.style.height) + 'px';
    containerUniteCollection.style.height = 1800 * newScalePicture + 'px';
    containerUniteCollection.style.width = 2880 * newScalePicture + 'px';

    containerOdeon.style.height = 220 + 7127 * newScaleSite + 220 + 'px';
    TweenMax.to(odeonSite, 0, {scale: newScaleSite});

    containerVsk1.style.top = parseInt(containerUniteCollection.style.top) + parseInt(containerUniteCollection.style.height)
        + parseInt(containerOdeon.style.height) + 'px';
    containerVsk1.style.height = 3000*newScalePicture + 136 + 51 + 'px';
    TweenMax.to(vskMockup, 0, {scale:newScalePicture});

    footer.style.top = parseInt(containerVsk1.style.top) + parseInt(containerVsk1.style.height) + 'px';
    footer.style.height =  window.innerHeight * 66 /100 + "px";

    containerPage.style.height = parseInt(footer.style.top) + parseInt(footer.style.height) + 'px';
}

function scrolling() {
   // проверяем UNITE COLLECTION Y
    let n = self.pageYOffset || (document.documentElement &&
        document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

    let uniteCollectionTopPosition = n + window.innerHeight - parseInt(containerUniteCollection.style.top);

    if (uniteCollectionTopPosition > 0) {
        if (uniteCollectionTopPosition < parseInt(containerUniteCollection.style.height)) {
            let percentage = Math.round(uniteCollectionTopPosition * 100 / parseInt(containerUniteCollection.style.height));
            TweenLite.to(uniteCollectionImg, 0.5, {scale: 1 + ((-1 * (percentage - 100) * (MAX_SCALE_COLLECTION_PIC - 1)) / 100)});
            uniteCollectionTint.style.opacity = ((percentage - 100) * -1) / 100 + "";
        }
    }

    // проверяем ODEON Y
    containerOdeon.style.display = window.scrollY > parseInt(containerUnite2.style.top) ? "block" : "none";

    odeonTintStartIntToFade = parseInt(containerUniteCollection.style.height) +
        parseInt(containerUniteCollection.style.top) - window.innerHeight;

    if (window.scrollY > odeonTintStartIntToFade && window.scrollY < odeonTintStartIntToFade + window.innerHeight) {
        let percentage = 1 - ( Math.floor((window.scrollY - odeonTintStartIntToFade) * 100 / window.innerHeight) / 100 );
        odeonTint.style.opacity = percentage + "";
    }

    if (window.scrollY > parseInt(containerUniteCollection.style.top) + parseInt(containerUniteCollection.style.height)) {
        containerOdeon.style.position = "absolute";

        containerOdeon.style.top = parseInt(containerUniteCollection.style.top) +
            parseInt(containerUniteCollection.style.height) + 'px';

        if (window.scrollY > parseInt(containerUniteCollection.style.top) + parseInt(containerUniteCollection.style.height) + 320) {
            TweenMax.to([odeonSl, odeonText], 1, {opacity: 1});
        } else {
            TweenMax.to([odeonSl, odeonText], 0.25, {opacity: 0});
        }

        if (window.scrollY > parseInt(containerUniteCollection.style.top) + parseInt(containerUniteCollection.style.height) +
            parseInt(containerOdeon.style.height) / 2) {
            TweenMax.to([odeonSl, odeonText], 0.25, {opacity: 0});
        }

    } else {
        containerOdeon.style.position = "fixed";
        containerOdeon.style.top = 0 + "px";
    }
}


function onLoadUxUi() {

    setTimeout(function () {
        window.scrollTo(0, 0)
    });

    window.focus();
    window.addEventListener("resize", onResizeUxUi);
    window.addEventListener('scroll', scrolling);
    menuLogic(menu);
    scrollerObject(containerHat, 0.1);
    videoPlayer(uniteVideoContainer);
    onResizeUxUi();

    btnAction3(footerBtnMain);
    btnAction3(footerBtnCoding);
    btnAction3(footerBtnUxui);
    btnAction3(footerBtnCg);

    btnAction4(footerIconF);
    btnAction4(footerIconHh);
    btnAction4(footerIconS);

    TweenLite.to(uniteCollectionImg, 0, {scale: MAX_SCALE_COLLECTION_PIC});
}

window.addEventListener("load", onLoadUxUi);
