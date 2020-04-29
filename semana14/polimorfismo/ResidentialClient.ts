import { Residence } from "./Residence"
import { Client } from "./Client"


export class ResidentialClient extends Residence implements Client{
  private cpf: number 
  name: string
  registrationNumber: number
  consumedEnergy: number

  constructor(residentsQuantity:number, cep:string){
    super(residentsQuantity,cep)    
  }
  calculateBill(): number {
   return this.consumedEnergy*0.75
  }
  getcpf():number{
    return this.cpf
  }
}