export const validateCharacter = (input: Character) => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false
  }
  else if (input.life < 0 || input.defense < 0 || input.strength < 0) {
    return false
  } else {
    return true
  }
}

// export const PerformAttack = (attacker: Character, defender: Character) => {
//   if (
//     attacker.name === undefined ||
//     attacker.life === undefined ||
//     attacker.strength === undefined ||
//     attacker.defense === undefined &&
//     defender.name === undefined ||
//     defender.life === undefined ||
//     defender.strength === undefined ||
//     defender.defense === undefined
//   ) {
//     throw new Error("invalid Character")
//   }
//   if (defender.defense < attacker.strength) {
//     defender.life = (attacker.strength - defender.defense) - defender.life
//   }
// }

export const PerformAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("invalid Character")
  }
  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense
  }
}

interface Character {
  name: string,
  life: number,
  defense: number,
  strength: number,
}