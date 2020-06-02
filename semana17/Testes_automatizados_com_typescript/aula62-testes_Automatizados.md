#### Exercício 1
a)
```
interface User {
  name: string,
  balance: number
}
```
b) 
```
const performPurchase = (user: User, value: number): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value
    }
  }
  return undefined
}
```
#### Exercício 2
a,b,c)
```
no código
```
