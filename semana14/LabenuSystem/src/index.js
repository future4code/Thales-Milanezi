"use strict";
exports.__esModule = true;
var LabenuStudents_1 = require("./LabenuStudents");
var moment = require("moment");
var myStudent1 = new LabenuStudents_1.LabenuStudents("Joaquina Silverinha barbosa", 24639872, "jojoLindinhaPoderosa@bol.com", moment('12/03/2009', 'DD/MM/YYYY').format("DD/MM/YYYY"), ["Gosto de tomar sol com casaco de frio", "sair para passear de patinete sem rodinhas", "Comer kiwi congelado"]);
console.log(myStudent1);
var myStudent2 = new LabenuStudents_1.LabenuStudents("Marcia Bitencurt Kohn", 545345353, "marciachique82@yahoo.com", moment('07/11/1987', 'DD/MM/YYYY').format("DD/MM/YYYY"), ["Gosto de tomar sol com casaco de frio", "sair para passear de patinete sem rodinhas", "Comer kiwi congelado"]);
console.log(myStudent2);
