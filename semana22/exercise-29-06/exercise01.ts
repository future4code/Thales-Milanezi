const oneEdit = (str: string, compareWord: string): boolean => {
  if(str.length > compareWord.length +1 || str.length < compareWord.length -1){
    return false
  }

  let charQTD = 0 

  for (const char of compareWord) {
    if(compareWord.indexOf(char) !== -1) {
      charQTD++
    }
  }
  return(
    charQTD <= compareWord.length +1 &&  charQTD >= compareWord.length -1 
  )
}

oneEdit("suco","uco")
oneEdit("suco","Sujo")
oneEdit("suco","Suuco")


//tentativa sem ajuda
// const addCharacter = (str: string): string => {
//   const result = str + str

//   return result 
// }

// const remCharacter = (str: string): string => {
//   const result = str.slice()
//   return
// }

// const subCharacter = (str: string): string => {
//   const result = str.replace(/str/gi, str)
//   return
// }
