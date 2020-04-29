import { User } from "./User";


export class Employee extends User {
  protected admissionDate: string
  protected baseSalary: number = 1200
  static BENEFITS_VALUE: number = 400;

  constructor(id: string, email: string, name: string, password: string, admissionDate: string, baseSalary: number){
    super(id, email, name, password)
    this.admissionDate = admissionDate
    this.baseSalary = baseSalary
  }

  public getAdmissionDate():string {
    return  this.admissionDate
  }

  public getBaseSalary(): number {
    return this.baseSalary
  }

  public calculateTotalSalary(): number{
    return Employee.BENEFITS_VALUE + 400;
  }
}