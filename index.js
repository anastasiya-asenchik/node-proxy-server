import axios from "axios";
import {endOfWeek, format, startOfWeek, subWeeks} from "date-fns";

const DATE_FORMAT = 'yyyy-MM-dd';
const startDate = format(startOfWeek(subWeeks(new Date(), 1)), DATE_FORMAT);
const endDate = format(endOfWeek(subWeeks(format(new Date(), DATE_FORMAT), 1)), DATE_FORMAT);

const API_KEY = "NeEFN89c7XJQyGcPLqeq4b34YliftPzW4j2I8CvH";
const NASA_BASE_API_URL = "https://api.nasa.gov/neo/rest/v1/feed";

axios.get(NASA_BASE_API_URL, {
    params: {
        start_date: startDate,
        end_date: endDate,
        api_key: API_KEY
    }
})
    .then(response => {
        const asteroidData = response.data;

        const totalAsteroids = asteroidData.element_count;

        console.log(`Number of asteroids seen from ${startDate} to ${endDate}: ${totalAsteroids}`);
        console.log(JSON.stringify(asteroidData, null, 2));
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });