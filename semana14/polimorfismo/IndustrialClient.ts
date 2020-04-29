import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client{
  private industrialRegister: number
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  machinesQuantity: number
  cep: string

  constructor(machinesQuantity: number, cep: string){
    super(machinesQuantity, cep)
  }


  calculateBill(): number {
    return (this.consumedEnergy*0.45)+this.machinesQuantity*100
  }

  getmachinesQuantity(): number {
    return this.machinesQuantity
  }

  getindustrialRegister(): number {
    return this.industrialRegister
  }
}