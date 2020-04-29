import { Place } from "./Place";

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }
  getmachinesQuantity(): number {
    return this.machinesQuantity
  }
}