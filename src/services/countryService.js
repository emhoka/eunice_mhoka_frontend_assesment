import axios from 'axios';

const baseURL = 'http://localhost:9099/locations-management/v1'; 

// Function to get the list of countries
export const getCountries = async () => {
  try {
    const response = await axios.get(`${baseURL}/countries`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    throw error;
  }
};

