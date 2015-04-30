var bannerImages = new Array();
var bannerCounter = 0;

function run() {
    loadBannerImages();
    runBannerTimer();
}

function loadBannerImages() {
    var filePath = "img/";
    bannerImages[0] = filePath + "00.jpg";
    bannerImages[1] = filePath + "01.jpg";
    bannerImages[2] = filePath + "02.png";
}

function runBannerTimer() {
    var t=setTimeout(function(){
        swapBannerImage()
    },2000);
}

function swapBannerImage() {
    $('#banner').fadeOut('slow', function(){
        $('#banner').css('background', 'url(' + bannerImages[bannerCounter] + ') no-repeat center').fadeIn('slow');
    });

    bannerCounter++;

    if (bannerCounter >= bannerImages.length) {
        bannerCounter = 0;
    }

    runBannerTimer();
}

run();
