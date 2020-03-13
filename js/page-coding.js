let MAX_SCALE_COLLECTION_PIC = 1.6;
let containerPage = document.querySelector('.container-page');
let containerHat = document.querySelector('.container-hat');
let menu = document.querySelector('.menu');

let containerPaul = document.querySelector('.container-paul');
let paulMockup = document.querySelector('.paul-mockup');
let paulSl = document.querySelector('.paul-sl');
let paulText = document.querySelector('.paul-text');
let containerPaulCollection = document.querySelector('.container-paul-collection');
let paulCollectionImg = document.querySelector('.paul-collection-img');
let paulCollectionTint = document.querySelector('.paul-collection-tint');
let containerPaul2 = document.querySelector('.container-paul-2');
let paulVideoContainer = document.querySelector('.paul-video-container');

let containerJaguar = document.querySelector('.container-jaguar');
let jaguarMockup = document.querySelector('.jaguar-mockup');
let containerJaguarCollection = document.querySelector('.container-jaguar-collection');
let jaguarCollectionImg = document.querySelector('.jaguar-collection-img');
let jaguarCollectionTint = document.querySelector('.jaguar-collection-tint');
let containerJaguar2 = document.querySelector('.container-jaguar-2');
let jaguarVideoContainer = document.querySelector('.jaguar-video-container');

let containerIdomic = document.querySelector('.container-idomic');
let idomicMockup = document.querySelector('.idomic-mockup');
let idomicSl = document.querySelector('.idomic-sl');
let idomicText2 = document.querySelector('.idomic-text-2');
let containerIdomicCollection = document.querySelector('.container-idomic-collection');
let idomicCollectionImg = document.querySelector('.idomic-collection-img');
let idomicCollectionTint = document.querySelector('.idomic-collection-tint');
let containerIdomic2 = document.querySelector('.container-idomic-2');
let idomicVideoContainer = document.querySelector('.idomic-video-container');

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
    let newScaleVideo = ((80 * window.innerWidth) / 1920) / 100;
    let newScalePictureAndPadding = ((80 * window.innerWidth) / 2880) / 100;

    containerHat.style.height = (window.innerHeight * 85) / 100 + 'px';

    containerPaul.style.top = parseInt(containerHat.style.height) + 'px';
    containerPaul.style.height = 280 + 464 + 1800 * newScalePictureAndPadding + 'px';
    TweenMax.to(paulMockup, 0, {scale: newScalePictureAndPadding});
    paulSl.style.top = 120 + 1800 * newScalePictureAndPadding + 'px';
    paulText.style.top = 120 + 73 + 1800 * newScalePictureAndPadding + 'px';
    containerPaul2.style.top = parseInt(containerPaul.style.top) + parseInt(containerPaul.style.height) + 'px';
    containerPaul2.style.height = 1080 * newScaleVideo + 180 + 220 + 'px';
    paulVideoContainer.style.width = (1920 * (newScaleVideo * 100)) / 100 + 'px';
    paulVideoContainer.style.height = (1080 * (newScaleVideo * 100)) / 100 + 'px';
    containerPaulCollection.style.top = parseInt(containerPaul2.style.top) + parseInt(containerPaul2.style.height) + 'px';
    containerPaulCollection.style.height = 1800 * newScalePicture + 'px';
    containerPaulCollection.style.width = 2880 * newScalePicture + 'px';

    containerJaguar.style.top = parseInt(containerPaulCollection.style.top) + parseInt(containerPaulCollection.style.height) + 'px';
    containerJaguar.style.height = 400 + 1191 * newScalePicture + 'px';
    TweenLite.to(jaguarMockup, 0, {scale: newScalePicture});
    containerJaguar2.style.top = parseInt(containerJaguar.style.top) + parseInt(containerJaguar.style.height) + 'px';
    containerJaguar2.style.height = 1080 * newScaleVideo + 180 + 220 + 'px';
    jaguarVideoContainer.style.width = (1920 * (newScaleVideo * 100)) / 100 + 'px';
    jaguarVideoContainer.style.height = (1080 * (newScaleVideo * 100)) / 100 + 'px';
    containerJaguarCollection.style.top = parseInt(containerJaguar2.style.top) + parseInt(containerJaguar2.style.height) + 'px';
    containerJaguarCollection.style.height = 1800 * newScalePicture + 'px';
    containerJaguarCollection.style.width = 2880 * newScalePicture + 'px';

    containerIdomic.style.top = parseInt(containerJaguarCollection.style.top) + parseInt(containerJaguarCollection.style.height) + 'px';
    containerIdomic.style.height = 3000 * newScalePicture + 281 + 650 + 'px';
    TweenLite.to(idomicMockup, 0, {scale: newScalePicture});

    idomicSl.style.top = 3000 * newScalePicture + 281 + 80 + 'px';
    idomicText2.style.top = 3000 * newScalePicture + 281 + 80 + 73 + 'px';

    containerIdomic2.style.top = parseInt(containerIdomic.style.top) + parseInt(containerIdomic.style.height) + 'px';
    containerIdomic2.style.height = 1080 * newScaleVideo + 180 + 220 + 'px';
    idomicVideoContainer.style.width = (1920 * (newScaleVideo * 100)) / 100 + 'px';
    idomicVideoContainer.style.height = (1080 * (newScaleVideo * 100)) / 100 + 'px';
    containerIdomicCollection.style.top = parseInt(containerIdomic2.style.top) + parseInt(containerIdomic2.style.height) + 'px';
    containerIdomicCollection.style.height = 1800 * newScalePicture + 'px';
    containerIdomicCollection.style.width = 2880 * newScalePicture + 'px';

    footer.style.top = parseInt(containerIdomicCollection.style.top) + parseInt(containerIdomicCollection.style.height) + 'px';
    footer.style.height = window.innerHeight * 66 / 100 + "px";

    containerPage.style.height = parseInt(footer.style.top) + parseInt(footer.style.height) + 'px';
}

