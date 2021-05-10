"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = void 0;
var getDatabase_1 = require("./getDatabase");
var ID;
function createID() {
    if (!getDatabase_1.data.length) {
        return ID = 1;
    }
    else {
        return ID = getDatabase_1.data[getDatabase_1.data.length - 1].id + 1;
    }
}
exports.createID = createID;
