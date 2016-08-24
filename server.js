var express = require('express');
var config = require('./config');
var app = express();
app.set('env', process.env.NODE_ENV);
var env = app.get('env');

/*
    We can set our NODE_ENV either when we are staring the app e.g.
        NODE_ENV=production node app.js

    or in our package.json file e.g.
        "scripts": {
                "start": "set NODE_ENV=development&&nodemon server"
                   }    
*/

var mongoose = require('mongoose');
mongoose.connect(config.MONGO.URI(env));

if(env === 'development') {
    require('./dummy_data');
}

// if we are in production mode
// enforce security modules 

console.log('environment', env);

app.listen(config.EXPRESS.PORT(env), function(){
    console.log('Listening on port ' + config.EXPRESS.PORT(env));
});