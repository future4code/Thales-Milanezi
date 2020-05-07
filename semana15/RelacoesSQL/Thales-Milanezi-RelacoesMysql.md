
### Exercício 1
a) Foreign Key se refere a uma chave criada para fazer relações com outras tabelas, sem a chave estrangeira não temos como fazer a conexão com uma chave primaria entre outra tabela

b)
```
CREATE TABLE rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
filmes_id VARCHAR(255),
FOREIGN KEY (filmes_id) REFERENCES Filmes(id)
);

INSERT INTO rating (id, comment, filmes_id,rate)
VALUES(
"003",
"Esse filme é top ",
"003",
8
);

INSERT INTO rating (id, comment, filmes_id,rate)
VALUES(
"037",
"Esse filmes foi muito louco, tem ação aventura, tem",
"001",
8
);

```

c) Como o filme não existe  
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_thales_db`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `Filmes` (`id`))

```
d) 
```
ALTER TABLE rating DROP rate;
```

e)porque as tabelas estão relacionadas então não é possivel deletar
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_thales_db`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `Filmes` (`id`))
```

### Exercício 2
a) Tabela que juntam 2 tabelas utilizando duas chaves estrangeiras.

b)
```
INSERT INTO MovieCast(Filmes_id, Actor_id)
VALUES(
"001",
"002"
);

INSERT INTO MovieCast(Filmes_id, Actor_id)
VALUES(
"002",
"003"
);

INSERT INTO MovieCast(Filmes_id, Actor_id)
VALUES(
"002",
"001"
);
```
c) Esse erro foi criado porque não possui um filme para estabelecer a relação como autor solicitado.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_thales_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`Filmes_id`) REFERENCES `Filmes` (`id`))

d) Não foi possivel deletar o ator porque ele contem uma relação com a chave estrangeira com outras tabelas.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_thales_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`Filmes_id`) REFERENCES `Filmes` (`id`))

### Exercício 3
a)Essa query mostra o resultado da tabela filmes junto com o rating atraves do id dos filmes e do rating.
Para unir duas colunas que possuem o mesmo nome na operação JOIN

b)
```
SELECT Filmes.id, Filmes.nome, rating.comment FROM Filmes 
INNER JOIN rating ON Filmes.id = rating.id;
```

### Exercício 4
a)
```
SELECT Filmes.nome, Filmes.id, Filmes.evaluation, rating.comment FROM Filmes
JOIN rating ON Filmes.id = rating.Filmes_id;
```
b)
```

```