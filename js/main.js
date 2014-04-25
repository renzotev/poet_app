function playAudio(url) {
    var my_media = new Media("/android_asset/www/sound/"+url,
            // success callback
             function () { console.log("playAudio():Audio Success"); },
            // error callback
             function (err) { console.log("playAudio():Audio Error: " + err); }
    );
           // Play audio
    my_media.play();
}

var do_aerosol = function () {
    $(".first").removeClass("fade");
    $("#aerosol").removeClass("fade");
    setTimeout(function(){
        $("#aerosol").css("display", "none");
        $("#pastilla").addClass("fade");
   }, 1000);

    playAudio("bells-short.mp3");
};

var do_pastilla = function () {
    $(".clean-aerosol").removeClass("fade");
    $("#pastilla").removeClass("fade");
    setTimeout(function(){
        $(".final-msj").removeClass("wipe");
        $("#pastilla").css("display", "none");
        playAudio("bells-large.mp3");
   }, 2000);

    playAudio("bells-short.mp3");
};


var init = function () {
  $(".first").addClass("fade");
  $(".clean-aerosol").addClass("fade");
  $("#aerosol").css("display", "block");
  $("#pastilla").css("display", "block");
  $("#aerosol").addClass("fade");
  $(".final-msj").addClass("wipe");
}

$(".final-msj").on("click", function () {
    init();
});

$("#aerosol").on("click", function () {
    do_aerosol();
});

$("#pastilla").on("click", function () {
    do_pastilla();
    $(this).css("display", "none");
});


setTimeout(function(){
       $("#aerosol").addClass("fade");
   }, 2000);