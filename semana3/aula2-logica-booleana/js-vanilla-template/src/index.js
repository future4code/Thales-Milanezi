/* Exercícios de interpretação --- 1 ---
1- bool1 && bool2 && bool3
console.log("a. ", resultado)
a. false

resolução: true e false e true = false 

2- (bool2 || bool1) && !bool3
console.log("b. ", resultado)
b. false

resolução: false ou true = true 
true e false = false

3- !resultado && (bool1 || bool1)
console.log ("c. ", resultado)
c. true

resolução: !resultado= true
true ou true = true
true & true = true

4. (resulta && (!bool1 || bool2)) && ! bool3
console.log("d. ", resultado)
d. false

resolução: (false e (false))
false e false
false

5. console.log ("e. ", typeof resultado)
e. boolean
*/

/*  Exercícios de interpretação --- 2 ---
1- Arrays é um modo de guardar e acessar varias informações ao mesmo tempo
ela é declarada let array[ info1, info2, info3, ]  para resgatar ex: array[1]
e pode ser varios tipos de informações, string, number, etc...
2- index inicial é 0
3- para determinar o tamanhao é só usar o comando array.length
4-  I. array
    II. array 
    III. 11
    IV. 0 e 1
    V. 20 e 24
    VI. 0
    VII. -3


*/


/*Exercícios de escrita --1--- */

let fahrenheit = 77
const resultado = (fahrenheit-32)*5/9+273.15
console.log(resultado, + "K")
//resultado 298.15


const celsius = 80
let resultado = (celsius)*9/5+32
console.log(resultado, + "ºF")
//176

const celsius = 30
let resultado =(celsius)*9/5+32
console.log(resultado,"ºF")
let resultado2=(resultado-32)*5/9+273.15
console.log(resultado2, + "K")

const temperaturaCelsius= prompt("Qual o valor da temperatura?")
let resultado =(temperaturaCelsius)*9/5+32
console.log(resultado, + "ºF")
let resultado2=(resultado-32)*5/9+273.15
console.log(resultado2, + "K")


/*Exercícios de escrita 2 */

const comida = prompt ("Qual seu tipo de comida favorito?")
console.log(comida)
let esporte = prompt ("Qual seu esporte favorito?")
console.log(esporte)
let jogos = prompt ("Qual o jogo de video-game voce mais lembra da sua infância")
console.log(jogos)
let cor = prompt("Qual cor voce mais veste em suas roupas?")
console.log(cor)
let aplicativo = prompt("Se voce fosse um aplicativo, qual voce seria?")
console.log(aplicativo)

/*Exercícios de escrita 3 */
let energia = 280
let dinheiro = 0.05
let gasto =(energia*dinheiro) 
console.log(gasto) 

let energia = 280
let dinheiro = 0.05
let gasto =(energia*dinheiro)/0.15
console.log(gasto)
