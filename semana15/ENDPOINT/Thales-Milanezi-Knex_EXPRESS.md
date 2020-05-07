#Exercicio 1
a) Quando é utilizado o raw o knex não faz interferencias nas respostas que vão para o banco de dados e tambem as que voltam do banco de dados, então na resposta vem um monte de informações que em um primeiro momento não é interessante para nos mas podemos acessar as respostas que queremos utilizando posições de arrays porque a resposta está dentro de um array.
b)
```
const getActorbyName = async (nome: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name= "${nome}"
  `)
  return result[0]
}
async function main(): Promise<void> {
  await getActorbyName("Diario de um banana")
}
main();
```
c)
```
const ActorCount = async (gender: string): Promise<any> =>{
  const response = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)
  const count = response [0][0].count;
    return count
}
async function main(): Promise<void> {
  await ActorCount("male")
}
main();

async function main(): Promise<void> {
  await ActorCount("female")
}
main();

```