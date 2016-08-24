var User = require('./user.model');
var faker = require('faker');

User.find({}, function(error, users) {
    if (users.length) {
        return 0;
    } else {
        for (var i = 0; i < 20; i++) {
            User.create({
                name: faker.name.findName()
            }, function(err, small) {
                if (err) return handleError(err);
                console.log('Users created!');
            });

        }
    }
});