import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { detectPiiService } from "../../service/detectPii/service";
import { DetectPiiRequest } from "../../service/detectPii/request";
import { getErrorResponse } from "../../utils/getErrorResponse";

export const detectPii = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body: DetectPiiRequest = JSON.parse(event.body);
    const result = await detectPiiService(body);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return getErrorResponse(error);
  }
};
