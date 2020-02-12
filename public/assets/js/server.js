const fs = require("fs");
const express = require('express')
const app = express()


fs.readFile("notes.html", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    console.log(data);

});





// GET method route
app.get('/notes', function (req, res) {
    // notes.html is not correct, but the file 'notes.html' should be returned
    res.send('notes.html')
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
});
