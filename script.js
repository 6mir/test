const musicData = {
    music1: {
        src: 'music1.mp3',
        cover: 'cover1.jpg',
        artist: 'اسم خواننده 1',
        title: 'اسم آهنگ 1'
    },
    music2: {
        src: 'music2.mp3',
        cover: 'cover2.jpg',
        artist: 'اسم خواننده 2',
        title: 'اسم آهنگ 2'
    },
    music3: {
        src: 'music3.mp3',
        cover: 'cover3.jpg',
        artist: 'اسم خواننده 3',
        title: 'اسم آهنگ 3'
    }
};

function playMusic(musicKey) {
    const player = document.getElementById('player');
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');
    
    const currentMusic = musicData[musicKey];
    
    audioSource.src = currentMusic.src;
    audio.load();
    
    document.getElementById('current-cover').src = currentMusic.cover;
    document.getElementById('current-artist').innerText = currentMusic.artist;
    document.getElementById('current-title').innerText = currentMusic.title;

    player.style.display = 'block';
    
    audio.play();
    
    audio.addEventListener('timeupdate', () => {
        document.getElementById('current-time').innerText = formatTime(audio.currentTime);
        document.getElementById('duration').innerText = formatTime(audio.duration);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return ${minutes}:${secs < 10 ? '0' + secs : secs};
      }
