/* Exercícios de interpretação de código -- 1 --
utilizando o for ele repete uma ação ate que a condição seja falsa
nesse caso a expressão inicial é 0, a condição é que ele seja menor que 15 
e o incremento é que a cada repetição aumente 1.
A declaração é que o sum que é zero recebe mais um sum e mais 1 do i e a cada repetição até i chegar no quinze
ex: sum = sum +1
    sum = 0 + 1
    sum = 1 + 2
    sum = 3 + 3
    sum = 6 + 4
    sum = 10 + 5
    sum = 15 + 6
    sum = 21 + 7
    sum = 28 + 8
    sum = 36 + 9
    sum = 45 + 10
    sum = 55 + 11
    sum = 66 + 12
    sum = 78 + 13
    sum = 91 + 14
 resposta do resultado impresso no console:  105
    para nesse porque é menor e não menor e igual
*/
/*Exercício de interpretação -- 2 ---
a)O comando push insere mais um elemento no array
b)O valor impresso no console será somente os valores que forem multiplos de 5
[10,15,25,30]
c) se fosse 3 seria somente os numeros multiplos de [3, 12, 15, 18, 21, 27, 30]
se fosse 4 somente os valores  que são multiplos de 4 [12]
*/
/* Exercício de escrita -- 3 -- */

//A)
/*
const num = [80, 30, 130, 40, 60, 21, 70, 120, 90, 102, 110, 55]
let maior = num[0]
let menor = num[0]

for(let i = 0; i < 12; i++){
    const elemento = num[i]

    if(elemento > maior){
        maior = elemento
    }
    if (elemento < menor)
    menor = elemento
}
console.log(maior, menor)
*/

//B)
/*
const num = [80, 30, 130, 40, 60, 21, 70, 120, 90, 102, 110, 55]
const newls = []
const numero = 10
for(const item of num){
  if(item % numero === 0) {
    newls.push(item)
  }
}
console.log(newls)
*/
//C)
/*
const num = [80, 30, 130, 40, 60, 21, 70, 120, 90, 102, 110, 55]
const newls = []
const numero = 2
for(const item of num){
  if(item % numero === 0) {
    newls.push(item)
  }
}
console.log(newls)
*/
//D)
/*
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 102, 110, 55]

for(let i = 0; i<12; i++){
const elemento = numeros[i] 
    console.log("O elemento do índex" + elemento + " é " + numeros[i]) 
}
*/
