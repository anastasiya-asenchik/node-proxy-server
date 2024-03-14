import {getRoverImage} from "../services/roverService.js";

export const postUser = async (req, res, next) => {
    try {
        const response = await getRoverImage(req.body.userApiKey);
        res.json(response);
    } catch (error) {
        next(error);
    }
}