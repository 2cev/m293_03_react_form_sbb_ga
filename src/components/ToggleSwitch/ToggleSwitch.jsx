import './ToggleSwitch.css';

export default function ToggleSwitch({isTrue, setFnc, labelTrue, labelFalse, switchName}) {
    return (
        <>
            <div className="tglSwitch-wrapper">
                <label htmlFor={switchName}>{labelTrue}</label>
                <div className="tglSwitch-button" style={{backgroundColor: isTrue ? "#0060df" : "white"}}>
                    <input type="checkbox" id={switchName} name={switchName} checked={isTrue} onChange={() => setFnc((val) => !val)}/>
                    <label htmlFor={switchName} className="tglSwitch-dot"/>
                </div>
                <label htmlFor={switchName}>{labelFalse}</label>
            </div>
        </>
    );
}