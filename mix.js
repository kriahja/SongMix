var audioContainer = document.querySelector('.audio-container--song');
var mainBtn = document.querySelector('.main-btn');
var stopBtn = document.querySelector('.stop-btn');
var addBtn = document.querySelectorAll('.add-btn');

var test = [];



function addAudio(src) {
    var container = document.createElement('div');
    var remove = document.createElement('button');
    var audio = document.createElement('audio');
    var source = document.createElement('source');
    var songName = document.createElement('p');

    /*    function addSongName(){
        var song = document.getElementById("b1").getAttribute("name");
        document.getElementById("songName").innerHTML = song;
        return song;
        }*/

    remove.className += "button_song--remove";
    remove.innerText = 'X';
    remove.addEventListener('click', removeAudio);

    audio.setAttribute("controls", "true");

    /*
        var bt1 = document.getElementById("b1");
        var songname = bt1.getAttribute("name");*/


    songName.setAttribute("id", "songName");
    //songName.getAttribute("name");
    //songName.setAttribute("onclick", "myFunction();");
    //songName.innerHTML = addSongName;


    source.setAttribute("src", src);
    source.setAttribute("type", "audio/mpeg");

    audio.appendChild(source);
    container.appendChild(songName);
    container.appendChild(audio);
    container.appendChild(remove);
    container.superAudioStuff = audio;
    audioContainer.appendChild(container);


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

function stopPlaylist(item) {
    item.pause()
}
stopBtn.addEventListener('click', function() {
    stopPlaylist(test[0])
});



addBtn.forEach(function(btn) {

    btn.addEventListener('click', function(e) {

        addAudio(e.target.getAttribute('data-src'));


    });

});
