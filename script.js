//your JS code here. If required.
var keys = document.querySelectorAll('.key');

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('keydown', function(e) {
	  // alert('he');
    var key = e.keyCode;
    var audio = document.getElementById('sound');
    audio.src = `/main.html`;
    audio.play();
  });
}