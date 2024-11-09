import axios from "axios";

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json", //jason parsing
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching data", error);
    throw error;
  }
};
