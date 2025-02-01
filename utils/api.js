import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromAPI = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        }
    };
    
    try {
        const res = await fetch(`${API_URL}${endpoint}`, options);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null; // or handle the error as needed
    }
};
