const mongoose = require('mongoose');
const config = require('config');

function connectDB() {
    mongoose.connect(
    config.get('mongoURI'),
    'mongodb+srv://<username>:<password>@<clustername>.6si6q.mongodb.net/
<dbname>?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB...'))
 .catch((err) => {
     console.log(`Could not connect to MongoDB. ERROR: ${err}`));
     process.exit(1);
 });

}

module.exports = connectDB;
