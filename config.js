module.exports = {
    EXPRESS: {
        PORT: function(env) {
            if (env === 'development') {
                return 5000;
            } else if (env === 'production') {
                return process.env.PORT || 8080;
            } else if(env === 'test') {
                return 4000;
            }
        }
    },
    MONGO: {
        URI: function(env) {
            if (env === 'development') {
                return 'mongodb://localhost/node_globals_development'
            } else if (env === 'production') {
                return process.env.MONGODB_URI || 'mongodb://localhost/node_globals_production'
            } else if(env === 'test') {
                return 'mongodb://localhost/node_globals_test'
            }
        }
    }

};