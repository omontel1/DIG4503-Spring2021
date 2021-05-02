import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 3000;
App.use(Express.json());
App.use(CORS());

const db = new Database();

d.connect("portfolio2", "movies");

App.put("/movies/:genre", async (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const director = req.body.director;
    const result = await db.createdOne(genre, title, director, year);
        res.json(result);

});

App.get("/movies/:genre", async (req, res) => {
    const genre = req.params.genre;
    const result = await db.readOne(genre);
        res.json(result);

});

App.post("/movies/search", async (req, res) => {
    const genre = req.query.genre;

});

App.patch("/movies/:genre", async (req, res) => {
    const genre = req.params.genre;
    const title = req.body.title;
    const director = req.director.title;
    const year = req.body.year;
    const result = await db.updatedOne(genre, title, director, year);
        res.json(result);

});

App.delete("/movies/:genre", async (req, res) => {
    const genre = req.params.genre;
    const result = await db.deleteOne(genre);
        res.json(result);
});

App.listen(port);
    
    console.log("Server running!");