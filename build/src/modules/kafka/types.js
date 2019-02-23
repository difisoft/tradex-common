"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType["MESSAGE"] = "MESSAGE";
    MessageType["REQUEST"] = "REQUEST";
    MessageType["RESPONSE"] = "RESPONSE";
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;
const SEND_MESSAGE_TYPE = {
    OBSERVABLE: 0,
    PROMISE: 1,
};
exports.SEND_MESSAGE_TYPE = SEND_MESSAGE_TYPE;
class PromiseState {
    constructor() {
        this.prom = new Promise((resolve, reject) => {
            this.rs = resolve;
            this.rj = reject;
        });
    }
    resolve(v) {
        this.rs(v);
    }
    reject(err) {
        this.rj(err);
    }
    promise() {
        return this.prom;
    }
}
exports.PromiseState = PromiseState;
//# sourceMappingURL=types.js.map