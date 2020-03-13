'use strict';

function scrollerObject(obj, float) {

    let html = document.documentElement;
    let body = document.body;
    let requestId = null;

    let scroller = {
        // target: document.querySelector(".digital"),
        target: obj,
        ease: float, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    function updateScroller() {
        let resized = scroller.resizeRequest > 0;
        if (resized) {
            let height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }

        let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;
        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });
        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    updateScroller();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
}
