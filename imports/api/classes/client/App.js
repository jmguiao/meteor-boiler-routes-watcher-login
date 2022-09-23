import Watcher from "../Watcher";
import ActiveSession from '../Session';

class AppWatcher extends Watcher {
    #word = ""
    constructor(parent) {
        super(parent)
        this.callFunction = Meteor.call;
        this.callSubscribe = Meteor.subscribe;
    }

    get Word() {
        return this.#word
    }

    setWord(word) {
        this.#word = word
    }

    save(id, name) {
        console.log(id, name);
        this.callFunc("METEOR METHOD HERE", id, name, (err, data) => {
            console.log(err, data)
        })
    }
}

export default new AppWatcher(ActiveSession)