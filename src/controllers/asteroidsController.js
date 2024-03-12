import getAsteroidsData from "../services/asteroidsService.js"
import getFormattedDate from "../utils/dateTimeUtils.js";

export const getAsteroids = async (req, res) => {
    try {
        const {startDate, endDate} = getFormattedDate();
        const data = await getAsteroidsData(startDate, endDate);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}