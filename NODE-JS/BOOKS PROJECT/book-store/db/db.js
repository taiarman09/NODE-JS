import mongoose from "mongoose";


const Mongo_url = () => {
    mongoose.connect("mongodb://localhost:27017/taiarman")
        .then(() => console.log("Mongo DB is Connect"))
        .catch(() => console.log("Mongo DB is Not Connect"))
}

export default Mongo_url