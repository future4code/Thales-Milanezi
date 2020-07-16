/*
Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  `1! = 1` e `0! = 1` (uma exceção da regra!).

a) Escreva uma função que determine o fatorial para um número  `n >= 1` .

b) Reescreva a função acima para determinar o fatorial de um número `n >= 0`.
*/
//A)
var FatorialNumber = function (num) {
    var fatorial = num;
    for (var i = 1; i < num; i++) {
        fatorial = fatorial * i;
    }
    return fatorial;
};
console.log(FatorialNumber(3));
//B
var refactFatorialNumber = function (num) {
    var zeroFatorial;
    for (var i = 1; i < num; i++) {
        zeroFatorial = zeroFatorial * i;
    }
    if (zeroFatorial === 0) {
        return 1;
    }
    else {
        return zeroFatorial;
    }
};
console.log(refactFatorialNumber(0));
