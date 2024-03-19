import { useState } from 'react';
import './App.css';
import RadioBtnSwitch from './components/RadioBtn/RadioBtnSwitch.jsx';

function App() {

	//O_o => vars
	const [ radioBtnSwitch, setRadioBtnSwitch ] = useState(false);

	return (

        <>
			<div className='Stage'>
				<div className='StgWrapper'>
					<div className='App'>

						<div className='StgTitle'><h1 className='Headline'>
								M293 :: Components
								<span>SBB GA Formular</span>
							</h1>

						</div>

						<hr />
						
						<div className='DivWrapper'>
							<div className='DivTitle'><h2 className='Headline'>
									Aufgabe 1
									<span>GUI’s realisieren / Usablility / XD</span>
								</h2>
							</div>
						</div>

						<div className='DivWrapper'>
							<div className='DivSubTitle'><h3 className='Headline'>
									 UI Checkbox :: Blitz ein
									<span>RadioButtons horizontal auf derselben Höhe</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowRow'>
							<label><input type='radio' name='blitz001' value={true} defaultChecked className='MargR' />Blitz Ein</label>
							<div className='SpacerW'>&nbsp;</div>
							<label><input type='radio' name='blitz001' value={false} className='MargR' />Blitz Aus</label>
						</div>
						
						<div className='SpacerH'>&nbsp;</div>

						<div className='DivWrapper'>
							<div className='DivSubTitle'><h3 className='Headline'>
									UI Checkbox :: Blitz ein
									<span>RadioButtons linksbündig untereinander</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowCol'>
							<label><input type='radio' name='blitz002' value={true} defaultChecked className='MargR' />Blitz Ein</label>
							<label><input type='radio' name='blitz002' value={false} className='MargR' />Blitz Aus</label>
						</div>
						<div className='SpacerH'>&nbsp;</div>
						<div className='DivWrapper DivFlexFlowCol'>
							<RadioBtnSwitch name='class' state={radioBtnSwitch} setFnc={setRadioBtnSwitch} labelFalse='Blitz aus' labelTrue='Blitz ein'/>
						</div>

						<hr />

					</div>
				</div>
			</div>
		</>
	);

}

export default App;
