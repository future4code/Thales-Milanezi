export class PerformPurchase implements User {

  constructor(
    public name: string,
    public balance: number
  ) { }

  public performPurchase(user: User, value: number = 0): User | undefined {
    if (user.balance > value) {
      return {
        ...user,
        balance: user.balance - value
      }
    }
    return undefined
  }

}

// tentei assim e não consegui

export interface User {
  name: string,
  balance: number
}

// export const performPurchase = (user: User, value: number): User | undefined => {
//   if (user.balance >= value) {
//     return {
//       ...user,
//       balance: user.balance - value
//     }
//   }
// }