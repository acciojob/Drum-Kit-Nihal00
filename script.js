//your JS code here. If required.
var keys = document.querySelectorAll('.key');

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function(e) {
	  // alert('he');
    var key = e.keyCode;
    var audio = document.getElementById('sound');
    audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`;
    audio.play();
  });
}