function scrolling() {
    let n = self.pageYOffset || (document.documentElement &&
        document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

    // проверяем PAUL COLLECTION Y
    let uniteCollectionTopPosition = n + window.innerHeight - parseInt(containerPaulCollection.style.top);
    if (uniteCollectionTopPosition > 0) {
        if (uniteCollectionTopPosition < parseInt(containerPaulCollection.style.height)) {
            let percentage = Math.round(uniteCollectionTopPosition * 100 / parseInt(containerPaulCollection.style.height));
            TweenLite.to(paulCollectionImg, 0.5, {scale: 1 + ((-1 * (percentage - 100) * (MAX_SCALE_COLLECTION_PIC - 1)) / 100)});
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

    // проверяем IDOMIC COLLECTION Y
    let idomicCollectionTopPosition = n + window.innerHeight - parseInt(containerIdomicCollection.style.top);
    if (idomicCollectionTopPosition > 0) {
        if (idomicCollectionTopPosition < parseInt(containerIdomicCollection.style.height)) {
            let percentage = Math.round(idomicCollectionTopPosition * 100 / parseInt(containerIdomicCollection.style.height));
            TweenLite.to(idomicCollectionImg, 0.5, {scale: 1 + ((-1 * (percentage - 100) * (MAX_SCALE_COLLECTION_PIC - 1)) / 100)});
            idomicCollectionTint.style.opacity = ((percentage - 100) * -1) / 100 + "";
        }
    }
}


function onLoadUxUi() {

    setTimeout(function () {
        window.scrollTo(0, 0)
    });

    window.focus();
    window.addEventListener("resize", onResizeCoding);
    window.addEventListener('scroll', scrolling);
    menuLogic(menu);
    onResizeCoding();

    scrollerObject(containerHat, 0.1);

    videoPlayer(paulVideoContainer);
    videoPlayer(jaguarVideoContainer);
    videoPlayer(idomicVideoContainer);

    btnAction3(footerBtnMain);
    btnAction3(footerBtnCoding);
    btnAction3(footerBtnUxui);
    btnAction3(footerBtnCg);

    btnAction4(footerIconF);
    btnAction4(footerIconHh);
    btnAction4(footerIconS);

    TweenLite.to(paulCollectionImg, 0, {scale: MAX_SCALE_COLLECTION_PIC});
    TweenLite.to(jaguarCollectionImg, 0, {scale: MAX_SCALE_COLLECTION_PIC});
    TweenLite.to(idomicCollectionImg, 0, {scale: MAX_SCALE_COLLECTION_PIC});
}

window.addEventListener("load", onLoadUxUi);
