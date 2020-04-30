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
var Industry_1 = require("./Industry");
var IndustrialClient = /** @class */ (function (_super) {
    __extends(IndustrialClient, _super);
    function IndustrialClient(name, registrationNumber, machinesQuantity, cep) {
        return _super.call(this, machinesQuantity, cep) || this;
    }
    IndustrialClient.prototype.calculateBill = function () {
        return (this.consumedEnergy * 0.45) + this.machinesQuantity * 100;
    };
    IndustrialClient.prototype.getmachinesQuantity = function () {
        return this.machinesQuantity;
    };
    IndustrialClient.prototype.getindustrialRegister = function () {
        return this.industrialRegister;
    };
    return IndustrialClient;
}(Industry_1.Industry));
exports.IndustrialClient = IndustrialClient;
