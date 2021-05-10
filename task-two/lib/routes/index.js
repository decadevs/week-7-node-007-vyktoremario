"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers/controllers");
var calculator_1 = require("../utils/calculator");
// import database from '../controllers'
var router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res) {
    res.redirect('/fetchRecords');
});
router.get('/fetchRecords', function (req, res, next) {
    res.send(calculator_1.data);
});
router.post('/calculate', function (req, res) {
    controllers_1.calculateArea(req, res);
});
exports.default = router;
