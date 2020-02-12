const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const store = require("./db/store");

const PORT = 8080;
// handles body parseing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Client routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"), function(err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", "notes");
    }
  });
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"), function(err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", "index");
    }
  });
});

// API routes
app.get("/api/notes", function(req, res){
  store.read().then(function(note){
    res.json(note);
  })
});

app.get("/api/notes", function(req, res){
  store.receive().then(function(note){
    res.json(note);
  })
});


app.listen(PORT, function() {
  console.log("Server Listening on: " + PORT);
});
