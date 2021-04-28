import MongoClient from 'mongodb';

const url = "mongodb+srv://OmarMontelongo:u6GNPjqobydfZDMm@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection) {
        this.connection =  await MongoClient.connect(url);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    async createOne(ISBN, title, author, description) {
        if(this.collection !=null) {
            const result = await this.collection.insertOne({
               "ISBN":ISBN,
                "title":title,
                "author":author,
                "description":description
            });

            return result;
        }
    }

    async readOne(ISBN) {
        if (this.collection != null){
            const result = await this.collection.findOne({
                "ISBN": ISBN
            })
                if(result != null){
                    return result;
                }else{
                    return{ISBN: "Not Found"}
            }
        }
    }

    async readMany(ISBN) {
        let books = ("");

        if(ISBN != null) {
            foundDocument = await this.collection.find(query).toArray();
        } 

        return {books};
    }

    async updateOne(ISBN, author, title, description) {
    
        if(this.collection !=null) {
            const result = await this.collection.updateOne({"ISB": ISBN}, {$set: {"title": title, "author": author, "description": description}});

            return{"title": title, "author": author, "description": description};

        }else{

            return null;
        }
    }

    async deleteOne(ISBN) {
        if(this.collection !=null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
                return{"ISBN": result.deletedCount};

        }else{
                
                return {"ISBN": 0};
    }
}
    close(){
        if(this.collection !=null) {
            this.collection.close();
        }
    }
};

export default Database;
