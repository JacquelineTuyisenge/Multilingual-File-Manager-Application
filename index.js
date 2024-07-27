const dotenv = require('dotenv');
const app = require('./src/app.js');
// const { testMongoConnect } = require('./src/mongo.js');
const {mongoConnect} = require('./src/mongo.js');

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
