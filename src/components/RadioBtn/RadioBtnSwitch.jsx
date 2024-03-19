import { useState } from 'react';
import './RadioBtnSwitch.css';

export default function RadioBtnSwitch({rbSwitch, setFnc, labelFalse, labelTrue}) {
    return (
        <>
            <div className='rbSwitch-wrapper'>
                <input type='radio' id='rbSwitch-on' name='rbSwitch' checked={rbSwitch} onChange={() => setFnc((f) => !f)}/>
                <label htmlFor='rbSwitch-on'>
                    {labelTrue}
                </label>
                <input type='radio' id='rbSwitch-off' name='rbSwitch' checked={!rbSwitch} onChange={() => setFnc((f) => !f)}/>
                <label htmlFor='rbSwitch-off'>
                    {labelFalse}
                </label>

            </div>
        </>
    );
}