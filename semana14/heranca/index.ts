import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import * as moment from 'moment'

const User1: User = new User("userBananaMan", "bananaMan@yahoo.com", "Sr. Banana", "123456")
const customer1: Customer = new Customer("j1h3h4g5f4","jailtonsilvaLeme@gmail.com","Jailton Leme", "JAJA6152645LELE","123456789")
const employee1: Employee = new Employee("hahahah", "hahah@yahoo.com.br", "Rosalinda Figueira", "12312321"," 1990/01/21", 1258799)

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
