import express from "express"
import router from "./routers/asteroids.js";
import {defaultErrorHandler} from "./exceptions/defaultErrorHandler.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/', router);

app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});