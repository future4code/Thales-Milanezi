function identifyStrings(word: string): any {
  for (let i = 0; i < word.length; i++) {
    let wordTypeNumber = parseInt(word)
    if (wordTypeNumber) {
      return true
    } else {
      return false
    }
  }
}
console.log(identifyStrings("Cogumelo"))

// está errado