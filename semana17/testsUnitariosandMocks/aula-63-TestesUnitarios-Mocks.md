#### Exercício 3
a)
```
export const PerformAttack = (attacker: Character, defender: Character) => {
  if (
    attacker.name === undefined ||
    attacker.life === undefined ||
    attacker.strength === undefined ||
    attacker.defense === undefined &&
    defender.name === undefined ||
    defender.life === undefined ||
    defender.strength === undefined ||
    defender.defense === undefined
  ) {
    throw new Error("invalid Character")
  }
  if (defender.defense < attacker.strength) {
    defender.life = (attacker.strength - defender.defense) - defender.life
  }
}
```
b)
```
export const PerformAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("invalid Character")
  }
  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense
  }
}
```
c) Porque quando faz a inversão de dependencias podemos fazer testes unitarios na função o que não era possivel do outro jeito
#### Exercício 4