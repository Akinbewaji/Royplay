// script.js
document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        {
            title: 'Song One',
            artist: 'Artist One',
            src: 'path/to/song1.mp3'
        },
        {
            title: 'Song Two',
            artist: 'Artist Two',
            src: 'path/to/song2.mp3'
        },
        {
            title: 'Song Three',
            artist: 'Artist Three',
            src: 'path/to/song3.mp3'
        }
    ];

    const songList = document.getElementById('song-list');

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('audio-player');

        const songInfo = document.createElement('div');
        songInfo.textContent = `${song.title} by ${song.artist}`;

        const audio = document.createElement('audio');
        audio.src = song.src;
        audio.preload = 'metadata';

        const playPauseBtn = document.createElement('button');
        playPauseBtn.classList.add('play-pause-btn');
        playPauseBtn.textContent = 'Play';

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        const progress = document.createElement('div');
        progress.classList.add('progress');
        progressBar.appendChild(progress);

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseBtn.textContent = 'Play';
            }
        });

        audio.addEventListener('timeupdate', () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = percent + '%';
        });

        li.appendChild(playPauseBtn);
        li.appendChild(songInfo);
        li.appendChild(audio);
        li.appendChild(progressBar);
        songList.appendChild(li);
    });
});
