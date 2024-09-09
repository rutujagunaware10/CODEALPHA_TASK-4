const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

let isPlaying = false;

const songs = [
    {
        title: 'Tera_Fitoor',
        artist: 'Arijit_singh',
        src: './WhatsApp Audio 2024-09-03 at 12.07.39 AM.mpeg'
    },
    {
        title: 'Main_Rang_Sharbaton_ka',
        artist: 'Arijit_singh',
        src: './WhatsApp Audio 2024-08-30 at 10.56.13 AM (2).mpeg'
    },
    {
        title: 'Tere_Sang_Yaara',
        artist: 'Arijit_singh',
        src: './WhatsApp Audio 2024-08-29 at 7.11.00 AM.mpeg'   
    }
    

];

let currentSongIndex = 0;

function loadSong(song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

function playPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volumeControl.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Load the first song initially
loadSong(songs[currentSongIndex]);