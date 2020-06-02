import { LabenuSchool } from "./LabenuSchool";
import { LabenuTeachers } from "./LabenuTeachers";
import { LabenuStudents } from "./LabenuStudents";
import * as moment from "moment"

export class LabenuClass implements LabenuSchool{
  id: number;
  name: string;
  initialDate: string;
  finishDate: string;
  responsibleTeachers: LabenuTeachers[] = [];
  studentsList: LabenuStudents[] = []
  currentModule: string


  constructor(initialDate: string,finishDate: string,responsibleTeachers: LabenuTeachers[],studentsList: LabenuStudents[],currentModule: string){
    this.initialDate = initialDate;
    this.finishDate = finishDate;
    this.responsibleTeachers = responsibleTeachers;
    this.studentsList = studentsList;
    this.currentModule = currentModule
  }
  getId(): number {
    return this.id
  }
  getName(): string {
    return this.name
  }

  public setLabenuTeachers(Teachers: LabenuTeachers) {
    this.responsibleTeachers.push(Teachers)
  }

  public setStudent(student: LabenuStudents) {
    this.studentsList.push(student);
  }
}