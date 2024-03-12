import {Router} from 'express';
import {getAsteroids} from "../controllers/asteroidsController.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/asteroids', getAsteroids);

export default router;