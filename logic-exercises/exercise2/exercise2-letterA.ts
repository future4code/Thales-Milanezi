function reciveStringReturnObject(text: string): object {
  const allCaracters = text.length
  const firstCaracter = text[0].length
  const lastCaracter = text[text.length -1]

  return { allCaracters, firstCaracter, lastCaracter }
}

console.log(reciveStringReturnObject("thales"));