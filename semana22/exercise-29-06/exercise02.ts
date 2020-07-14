const compressWord = (input: string): string => {
  const substring: string[] = []
  let lastChar = input[0]
  console.log(lastChar)
  console.log()
  let charCount = 0

  for (const char of input) {
    if (char !== lastChar) {
      substring.push(lastChar + charCount);
      console.log(substring)
      lastChar = char
      console.log(lastChar)
      charCount = 0
    }
    charCount++
    console.log(charCount)
  }

  substring.push(lastChar + charCount)
  let result = "";
  for (const key of substring) {
    result += key
    console.log(result)
  }
  return result.length > input.length ? input : result;
}