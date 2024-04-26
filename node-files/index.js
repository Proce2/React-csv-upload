const express = require("express"); 
const multer = require("multer");
const cors = require("cors");
var fs = require("fs");
const { parse } = require('csv-parse');

// Express application instance
const app = express();
app.use(cors()); // Using CORS middleware

// Setting up Multer storage option to store uploaded files in memory
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

// NeDB instance as a local datastore with filename 'database.db'
let Datastore = require("nedb"),
  db = new Datastore({ filename: "database.db", autoload: true });

// POST endpoint for uploading CSV file
app.post("/api/files", upload.single("file"), (req, res) => {
  // Convert buffer to string
  let data = req.file.buffer.toString("utf8");

  // Parse the CSV data
  parse(data, {}, function (error, output) {
  // Remove the headers
   output.shift(); 
    
    // Insert each row into the database
    output.map((item) => {
      db.findOne({ name: item[0], city: item[1], country: item[2], favorite_sport: item[3] }, function (err, doc) {
        if (!doc) {
          db.insert({
            name: item[0],
            city: item[1],
            country: item[2],
            favorite_sport: item[3],
          });
        }
      });
    });
  });

  // Send response
  res.status(201).send();
});

// GET endpoint for searching users by query
app.get("/api/users", (req, res) => {
  // Create a search query
  const query = {
    $or: [
      { name: new RegExp(req.query.q) },
      { city: new RegExp(req.query.q) },
      { country: new RegExp(req.query.q) },
      { favorite_sport: new RegExp(req.query.q) },
    ],
  };

  // Find users matching the query
  db.find(query, (err, docs) => {
    if (err) {
      console.error('There was an error!', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send response with found users
      res.status(200).json({ data: docs });
    }
  });
});

//Deletes the data using the terminal Invoke-WebRequest -Uri http://localhost:3000/api/files -Method DELETE
app.delete("/api/files", ( res) => {
  db.remove({}, { multi: true }, function (numRemoved) {
    res.status(200).json({ message: "All data deleted", documentsRemoved: numRemoved });
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});