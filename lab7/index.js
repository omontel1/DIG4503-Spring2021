import Express from 'express';

const App = Express();
const port = 45030;

const names = [
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

App.get("people/:person", (req, res) => {

    let result = "Name not found!";

    arrayExample.forEach((value) => {
        if(req.params.id == value) {
            result = value;
        }
    });

    res.json(result);
});

App.get("search/:name", (req, res) => {

    let result = "Search not found!";
    arrayExample.forEach((value) => {
        if(req.params.id == value) {
            result = value;
        }
    });
    
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});