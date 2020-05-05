### Exercício 1
a) Comandos:
* VARCHAR = É utilizado para representar as strings, é necessário tambem colocar o numero de caracteres máximo que esse campo pode ter entre os parenteses
* PRIMARY KEY = chava único que representa aquela linha, nunca pode ter dois valores iguais de primary key
* DATE = utilizado para representar as datas no formato(YYY-MM-DD)
* NOT = Serve para negar alguma condição
* NULL = representar um valor nullo na tabela

b) Usei o show databases e ele me retornou duas linhas o de as informações do schema e a minha base de dados sagan_thales_db então é pra mostrar as bases de dados que tem no projeto.
usei o SHOW TABLES e ele me mostrou uma lista com as tabelas da minha base de dados e no caso so tinha uma que era a de actor.

c) O comando show actor estava errado, eu tomei um erro ao tentar usar ele, ai eu procurei na internet e achei o desc que é abreviatura do describe e ai sim ele me mostrou todas as linhas da minha tabela de atores. Detalhou o field, o type, se ele era nullo, qual era a primary key, o default dele estava todos como null.
```
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL, 
birth_date DATE NOT NULL, 
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

DESC Actor;
```


### Exercício 2
a)
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
```

b) 
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Miguel Borja",
15,
"1998-02-11",
"male"
);
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
código do erro 1062. Entrada duplicada 002 para a chave primaria.
Esse erro ocorreu porque esse novo ator que criei tem a mesma key da gloria pires e nenhuma linha da tabela pode ter a mesma key

c) 
Error Code: 1136. Column count doesn't match value count at row 1
Código do erro 1136. A coluna não bate com o valor correspondente da linha 1
resposta: Ocorreu esse error porque no insert foi falado que seria adicionado o id, o nome e o salario e no momento de passar as informações foi além od solicitado, a data de nascimento e o genero.
###### Correção
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d)
Error Code: Error Code: 1364. Field 'name' doesn't have a default value
código do erro 1364. O campo nome não tem um valor vazio.
resposta: O erro ocorreu nesse caso porque o campo nome não foi preenchido e ele não pode ser nulo.
###### Correção
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
código do erro 1292. Valor da data incorreto, 1950 para a coluna birth_date na linha 1
resposta: esse erro ocorreu porque esta com o formato errado, esqueceram de colocar as aspas duplas ""
###### Correção
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Grazi Massafera",
  10500000,
  "1982-06-28", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Cauã Reymond Marques",
  800228,
  "1980-05-20", 
  "male"
);
```
### Exercício 3
a)
```
SELECT * 
FROM Actor
WHERE gender = "female";

```
b)
```
SELECT salary 
FROM Actor
WHERE name = "Tony Ramos";

```
c) Retornou uma lista vazia porque não tem  nenhum genero como invalid
```
SELECT * 
FROM Actor
WHERE gender = "invalid";
```

d) 
```
SELECT id, name, salary 
FROM Actor
WHERE salary <=500000;
```
e) 
Error Code: 1054. Unknown column 'nome' in 'field list'
código do erro 1054 coluna nome é desconhecido nos campos da lista
Ocorreu porque inicialmente colocamos name e não nome então esta com erro por causa de digitação incorreta.
```
SELECT id, name 
from Actor 
WHERE id = "002";
```

### Exercício 4
a) Esse query quer selecionar tudo que estiver na tabela autor onde PRIMEIRO veja se o nome começa com A ou J e depois disso que o salário seja maior que 300000
b)
```
SELECT * 
FROM Actor
WHERE name NOT LIKE "A%" AND salary > 305000;
```
c)
```
SELECT * 
FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```
d)
```
SELECT * 
FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%") 
AND (name LIKE "%G%" OR name LIKE "%g%") 
AND salary BETWEEN "350000" AND "900000" 
```

### Exercício 5
a) Esse query vai criar uma tabela com nome filmes e com as colunas de id, nome, sinopse, data de lançamento e avaliação, todas tipadas só que sem informações ainda, nenhuma informação pode ser nula.
```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
	evaluation FLOAT NOT NULL
);
```

b)
```
INSERT INTO Filmes (id, nome, sinopse, release_date, evaluation)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

c)
```
INSERT INTO Filmes (id, nome, sinopse, release_date, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

d)
```
INSERT INTO Filmes (id, nome, sinopse, release_date, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e)
```
INSERT INTO Filmes (id, nome, sinopse, release_date, evaluation)
VALUES(
  "004", 
  "O auto da Compadecida",
  "As aventuras de João Grilo , um sertanejo pobre e mentiroso, e Chicó, o mais convarde dos homens. Ambos lutam pelo pão de cada dia e tramam divertidas travessuras",
  "2000-09-10", 
  10
);
```
### Exercício 6
a)
```
SELECT id, nome, evaluation
FROM Filmes
WHERE id = "001";
```

b)
```
SELECT *
FROM Filmes
WHERE nome = "O auto da Compadecida";
```

c)
```
SELECT id, nome, sinopse
FROM Filmes
WHERE evaluation >= 7;
```

### Exercício 7
a)
```
SELECT *
FROM Filmes
WHERE nome LIKE "%vida%"
```

b)
```
SELECT *
FROM Filmes
WHERE nome LIKE "%o%" OR sinopse LIKE "%o%";
```

c)
```
SELECT *
FROM Filmes
WHERE release_date < "2020-05-04";
```
d)
```
SELECT *
FROM Filmes
WHERE release_date < "2020-05-04" AND (nome LIKE "%a%" OR sinopse LIKE "%a%")AND evaluation > 7 
```