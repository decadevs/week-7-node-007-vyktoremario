"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTriangle(req, res, ID) {
    var shape = req.body;
    if (Object.keys(shape.dimension).length === 3 && typeof shape.dimension == 'object') {
        var _a = shape.dimension, a = _a.a, b = _a.b, c = _a.c;
        var squared = '\u00B2';
        if (typeof a == "number" && typeof b == "number" && typeof c == 'number') {
            var s = (a + b + c) / 2;
            var areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            if (areaValue === NaN) {
                return res.status(406).json("Impossible Triangle");
            }
            else {
                var area = areaValue.toFixed(2) + "m" + squared;
                var newData = req.body;
                newData.id = ID;
                newData.createdAt = new Date();
                newData.area = area;
                if (!data) {
                    writeDataToFile([newData]);
                }
                else {
                    data.push(newData);
                    writeDataToFile(data);
                }
                return res.status(201).json(newData);
            }
        }
        else {
            return res.status(400).json("The length for 3 sides must be a number");
        }
    }
    else {
        return res.status(400).json("For a triangle, the length for 3 sides is required");
    }
}
