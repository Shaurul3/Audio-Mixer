import React, { useState } from 'react';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';
import './App.css';

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type
  });

  const [audioFile, setAudioFile] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [mediaElementSource, setMediaElementSource] = useState(null);

  const changeOsc1 = e => {
    let { value, id } = e.target;
    setOsc1Settings({
      ...osc1Settings,
      [id]: value
    });
    osc1[id].value = value;
  };

  const changeOsc1Type = e => {
    let { id } = e.target;
    osc1.type = id;
    setOsc1Settings({
      ...osc1Settings,
      type: id
    });
  };

  const changeFilter = e => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = e => {
    let { id } = e.target;
    osc1.type = id;
    setFilterSettings({
      ...filterSettings,
      type: [id]
    });
    filter.type = id;
  };

  const handleFileUpload = event => {
    const file = event.target.files[0];
    // Handle the uploaded file here
    setAudioFile(file);
    if (mediaElementSource) {
      mediaElementSource.disconnect();
      setMediaElementSource(null);
    }
    if (file) {
      const audio = new Audio(URL.createObjectURL(file));
      const source = actx.createMediaElementSource(audio);
      source.connect(filter);
      setMediaElementSource(source);
      setAudioElement(audio);
    }
  };

  const handlePlay = () => {
    if (audioElement) {
      audioElement.play();
    }
  };

  const handlePause = () => {
    if (audioElement) {
      audioElement.pause();
    }
  };

  const handleContinue = () => {
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <div className="App">
      <div className="center">
        <h1>Sliders</h1>
        <button onClick={() => osc1.start()}>Start Oscillator</button>
        <button onClick={() => osc1.stop()}>Stop Oscillator</button>
      </div>
      <Osc1 change={changeOsc1} settings={osc1Settings} changeType={changeOsc1Type} />
      <Filter change={changeFilter} settings={filterSettings} changeType={changeFilterType} />
      <div className='control'>
      <input type="file" onChange={handleFileUpload} />
      <div className="audio-controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
    </div>
  );
}

export default App;
