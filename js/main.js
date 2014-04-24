setTimeout(function(){
       $("#aerosol").addClass("fade");
   }, 2000);

$("#aerosol").on("click", function () {
    var audio = $(this).attr("sound");
    playAudio(audio);
});

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