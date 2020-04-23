import {readdir, readFile} from "fs"


const myPromise: Promise<string> = new Promise ((resolve, reject)=> {

  const handleFileRead = (err: Error, data: Buffer) =>{
    try{
    const fileContent: string = data.toString();
    console.log(fileContent)
    } catch(e){
      console.error("deu error", err)
    }
  }
  readFile("1.txt", handleFileRead)
})


readdir("./textos", (error, file)=> {
  if(error){
    console.error(error)
  }
  file.forEach(el => {
    return myPromise
  });
})