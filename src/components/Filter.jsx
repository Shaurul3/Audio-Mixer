import React from 'react';

const Filter = ({ change, settings, changeType }) => {
    let {frequency, detune, Q, gain, type } = settings
    return (
        <div className='control'>
            <h2>Filter</h2>
            <div className='param'>
                <h3>Frequency</h3>
                <input
                value = {frequency}
                    onChange={change}
                    max='10000'
                    type='range' 
                    id='frequency' />
            </div>

            <div className='param'>
                <h3>Detune</h3>
                <input
                value = {detune}
                    onChange={change}
                    type='range' 
                    id='detune' />
            </div>

            <div className='param'>
                <h3>Q</h3>
                <input
                value = {Q}
                    onChange={change}
                    max='10'
                    type='range' 
                    id='Q' />
            </div>

            <div className='param'>
                <h3>gain</h3>
                <input
                value = {gain}
                    onChange={change}
                    max='10'
                    type='range' 
                    id='gain' />
            </div>

            <div className='param'>
                <h3>type</h3>
                <button id='lowpass' onClick={changeType} className={'${type==="lowpass" && "active"}'}>lowpass</button>
                <button id='highpass' onClick={changeType} className={'${type==="highpass" && "active"}'}>highpass</button>
                <button id='bandpass' onClick={changeType} className={'${type==="bandpass" && "active"}'}>bandpass</button>
                <button id='allpass' onClick={changeType} className={'${type==="allpass" && "active"}'}>allpass</button>
                <br></br>
                <button id='notch' onClick={changeType} className={'${type==="notch" && "active"}'}>notch</button>
                <button id='peaking' onClick={changeType} className={'${type==="peaking" && "active"}'}>peaking</button>
                <button id='lowshelf' onClick={changeType} className={'${type==="lowshelf" && "active"}'}>lowshelf</button>
                <button id='highshelf' onClick={changeType} className={'${type==="highshelf" && "active"}'}>highshelf</button>
            </div>

        </div>
    );
}

export default Filter;
