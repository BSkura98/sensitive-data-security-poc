import * as AWS from "aws-sdk";
import { APIGatewayProxyResult } from "aws-lambda";

import { DetectPiiRequest } from "./request";
import { validate } from "./validator";

export const detectPiiService = async (
  body: DetectPiiRequest
): Promise<APIGatewayProxyResult> => {
  AWS.config.apiVersions = {
    comprehend: "2017-11-27",
  };
  validate(body);

  const comprehend = new AWS.Comprehend();
  const params = {
    LanguageCode: "en",
    Text: body.text,
  };

  return await comprehend.detectPiiEntities(params).promise();
};
