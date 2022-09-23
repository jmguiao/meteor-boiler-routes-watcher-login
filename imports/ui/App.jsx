import React from "react"
import { withTracker } from "meteor/react-meteor-data";
import AppW from '../api/classes/client/App';

class App extends React.Component {
	constructor(props) {
		super(props)
		AppW.setWatcher(this, "UNIQUEID")
	}

	render() {

		AppW.initiateWatch("UNIQUEID")
		const word = AppW.Word
		return (
			<div>
				<input onChange={(e) => AppW.setWord(e.target.value)} />
				{word}
				<button onClick={() => AppW.save("123", "ONE")}>Refresh</button>
			</div>
		)
	}

}

export default withTracker(() => {
})(App)


