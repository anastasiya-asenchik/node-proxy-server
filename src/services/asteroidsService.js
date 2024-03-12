import axios from "axios";
import 'dotenv/config';
import {asteroidsMapper} from "../mappers/asteroidsMapper.js";

const API_KEY = process.env.API_KEY;
const NASA_BASE_API_URL = process.env.NASA_BASE_API_URL;

const getAsteroidsData = (startDate, endDate) => axios.get(NASA_BASE_API_URL, {
    params: {
        start_date: startDate,
        end_date: endDate,
        api_key: API_KEY
    }
})
    .then(response => {
        const asteroidData = response.data;
        return asteroidsMapper(asteroidData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

export default getAsteroidsData;