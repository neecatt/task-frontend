import axios from "axios";

// Get sectros from the API
const getSectors = async () => {
    const url = `${import.meta.env.VITE_APP_API_URL}/sectors`
    const response = await axios.get(url);
    return response.data;
}

export default getSectors;