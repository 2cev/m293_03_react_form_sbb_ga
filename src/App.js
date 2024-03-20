import { useState } from 'react';
import './App.css';
import RadioBtnSwitch from './components/RadioBtn/RadioBtnSwitch.jsx';
import SpacerHeight from './components/layout/SpacerHeight.jsx';

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
								<span>GUI’s realisieren :: SBB GA Formular</span>
							</h1>
						</div>

						<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
						<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />
						<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

						{/* START CONTENT :: AUFGABE 1*/}

						<div className='DivWrapper'>
							<div className='DivTitle'><h2 className='Headline'>
									Aufgabe 1
									<span>GUI’s realisieren / Usablility / XD<br />
									Einsatz von Checkbox mit Lösung als RadioButtons</span>
								</h2>
							</div>
						</div>
						
						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
						{/* RadioButtons nebeneinander, im HTML DOM */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									 UI Checkbox :: Blitz ein (Aufgabenstellung)
									<span className='ClrRed'>einzelne Checkbox für beide Zustände<br />
									dierekt im HTML DOM</span>
								</h3>
							</div>
						</div>
						
						<div className='DivWrapper DivFlexFlowRow'>
							<label><input type='checkbox' name='blitz000' value={false} className='MargR' />Blitz Ein</label>
						</div>
						
						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
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
						
						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
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

						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
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

						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
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
						
						<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={true} isFullFitWidth={false} />
						<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />
						<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

						{/* START CONTENT :: AUFGABE 1.1*/}
						<div className='DivWrapper'>
							<div className='DivTitle'><h2 className='Headline'>
									Aufgabe 1.1
									<span>GUI’s realisieren / Usablility / XD<br />
									Einsatz von Checkbox mit Lösung als RadioButtons</span>
								</h2>
							</div>
						</div>

						<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
						{/* Checkboxen nebeneinander, im HTML DOM */}
						<div className='DivWrapper ClrGrey'>
							<div className='DivSubTitle'><h3 className='Headline'>
									 UI Checkbox :: Auswahl kombinieren
									 <span>als Beispiel :: Essensbestellung</span>
									<span className='ClrRed'>Checkboxen horizontal auf derselben Höhe<br />
									dierekt im HTML DOM</span>
								</h3>
							</div>
						</div>
						<div className='DivWrapper DivFlexFlowRow'>
							<label><input type='checkbox' name='bestellung001' value={true} className='MargR' />mit Beilage</label>
							<div className='SpacerW'>&nbsp;</div>
							<label><input type='checkbox' name='bestellung001' value={false} className='MargR' />mit Getränk</label>
						</div>
						<div className='SpacerH SpacerHLine'>&nbsp;</div>

					</div>
				</div>
			</div>
		</>
	);
}

export default App;
