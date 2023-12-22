import axios from 'axios';

// This function is used to submit the form entry to the API.
const submitEntry =  async (entryData) => {
    const url = `${import.meta.env.VITE_APP_API_URL}/form-entries`;
    const response = await axios.post(url, entryData);
    return response.data;
}

export default submitEntry;
