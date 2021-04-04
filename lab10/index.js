import MongoClient from 'mongodb';

const url = "mongodb+srv://OmarMontelongo:u6GNPjqobydfZDMm@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }
    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }
        
    async insert(objectToAdd) {
        return await this.collection.insertOne(objectToAdd);
    }

    close() {
        if(this.collection != null) {
          this.collection.close();
        }
      }
}

export default Database;