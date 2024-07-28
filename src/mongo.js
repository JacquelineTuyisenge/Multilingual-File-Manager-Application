const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connection.on("open", () => {
    console.info(JSON.stringify({ message: "Database Connected" }));
}); 
mongoose.connection.on("close", () => {
    console.info(JSON.stringify({ message: "Something went wrong" }));
}); 

const mongoConnect = async () => { 
    const url = process.env.DATABASE_URL;
    await mongoose
        .connect(url)
        .catch(err => console.log(err));
};

const testMongoConnect = async () => {
    const url = process.env.TEST_DATABASE_URL;
    await mongoose
        .connect(url)
        .catch(err => console.log(err));
};

const mongoDisconnect = async () => {
    await mongoose.disconnect();
};

const teatMongoDisconnect = async () => {
    await mongoose.disconnect();
};

module.exports = { mongoConnect, mongoDisconnect, testMongoConnect, teatMongoDisconnect };
