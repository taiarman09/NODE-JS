const { MongoClient } = require("mongodb");

const url = "mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("✅ MongoDB Atlas Connected");

        const db = client.db("mydatabase");
        const collection = db.collection("users");

        const data = await collection.find().toArray();
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}

run();