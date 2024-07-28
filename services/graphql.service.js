import axios from "axios";

export async function executeGraphQLOperation(operationType, operationName) {
  let data = JSON.stringify({
    query: `${operationType} ${operationName}`,
    variables: {},
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8080/graphql",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}