import { Validator, Schema } from "jsonschema";

import { DetectPiiRequest } from "./request";
import { BadRequestError } from "../../errors/BadRequestError";

export const validate = (body: DetectPiiRequest) => {
  const validator = new Validator();

  const validation = validator.validate(body, validationSchema);

  if (!validation.valid) {
    throw new BadRequestError("Invalid request body");
  }
};

const validationSchema: Schema = {
  type: "object",
  properties: {
    text: {
      type: "string",
    },
  },
};
