function myFunction2(arr2): object {
  let maior = arr2[0]
  let menor = arr2[1]

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > maior) {
      maior = arr2[i]
    }

    if (arr2[i] < menor) {
      menor = arr2[i]
    }
  }
  let result = { maior, menor }
  return result
}

console.log(myFunction2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))