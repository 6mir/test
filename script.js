const musicData = {
    music1: {
       src: 'path/to/music1.mp3', // مسیر صحیح را وارد کنید
       cover: 'cover1.jpg',
       artist: 'اسم خواننده 1',
       title: 'اسم آهنگ 1',
    },
    music2: {
       src: 'path/to/music2.mp3', // مسیر صحیح را وارد کنید
       cover: 'cover2.jpg',
       artist: 'اسم خواننده 1',
       title: 'اسم آهنگ 1'
    },
    music3: {
       src: 'path/to/music3.mp3', // مسیر صحیح را وارد کنید
       cover: 'cove3.jpg',
       artist: 'اسم خواننده 1',
       title: 'اسم آهنگ 1'
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
