
const mongoose = require('mongoose');

let secrets;
if (process.env.NODE_ENV === 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('../../secrets.json'); // secrets.json is in .gitignore
}

// https://cloud.mongodb.com/ to check db
const mongodb_uri = `mongodb+srv://jjb:${secrets.ATLAS_PASSWORD}@cluster0-wkgns.mongodb.net/test?retryWrites=true&w=majority`;

function connect(){
    return new Promise((resolve, reject) => {
        mongoose.connect(mongodb_uri, { useNewUrlParser: true })
            .then((res,err) => {
                if (err) return reject(err);
                console.log("MongoDB database connection established successfully");
                resolve();
            })
            .catch(err => console.log(err));

    });
}

function disconnect() {
    return mongoose.disconnect();
}


function readyState () {
    return mongoose.connection.readyState;
}

module.exports = { connect, disconnect, readyState };