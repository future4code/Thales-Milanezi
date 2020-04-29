import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";

const User1: User = new User("userBananaMan", "bananaMan@yahoo.com", "Sr. Banana", "123456")
const customer1: Customer = new Customer("j1h3h4g5f4","jailtonsilvaLeme@gmail.com","Jailton Leme", "JAJA6152645LELE","123456789")
const employee1: Employee = new Employee("hahahah", "hahah@yahoo.com.br", "Rosalinda Figueira", "12312321"," 1990/01/21", 1258799)
const seller1: Seller = new Seller("iuhfowiucnweoi", "jabelao@hotmail.com", "carolina", "hdhdhd", "09/12/2020",15000)
const seller2: Seller = new Seller("jyujyuj", "mariajose@hotmail.com", "maria", "hdhdhd", "09/12/2020", 13300)
const seller3: Seller = new Seller("vsdvsvdsvs", "augustoricado@hotmail.com", "augusto", "hdhdhd", "09/12/2020", 22000)


console.log(` 
Novo usuário cadastrado com sucesso

Dados do novo usuario:
ID:${User1.getId()}
email: ${User1.getEmail()}
nome: ${User1.getName()}
senha: ${User1.getPassword()}
`
)

console.log(` 
Novo comprador cadastrado com sucesso

Dados do novo usuario:
ID:${customer1.getId()}
email: ${customer1.getEmail()}
nome: ${customer1.getName()}
senha: ${customer1.getPassword()}
cartão de crédito: ${customer1.getCreditCard()}
valor da compra: ${customer1.purchaseTotal}
introduce: ${customer1.getintroduceYourself()}
`
)
customer1.getintroduceYourself()

console.log(` 
Novo Empregado cadastrado com sucesso

Dados do novo Empregado:
ID:${employee1.getId()}
email: ${employee1.getEmail()}
nome: ${employee1.getName}
senha: ${employee1.getPassword}
data de admissão:${employee1.getAdmissionDate()}
salário Base: ${employee1.getBaseSalary()}
salario total: ${employee1.calculateTotalSalary()}
`
)

console.log(` 
Novo Vendedor cadastrado com sucesso

Dados do novo vendedor:
ID:${seller1.getId()}
email: ${seller1.getEmail()}
nome: ${seller1.getName()}
senha: ${seller1.getPassword()}
salário Base: ${seller1.getBaseSalary()}
salario total: ${seller1.calculateTotalSalary()}

`
)
console.log(` 
Novo Vendedor cadastrado com sucesso

Dados do novo vendedor:
ID:${seller2.getId()}
email: ${seller2.getEmail()}
nome: ${seller2.getName()}
senha: ${seller2.getPassword()}
salário Base: ${seller2.getBaseSalary()}
salario total: ${seller2.calculateTotalSalary()}
quantidade de vendas: ${seller2.getSalesQuantity()}
`
)
seller2.setSalesQuantity()

console.log(` 
Novo Vendedor cadastrado com sucesso

Dados do novo vendedor:
ID:${seller3.getId()}
email: ${seller3.getEmail()}
nome: ${seller3.getName()}
senha: ${seller3.getPassword()}
salário Base: ${seller3.getBaseSalary()}
salario total: ${seller3.calculateTotalSalary()}
quantidade de vendas: ${seller3.getSalesQuantity()}
`
)
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
/*
------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 6
Resporta item A: 3 vezes
Resporta item B: todos menos os privados, ele apareceu a função em si e não o dado dela.
-------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 8
Resporta item A: eu passei todos na verdade para criar o vendedor 
Resporta item B: eu consegui imprimir tudo dessa vez, diferente do exercicio anterior que ele ficava bloqueado os dados.
-------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 9
Resporta item A: Não consegui, ele imprimiu undefined
-------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 10
Resporta item A: foi impresso o valor do salário com base na nova função de calcular o salario
-------------------------------------------------------------------------------------------------------------------------------------------
*/