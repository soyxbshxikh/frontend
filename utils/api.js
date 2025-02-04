import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  // console.log(endpoint);console.log("API URL:", API_URL); // After constructing the URL
// console.log("Request Options:", options); // Before making the fetch call
// console.log("Response Text:", await res.text()); // To see the raw response
// console.log("Response Status:", res.status); // After receiving the response
  
  try {
    console.log(`Api url here - ${API_URL}${endpoint}`);
    const res = await fetch(`${API_URL}${endpoint}`, options);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    // console.log(JSON.stringify(data, null, 2)); // Use stringify for full output
    // Now 'data' contains the complete parsed JSON object
    // You can access it like data.data (to get the array of products)
    // console.log(data.data); // Log the products array
    // console.log(data);
    
    return data;
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
    return null; // or handle the error as needed
  }
};

export const makePaymentRequest = async (endpoint, payload) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to make payment request:", error);
    return null; // or handle the error as needed
  }
};
