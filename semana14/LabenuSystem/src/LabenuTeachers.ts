import { LabenuPeople } from "./LabenuPeople";
import { LabenuSchool } from "./LabenuSchool";

export enum TEACHERS_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND"
}

export class LabenuTeachers extends LabenuPeople implements LabenuSchool{
  public id: number;
  public name: string;
  public email: string;
  public specialties: TEACHERS_SPECIALTY[]

  constructor(name: string, id: number, email: string,specialties: TEACHERS_SPECIALTY[]){
    super(email)
    this.email = email
    this.specialties = TEACHERS_SPECIALTY[""]
  }
  getId(): number {
   return this.id
  }
  getName(): string {
    return this.name
  }

  getEmail(): string {
   return this.email
  }

}