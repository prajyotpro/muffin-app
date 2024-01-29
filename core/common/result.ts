import { HttpStatus } from "./httpStatus";

export type SuccessResult<T> = {
  success: true;
  data: T;
};

export type ErrorResult = {
  success: false;
  error?: Error;
  userMessage: string;
  status: HttpStatus;
};

export type Result<T> = SuccessResult<T> | ErrorResult;

export function errorResult(
  userMessage: string,
  status: HttpStatus,
  error?: Error
): ErrorResult {
  return {
    success: false,
    error,
    userMessage,
    status,
  };
}

export function successResult<T>(data: T): SuccessResult<T> {
  return {
    success: true,
    data,
  };
}
