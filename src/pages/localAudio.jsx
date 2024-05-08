import React, { useState } from 'react';
import Filter from '../components/Filter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

export function LocalAudio() {
  const [audioFile, setAudioFile] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [mediaElementSource, setMediaElementSource] = useState(null);
  const [volume, setVolume] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type
  });

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
      audio.playbackRate = playbackSpeed;
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

  const handleVolumeChange = e => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audioElement) {
      audioElement.volume = value;
    }
  };

  const handleSpeedUp = () => {
    const newSpeed = playbackSpeed + 0.1;
    setPlaybackSpeed(newSpeed);
    if (audioElement) {
      audioElement.playbackRate = newSpeed;
    }
  };

  const handleSpeedDown = () => {
    const newSpeed = Math.max(playbackSpeed - 0.1, 0.1);
    setPlaybackSpeed(newSpeed);
    if (audioElement) {
      audioElement.playbackRate = newSpeed;
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h1>Local Audio</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <input type="file" accept="audio/*" onChange={handleFileUpload}/>
              <div className="audio-controls">
                <Button variant="dark" onClick={handlePlay}>Play</Button>
                <Button variant="dark" onClick={handlePause}>Pause</Button>
                <Button variant="dark" onClick={handleContinue}>Continue</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <Form.Group controlId="volumeSlider">
                <Form.Label>Volume</Form.Label>
                <Form.Control
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <h3>Current Volume: {(volume * 100).toFixed(0)}%</h3>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <Button variant="dark" onClick={handleSpeedUp}>Speed Up</Button>
              <Button variant="dark" onClick={handleSpeedDown}>Speed Down</Button>
              <h3>Current Playback Speed: {playbackSpeed.toFixed(2)}</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
          <div className="text-center">
            <Filter change={changeFilter} settings={filterSettings} changeType={changeFilterType} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
