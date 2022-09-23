import Watcher from "../classes/Watcher";

class Session extends Watcher {

    /** @Temporary meteor session handler*/
    constructor() {
        super();
        this.secureTransaction();
    }

    /** hide sensitive functions*/
    secureTransaction() {
        this.callSubscribe = Meteor.subscribe;
        this.callFunction = Meteor.call;
    }
}

export default new Session();
