"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var LabenuPeople_1 = require("./LabenuPeople");
var TEACHERS_SPECIALTY;
(function (TEACHERS_SPECIALTY) {
    TEACHERS_SPECIALTY["REACT"] = "REACT";
    TEACHERS_SPECIALTY["REDUX"] = "REDUX";
    TEACHERS_SPECIALTY["CSS"] = "CSS";
    TEACHERS_SPECIALTY["TESTES"] = "TESTES";
    TEACHERS_SPECIALTY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHERS_SPECIALTY["OOP"] = "OOP";
    TEACHERS_SPECIALTY["BACKEND"] = "BACKEND";
})(TEACHERS_SPECIALTY || (TEACHERS_SPECIALTY = {}));
var LabenuTeachers = /** @class */ (function (_super) {
    __extends(LabenuTeachers, _super);
    function LabenuTeachers(name, id, email, specialties) {
        var _this = _super.call(this, email) || this;
        _this.email = email;
        _this.specialties = TEACHERS_SPECIALTY[""];
        return _this;
    }
    LabenuTeachers.prototype.getId = function () {
        return this.id;
    };
    LabenuTeachers.prototype.getName = function () {
        return this.name;
    };
    LabenuTeachers.prototype.getEmail = function () {
        return this.email;
    };
    return LabenuTeachers;
}(LabenuPeople_1.LabenuPeople));
exports.LabenuTeachers = LabenuTeachers;
