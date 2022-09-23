import { Meteor } from "meteor/meteor"
import Server from "../imports/api/classes/server/Server"

import "../imports/api/index"

Meteor.startup(() => {
	Server.registerFunctions()
	Server.initServer()

})
