import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";

export class Seller extends Employee{
  private salesQuantity: number = 0
  static SELLING_COMMISSION: number = 5;
  // private comission: number = 5

// constructor(id: string, email: string, name: string, password: string, admissionDate: string, baseSalary: number){
//   super(id,email,name,password,admissionDate,baseSalary)

public getSalesQuantity(): number {
  return this.salesQuantity
}

public setSalesQuantity(): void {
  const quantity = this.salesQuantity
  this.salesQuantity = quantity
}
public calculateTotalSalary(): number {
  return (
    this.baseSalary + 
    Employee.BENEFITS_VALUE + 
    Seller.SELLING_COMMISSION * 5
  )
}
}


