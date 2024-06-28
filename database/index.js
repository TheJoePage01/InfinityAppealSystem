const mongoose = require('mongoose');
const URI = process.env.MONGO_URI

async function connectDb() {
    try {
        mongoose.connect(URI);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;