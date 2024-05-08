import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Filter = ({ change, settings, changeType }) => {
    let { frequency, detune, Q, gain, type } = settings
    return (
        <div className='control'>
            <h2>Filter</h2>
            <Form.Group>
                <Form.Label><h3>Frequency: {frequency} Hz</h3></Form.Label>
                <Form.Control
                    value={frequency}
                    onChange={change}
                    max='10000'
                    type='range'
                    id='frequency'
                />
            </Form.Group>

            <Form.Group>
            <Form.Label><h3>Detune: {detune} cents</h3></Form.Label>
                <Form.Control
                    value={detune}
                    onChange={change}
                    type='range'
                    id='detune'
                />
            </Form.Group>

            <Form.Group>
            <Form.Label><h3>Q: {Q}</h3></Form.Label>
                <Form.Control
                    value={Q}
                    onChange={change}
                    max='10'
                    type='range'
                    id='Q'
                />
            </Form.Group>


            <Form.Group>
            <Form.Label><h3>Gain: {gain} dB</h3></Form.Label>
                <Form.Control
                    value={gain}
                    onChange={change}
                    max='10'
                    type='range'
                    id='gain'
                />
            </Form.Group>

                <h3>Type</h3>
                <Button id='lowpass' variant="dark" onClick={changeType} className={'${type==="lowpass" && "active"}'}>Lowpass</Button>
                <Button id='highpass' variant="dark" onClick={changeType} className={'${type==="highpass" && "active"}'}>Highpass</Button>
                <Button id='bandpass' variant="dark" onClick={changeType} className={'${type==="bandpass" && "active"}'}>Bandpass</Button>
                <Button id='allpass' variant="dark" onClick={changeType} className={'${type==="allpass" && "active"}'}>Allpass</Button>
                <br></br>
                <Button id='notch' variant="dark" onClick={changeType} className={'${type==="notch" && "active"}'}>Notch</Button>
                <Button id='peaking' variant="dark" onClick={changeType} className={'${type==="peaking" && "active"}'}>Peaking</Button>
                <Button id='lowshelf' variant="dark" onClick={changeType} className={'${type==="lowshelf" && "active"}'}>Lowshelf</Button>
                <Button id='highshelf' variant="dark" onClick={changeType} className={'${type==="highshelf" && "active"}'}>Highshelf</Button>

        </div>
    );
}

export default Filter;