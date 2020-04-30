import * as fs from 'fs'

export class LabenuSchoolManager {
  constructor(private fileName: string) { }

  public setFileName(path: string): void {
    this.fileName = path
  }

  public writeFile(data: any): void {
    fs.writeFileSync(this.fileName, JSON.stringify(data))
  }

  public readFile() {
    const data = fs.readFileSync(this.fileName)
    return JSON.parse(data.toString())
  }

//   const fm = new FileManager("arquivo");

// console.log(fm.readFile());

// fm.setFilePath("outro-arquivo");


// fm.writeFile({
//   id: "1",
//   name: "Goli",
// });
  
}