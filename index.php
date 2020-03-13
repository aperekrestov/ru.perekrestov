<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>A.P | ALEXEY PEREKRESTOV</title>

    <link rel="shortcut icon" type="image/png" href="imgs/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="css/general.css"/>
    <link rel="stylesheet" type="text/css" href="css/typography.css"/>
    <link rel="stylesheet" type="text/css" href="css/menu.css"/>
    <link rel="stylesheet" type="text/css" href="css/footer.css"/>
    <link rel="stylesheet" type="text/css" href="css/page-main.css"/>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,
    400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
</head>

<body>
    <div class="bg-pattern main"></div>

    <div class="container-page main">
        <div class="img-main-1 main"></div>
        <div class="img-main-2 main"></div>

        <div class="container-hat main">
            <div class="hat-gap-bg main"></div>
            <h1 class="info-text p2 main">Portfolio by Alexey Perekrestov</h1>
            <div class="digital main fade">
                <div class="d main"></div>
                <div class="i main"></div>
                <div class="g main"></div>
                <div class="i-2 main"></div>
                <div class="t main"></div>
                <div class="a main"></div>
                <div class="l main"></div>
            </div>
        </div>

        <div class="container-chapters main">
            <a href="graphics.php" target="_self">
                <div class="chapter-1 main"></div>
            </a>
            <a href="coding.php" target="_self">
                <div class="chapter-2 main"></div>
            </a>
            <a href="uxui.php" target="_self">
                <div class="chapter-3 main"></div>
            </a>
            <p class="chapter-1-number p2 main">0.1</p>
            <p class="chapter-2-number p2 main">0.2</p>
            <p class="chapter-3-number p2 main">0.3</p>
        </div>
        <img class="chapter1-hover chapter-hover main fade" src="imgs/cg/preview.gif" alt="Computer graphics">
        <img class="chapter2-hover chapter-hover main fade" src="imgs/coding/preview.gif" alt="Programming">
        <img class="chapter3-hover chapter-hover main fade" src="imgs/uxui/preview.gif" alt="User interface">

        <?php include "php/footer.php";?>

        <?php include "php/menu.php";?>
    </div>

<script src="js/btnAction1.js"></script>
<script src="js/btnAction4.js"></script>
<script src="js/effectHoverAndFollow.js"></script>
<script src="js/effectFadeInOut.js"></script>
<script src="js/scrollerObject.js"></script>
<script src="js/page-main.js"></script>
<script src="js/menuLogic.js"></script>
</body>

</html>
