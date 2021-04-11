import MongoClient from 'mongodb';
import Express from 'express';

const App = Express();
const port = 45030;

const url = "mongodb+srv://OmarMontelongo:u6GNPjqobydfZDMm@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
        
    }

async connect() {

    this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });

    this.database = this.connection.db("lab11");

    this.collection = this.database.collection("books");

    }

    createOne(book) {
        this.arrayExample.push(book);
        return {book: title};
    }

    readOne(book) {
        let result = {book: "not found"};

        this.arrayExample.forEach(value => {
            if(value == person) {
                result = {person: person};
            }
        });

        return result;
    }

    readMany(search) {
        let book = this.arrayExample.filter(book => book.includes(search) );
        return {book: title};
    }

    deleteMany(book) {
        this.arrayExample = this.arrayExample.filter(value => value != book);
        return {book: book};
    }

}

collection.insertMany(
    [
        {
            "title": "Percy Jackson and the Olympians, the Lighting Thief",
            "author": "Rick Riordan",
            "description": "American fantasy-adventure novel based on Greek mythology"
        },
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "description": "good book"
        },
        {
            "title": "Daredevil: Born Again",
            "author": "Frank Miller",
            "description": "Matt Murdock's personal life and career spiral out of control after the Kingpin learns his secret identity as Daredevil"
        },
        {
            "title":"Lola",
            "author": null,
            "description": null
        },
        {
            "title":"Batman: The Dark Knight Returns",
            "author": "Frank Miller",
            "description": "Can Batman and Robin deal with the threat posed by their deadliest enemies?"
        }

    ]);

    App.use( Express.json() );

    App.put("/books/:ISBN", (req, res) => {
        Database.createOne();
        let book = req.params.title;
        let author = req.params.author;
        let description = req.params.description;
        let result = {book: "found"};
    
        arrayExample.forEach(value => {
            if(value == book) {
                result = {book: title};
                result = {book: author};
                result = {book: description};
            }
        });
    
        res.json(result);
    });

    App.get("/books/:ISBN", (req, res) => {
        Database.createOne();
        let book = req.params.book;
    
        let result = {book: "not found"};
    
        arrayExample.forEach(value => {
            if(value == book) {
                result = {book: title};
            }
        });
    
        res.json(result);
    });

    App.post("/books/search", () => {
        Database.readOne();
        let book = req.params.title;
        let author = req.params.author;

        let result = {book: "found"};

        arrayExample.forEach(value => {
            if(value == book) {
                result = {book: title};
                result = {book: author};
            }
        });

        res.json(result);
    });
    
    App.patch("/books/:ISBN", (req, res) => {
        Database.updateOne();
        let book = req.params.title;
        let author = req.params.author;
        let description = req.params.description;

        let result = {book: "found"};
    
        arrayExample.forEach(value => {
            if(value == book) {
                result = {book: title};
                result = {book: author};
                result = {book: description};
            }
        });
    
        res.json(result);
    });
    
    App.delete("/books/:ISBN", (req, res) => {
        let books = req.params.books;
        arrayExample = arrayExample.filter(value => value != books);
        res.json({books: "number"});
    });
    
    App.listen(port, () => {
        console.log("Server running!");
    });

export default Database;