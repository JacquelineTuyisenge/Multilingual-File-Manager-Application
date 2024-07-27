import dotenv from "dotenv";
import app from "./app.js";
import { mongoConnect} from "./mongo.js";

dotenv.config();

const port = process.env.PORT;

const startServer = async () => {
    try {
        await mongoConnect();

        app.listen(port, () => {
            const message = `Server listening on port ${port}`;
            console.log(JSON.stringify(message));
        });
    } catch (error) {
        console.log('Error starting server', error);
    }
};

startServer();