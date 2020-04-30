"use strict";
exports.__esModule = true;
var fs = require("fs");
var LabenuSchoolManager = /** @class */ (function () {
    function LabenuSchoolManager(fileName) {
        this.fileName = fileName;
    }
    LabenuSchoolManager.prototype.setFileName = function (path) {
        this.fileName = path;
    };
    LabenuSchoolManager.prototype.writeFile = function (data) {
        fs.writeFileSync(this.fileName, JSON.stringify(data));
    };
    LabenuSchoolManager.prototype.readFile = function () {
        var data = fs.readFileSync(this.fileName);
        return JSON.parse(data.toString());
    };
    return LabenuSchoolManager;
}());
exports.LabenuSchoolManager = LabenuSchoolManager;
