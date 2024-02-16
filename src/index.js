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
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    barWidth: 0,
    barRadius: 0,
  });

  // load track[i] into wavesurfer instance
  wavesurfer.load(tracks[i]);

  // create play button
  const play = document.createElement('button');
  play.textContent = 'Play/Plause';
  // on click, it plays or pauses the wavesurfer instance
  play.onclick = () => {
    wavesurfer.playPause();
  };
  // append to track
  track.appendChild(play);
}
