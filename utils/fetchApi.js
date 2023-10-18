import axios from 'axios';

const apiKey = process.env.API_KEY;


 export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}