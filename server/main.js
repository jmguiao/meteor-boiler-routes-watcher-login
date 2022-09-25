import { Meteor } from "meteor/meteor";
import Server from "../imports/api/classes/server/Server";

import "../imports/api/index";

Meteor.publish("query.userList", function () {
    return Meteor.users.find({});
});

Meteor.startup(() => {
    Server.registerFunctions();
    Server.initServer();

});
