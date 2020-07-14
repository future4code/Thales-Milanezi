/* 
Escreva uma função que receba uma string e determine a sua reversa (com as letras de trás para frente). 
Para a entrada escola, deve retornar alocse
*/
//----------- MODO NORMAL ----------------------
const reverseWord = (input: string):string => {
const word = input.split('').reverse().join("")
  return word
}
console.log(reverseWord("escola"))

