function reciveStringReturnArray(text: string): string[]{
  let myArr = []
  for(let i = 0; i < text.length; i++){
    myArr.push(text[i])
  }
  return myArr
}

console.log(reciveStringReturnArray("Geleia"))