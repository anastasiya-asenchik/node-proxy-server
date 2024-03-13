import getAsteroidsData from "../services/asteroidsService.js"
import getFormattedDate from "../utils/dateTimeUtils.js";

export const getAsteroids = async (req, res, next) => {
    try {
        const {startDate, endDate} = getFormattedDate();
        const data = await getAsteroidsData(startDate, endDate);
        res.json(data);
    } catch (error) {
        next(error);
    }
}