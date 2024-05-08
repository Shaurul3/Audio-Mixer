import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Osc1 = ({ change, settings, changeType }) => {
    let { type, frequency, detune } = settings
    return (
        <div className='control'>
            <h2>Settings Oscilator</h2>
            <Form.Group>
            <Form.Label><h3>Frequency: {frequency} Hz</h3></Form.Label>
                <Form.Control value={frequency}
                    onChange={change}
                    max='5000'
                    type='range' id='frequency' />
            </Form.Group>

            <Form.Group>
            <Form.Label><h3>Detune: {detune} cents</h3></Form.Label>
                <Form.Control value={detune}
                    onChange={change}
                    type='range'
                    id='detune' />
            </Form.Group>

                <h3>Wave</h3>
                <Button id='sine' variant="dark" onClick={changeType} className={'${type==="sine" && "active"}'}>Sine</Button>
                <Button id='triangle' variant="dark" onClick={changeType} className={'${type==="triangle" && "active"}'}>Triangle</Button>
                <Button id='square' variant="dark" onClick={changeType} className={'${type==="square" && "active"}'}>Square</Button>
                <Button id='sawtooth' variant="dark" onClick={changeType} className={'${type==="sawtooth" && "active"}'}>Sawtooth</Button>

        </div>
    );
}

export default Osc1;
