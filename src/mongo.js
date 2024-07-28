const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connection.on("open", () => {
    const envMessage = process.env.NODE_ENV === 'test'
    ? "Test DB Connected"
    : "Development DB Connected";
    console.info(JSON.stringify({ message: envMessage }));
}); 
mongoose.connection.on("close", () => {
    const envMessage = process.env.NODE_ENV === 'test'
        ? "Test Database Disconnected"
        : "Development Database Disconnected";
    console.info(JSON.stringify({ message: envMessage }));
}); 

const mongoConnect = async () => { 
    const url = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;
    await mongoose
        .connect(url)
        .catch(err => console.log(err));
};

const mongoDisconnect = async () => {
    await mongoose.disconnect();
};

module.exports = { mongoConnect, mongoDisconnect};
