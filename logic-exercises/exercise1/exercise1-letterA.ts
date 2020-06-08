

function myFunction1(arr1): object {

  let soma = 0

  for (let i = 0; i < arr1.length; i++) {
    soma += arr1[i]
  }

  const qtd = arr1.length

  let multiplicacao = 1

  for (let i = 0; i < arr1.length; i++) {
    multiplicacao *= arr1[i]
  }

  const result = { soma, qtd, multiplicacao }

  return result
}

console.log(myFunction1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))