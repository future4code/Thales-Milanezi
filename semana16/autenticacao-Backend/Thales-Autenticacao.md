#### Exercício 1
a)Acredito que sim porque quando voce coloca tipo string voce pode colocar nessa string tudo que quiser, letras, numeros, caracteres especiais então as combinações com esses caracteres é gigantesca e com isso muito dificil de quebrar.
b)
```
import {v4} from 'uuid'

export class IdGenerator{
  public idGenerator(): string {
    const id = v4();
    return id 
  }
}
```

#### Exercício 2
a)