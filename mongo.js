import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.info('Database Connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

const mongoDisconnect = async () => {
    try {
        await mongoose.disconnect();
        console.info('Database Disconnected');
    } catch (error) {
        console.error('Database disconnection error:', error);
    }
};

export { mongoConnect, mongoDisconnect };
