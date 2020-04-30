"use strict";
exports.__esModule = true;
var ResidentialClient_1 = require("./ResidentialClient");
var CommercialClient_1 = require("./CommercialClient");
var IndustrialClient_1 = require("./IndustrialClient");
var ClientManager = /** @class */ (function () {
    function ClientManager(clients) {
        this.clients = [];
        this.clients = clients;
    }
    ClientManager.prototype.getClientsQuantity = function () {
        return this.clients.length;
    };
    ClientManager.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    ClientManager.prototype.calculateBillOfClient = function (registrationNumber) {
        var foundClient = this.clients.find(function (client) {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    };
    return ClientManager;
}());
exports.ClientManager = ClientManager;
var gerenciadorDeClientes = new ClientManager([]);
var residentialClient1 = new ResidentialClient_1.ResidentialClient("Nestor Silva", 123131232, 10, "1231321312");
gerenciadorDeClientes.registerClient(residentialClient1);
var comercialClient1 = new CommercialClient_1.CommercialClient("Maria benedita", 987987, 14, "asfafsasf");
gerenciadorDeClientes.registerClient(comercialClient1);
var industrialClient1 = new IndustrialClient_1.IndustrialClient("Jamelao Costa", 124214, 121, "24243224");
gerenciadorDeClientes.registerClient(industrialClient1);
