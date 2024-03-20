import './SBBFormGA.css';
import { useState, useEffect } from 'react';

function Switch({name, state, setState, labelTrue, labelFalse}) {
    return (
        <>
            <div className='switch-wrapper'>
                <label htmlFor={name}>{labelTrue}</label>
                <div className='switch-button' style={{backgroundColor: state ? '#0060df' : 'white'}}>
                    <input type='checkbox' id={name} name={name} checked={state} onChange={() => setState((val) => !val)}/>
                    <label htmlFor={name} className='switch-dot'/>
                </div>
                <label htmlFor={name}>{labelFalse}</label>
            </div>
        </>
    );
}

export default function SBBFormGA({priceList}) {

    const [startDate, setStartDate] = useState(new Date());
    const [payYearly, setPayYearly] = useState(true);
    const [firstClass, setFirstClass] = useState(false);
    const [conditions, setConditions] = useState(undefined);
    const [price, setPrice] = useState(0);
    
    
    useEffect(() => {
        document.getElementById('startDate').valueAsDate = startDate;
    }, [startDate]);

    useEffect(() => {
        if (conditions) {
            const { priceMntCls1, priceMntCls2, priceYearCls1, priceYearCls2} = priceList.filter(({label}) => label === conditions)[0];

            if (payYearly && firstClass) setPrice(priceYearCls1);
            else if (payYearly && !firstClass) setPrice(priceYearCls2);
            else if (!payYearly && firstClass) setPrice(priceMntCls1);
            else setPrice(priceMntCls2);

        } else {
            setPrice(0);
        }
    }, [payYearly, firstClass, conditions, priceList]);

    return (
        <>
            <form className='gaWrapper'>
                <select id='conditions' name='conditions' className='gaConditions' required>
                    <option value='' selected disabled hidden >Bitte wählen Sie ihre Personenkategorie</option>
                    {priceList.map(({label}) => {return (
                        <option value={label} key={label} onClick={() => setConditions(label)}>{label}</option>
                    )})}
                </select>
                    
                <br />
                <br />

                <Switch name='class' state={firstClass} setState={setFirstClass} labelFalse='Zweite Klasse' labelTrue='Erste Klasse'/>
                <br />
                <br />
                <Switch name='payment' state={payYearly} setState={setPayYearly} labelFalse='monatlich' labelTrue='jährlich'/>
                <br />
                <br />
                <label htmlFor='startDate'>Wählen Sie das Gültigkeitsdatum (ab diesem Tag gütlig):</label>
                <br />
                <input required name='startDate' id='startDate' type='date' onChange={(e) => setStartDate(new Date(e.target.value))}/>

            </form>

            <div>
                {startDate ? <p>Ihr Gültigkeitsdatum ist :: {startDate.toDateString()}.</p> : null}
                {price > 0 ? <p>Ihre Bezahlung von CHF {price.toFixed(2)} wird {payYearly ? 'jährlich' : 'monatlich'} fällig.</p> : null}
            </div>

            <button disabled={true} >Die Bestellung versenden (technische Problemem o_O)</button> 
        </>
    );

}