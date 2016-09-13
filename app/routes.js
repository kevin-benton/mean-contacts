var Contact = require('./models/contact');

module.exports = function(app) {
    app.get('/api/contacts', function(req, res) {
        console.log("Getting all contacts.");
        Contact.find(function(err, contacts) {
            if (err) {
                res.send(err);
            } else {
                res.json(contacts);
            }
        });
    });

    app.post('/api/contacts', function(req, res) {
        console.log("Creating new contact with " + req.body.lastName + ", " + req.body.firstName);
        var contact       = new Contact();
        contact.firstName = req.body.firstName;
        contact.lastName  = req.body.lastName;

        contact.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
        
    });

    app.get('/api/contacts/:contact_id', function(req, res) {
        console.log("Getting contact with ID: " + req.params.contact_id);
        Contact.findById(req.params.contact_id, function(err, contact) {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    });

    app.put('/api/contacts/:contact_id', function(req, res) {
        console.log("Updating contact with ID: " + req.params.contact_id);
        Contact.findById(req.params.contact_id, function(err, contact) {
            if (err) {
                res.send(err);
            } else {
                contact.firstName = req.body.firstName;
                contact.lastName  = req.body.lastName;

                contact.save(function(err) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(contact);
                    }
                });
            }
        });
    });

    app.delete('/api/contacts/:contact_id', function(req, res) {
        console.log("Deleting contact with ID: " + req.params.contact_id);
        Contact.remove({ _id: req.params.contact_id }, function(err, contact) {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    });

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};