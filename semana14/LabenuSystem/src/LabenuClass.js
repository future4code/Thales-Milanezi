"use strict";
exports.__esModule = true;
var LabenuClass = /** @class */ (function () {
    function LabenuClass(initialDate, finishDate, responsibleTeachers, studentsList, currentModule) {
        this.responsibleTeachers = [];
        this.studentsList = [];
        this.initialDate = initialDate;
        this.finishDate = finishDate;
        this.responsibleTeachers = responsibleTeachers;
        this.studentsList = studentsList;
        this.currentModule = currentModule;
    }
    LabenuClass.prototype.getId = function () {
        return this.id;
    };
    LabenuClass.prototype.getName = function () {
        return this.name;
    };
    LabenuClass.prototype.setLabenuTeachers = function (Teachers) {
        this.responsibleTeachers.push(Teachers);
    };
    LabenuClass.prototype.setStudent = function (student) {
        this.studentsList.push(student);
    };
    return LabenuClass;
}());
exports.LabenuClass = LabenuClass;
