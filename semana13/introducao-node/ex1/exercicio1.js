// Exercício 1
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
//O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])

const soma = num1 + num2
const subtracao = num1-num2
const multiplicacao = num1*num2
const divisao = num1/num2

console.log(`O valor da soma de ${num1} e ${num2} é ${soma}`)
console.log(`O valor da subtração de ${num1} e ${num2} é ${subtracao}`)
console.log(`O valor da multiplicação de ${num1} e ${num2} é ${multiplicacao}`)
console.log(`O valor da divisão de ${num1} e ${num2} é ${divisao}`)