/*
Escreva uma função que receba uma string e determine a sua reversa (com as letras de trás para frente).
Para a entrada escola, deve retornar alocse
*/
var reverseWord = function (input) {
    var word = input.split('').reverse().join("");
    return word;
};
console.log(reverseWord("escola"));
