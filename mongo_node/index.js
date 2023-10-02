const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();
        const db = client.db('shop'); // Removed 'dbName' and corrected the database name.
        const collection = db.collection('products'); // Removed 'name' and corrected the collection name.
        const data = await collection.find({ price: { $gt: 1200 } }).toArray(); // Corrected the .toArray() method invocation.
        console.log(data);
        return "done";
    } catch (e) {
        console.log(e);
    } finally {
        await client.close(); // Added the 'await' keyword to ensure the client is closed properly.
    }
};

main().then(() => console.log("Done.")).catch((e) => console.log(e)).finally(()=> client.close());
