const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const Store = require("./db/store");
const store = new Store();

const PORT = process.env.PORT || 3000;

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

// API route GET
app.get("/api/notes", function(req, res) {
  store.read().then(function(note) {
    res.json(JSON.parse(note));
  });
});

// API route POST
app.post("/api/notes", function(req, res) {
  store.receive(req.body, data => {
    res.json(data);
  });
});

// API route DELETE
app.delete("/api/notes/:id", function(req, res) {
  // console.log(req.params.id)
  store.delete(req.params.id, data => {
    res.json(data);
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

//
app.listen(PORT, function() {
  console.log("Server Listening on: " + PORT);
});
