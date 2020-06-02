export abstract class LabenuPeople{
  protected email: string

  constructor(email: string){
    this.email = email
  }

  abstract getEmail(): string
}