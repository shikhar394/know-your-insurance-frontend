import axios from 'axios';

//const API_BASE_URL = 'http://172.23.0.4:3000';
const API_BASE_URL = 'http://0.0.0.0:3000';

export const getAnswer = async (questionString) => {
    try {
        console.log(questionString, API_BASE_URL)
        const response = await axios.post(`${API_BASE_URL}/questions`, { question: questionString });
        console.log("hello", response.data)
        return response.data.answer;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
};
