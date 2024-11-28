import axios from "axios";

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log('API Response:', response); // Log the full response
    return response.data;
  } catch (error) {
    console.error("Error while fetching data", error);
    throw error;
  }
};
