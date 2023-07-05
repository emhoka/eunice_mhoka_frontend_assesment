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

//Function to get a country by id
export const getCountryById = async (countryId) =>{
    try {
        const response = await axios.get(`${baseURL}/countries/id/${countryId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch country with ID ${countryId}:`, error);
        throw error;
    }
}