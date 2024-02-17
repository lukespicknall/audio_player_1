import WaveSurfer from 'wavesurfer.js';

const createPlayer = (
  audioArray,
  trackTitles,
  targetParent,
  playImg,
  pauseImg,
) => {
  for (let i = 0; i < audioArray.length; i += 1) {
    // create a track div w/ id of track[i], add class
    const track = document.createElement('div');
    track.id = `track${[i]}`;
    track.classList.add('track');
    targetParent.appendChild(track);

    // create track title in DOM, assign it from trackTitles[i]
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = trackTitles[i];
    trackTitle.style.fontSize = '20px';
    track.appendChild(trackTitle);

    // create wavesurfer instance, append to the above track div, options
    const wavesurfer = WaveSurfer.create({
      container: `#track${[i]}`,
      waveColor: '#c3c4c3',
      progressColor: '#8A9A5B',
      height: 80,
      barWidth: 0,
      barRadius: 0,
      cursorWidth: 0,
      dragToSeek: true,
    });

    // load wavesurfer with audio file
    wavesurfer.load(audioArray[i]);

    // optionsDisplay container for play/pause and timeDisplay
    const optionsDisplay = document.createElement('div');
    optionsDisplay.classList.add('options-display');
    optionsDisplay.style.display = 'flex';
    optionsDisplay.style.gap = '20px';
    optionsDisplay.style.margin = '0 0 35px 0';
    optionsDisplay.style.alignItems = 'center';
    track.appendChild(optionsDisplay);

    // create play/pause button
    const playBtn = document.createElement('button');
    playBtn.style.display = 'flex';
    playBtn.style.alignItems = 'center';
    playBtn.style.borderRadius = '25px';

    playBtn.addEventListener('mouseenter', () => {
      playBtn.style.backgroundColor = '#c4c3c4';
    });

    playBtn.addEventListener('mouseleave', () => {
      playBtn.style.backgroundColor = 'white';
    });

    const play = new Image();
    play.src = playImg;
    play.style.height = '30px';
    play.style.width = '30px';

    // create pause img
    const pause = new Image();
    pause.src = pauseImg;
    pause.style.height = '30px';
    pause.style.width = '30px';
    //   playBtn.style.padding = '0 0 0 -10px'

    // set play button as default display on load
    playBtn.appendChild(play);

    // some style from js
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
    optionsDisplay.appendChild(playBtn);

    // div for timeDisplay, currentTime and durationTime and class assignment
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time-display');
    timeDisplay.style.display = 'flex';
    timeDisplay.style.gap = '5px';

    const currentDisplay = document.createElement('div');
    currentDisplay.classList.add('current-display');

    const durationDisplay = document.createElement('div');
    durationDisplay.classList.add('durationDisplay');

    // divider to sperate displays and its text
    const divider = document.createElement('div');
    divider.textContent = '/';

    // takes time in miliseconds and formats to a 60base min:sic display
    const formatTime = (time) => [
      Math.floor((time % 3600) / 60), // minutes
      `00${Math.floor(time % 60)}`.slice(-2), // seconds
    ].join(':');

    // set initial current tim to 00:00
    currentDisplay.textContent = '0:00';
    // whenever track tim updates, update current time display
    wavesurfer.on('timeupdate', () => {
      currentDisplay.textContent = formatTime(wavesurfer.getCurrentTime());
    });

    // set intial duration time to 00:00 until ready
    durationDisplay.textContent = '0:00';
    // when track is decoded and ready to play, display duration
    wavesurfer.on('ready', () => {
      durationDisplay.textContent = formatTime(wavesurfer.getDuration());
    });

    // append to timeDisplay
    timeDisplay.appendChild(currentDisplay);
    timeDisplay.appendChild(divider);
    timeDisplay.appendChild(durationDisplay);

    // append option to track
    optionsDisplay.appendChild(timeDisplay);
  }
};

export default createPlayer;
