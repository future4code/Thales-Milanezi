"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Customer_1 = require("./Customer");
var Employee_1 = require("./Employee");
var User1 = new User_1.User("userBananaMan", "bananaMan@yahoo.com", "Sr. Banana", "123456");
var customer1 = new Customer_1.Customer("j1h3h4g5f4", "jailtonsilvaLeme@gmail.com", "Jailton Leme", "JAJA6152645LELE", "123456789");
var employee1 = new Employee_1.Employee("hahahah", "hahah@yahoo.com.br", "Rosalinda Figueira", "12312321", " 1990/01/21", 1258799);
console.log(" \nNovo usu\u00E1rio cadastrado com sucesso\n\nDados do novo usuario:\nID:" + User1.getId() + "\nemail: " + User1.getEmail() + "\nnome: " + User1.getName() + "\nsenha: " + User1.getPassword() + "\n");
console.log(" \nNovo comprador cadastrado com sucesso\n\nDados do novo usuario:\nID:" + customer1.getId() + "\nemail: " + customer1.getEmail() + "\nnome: " + customer1.getName() + "\nsenha: " + customer1.getPassword() + "\ncart\u00E3o de cr\u00E9dito: " + customer1.getCreditCard() + "\nvalor da compra: " + customer1.purchaseTotal + "\nintroduce: " + customer1.getintroduceYourself() + "\n");
customer1.getintroduceYourself();
console.log(" \nNovo Empregado cadastrado com sucesso\n\nDados do novo Empregado:\nID:" + employee1.getId() + "\nemail: " + employee1.getEmail() + "\nnome: " + employee1.getName + "\nsenha: " + employee1.getPassword + "\ndata de admiss\u00E3o:" + employee1.getAdmissionDate() + "\nsal\u00E1rio Base: " + employee1.getBaseSalary() + "\n");
/*
-----------------------------------------------------------------------------------------------------------------------------------------
Exercicio 1
Resporta item A: Não seria possivel imprimir o password porque não foi feito um getter para ele na classe User, para imprimir ele igual os outros atributos
é preciso criar o getter
ex: public getPassword(): string {
    return this.password
  }
Resporta item B: No meu código foi chamado uma vez só
-----------------------------------------------------------------------------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------------------------------------------------------------------------
Exercicio 2
Resporta item A: Foi chamado uma vez
Resporta item B: Foi chamado duas vezes. Porque acredito que tenha sido chamado uma vez no filho e uma vez no pai por isso apareceu 2.
-----------------------------------------------------------------------------------------------------------------------------------------
*/
/*
------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 3
Resporta item A: Seria possivel somente se fosse criado o getter de password no user que da pra er reaproveitado no customer
-------------------------------------------------------------------------------------------------------------------------------------------
*/
