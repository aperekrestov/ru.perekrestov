<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>A.P | UX/UI</title>

    <link rel="shortcut icon" type="image/png" href="imgs/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="css/general.css"/>
    <link rel="stylesheet" type="text/css" href="css/typography.css"/>
    <link rel="stylesheet" type="text/css" href="css/menu.css"/>
    <link rel="stylesheet" type="text/css" href="css/footer.css"/>
    <link rel="stylesheet" type="text/css" href="css/player.css"/>
    <link rel="stylesheet" type="text/css" href="css/page-uxui.css"/>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,
    400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
</head>

<body>
    <div class="bg-pattern main"></div>

    <div class="container-page main">

        <div class="container-odeon main">
            <div class="odeon-site main">
                <img class="main" height="100%" width="100%" src="imgs/uxui/site-odeon.jpg"
                alt="Designing of the website for club house in the heart of Moscow. Prototyping and motion UI">
            </div>
            <div class="odeon-tint tint main"></div>
        </div>
        <h2 class="odeon-sl p5 main fade">Website of a club house</h2>
        <p class="odeon-text p6 main fade">Designing of the website for club house in the heart of Moscow. Prototyping and motion UI</p>

        <div class="container-hat main">
            <div class="hat-gap-bg main"></div>
            <div class="hl main"></div>
            <h1 class="info-text p3 main">Interface designing for desctop / web. <br>Prototyping / Motion UI</h1>
        </div>

        <div class="container-unite main">
            <div class="unite-mockup main">
                <img class="main" height="100%" width="100%" src="imgs/uxui/mockup-unite.png"
                alt="Prototype of corporate mobile application, which allows to give rapidly a task for executive agency">
            </div>
            <div class="unite-hl main"></div>
            <p class="unite-text p2 main">Prototype of Corporate mobile <br>application, which allows to give <br>
            rapidly a task for executive agency</p>
        </div>

        <div class="container-unite-collection main">
            <img class="unite-collection-img main" height="100%" width="100%" src="imgs/uxui/collection-unite.jpg"
            alt="Interface designing for desctop / web. Prototyping / Motion UI">
            <div class="unite-collection-tint tint main"></div>
        </div>

        <div class="container-unite-2 main">
            <div class="unite-video-container main">
            <video width="100%" height="100%" class="video-content main">
                <source src="video/video-unite.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>
            <img class="video-poster main" src="imgs/uxui/video-poster-unite.jpg"
            alt="Prototype of Corporate mobile application, which allows to give rapidly a task for executive agency">
                <p class="video-play-text p0 main">Play</p>
                <div class="play-pause-btn main">
                    <div class="play-pause-oval main"></div>
                    <div class="play-icon main"></div>
                    <div class="pause-icon main fade"></div>
                </div>
            </div>
        </div>

        <div class="container-vsk-1 main">
            <div class="vsk-mockup main">
                <img class="main" height="100%" width="100%" src="imgs/uxui/mockup-vsk.jpg"
                alt="Designing of the website for club house in the heart of Moscow. Prototyping and motion UI">
            </div>
            <div class="vsk-hl main"></div>
            <p class="vsk-text p2 main">Follow
            <a href='https://www.figma.com/proto/v2UUCHQVzXmpjDPGTpcS5q/VSK?node-id=95%3A0&viewport=559%2C302%2C0.125&scaling=min-zoom' target='_blank'>
            the link</a>
            to check this project. It was builded on Figma</p>
        </div>



        <?php include "php/footer.php";?>

        <?php include "php/menu.php";?>

    </div>

<script src="js/btnAction3.js"></script>
<script src="js/btnAction4.js"></script>
<script src="js/scrollerObject.js"></script>
<script src="js/page-uxui.js"></script>
<script src="js/videoPlayer.js"></script>
<script src="js/menuLogic.js"></script>
</body>

</html>
