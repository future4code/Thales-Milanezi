import { validateCharacter } from "../src/ValidateCharacter"

describe("Testing de character of the game", ()=> {
  test("Should return false when our character name is a empty input", () => {
    const result = validateCharacter({
     name: "",
     life: 1500,
     strength: 8000, 
     defense: 12
    });

    expect(result).toBe(false)
  })
  test("Should return true when our character life is 0", ()=> {
    const result = validateCharacter({
      name: "Junkrat",
      life: 0,
      strength: 8000, 
      defense: 12
     });

     expect(result).toBe(true)
  })
  test("should return true when our character strength is 0", ()=> {
    const result = validateCharacter({
      name: "Bastion",
      life: 1500,
      strength: 0, 
      defense: 12
     });

     expect(result).toBe(true)
  })
  test("Should return true when the defense of the caracter is 0", ()=> {
    const result = validateCharacter({
      name: "McCree",
      life: 1500,
      strength: 12000, 
      defense: 0
     });


     expect(result).toBe(true)
  })
  test("Should return false when the life or strength or defense is a negative number", ()=> {
    const result = validateCharacter({
      name: "Zarya",
      life: -1500,
      strength: -12000, 
      defense: -420
     });

     expect(result).toBe(false)
  })
  test("Should return false when the life or strength or defense is 0", ()=> {
    const result = validateCharacter({
      name: "Reinhart",
      life: 0,
      strength: 35000, 
      defense: 5500
     });

     expect(result).toBe(true)
  })
  test("Should return true whe all inputs are valids", ()=> {
    const result = validateCharacter({
      name: "Diva",
      life: 30000,
      strength: 2000, 
      defense: 15500
     });

     expect(result).toBe(true)
  })
})