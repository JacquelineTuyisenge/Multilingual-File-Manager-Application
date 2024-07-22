import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connection.on("open", () => {
    console.info(JSON.stringify({ message: "Database Connected" }))
}) 
mongoose.connection.on("close", () => {
    console.info(JSON.stringify({ message: "Something went wrong" }))
}) 

const mongoConnect = async () => { 
    const url = process.env.DATABASE_URL;
    await mongoose
    .connect(url)
    .catch(err => console.log(err));
}
const mongoDisconnect = async () => {
    await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect }; 
