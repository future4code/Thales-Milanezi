export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
}

const client1 = {
name: "joaquina",
registrationNumber: 12313132,
consumedEnergy: 240,

calculateBill(): number {
  return 2*5
}
}
console.log(`
Novo cliente registrado !
Nome: ${client1.name}
Numero de Registro: ${client1.registrationNumber}
Consumo de Energia: ${client1.consumedEnergy}
Conta a pagar: ${client1.calculateBill()}

`)
