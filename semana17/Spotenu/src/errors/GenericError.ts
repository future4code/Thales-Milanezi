import { BaseError } from "../errors/BaseErrors/BaseErrors";

export class GenericError extends BaseError {
  constructor(message: string) {
    super(message, 400);
  }
}
