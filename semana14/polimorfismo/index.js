"use strict";
exports.__esModule = true;
var Residence_1 = require("./Residence");
var Commerce_1 = require("./Commerce");
var Industry_1 = require("./Industry");
// const client1: Clients = new Clients("Joaquina",12313231, 120)
// console.log(`O cliente ${client1.name}, registrado com o numero ${client1.registrationNumber} 
// consumiu esse mes ${client1.consumedEnergy}kWh e sua conta á pagar é de ${client1.calculateBill()}`)
/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 1

item A: Consegui imprimir todas as propriedades passadas, nome, numero de registro, consumo de energia e conta para ser paga
Porém eu tinha feito uma instancia relacionada a classe cliente que eu criei e não tinha feito somente um objeto e estava retornando tudo undefined.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 2

item A: Não foi possivel criar a nova instancia porque o typescript deu esse erro "Cannot create an instance of an abstract class." porque realmente
a classe abstrata é só um modelo a ser seguido pelas subclasses
intem B: Eu acredito que criando a subclasse de place tipo residencialPlace extends Place e ai usar os atributos de Place ou o que mais deve ser seguido
ai somente seria necessário fazer a  nova instancia com todos os parametros tipados.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/
// Exercício 3
var residence1 = new Residence_1.Residence(3, "12312312-32");
var commerce1 = new Commerce_1.Commerce(12, "123132-55");
var industry1 = new Industry_1.Industry(1200, "12321321-99");
console.log("\n\nO cep da nova residencia \u00E9 " + residence1.getCep() + "\nO cep do novo comercio \u00E9 " + commerce1.getCep() + "\nO cep da nova industria \u00E9 " + industry1.getCep() + "\n");
