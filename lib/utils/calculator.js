"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = exports.calculateRectangle = exports.calculateSquare = exports.calculateCircle = exports.calculateTriangle = void 0;
var joi_1 = __importDefault(require("joi"));
var getDatabase_1 = require("../utils/getDatabase");
var createID_1 = require("../utils/createID");
Object.defineProperty(exports, "createID", { enumerable: true, get: function () { return createID_1.createID; } });
var squared = '\u00B2';
function calculateTriangle(req, res) {
    var shape = dimensionSchema.validate(req.body);
    if (shape.error)
        return res.status(400).json(shape.error.details[0].message);
    console.log(Object.keys(shape.value.dimension));
    if (Object.keys(shape.value.dimension).length !== 3)
        return res.status(400).json("The length of the three sides are required");
    var _a = shape.value.dimension, a = _a.a, b = _a.b, c = _a.c;
    var s = (a + b + c) / 2;
    var areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (!areaValue)
        return res.status(400).json("The sum of two sides has to exceed the sum of the third side");
    var area = areaValue.toFixed(2) + "m" + squared;
    var newData = req.body;
    newData.id = createID_1.createID();
    newData.createdAt = new Date();
    newData.area = area;
    getDatabase_1.pushToDatabase(newData);
    return res.status(201).json(newData);
}
exports.calculateTriangle = calculateTriangle;
function calculateCircle(req, res) {
    var shape = Schema.validate(req.body);
    if (shape.error)
        return res.status(400).json(shape.error.details[0].message);
    var radius = shape.value.dimension;
    var area = (((Math.PI * radius * radius) / 2).toFixed(2)) + "m" + squared;
    if (!area)
        return res.status(400).json("The sum of two sides has to exceed the sum of the third side");
    var newData = req.body;
    newData.id = createID_1.createID();
    newData.createdAt = new Date();
    newData.area = area;
    getDatabase_1.pushToDatabase(newData);
    return res.status(201).json(newData);
}
exports.calculateCircle = calculateCircle;
function calculateSquare(req, res) {
    var shape = Schema.validate(req.body);
    if (shape.error)
        return res.status(400).json(shape.error.details[0].message);
    var length = shape.value.dimension;
    var area = (length * length) + "m" + squared;
    if (!area)
        return res.status(400).json("The sum of two sides has to exceed the sum of the third side");
    var newData = req.body;
    newData.id = createID_1.createID();
    newData.createdAt = new Date();
    newData.area = area;
    getDatabase_1.pushToDatabase(newData);
    return res.status(201).json(newData);
}
exports.calculateSquare = calculateSquare;
function calculateRectangle(req, res) {
    var shape = dimensionSchema.validate(req.body);
    if (shape.error)
        return res.status(400).json(shape.error.details[0].message);
    if (Object.keys(shape.value.dimension).length === 2) {
        var _a = shape.value.dimension, a = _a.a, b = _a.b;
        var area = (a * b) + "m" + squared;
        if (!area)
            return res.status(400).json("The sum of two sides has to exceed the sum of the third side");
        var newData = req.body;
        newData.id = createID_1.createID();
        newData.createdAt = new Date();
        newData.area = area;
        getDatabase_1.pushToDatabase(newData);
        return res.status(201).json(newData);
    }
    else {
        return res.status(400).json("A Rectangle needs only two sides");
    }
}
exports.calculateRectangle = calculateRectangle;
var Schema = joi_1.default.object({
    shape: joi_1.default.string().required(),
    dimension: joi_1.default.number().required().positive()
});
var dimensionSchema = joi_1.default.object({
    shape: joi_1.default.string().required(),
    dimension: joi_1.default.object({
        a: joi_1.default.number().required().positive(),
        b: joi_1.default.number().required().positive(),
        c: joi_1.default.number().positive().optional()
    }).required()
});
