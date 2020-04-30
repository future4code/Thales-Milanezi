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
var LabenuStudents = /** @class */ (function (_super) {
    __extends(LabenuStudents, _super);
    function LabenuStudents(name, id, email, dateOfBirth, hobbies) {
        var _this = _super.call(this, email) || this;
        _this.dateOfBirth = dateOfBirth;
        _this.hobbies = hobbies;
        return _this;
    }
    LabenuStudents.prototype.getId = function () {
        return this.id;
    };
    LabenuStudents.prototype.getName = function () {
        return this.name;
    };
    LabenuStudents.prototype.getEmail = function () {
        return this.email;
    };
    LabenuStudents.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    LabenuStudents.prototype.getHobbies = function () {
        return this.hobbies;
    };
    return LabenuStudents;
}(LabenuPeople_1.LabenuPeople));
exports.LabenuStudents = LabenuStudents;
