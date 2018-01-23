const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/', function (req, res) {
    res.send('THIS IS A JOKE APP!!');
});

app.get('/about', function (req, res) {
    res.send('This app hosts the worst jokes ever. jafjfaposfhaofhapoisf')
});

app.get('/banana', function (req, res) {
    res.send('Q: Why do bananas wear suntan lotion? A: Because they peel!')
});

app.get('/joke', function(req, res) {
    const jokes = ['Joke 1', 'Joke 2', "Joke 3"];
    const index = Math.floor(Math.random() * Math.floor(3))
    res.send(jokes[index]);
});

app.get('/joke/:name', function (req, res) {
    const name = req.params.name;

    res.send(`Stupid Joke for ${name}`)
});



app.listen(3000);



// CREATE A NEW APPLICATION INSIDE A JOKES_APP FOLDER
// CREATE A PACKAGE JSON
// INSTALL EXPRESS // MORGAN
// HAVE THE APP LISTEN ON PORT 3000
// YOU SHOULD HAVE THE FOLLOWING ROUTES

// '/about' should give a brief description about the application
// '/bananas' should give a joke about bananas
// '/joke' should return a random joke (out of 3 jokes)
// '/joke/:name' should return a personalized joke