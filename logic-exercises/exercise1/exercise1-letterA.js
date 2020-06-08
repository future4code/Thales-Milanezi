function myFunction1(arr1) {
    var soma = 0;
    for (var i = 0; i < arr1.length; i++) {
        soma += arr1[i];
    }
    var qtd = arr1.length;
    var multiplicacao = 1;
    for (var i = 0; i < arr1.length; i++) {
        multiplicacao *= arr1[i];
    }
    var result = { soma: soma, qtd: qtd, multiplicacao: multiplicacao };
    return result;
}
console.log(myFunction1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
