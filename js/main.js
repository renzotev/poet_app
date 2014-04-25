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
    $(".final-msj").css("display", "block");
    setTimeout(function(){
<<<<<<< HEAD
        $(".final-msj").removeClass("wipe");
=======
        $(".final-msj").addClass("fade");
>>>>>>> parent of f9ab33f... init
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
<<<<<<< HEAD
  $(".final-msj").addClass("wipe");
=======
  $(".final-msj").removeClass("fade");
>>>>>>> parent of f9ab33f... init
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