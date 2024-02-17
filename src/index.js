import './style.css';
import WaveSurfer from 'wavesurfer.js';
import EarlyLife from './audio/01_EarlyLife.mp3';
import MomKidsCarpentry from './audio/02_MomKidsCarpentry.mp3';
import Nature from './audio/03_Nature.mp3';
import Religion from './audio/04_Religion.mp3';
import AdviceToGrandkids from './audio/05_AdviceToGrandkids.mp3';
import AdviceToHisKids from './audio/06_AdviceToHisKids.mp3';
import MessageToTheFamily from './audio/07_MessageToTheFamily.mp3';
import MessageToMom from './audio/08_MessageToMom.mp3';
import DadSingsKristofferson from './audio/09_DadSingsKristofferson.mp3';
import Play from './images/play.svg';
import Pause from './images/pause.svg';

// puts audio files in an array
const tracks = [
  EarlyLife,
  MomKidsCarpentry,
  Nature,
  Religion,
  AdviceToGrandkids,
  AdviceToHisKids,
  MessageToTheFamily,
  MessageToMom,
  DadSingsKristofferson,
];

// creates a container for the tracks and appends it to DOM
const trackContainer = document.createElement('div');
trackContainer.id = 'track-container';
document.body.appendChild(trackContainer);

for (let i = 0; i < tracks.length; i += 1) {
  // create a track div w/ id of track[i], add class
  const track = document.createElement('div');
  track.id = `track${[i]}`;
  track.classList.add('track');
  trackContainer.appendChild(track);

  // create wavesurfer instance, append to the above track div, options
  const wavesurfer = WaveSurfer.create({
    container: `#track${[i]}`,
    waveColor: '#8A9A5B',
    progressColor: '#4B5320',
    height: 80,
    barWidth: 0,
    barRadius: 0,
    cursorWidth: 2,
    dragToSeek: true,
  });

  // load track[i] into wavesurfer instance
  wavesurfer.load(tracks[i]);
  //   const duration = wavesurfer.getDuration(tracks[i]);
  //   const current = wavesurfer.getCurrentTime();
  //   console.log(duration);
  //   track.appendChild(duration);
  //   track.appendChild(current);

  // create play button
  const playBtn = document.createElement('button');
  const play = new Image();
  play.src = Play;
  play.style.height = '30px';
  play.style.width = '30px';

  // creat pause button
  const pause = new Image();
  pause.src = Pause;
  pause.style.height = '30px';
  pause.style.width = '30px';
  //   playBtn.style.padding = '0 0 0 -10px'

  // set play button as default display on load
  playBtn.appendChild(play);

  // some style from js
  playBtn.style.margin = '10px 0 35px 0';
  playBtn.style.border = 'none';
  playBtn.style.backgroundColor = 'white';

  // on click, it plays or pauses the wavesurfer instance
  playBtn.onclick = () => {
    wavesurfer.playPause();
  };

  // when paused, show the play img
  wavesurfer.on('pause', () => {
    playBtn.replaceChild(play, pause);
  });
  // when playing, show, the pause img
  wavesurfer.on('play', () => {
    playBtn.replaceChild(pause, play);
  });
  // append to track
  track.appendChild(playBtn);
}
