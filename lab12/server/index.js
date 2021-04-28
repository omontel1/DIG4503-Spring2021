import Express from 'express';
import Database from 'Database.js';

const App = Express();
const port = 45030;
App.use(Express.json());

const d = new Database();

d.connect();

App.put("/path/:parameter", (req, res) => {});

App.get("/path/:parameter", (req, res) => {});

App.post("/path/controller", (req, res) => {});

App.patch("/teams/:team", (req, res) => {});

App.delete("/teams/:team", (req, res) => {});

App.listen(port);

App.delete("/path/:request", async (req, res) => {
    const request = req.params.request;

    let response = {"deleted": 0};

    const result = await d.deleteOne({"field": request});

    if(result != null) {
        response.deleted = result.deletedCount;
    }

    res.json(response)
});