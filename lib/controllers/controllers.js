"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateArea = void 0;
var joi_1 = __importDefault(require("joi"));
var calculator_1 = require("../utils/calculator");
var Schema = joi_1.default.object({
    shape: joi_1.default.string().required(),
    dimension: joi_1.default.object().required() || joi_1.default.number().required()
});
function calculateArea(req, res) {
    var shape = Schema.validate(req.body);
    if (shape.value.shape.toLowerCase() === 'triangle') {
        calculator_1.calculateTriangle(req, res);
    }
    else if (shape.value.shape.toLowerCase() === 'circle') {
        calculator_1.calculateCircle(req, res);
    }
    else if (shape.value.shape.toLowerCase() === 'square') {
        calculator_1.calculateSquare(req, res);
    }
    else if (shape.value.shape.toLowerCase() === 'rectangle') {
        calculator_1.calculateRectangle(req, res);
    }
    else {
        res.status(400).json("Please provide a valid value for shape");
    }
}
exports.calculateArea = calculateArea;
