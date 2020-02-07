//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


/* 
1-) A função do exercício 1 realiza a conversão de moeda para dolares.
Então foi feito uma função em que o usuário recebe uma caixa de texto pelo comando prompt
e o usuário deve digitar um valor da cotação do dolar e esse valor tem que ser numérico
então vai retornar uma string "R$" mais o valor da cotação que o usuario digitar e vai fazer vezes 100
meu dinheiro vai ser o valor dessa conversão

2-) o Exercicio 2 é um switch case que o usuario vai escolher o tipo de investimento que ele vai querer
e então o valor será uma conversao do investimento escolhido
Primeiro foi criado uma function que recebeu 2 paramentos e uma variavel
o switch foi criado em 4 casos de escolha  e um default caso nenhum dos casos forem selecionados
o retorno será valoraposInvestimento que é depois da escolha do investimento e a conversão
logo apos a função foi feito 2 nosvas constantes para serem impresas no console
O novoMontante será com o valor de 165
o segundoMontante será com o valor default porque não existe o case tesouro direto

3-) O exercício 3 é um exercicio de criar novos  arrays e isso é feito pelo comando push verificando
se o numero é par vau para o array 1 e se é impar vai para o array 2
Primeiro é criado um array com 14 numeros e depois mais dois arrays sem valores dentro porque será adicionado depois
utilizando o For para percorrer pelo array numeros ele vai verificar se os são pares e impares.
SE for par vai para o array1 se não for vai para o array2
o primeiro console.log vai imprimir a quantidade de itens que tem no array com o comando.length (14)
o segundo vai imprimir a quantidade de itens no array1 tambem utilizando o length (6)
o terceiro vai imprimir a quantidade de itens no array2 tambem utilizando o length (8)

4-)O exercicio 4 é um exercicio para verificar se um numero é maior ou menor que outro
Foi criado um Array com diversos numeros aleatorios imagino e tambem duas variasveiz a numero1 que recebe infinito ou seja nenhum numero é maior que que ele
e a variavel numero 2 que qualquer numero positivo é maior que ele
Foi feito um For para percorrer o array e 2 if para verificar condições
no primeiro if ele quer que todo numero menor que o infinito  o numero1 é igual a constante numero
no segundo if o numero tem que ser maior que o numero2 para que numero2 seja igual a numero
No Primeiro console.log ele tem que imprimir todos os numeros porque todos os numeros são menores que infinitos nesse array
no segundo console.log ele vai imprimrir somente os numeros negativos ou seja o -10

*/


//  EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO


// Exercício 1
// Para percorrer um Array por ser utlizado o While, o For, o For... of... e  
/* Esse codigo vai mostrar as frutas com indice menor que 3, o 3 não entra  
const frutas = ["banana","maça","laranja","uva","abacaxi"]
  for( let numeroFrutas = 0; numeroFrutas < 3; numeroFrutas++){
      const quitanda = frutas[numeroFrutas]
      console.log(quitanda)
  }
  */

  //Exercício 2

/*      A-) False
        B-) false
        C-) True
        D-) True
        E-) True
*/

// Exercício 3
/* Esse código não funciona porque o amigo não deu não deu um valor 
para a variavel quantidade de numeros pares que eu coloquei 0, esqueceu de colocar a verificação se o numero é par ou não e também esqueceu o incremento que eu coloquei i++  */
/*
let quantidadeDeNumerosPares = 0

while(quantidadeDeNumerosPares <= 10) {
  if(quantidadeDeNumerosPares %2 === 0){
      console.log(quantidadeDeNumerosPares)
  }
  quantidadeDeNumerosPares++
}
*/
// Exercício 4
/*
const trigonometria = (a, b, c) =>{

    if( a === b && b === c && c === a) {
        console.log("Esse triangulo é equilátero")
    } if(a === b && b === c && c !== a) {
        console.log("Esse triangulo é escaleno")
    } if(a !==b && b !==c && c !== a) {
        console.log("Esse triangulo é isoceles")
    }
    
}
console.log(trigonometria(4,1,2))
*/
// EXERCÍCIO 5
const comparacao = (a , b) =>{
 
    if(a > b){
        console.log(a + "é maior que " + b)
    } else{
        console.log(b + "é maior que " + a)
    }
        if(a % b ===0){
        console.log(a + " é divisivel por " + b)
    } else {
        console.log(a + " não é divisivel por " + b)
    }
    const sub = (a - b)
    console.log(sub)
}
console.log(comparacao(12,22))

//12,54,64,24,64,76,9,71,12,2,20
//  EXERCÍCIOS DE FUNÇÃO
/*const arraydeNumeros = [12,54,64,24,64,76,9,71,12,2,20]

function maiorMenor ([arraydeNumeros]){
    for(let i=0; i < arraydeNumeros; i++){ 
        if( )
    }
    
}
*/