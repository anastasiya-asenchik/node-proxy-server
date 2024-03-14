import {Router} from 'express';
import {getAsteroids} from "../controllers/asteroidsController.js";

const asteroidRouter = Router();

asteroidRouter.get('/', getAsteroids);

export default asteroidRouter;