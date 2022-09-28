const mongoose = require('mongoose');
require('../models/User');

// TODO change database name
const dbName = 'wildlife';
const connString = `mongodb://127.0.0.1:27017/${dbName}`;
// const connString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // autoIndex: false

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        console.log(err);
        process.exit(1);
    }
};
