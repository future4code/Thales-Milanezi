import { Commerce } from "./Commerce"
import { Client } from "./Client"

export class CommercialClient extends Commerce implements Client{
  private CNPJ: string
  name: string
  registrationNumber: number
  consumedEnergy: number
  floorsQuantity: number
  cep: string

  constructor(floorsQuantity: number,cep: string){
    super(floorsQuantity, cep)
    this.CNPJ
  }
 
  calculateBill(): number {
    return this.consumedEnergy*0.53
  }
  getCNPJ(): string {
    return this.CNPJ
  }
}