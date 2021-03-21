import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

let arrayExample = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.put("/people/:person", (req, res) => {
    let person = req.params.person;
    arrayExample.push(person)
    res.json({person: person});
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;

    let result = {person: "not found"};

    arrayExample.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });

    res.json(result);
});

App.get("/search/:name", (req, res) => {
    let person = req.params.person;

    let result = {person: "not found"};

    arrayExample.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });
    
    res.json(result);
});

App.delete("/people/:person", (req, res) => {
    let person = req.params.person;
    arrayExample = arrayExample.filter(value => value != person);
    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server running!");
});

App.use(CORS());