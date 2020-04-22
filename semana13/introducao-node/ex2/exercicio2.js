  const fs = require("fs")
  const data = `\n${process.argv[2]}`
  const fileName = "listaDeTarefas.txt"

// try {
//     fs.writeFileSync(fileName, data)
//     console.log("Arquivo criado com Sucesso !")
//   } catch (err) {
//     console.log(err)
//   }

  try{
    fs.appendFileSync(fileName, data, 'utf8')
    console.log("Dado inserido com sucesso")
  }catch(err){
    console.log(err)
  }