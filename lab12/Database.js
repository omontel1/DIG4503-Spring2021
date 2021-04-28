import MongoClient from 'mongodb';

const url = "mongodb+srv://OmarMontelongo:u6GNPjqobydfZDMm@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.connection = null;
    }

    async connect(database, collection) {
        this.connection =  await MongoClient.connect(url);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    close() {
        if(this.connection !=null) {
            this.connection.close();
        }
    }

    async create(document) {
        let createdResult = null;

        if(this.collection != null) {
            createdResult = await this.collection.insertOne(document);
        }

        return createdResult;
    }

    async readOne(query) {
        let foundDocument = null;

        if(this.collection !=null) {
            foundDocument = await this.collection.findOne(query)
        }

        return foundDocument;
    }

    async readMany(query) {
        let foundDocuments = null;

        if(this.collection !=null) {
            foundDocument = await this.collection.find(query).toArray();
        } 

        return foundDocuments;
    }

    async update(query, update) {
        let updateResult = null;

        if(this.collection !=null) {
            updateResult = await this.collection.updateOne(query, {$set: update})
        }

        return updatedResult;
    }

    async delete(query) {
        let deletedResult = null;

        if(this.collection !=null) {
            deletedResult = await this.collection.deleteOne(query);
        }

        return deletedResult;
    }
}

export default Database;

