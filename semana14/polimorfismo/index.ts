import {Client} from './Client'
import {Place} from './Place'
import {Residence} from './Residence'
import {Commerce} from './Commerce'
import {Industry} from './Industry'

// const client1: Clients = new Clients("Joaquina",12313231, 120)

// console.log(`O cliente ${client1.name}, registrado com o numero ${client1.registrationNumber} 
// consumiu esse mes ${client1.consumedEnergy}kWh e sua conta á pagar é de ${client1.calculateBill()}`)


/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 1

item A: Consegui imprimir todas as propriedades passadas, nome, numero de registro, consumo de energia e conta para ser paga
Porém eu tinha feito uma instancia relacionada a classe cliente que eu criei e não tinha feito somente um objeto e estava retornando tudo undefined.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 2

item A: Não foi possivel criar a nova instancia porque o typescript deu esse erro "Cannot create an instance of an abstract class." porque realmente 
a classe abstrata é só um modelo a ser seguido pelas subclasses
intem B: Eu acredito que criando a subclasse de place tipo residencialPlace extends Place e ai usar os atributos de Place ou o que mais deve ser seguido
ai somente seria necessário fazer a  nova instancia com todos os parametros tipados.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/
// Exercício 3

const residence1: Residence = new Residence(3,"12312312-32")
const commerce1: Commerce = new Commerce(12, "123132-55")
const industry1: Industry = new Industry(1200, "12321321-99")

console.log(`

O cep da nova residencia é ${residence1.getCep()}
O cep do novo comercio é ${commerce1.getCep()}
O cep da nova industria é ${industry1.getCep()}
`)

/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 4

item A: Essa classe possui os metodos de getcpf e getcalculate bill e as propriedades de name, registrationnumber e consumedenergy 
da classe interface client, residentQuantity e cep da classe residence e o cpf da sua propria classe. 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 5

item A: A semelhanças são dos atributos que foram herdados da interface client
item B: As diferenças são os atributos que foram herdados da classe commerce enquanto que a residential herdou da classe residence 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 6

item A: Da classe Industry porque esse pai está cuidando de todos os clientes da industria então tem todos os atributos que clientes de industria precisando
tipo o machineQuantity
item B: Deve ser implementada da interface cliente porque com isso ele tem os atributos para pagar a conta de luz, tipo o consumo de energia e a sua formula
que é diferente dos outros
item C: Poruqe nos só precisamos das informações com os getter então se eu quero calcular a conta de luz por exemplo eu quero quanto foi consumido 
a quantidade de maquinas e a formula necessária para isso, se eu precisava que o numero do consumo se alterasse por algum motivo ou fosse preciso
alterar o numero de maquinas ai teriamos criaod os setters para esses casos.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

