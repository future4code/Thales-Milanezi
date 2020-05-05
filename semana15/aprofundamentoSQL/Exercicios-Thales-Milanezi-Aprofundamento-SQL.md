
### Exercício 1
a) Esse comando faz com que a coluna de salário seja apagada.

b)Esse comando altera o nome da coluna, o gender agora tem o nome de sex com o varchar de 6 caracteres.

c)Esse comando tambem faz alteração de nome, porém o nome continua o mesmo só que foi alterado o tipo dele, o varchar agora sera de 255 caracteres ao inves de 6.

d) 
```
ALTER TABLE Actors CHANGE gender gender VARCHAR(100);
```
### Exercício 2
a)
```
UPDATE Actor
SET name = "Paulo Augusto Ricardo" 
WHERE id = "003";

UPDATE Actor
SET birth_date = "2002/07-15" 
WHERE id = "003";
ou
UPDATE Actor
SET birth_date = "2002/07-15",
name = "Paulo Augusto Ricardo"
WHERE id = "003";

```
b)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";
ou
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
---------------------------------------------------------
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```
c)
```
UPDATE Actor
SET 
name = "Joaquina Guilhermina Toscana",
salary = 121233,
birth_date= "1987-09-22",
gender = "male"
WHERE id = "005";
```
d)
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
O que eu obtive não foi um erro, ele conseguiu realizar a operação porem não teve nenhuma linha afetada, nenhuma mudança ou alteração, isso foi o que estava escrito na response.
```
### Exercício 3
a) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b) 
```
DELETE FROM Actor Where salary > 1000000 AND gender = "male";
```

### Exercício 4
a) 
```
SELECT MAX(salary) FROM Actor;
```
b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) 
```
SELECT SUM(salary) FROM Actor;
```
### Exercício 5
a) Ess query retonou 4 homens e 2 mulheres ou seja da tabela atores ele buscou quem era pelo genero quem era male e quem era female e ainda contou quantos tinhas de cada um
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
b) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c) Não coloquei ASC porque ele é o default
```
SELECT * FROM Actor
ORDER BY salary;
```
d) 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e) 
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6
a) 
```
ALTER TABLE Filmes 
ADD Data_Saida_Cinema VARCHAR(255);
```
b) 
```
ALTER TABLE Filmes 
CHANGE evaluation evaluation FLOAT;
```
c)
```
UPDATE Filmes
SET Data_Saida_cinema = "2019-05-30"
WHERE id = "002";

UPDATE Filmes
SET Data_Saida_cinema = "2020-05-15"
WHERE id = "001";
```
d) Quando tentei atualizar o que os filme que apaguei ele não deu erro mais mostrou que não afetou nada.
```
DELETE FROM Filmes WHERE id = "003";
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

UPDATE Filmes
SET sinopse = "Esse filme é muito bom "
WHERE id = "003";
```

### Exercício 7
a) 
```
SELECT COUNT(*) FROM Filmes
WHERE evaluation > 7.5;
```
b) 8.7
```
SELECT AVG(evaluation) FROM Filmes;
```
c) 2
```
SELECT COUNT(*) FROM Filmes
WHERE Data_Saida_Cinema > curdate();
```
d)4
```
SELECT COUNT(*) FROM Filmes
WHERE Data_Saida_Cinema < curdate() ;
```
e)10
```
SELECT MAX(evaluation) FROM Filmes;
```
f)5.9
```
SELECT MIN(evaluation) FROM Filmes;
```

### Exercício 8
a) 
```
SELECT * FROM Filmes
ORDER BY nome ;
```
b) 
```
SELECT * FROM Filmes
ORDER BY nome DESC
LIMIT 5;
```
c) 
```
SELECT * FROM Filmes
WHERE release_date < curdate() 
ORDER BY release_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Filmes 
ORDER BY evaluation DESC;
```