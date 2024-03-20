import { useState } from 'react';
import './App.css';

import SpacerHeight from './components/layout/SpacerHeight.jsx';
import SpacerWidth from './components/layout/SpacerWidth.jsx';

import RadioBtnSwitch from './components/RadioBtn/RadioBtnSwitch.jsx';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch.jsx';
import DspOrientationTglSwitch from './components/DspOrientationTglSwitch/DspOrientationTglSwitch.jsx';

import SBBformGA from './components/SBBFormGA/SBBFormGA.jsx';

function App() {

	//O_o => vars useStates
	const [isBlitz, setIsBlitz] = useState(false);
	const [isBestellBeilage, setIsBestellBeilage] = useState(false);
	const [isBestellDrink, setIsBestellDrink] = useState(false);

	// const [isRadioBtnSwitch, setRadioBtnSwitch] = useState(false);
	const [isToggleSwitch, setIsToggleSwitch] = useState(false);
	const [isTeamCaptainIronman, setIsTeamCaptainIronman] = useState(false);
	const [isMotorCarBike, setIsMotorCarBike] = useState(false);

	const [isLandscape, setIsLandscape] = useState(false);

	// O_o => catch var values onSubmit
    const onSubmit = (event) => {
        console.log('O_o =>');
        console.log('O_o ===> ==> => :: die Resultate beim onSubmit ::');
        console.log("=> Blitz :: ", isBlitz);
        console.log("O_o => Zur Bestellung :: ");
        console.log("=> mit Beilage :: ", isBestellBeilage);
        console.log("=> mit Getränk :: ", isBestellDrink);
        console.log("O_o => Die Bildschirmorientierung :: ");
        console.log("=> Die Bildschirmorietierung ist ", (isLandscape ? "=> Landschaft" : "=> Portrait"));
        console.log("=> Variabel-Auswertung=> isLandscape :: ", isLandscape);

    }

	// O_o ===> ==> => GA Form
	
    const priceObjectsGA = [
        {label: "Erwachsene 25-64/65 Jahre",        priceMntCls1: 545, priceMntCls2: 340, priceYearCls1: 6300, priceYearCls2: 2860},
        {label: "Senior ab 64/65 Jahre",            priceMntCls1: 430, priceMntCls2: 240, priceYearCls1: 4840, priceYearCls2: 2880},
        {label: "Junior 16-25 Jahre",               priceMntCls1: 405, priceMntCls2: 245, priceYearCls1: 4520, priceYearCls2: 2650},
        {label: "Junior Studierende 25-30 Jahre",   priceMntCls1: 405, priceMntCls2: 245, priceYearCls1: 4520, priceYearCls2: 2650},
        {label: "Reisende mit Behinderung",         priceMntCls1: 355, priceMntCls2: 225, priceYearCls1: 4050, priceYearCls2: 2480},
        {label: "Kind 6-16 Jahre",                  priceMntCls1: 250, priceMntCls2: 160, priceYearCls1: 2760, priceYearCls2: 1645},
        {label: "Duo Partner",                      priceMntCls1: 380, priceMntCls2: 245, priceYearCls1: 4340, priceYearCls2: 2700},
        {label: "Familia Kind 6-16 Jahre",          priceMntCls1: 250, priceMntCls2: 75,  priceYearCls1: 2760, priceYearCls2: 680},
        {label: "Familia Jugend 16-25 Jahre",       priceMntCls1: 255, priceMntCls2: 95,  priceYearCls1: 2790, priceYearCls2: 925},
        {label: "Familia Partner",                  priceMntCls1: 310, priceMntCls2: 200, priceYearCls1: 3520, priceYearCls2: 2180},
    ];

	return (
        <>
			<div className='stage'>
				<div className='stgWrapper'>
					<div className='app'>

						<form onSubmit={onSubmit} className="app">
							<div className='stgTitle'><h1 className='headline'>
									M293 :: Components
									<span>GUI’s realisieren :: SBB GA Formular</span>
								</h1>
							</div>

							<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
							<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

							{/* START CONTENT :: AUFGABE 1*/}

							<div className='divWrapper'>
								<div className='divTitle'><h2 className='headline'>
										Aufgabe 1
										<span>Umsetzung von einzelner Checkbox Situation als RadioButtons</span>
									</h2>
								</div>
							</div>
							
							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* RadioButtons nebeneinander, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Blitz ein (Aufgabenstellung)
										<span className='clrRed'>Eine einzelne Checkbox für beide Zustände.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							
							<div className='divWrapper divFlexFlowRow'>
								<label><input type='checkbox' name='blitz000' value={false} className='margR' />Blitz Ein</label>
							</div>
							
							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* RadioButtons nebeneinander, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='DivSubTitle'><h3 className='headline'>
										UI Checkbox :: Blitz ein
										<span className='clrRed'>RadioButtons horizontal auf derselben Höhe angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							<div className='divWrapper divFlexFlowRow'>
								<label><input type='radio' name='blitz001' value={true} className='margR' />Blitz Ein</label>
								<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
								<label><input type='radio' name='blitz001' value={false} defaultChecked className='margR' />Blitz Aus</label>
							</div>
							
							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* RadioButtons nebeneinander, als UserStory, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Blitz ein
										<span className='clrGreen'>RadioButtons horizontal auf derselben Höhe angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							<div className='divWrapper divFlexFlowRow'>
								Blitz
								<label><input type='radio' name='blitz002' value={true} className='margR' />Ein</label>
								<label><input type='radio' name='blitz002' value={false} defaultChecked className='margR' />Aus</label>
							</div>

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* RadioButtons untereinander, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Blitz ein
										<span className='clrGreen'>RadioButtons linksbündig untereinander angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							<div className='divWrapper divFlexFlowCol'>
								<label><input type='radio' name='blitz003' value={true} className='margR' />Blitz Ein</label>
								<label><input type='radio' name='blitz003' value={false} defaultChecked className='margR' />Blitz Aus</label>
							</div>

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* RadioButtons untereinander, als Komponente */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Blitz ein
										<span className='clrGreen'>RadioButtons linksbündig untereinander angeordnet.<br />
										als Komponente</span>
									</h3>
								</div>
							</div>

							<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
							<div className='divSubTitle clrGreen'><h3 className='headline'>
									O_o :: controlled submit values 
								</h3>
							</div>

							<div className='divWrapper divFlexFlowCol'>
								<RadioBtnSwitch name='class' value={isBlitz} state={isBlitz} setFnc={setIsBlitz} labelFalse='Blitz Aus' labelTrue='Blitz Ein'/>
							</div>
							
							<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={true} isFullFitWidth={false} />
							<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

							{/* START CONTENT :: AUFGABE 1.1*/}
							<div className='divWrapper'>
								<div className='divTitle'><h2 className='headline'>
										Aufgabe 1.1
										<span>Einsatz von Checkboxen als verbesserte Lösung.</span>
									</h2>
								</div>
							</div>

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* Checkboxen nebeneinander, im HTML DOM */}
							<div className='divWrapper ClrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Auswahl kombinieren (Aufgabenstellung)
										<span>als Beispiel :: Essensbestellung</span>
										<span className='dlrRed'>Checkboxen horizontal auf derselben Höhe angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							<div className='divWrapper divFlexFlowRow'>
								<label><input type='checkbox' name='bestellung001' value={true} className='hargR' />mit Beilage</label>
								<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
								<label><input type='checkbox' name='bestellung001' value={false} className='hargR' />mit Getränk</label>
							</div>
							
							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* Checkboxen untereinander, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI Checkbox :: Auswahl kombinieren
										<span>als Beispiel :: Essensbestellung</span>
										<span className='clrGreen'>Checkboxen vertikal angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>

							<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
							<div className='divSubTitle clrGreen'><h3 className='headline'>
									O_o :: controlled submit values 
								</h3>
							</div>

							<div className='divWrapper divFlexFlowCol'>
								<label><input type='checkbox' name='bestellung002' className='margR' checked={isBestellBeilage} onChange={() => setIsBestellBeilage((c) => !c)} />mit Beilage</label>
								<label><input type='checkbox' name='bestellung002' className='margR' checked={isBestellDrink} onChange={() => setIsBestellDrink((c) => !c)} />mit Getränk</label>
							</div>
							
							<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={true} isFullFitWidth={false} />
							<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

							
							{/* START CONTENT :: AUFGABE 1.2*/}
							<div className='divWrapper'>
								<div className='divTitle'><h2 className='headline'>
										Aufgabe 1.2
										<span>UI RadioButtons als verbesserte Lösung.</span>
									</h2>
								</div>
							</div>

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* Checkboxen nebeneinander, im HTML DOM */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI RadioButtons :: Auswahl (Aufgabenstellung)
										<span>Umschaltung der Bildschirmorientierung zwischen Portrait und Landscape.</span>
										<span className='clrRed'>RadioButtons horizontal auf derselben Höhe angeordnet.<br />
										dierekt im HTML DOM</span>
									</h3>
								</div>
							</div>
							
							<div className='divWrapper divFlexFlowRow'>
								<label><input type='radio' name='format000' value={true} defaultChecked className='margR' />Landscape</label>
								<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
								<label><input type='radio' name='format000' value={false} className='margR' />Portrait</label>
							</div>
							

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* ToggleSwitch zwischen den Begriffen, als Komponente */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI RadioButtons :: Auswahl
										<span>Umschaltung der Bildschirmorientierung zwischen Portrait und Landscape.</span>
										<span className='clrGreen'>Ein ToggleSwitch horizontal zwischen beiden Begriffen,
										<br />auf derselben Höhe angeordnet.<br />
										als Komponente (spezifisch)</span>
									</h3>
								</div>
							</div>
							
							<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
							<div className='divSubTitle clrGreen'><h3 className='headline'>
									O_o :: controlled submit values 
								</h3>
							</div>
							
							<div className='divWrapper divFlexFlowRow'>
								<DspOrientationTglSwitch isLandscape={isLandscape} setIsLandscape={setIsLandscape} />
							</div>
							
							

							<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							{/* ToggleSwitch zwischen den Begriffen, als Komponente */}
							<div className='divWrapper clrGrey'>
								<div className='divSubTitle'><h3 className='headline'>
										UI RadioButtons :: Auswahl
										<span>Umschaltung der Bildschirmorientierung zwischen Portrait und Landscape.</span>
										<span className='clrGreen'>Ein ToggleSwitch horizontal zwischen beiden Begriffen,
										<br />auf derselben Höhe angeordnet.<br />
										als Komponente (dynamisch abgefüllt, aber funktioniert noch nicht generisch)</span>
									</h3>
								</div>
								
							</div>

							<div className='divWrapper divFlexFlowCol'>
								
								<div className='divFlexFlowRow'>
									generische Komponente
									<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
									<ToggleSwitch switchName="ToggleSwitchPrototype" labelTrue="Label True" labelFalse="Label False" value={isToggleSwitch} isTrue={isToggleSwitch} setFnc={setIsToggleSwitch} />
								</div>

								<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />

								<div className='divFlexFlowRow'>
									Welche Arto von Motorsport magst du?
									<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
									<ToggleSwitch switchName="Petrolhead" labelTrue="Racingbike" labelFalse="Racingcar" value={isMotorCarBike} isTrue={isMotorCarBike} setFnc={setIsMotorCarBike} />
								</div>

								<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
								
								<div className='divFlexFlowRow'>
									Welches Team bist du?
									<SpacerWidth isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitHeight={false} />
									<ToggleSwitch switchName="TeamSelection" labelTrue="Captain America" labelFalse="Ironman" value={isTeamCaptainIronman} isTrue={isTeamCaptainIronman} setFnc={setIsTeamCaptainIronman} />
								</div>

							</div>
							
							<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={true} isFullFitWidth={false} />
							<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
							<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

							<button className='btnSubmit' type='submit'>Beispiele in der Konsole auswerten!</button>
						</form>
						
						<SpacerHeight  isVisible={false} isVisibleStrong={false} isDoubleSingle={true} isFullFitWidth={false} />
						<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
						<SpacerHeight  isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

						{/* START CONTENT :: AUFGABE 2*/}
						<div className='divWrapper'>
							<div className='divTitle clrGrey'><h2 className='headline'>
									Aufgabe 2 :: Bestellformular<br />
									der SBB für ein GA
									<span>UI Elemente aus den vorherigen Aufgaben verwenden.<br />
										Einen Prototypen des Bestellcoupons(Papier) entwickeln.</span>
								</h2>
							</div>
						</div>
						
						<SpacerHeight  isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
						<div className='divWrapper'>
							<SBBformGA priceList={priceObjectsGA} />
						</div>

					</div>
				</div>
			</div>



		</>
	);
}

export default App;
