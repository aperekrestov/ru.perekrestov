let MAX_SCALE_COLLECTION_PIC = 1.6;
let containerPage = document.querySelector('.container-page');
let containerHat = document.querySelector('.container-hat');
let menu = document.querySelector('.menu');

let containerPaul = document.querySelector('.container-rich');
let paulMockup = document.querySelector('.rich-mockup');
let paulSl = document.querySelector('.rich-sl');
let paulText = document.querySelector('.rich-text');
let containerPaulCollection = document.querySelector('.container-rich-collection');
let paulCollectionTint = document.querySelector('.rich-collection-tint');
let containerPaul2 = document.querySelector('.container-rich-2');
let paulVideoContainer = document.querySelector('.rich-video-container');

let containerJaguar = document.querySelector('.container-jaguar');
let iPace = document.querySelector('.i-pace');
let givenchy = document.querySelector('.givenchy');
let fPace = document.querySelector('.f-pace');
let containerJaguarCollection = document.querySelector('.container-jaguar-collection');
let jaguarCollectionImg = document.querySelector('.jaguar-collection-img');
let jaguarCollectionTint = document.querySelector('.jaguar-collection-tint');

let videoBec = document.querySelector('.video-bec');

let footer = document.querySelector('.footer');
let footerBtnMain = document.querySelector('.footer-btn-main');
let footerBtnCoding = document.querySelector('.footer-btn-coding');
let footerBtnUxui = document.querySelector('.footer-btn-uxui');
let footerBtnCg = document.querySelector('.footer-btn-cg');
let footerIconF = document.querySelector('.footer-icon-f');
let footerIconHh = document.querySelector('.footer-icon-hh');
let footerIconS = document.querySelector('.footer-icon-s');

function onResizeCoding() {
    let newScalePicture = ((100 * window.innerWidth) / 2880) / 100;
    let newScalePictureSmall = ((100 * window.innerWidth) / 1728) / 100;
    let newScaleVideo = ((80 * window.innerWidth) / 1920) / 100;
    let newScalePictureAndPadding = ((80 * window.innerWidth) / 2880) / 100;

    containerHat.style.height = (window.innerHeight * 85) / 100 + 'px';

    containerPaul.style.top = parseInt(containerHat.style.height) + 'px';
    containerPaul.style.height = 280 + 464 + 1800 * newScalePictureAndPadding + 'px';
    TweenMax.to(paulMockup, 0, {scale: newScalePicture});
    paulSl.style.top = 120 + 1800 * newScalePictureAndPadding + 'px';
    paulText.style.top = 120 + 73 + 1800 * newScalePictureAndPadding + 'px';
    containerPaul2.style.top = parseInt(containerPaul.style.top) + parseInt(containerPaul.style.height) + 'px';
    containerPaul2.style.height = 1080 * newScaleVideo + 180 + 220 + 'px';
    paulVideoContainer.style.width = (1920 * (newScaleVideo * 100)) / 100 + 'px';
    paulVideoContainer.style.height = (1080 * (newScaleVideo * 100)) / 100 + 'px';
    containerPaulCollection.style.top = parseInt(containerPaul2.style.top) + parseInt(containerPaul2.style.height) + 'px';
    containerPaulCollection.style.width = 1728 * newScalePictureSmall + 'px';
    containerPaulCollection.style.height = 1016 * newScalePictureSmall + 'px';

    containerJaguar.style.top = parseInt(containerPaulCollection.style.top) + parseInt(containerPaulCollection.style.height) + 'px';
    containerJaguar.style.height = 2880 * newScalePicture + 'px';
    iPace.style.width = (33 * window.innerWidth) / 100 + "px";
    iPace.style.height = (33 * window.innerWidth) / 100 + "px";
    containerJaguarCollection.style.top = parseInt(containerJaguar.style.top) + parseInt(containerJaguar.style.height) + 'px';
    containerJaguarCollection.style.height = 1800 * newScalePicture + 'px';
    containerJaguarCollection.style.width = 2880 * newScalePicture + 'px';

    footer.style.top = parseInt(containerJaguarCollection.style.top) + parseInt(containerJaguarCollection.style.height) + 'px';
    footer.style.height = window.innerHeight * 66 / 100 + "px";

    containerPage.style.height = parseInt(footer.style.top) + parseInt(footer.style.height) + 'px';
}

function scrolling() {
    let n = self.pageYOffset || (document.documentElement &&
        document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

    // проверяем BEC VIDEO COLLECTION Y
    let uniteCollectionTopPosition = n + window.innerHeight - parseInt(containerPaulCollection.style.top);
    if (uniteCollectionTopPosition > 0) {
        if (uniteCollectionTopPosition < parseInt(containerPaulCollection.style.height)) {
            let percentage = Math.round(uniteCollectionTopPosition * 100 / parseInt(containerPaulCollection.style.height));
            TweenLite.to(videoBec, 0.5, {scale: 1 + ((-1 * (percentage - 100) * (MAX_SCALE_COLLECTION_PIC - 1)) / 100)});
            paulCollectionTint.style.opacity = ((percentage - 100) * -1) / 100 + "";
        }
    }

    // проверяем JAGUAR COLLECTION Y
    let jaguarCollectionTopPosition = n + window.innerHeight - parseInt(containerJaguarCollection.style.top);
    if (jaguarCollectionTopPosition > 0) {
        if (jaguarCollectionTopPosition < parseInt(containerJaguarCollection.style.height)) {
            let percentage = Math.round(jaguarCollectionTopPosition * 100 / parseInt(containerJaguarCollection.style.height));
            TweenLite.to(jaguarCollectionImg, 0.5, {scale: 1 + ((-1 * (percentage - 100) * (MAX_SCALE_COLLECTION_PIC - 1)) / 100)});
            jaguarCollectionTint.style.opacity = ((percentage - 100) * -1) / 100 + "";
        }
    }
}

function playerOver(event) {
    videoBec.play();
    // console.log("PLAY");
}

function onLoadUxUi() {

    setTimeout(function () {
        window.scrollTo(0, 0)
    });

    window.focus();
    window.addEventListener("resize", onResizeCoding);
    window.addEventListener('scroll', scrolling);
    containerPaulCollection.addEventListener('mouseover', playerOver);
    menuLogic(menu);
    onResizeCoding();

    scrollerObject(containerHat, 0.1);

    videoPlayer(paulVideoContainer);

    videoPlayer2(iPace);
    videoPlayer2(fPace);
    videoPlayer2(givenchy);

    btnAction3(footerBtnMain);
    btnAction3(footerBtnCoding);
    btnAction3(footerBtnUxui);
    btnAction3(footerBtnCg);

    btnAction4(footerIconF);
    btnAction4(footerIconHh);
    btnAction4(footerIconS);

    TweenLite.to(videoBec, 0, {scale: MAX_SCALE_COLLECTION_PIC});
    TweenLite.to(jaguarCollectionImg, 0, {scale: MAX_SCALE_COLLECTION_PIC});
}

window.addEventListener("load", onLoadUxUi);
