//your JS code here. If required.
var keys = document.querySelectorAll('.key');

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('keydown', function(e) {
    var key = e.keyCode;
    var audio = document.getElementById('sound');
    audio.src = `https://pixabay.com/sound-effects/search/clap/`;
    audio.play();
  });
}