import { LabenuPeople } from "./LabenuPeople";
import { LabenuSchool } from "./LabenuSchool";
import * as moment from "moment"

export class LabenuStudents extends LabenuPeople implements LabenuSchool{
  id: number;
  name: string;
  email: string;
  dateOfBirth: string;
  hobbies: string[];

  constructor(name: string, id: number, email: string, dateOfBirth: string, hobbies: string[]){
    super(email)
    this.dateOfBirth = dateOfBirth
    this.hobbies = hobbies
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
  getDateOfBirth(): string{
    return this.dateOfBirth
  }

  getHobbies(): string[]{
    return this.hobbies
  }

}