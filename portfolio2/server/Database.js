import MongoClient from 'mongodb';

const url = "mongodb+srv://OmarMontelongo:u6GNPjqobydfZDMm@cluster0.yuzwq.mongodb.net"

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection){
        this.connection = await MongoClient.connect(url);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    async createOne(genre, title, director, year) {
        if(this.collection !=null) {
            const result = await this.collection.insertOne({
                "genre":genre,
                "title":title,
                "director":director,
                "year":year
            });

            return {result};
        }else{
            return null;
        }
        }

    async readOne(genre) {
        if(this.collection !=null) {
            const result = await this.collection.findOne({
                "genre":genre });

            return {result};
        }else{
            return {movie: "not found"};
    }
}
    async readMany() {
        if(this.collection !=null) await this.collection.readMany({            
        })
    }
    
    async updateOne(genre, title, director, year) {
        if(this.collection !=null) {
            const result = await this.collection.updateOne({"genre": genre},{$set: {"title": title, "director": director, "year":year} });
            return{"title": title, "director": director, "year": year};
        
        }else{
            return null;
        }
    }

    async deleteOne(genre){
        if(this.collection !=null) {
            const result = await this.collection.deleteOne({"genre": genre});
                return{"deleted": result.deletedCount};
        
        }else{
            return {"deleted":0};
        } 
    }

    close() {     
    }
};
    export default Database;
