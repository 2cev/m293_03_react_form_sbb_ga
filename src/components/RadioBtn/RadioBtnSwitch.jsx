import './RadioBtnSwitch.css';

export default function RadioBtnSwitch({isOnOff, setFnc, labelFalse, labelTrue}) {
    return (
        <>
            <div className='rbSwitch-wrapper'>
                <label htmlFor='rbSwitch-on'>
                    <input type='radio' id='rbSwitch-on' name='rbSwitch' className='MargR' checked={isOnOff} onChange={() => setFnc((f) => !f)}/>
                    {labelTrue}
                </label>
                <br />
                <label htmlFor='rbSwitch-off'>
                    <input type='radio' id='rbSwitch-off' name='rbSwitch' className='MargR' checked={!isOnOff} onChange={() => setFnc((f) => !f)}/>
                    {labelFalse}
                </label>
            </div>
        </>
    );
}