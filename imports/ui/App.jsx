import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import AppW from "../api/classes/client/App";


class App extends React.Component {
    constructor(props) {
        super(props);
        AppW.setWatcher(this, "UNIQUEID");
    }

    render() {
        const profile = Meteor.user();
		console.log("start",profile);

        AppW.initiateWatch("UNIQUEID")
        const word = AppW.Word;
        return (
			<div>
				<input onChange={(e) => AppW.setWord(e.target.value)} />
				{word}
				<button onClick={() => AppW.save("123", "ONE")}>Refresh</button>
			</div>
        );

    }

}

export default withTracker(() => {
    AppW.initiateWatch("UNIQUEID");
    Meteor.subscribe("query.userList");
    const res = Meteor.users.find({}).fetch();
	// //var result = res.map((user) => ({ name: user.name }));
    console.log("res", res);
	// return res;
})(App);


