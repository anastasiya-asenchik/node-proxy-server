import {Router} from 'express';
import {getAsteroids} from "../controllers/asteroidsController.js";
import {asteroidsSchema, validateRequest} from "../validators/requestValidator.js";

const asteroidRouter = Router();

asteroidRouter.get('/', validateRequest(asteroidsSchema, 'query'), getAsteroids);

export default asteroidRouter;