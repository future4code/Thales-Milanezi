import { InvalidParameterError } from "../errors/InvalidParameterError"

export class Listener {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private nickname: string,
    private password: string,
    private role: ListenerRole
  ) { }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getNickname(): string {
    return this.nickname
  }

  public getPassword(): string {
    return this.password
  }

  public getRole(): ListenerRole {
    return this.role
  }
}

export const stringToListenerRole = (input: string): ListenerRole => {
  switch (input) {
    case "PREMIUM":
      return ListenerRole.PREMIUM;
    case "NORMAL":
      return ListenerRole.NORMAL
    default:
      throw new InvalidParameterError("Invalid Listener Role")
  }
}

export enum ListenerRole {
  PREMIUM = "PREMIUM",
  NORMAL = "NORMAL"
}