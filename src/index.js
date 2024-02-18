import './style.css';
import createPlayer from './wavesurfermodule';
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

const titles = [
  'Early life',
  'Mom, kids, carpentry',
  'Nature',
  'Religion',
  'Advice to grandkids',
  'Advice to kids',
  'Message to the family',
  'Message to Mom',
  'Dad sings Kristofferson',
];

// creates a container for the tracks and appends it to DOM
const trackContainer = document.createElement('div');
trackContainer.id = 'track-container';
document.body.appendChild(trackContainer);

// create wavesurfer players from wavesurfermodule.js with following params
createPlayer(tracks, titles, trackContainer, Play, Pause);
