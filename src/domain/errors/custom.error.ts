export class CustomError {
  private readonly message: string;
  private readonly statusCode: number;
  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
