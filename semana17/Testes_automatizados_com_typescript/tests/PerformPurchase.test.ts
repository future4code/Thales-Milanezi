import { PerformPurchase } from '../src/PerformPurchase'
import { User } from '../src/PerformPurchase'

const user = {
  name:"Mariazinha",
  balance: 500
}
let output = new PerformPurchase()

describe("Testing PerformPurchase", () => {

  test("Should user have a balance less than value of buy", () => {
    
    
    const user1 = output.performPurchase(user , 500)
    console.log(output)
    expect(output?.balance).toBeLessThan(user.balance)

  });

  // test("Should user have a balance equal to value of buy", () => {

  //   const output2 = performPurchase(user, 500)
  //   console.log(output2)
  //   expect(output2?.balance).toEqual(user.balance)
  // });

  // test("Should user have a balance greater than value of buy", () => {

  //   const output3 = performPurchase(user, 700)
  //   console.log(output3)
  //   expect(output3?.balance).toBeGreaterThan(user.balance)
  // });
})