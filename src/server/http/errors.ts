export class AppError extends Error {
  public readonly code?: string;
  public readonly status: number;

  constructor(message: string, status = 400, code?: string) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
  }
}

