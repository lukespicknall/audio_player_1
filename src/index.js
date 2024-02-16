import './style.css';
import WaveSurfer from 'wavesurfer.js';

const wavesurfer = WaveSurfer.create({
  container: document.body,
  waveColor: 'rgb(200, 0, 200)',
  progressColor: 'rgb(100, 0, 100)',
  url: '../src/audio/09_DadSingsKristofferson.mp3',
  WaveSurferOptions: {
    autoplay: false,
  },
});
// const wavesurfer = WaveSurfer.create({
//   container: "document.body",
//   waveColor: "violet",
//   progressColor: "purple",
// });
// wavesurfer.load("./audio/09_DadSingsKristofferson.mp3");

wavesurfer.on('click', () => {
  wavesurfer.play();
});

// document.appendChild(wavesurfer);

// const audio = document.getElementById('audio');
// const playPauseButton = document.getElementById('play-pause-button');
// const volumeControl = document.getElementById('volume-control');
// const progressBar = document.getElementById('progress-bar');
// const currentTimeDisplay = document.getElementById('current-time');
// const totalTimeDisplay = document.getElementById('total-time');

// let isPlaying = false;

// playPauseButton.addEventListener('click', () => {
//   if (isPlaying) {
//     audio.pause();
//     playPauseButton.textContent = 'Play';
//   } else {
//     audio.play();
//     playPauseButton.textContent = 'Pause';
//   }
//   isPlaying = !isPlaying;
// });

// volumeControl.addEventListener('input', () => {
//   audio.volume = volumeControl.value;
// });

// audio.addEventListener('timeupdate', () => {
//   const { currentTime } = audio;
//   const { duration } = audio;

//   const currentMinutes = Math.floor(currentTime / 60);
//   const currentSeconds = Math.floor(currentTime % 60);
//   const totalMinutes = Math.floor(duration / 60);
//   const totalSeconds = Math.floor(duration % 60);

//   currentTimeDisplay.textContent = `${currentMinutes}:${
//     currentSeconds < 10 ? '0' : ''
//   }${currentSeconds}`;
//   totalTimeDisplay.textContent = `${totalMinutes}:${
//     totalSeconds < 10 ? '0' : ''
//   }${totalSeconds}`;

//   const progress = (currentTime / duration) * 100;
//   progressBar.style.width = `${progress}%`;
// });

// console.log('hey earth');
