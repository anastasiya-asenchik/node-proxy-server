import {Router} from 'express';
import {postUser} from "../controllers/userController.js";
import {postRequestSchema, validateRequest} from "../validators/requestValidator.js";

const userRouter = Router();

userRouter.post('/', validateRequest(postRequestSchema, 'body') ,postUser);

export default userRouter;