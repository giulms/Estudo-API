import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin321@cluster.72jev.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster");

    return mongoose.connection;
};

export default conectaNaDataBase;

