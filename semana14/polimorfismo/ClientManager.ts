import { Client } from "./Client"
import { ResidentialClient } from "./ResidentialClient"
import { CommercialClient } from "./CommercialClient"
import { IndustrialClient } from "./IndustrialClient"

export class ClientManager {
  private clients: Client[] = []

  constructor(clients: Client[]) {
    this.clients = clients
  }

  getClientsQuantity(): number {
    return this.clients.length
  }

  public registerClient(client: Client): void {
    this.clients.push(client)
  }
  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })
    if(foundClient){
      return foundClient.calculateBill()
  }
  return 0;
  }
  

}

const gerenciadorDeClientes: ClientManager = new ClientManager([])

const residentialClient1: ResidentialClient = new ResidentialClient("Nestor Silva", 123131232, 10, "1231321312")
gerenciadorDeClientes.registerClient(residentialClient1)
const comercialClient1: CommercialClient = new CommercialClient("Maria benedita", 987987, 14, "asfafsasf")
gerenciadorDeClientes.registerClient(comercialClient1)
const industrialClient1: IndustrialClient = new IndustrialClient("Jamelao Costa", 124214, 121, "24243224")
gerenciadorDeClientes.registerClient(industrialClient1)