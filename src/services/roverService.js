import axios from "axios";
import {format} from "date-fns";

const DATE_FORMAT = 'yyyy-MM-dd';

export const getRoverImage = async (apiKey) => {
    const manifestData = await getResentDate(apiKey);
    const resentDate = format(new Date(manifestData.photo_manifest.max_date), DATE_FORMAT);
    return axios.get(process.env.NASA_ROVER_API, {
        params: {
            earth_date: resentDate,
            api_key: apiKey
        }
    })
        .then(response => {
            return response.data.photos.pop().img_src;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
}

const getResentDate = async (apiKey) => {
    const manifest = await axios.get(process.env.NASA_MANIFEST_URL, {
        params: {
            api_key: apiKey,
        },
    });
    return manifest.data;
}