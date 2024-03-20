import { useState } from 'react';
import './App.css';
import RadioBtnSwitch from './components/RadioBtn/RadioBtnSwitch.jsx';

function App() {

	//O_o => vars
	const [radioBtnSwitch, setRadioBtnSwitch] = useState(false);

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
						{/* RadioButtons nebeneinander, im HTML DOM */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									 UI Checkbox :: Blitz ein
									<span className='ClrRed'>RadioButtons horizontal auf derselben Höhe<br />
									dierekt im HTML DOM</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowRow'>
							<label><input type='radio' name='blitz001' value={true} className='MargR' />Blitz Ein</label>
							<div className='SpacerW'>&nbsp;</div>
							<label><input type='radio' name='blitz001' value={false} defaultChecked className='MargR' />Blitz Aus</label>
						</div>
						<div className='SpacerH'>&nbsp;</div>
						
						{/* RadioButtons nebeneinander, als UserStory, im HTML DOM */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									 UI Checkbox :: Blitz ein
									<span className='ClrGreen'>RadioButtons horizontal auf derselben Höhe<br />
									dierekt im HTML DOM</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowRow'>
							Blitz
							<label><input type='radio' name='blitz002' value={true} className='MargR' />Ein</label>
							{/* <div className='SpacerW'>&nbsp;</div> */}
							<label><input type='radio' name='blitz002' value={false} defaultChecked className='MargR' />Aus</label>
						</div>
						<div className='SpacerH'>&nbsp;</div>

						{/* RadioButtons untereinander, im HTML DOM */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									UI Checkbox :: Blitz ein
									<span className='ClrGreen'>RadioButtons linksbündig untereinander<br />
									dierekt im HTML DOM</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowCol'>
							<label><input type='radio' name='blitz003' value={true} className='MargR' />Blitz Ein</label>
							<label><input type='radio' name='blitz003' value={false} defaultChecked className='MargR' />Blitz Aus</label>
						</div>
						<div className='SpacerH'>&nbsp;</div>

						{/* RadioButtons untereinander, als Komponente */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									UI Checkbox :: Blitz ein
									<span className='ClrGreen'>RadioButtons linksbündig untereinander<br />
									als Komponente</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowCol'>
							<RadioBtnSwitch name='class' state={radioBtnSwitch} setFnc={setRadioBtnSwitch} labelFalse='Blitz Aus' labelTrue='Blitz Ein'/>
						</div>

						<hr />

					</div>
				</div>
			</div>
		</>
	);

}

export default App;
