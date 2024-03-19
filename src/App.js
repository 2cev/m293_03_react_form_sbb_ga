import { useState } from 'react';
import './App.css';
import GAFormular from "./components/GAFormular/GAFormular.jsx";

function App() {

	//O_o => vars
	const [flash, setFlash] = useState(false);

	return (
		<div className="App">

			<div className="FormDiv">
				<h4>bad solution</h4>
				<label>
					<input type="radio" name="blitz" value={true} defaultChecked />
					Blitz Ein
				</label>
				<label className="PadLeft">
					<input type="radio" name="blitz" value={false} />
					Blitz Aus
				</label>

				<br />

			</div>


			<hr />

			<GAFormular />


		</div>
	);
}

export default App;
