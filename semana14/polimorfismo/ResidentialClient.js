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
var Residence_1 = require("./Residence");
var ResidentialClient = /** @class */ (function (_super) {
    __extends(ResidentialClient, _super);
    function ResidentialClient(name, registrationNumber, residentsQuantity, cep) {
        return _super.call(this, residentsQuantity, cep) || this;
    }
    ResidentialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.75;
    };
    ResidentialClient.prototype.getcpf = function () {
        return this.cpf;
    };
    return ResidentialClient;
}(Residence_1.Residence));
exports.ResidentialClient = ResidentialClient;
