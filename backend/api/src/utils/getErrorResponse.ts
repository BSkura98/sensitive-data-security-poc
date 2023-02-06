import { BadRequestError } from "../errors/BadRequestError";

interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

export const getErrorResponse = (error: ErrorWithStatusCode) => {
  if (error.statusCode) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify({ message: error.message ?? "Error" }),
    };
  }

  if (error instanceof BadRequestError) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: error.message ?? "Bad Request" }),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ message: error.message ?? "Internal Server Error" }),
  };
};
