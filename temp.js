var audioContainer = document.querySelector('.audio-container--song');
var mainBtn = document.querySelector('.main-btn');
var stopBtn = document.querySelector('.stop-btn');
var addBtn = document.querySelectorAll('.add-btn');

var test = [];



function addAudio(src) {
   
var remove = document.getElementById('button_song--remove');
var container = document.getElementById('controlsContainer');
var audio = document.getElementById('audio');
var source = document.getElementById('source');

remove.addEventListener('click', removeAudio);
container.superAudioStuff = audio;
    
     

    // remove.className += "button_song--remove";


    
     source.setAttribute("src", src);
    
/*    audio.setAttribute("controls", "true");

    
    source.setAttribute("type", "audio/mpeg");*/

/*    audio.appendChild(source);
    container.appendChild(audio);*/
    // container.appendChild(remove);
    
    // audioContainer.appendChild(container);

    audio.load();
    test.push(audio);

    audio.addEventListener('ended', function(e) {
        var index = test.indexOf(audio);
        if (test.length - 1 > index) {
            playlist(test[++index]);
        }
    })
}


function removeAudio(e) {
    var container = e.target.parentElement;
    var audio = container.superAudioStuff;

    container.parentElement.removeChild(container);
    test.splice(test.indexOf(audio), 1)
}

for (var i = 0; i < 4; i++) {
    addAudio('Songs/Drum.mp3');
}


function playlist(item) {
    item.play()

}
mainBtn.addEventListener('click', function() {
    
    playlist(test[0])
});
function stopPlaylist(item){
    item.pause()
}
stopBtn.addEventListener('click', function() {
    stopPlaylist(test[0])
});



addBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        addAudio(e.target.getAttribute('data-src'));
    })
});
