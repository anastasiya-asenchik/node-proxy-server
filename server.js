import express from "express"
import { getAsteroidsData } from "./index.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/asteroids', (req, res) => {
    getAsteroidsData()
        .then(data => res.json(data))
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});