import Express from 'express';
import CORS from 'cors';
import Database from '..';

const App = Express();
const port = 45030;

App.use( Express.json() );

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

App.put("/people/:create", (req, res) => {
    let person = req.params.person;
    arrayExample.push(person)
    res.json({person: person});
    Database.createOne(firstName, lastName, favoriteColor);
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {person: "not found"};
    arrayExample.forEach(value => {
        if(value == person) {
            result = {person: person};
            Database.readOne(firstName, lastName, favoriteColor);
        }
    });

    res.json(result);
});

App.delete("/people/:person", (req, res) => {
    let person = req.params.person;
    arrayExample = arrayExample.filter(value => value != person);
    res.json({person: person});
    Database.updateOne(firstName, lastName, favoriteColor);
});

App.listen(port, () => {
    console.log("Server running!");
});

App.use(CORS());