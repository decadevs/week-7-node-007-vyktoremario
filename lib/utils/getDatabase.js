"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushToDatabase = exports.data = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.data = database();
function database() {
    try {
        return JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../database/db.json'), 'utf8'));
    }
    catch (err) {
        return [];
    }
}
function writeDataToFile(content) {
    return fs_1.default.writeFileSync(path_1.default.join(__dirname, '../database/db.json'), JSON.stringify(content, null, 2), "utf8");
}
function pushToDatabase(value) {
    if (!exports.data) {
        writeDataToFile([value]);
    }
    else {
        exports.data.push(value);
        writeDataToFile(exports.data);
    }
}
exports.pushToDatabase = pushToDatabase;
