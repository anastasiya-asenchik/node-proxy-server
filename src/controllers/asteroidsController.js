import getAsteroidsData from "../services/asteroidsService.js"

export const getAsteroids = async (req, res, next) => {
    try {
        const requestParams = {
            date: req.query.date,
            count: req.query.count,
            hasDangerousMeteors: req.query.were_dangerous_meteors
        }

        const data = await getAsteroidsData(requestParams);
        res.json(data);
    } catch (error) {
        next(error);
    }
}