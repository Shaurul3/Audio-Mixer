import React, { useState } from 'react';
import Osc1 from '../components/Osc1';
import Filter from '../components/Filter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

export function Oscilator() {
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
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h1>Oscilator</h1>
              <Button variant="dark" onClick={() => osc1.start()}>Start Oscilator</Button>
              <Button variant="dark" onClick={() => osc1.stop()}>Stop Oscilator</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <div className="text-center">
              <Osc1 change={changeOsc1} settings={osc1Settings} changeType={changeOsc1Type} />
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
  )
}