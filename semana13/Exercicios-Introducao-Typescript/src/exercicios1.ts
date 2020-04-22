// type operadores = {
//   num1: Number,
//   num2: Number
// }

// function matematica: operadores (num1, num2) {
//   const soma = num1 + num2
//   const subtracao = num1 - num2
//   const multiplicacao = num1 * num2
//   const maior = num1 > num2 || num2 > num1

//   if (soma) {
//     console.log(soma)
//   }
//   if (subtracao) {
//     console.log(subtracao)
//   }
//   if (multiplicacao) {
//     console.log(multiplicacao)
//   }
//   if (maior) {
//     console.log(maior)
//   }
// }

// function soma(a: number, b: number): Number{
//   return a+b
// }
// function subtracao(a: number, b: number): Number{
//   return a-b
// }
// function multiplicacao(a: number, b: number): Number{
//   return a*b
// }
// function maior(a: number, b: number): Number{
//   return a > b
// }

function matematica(num1: number, num2: number) {
  const soma = num1 + num2
  const subtracao = num1 - num2
  const multiplicacao = num1 * num2
  let resultado

  if(resultado === num1 > num2){
    console.log(`O numero ${num1} é maior que o numero ${num2}`)
  }else{
    console.log(`O numero ${num2} é maior que o numero ${num1}`)
  }
  
  console.log("A soma desses dois numeros é", soma)

  console.log("A subtração desses dois numeros é", subtracao)

  console.log("A multiplicação desses dois numeros é", multiplicacao)

  console.log(resultado)

  console.log(matematica(8, 12))
}


