import axios from 'axios';

const submitEntry =  async (entryData) => {
    const url = `${import.meta.env.VITE_APP_API_URL}/form-entries`;
    const response = await axios.post(url, entryData);
    return response.data;
}

export default submitEntry;
