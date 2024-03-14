import express from "express"
import asteroidRouter from "./routers/asteroids.js";
import userRouter from "./routers/user.js";
import {defaultErrorHandler} from "./exceptions/defaultErrorHandler.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/asteroids', asteroidRouter);
app.use('/user', userRouter)

app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});