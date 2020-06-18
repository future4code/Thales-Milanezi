import { BaseError } from "../errors/BaseErrors/BaseErrors";

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 404);
  }
}
