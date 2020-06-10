function upperCaseAndLowerCase(word1: string, word2:string): boolean {
  if (
    word1.toUpperCase() === word2.toUpperCase() ||
    word1.toLowerCase() === word2.toLowerCase() &&
    word1.toUpperCase() == word2.toUpperCase() ||
    word1.toLowerCase() == word2.toLowerCase()
    ) {
    return true
  } else {
    return false
  }
}
console.log(upperCaseAndLowerCase("escola", "escola"))