import axios from "axios";
import 'dotenv/config';
import {format, previousFriday, previousMonday} from "date-fns";

const DATE_FORMAT = 'yyyy-MM-dd';
const startDate = format(previousFriday(new Date), DATE_FORMAT);
const endDate = format(previousMonday(startDate), DATE_FORMAT);

const API_KEY = process.env.API_KEY;
const NASA_BASE_API_URL = process.env.NASA_BASE_API_URL;

const getAsteroidsData = () => axios.get(NASA_BASE_API_URL, {
    params: {
        start_date: startDate,
        end_date: endDate,
        api_key: API_KEY
    }
})
    .then(response => {
        const asteroidData = response.data;
        return {
            elementsCount: asteroidData.element_count,
            meteors: Object.values(asteroidData.near_earth_objects).flat().map(asteroid => {
                return {
                    id: asteroid.id,
                    name: asteroid.name,
                    diameter_meters: asteroid.estimated_diameter.meters.estimated_diameter_min,
                    is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
                    close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
                    relative_velocity_kps: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
                }
            })
        };
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

export {getAsteroidsData};