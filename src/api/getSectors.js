import axios from "axios";

// This function is used to get the list of sectors from the API.
const getSectors = async () => {
    const url = `${import.meta.env.VITE_APP_API_URL}/sectors`
    const response = await axios.get(url);
    return response.data;
}

export default getSectors;