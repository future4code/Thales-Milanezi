"use strict";
exports.__esModule = true;
var client1 = {
    name: "joaquina",
    registrationNumber: 12313132,
    consumedEnergy: 240,
    calculateBill: function () {
        return 2 * 5;
    }
};
console.log("\nNovo cliente registrado !\nNome: " + client1.name + "\nNumero de Registro: " + client1.registrationNumber + "\nConsumo de Energia: " + client1.consumedEnergy + "\nConta a pagar: " + client1.calculateBill() + "\n\n");
