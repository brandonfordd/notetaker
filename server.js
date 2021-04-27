// Dependencies
const fs = require("fs");
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
    // Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
    // then to the notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// notes variable
fs.readFile("db/db.json", "utf8", (err, data) => {
    
    if (err) throw err;

    let notes = JSON.parse(data)
    
    //setup the notes api
    app.get("/api/notes", function(req, res){
        //return the object from notes file in db directory
        res.json(notes)
    });

    //setup the notes api post route
    app.post("/api/notes", function(req, res){

        //setup open variable for new notes
        let newNote = req.body;
        //push new note to notes object
        notes.push(newNote);

        // add variable to number id's
        let number = 1

        // forEach function to add a new index called id and assign numbers to each, then return new notes json
        notes.forEach((note, index) => {
          note.id = number;
          number++;
          return notes;
        });

        //update notes object using function from below
        updateDb();
        //return console log of successful operation
        return console.log("new note has been added!")
    });

    // Retrieves a note with specific id
    app.get("/api/notes/:id", function(req,res) {
        // display json for the notes array indices of the provided id
        res.json(notes[req.params.id]);
    });

    // Deletes a note with specific id
    app.delete("/api/notes/:id", function(req, res) {
        const deleteNote = req.params.id;
        // console.log(deleteNote);
        
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === Number(deleteNote)) {
              notes.splice([i], 1);
            }
        }
        
        updateDb();
        console.log("Deleted note with id "+req.params.id);
    });

    //updates the json file whenever a note is added or deleted
    function updateDb() {
        fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
            if (err) throw err;
            return true;
        });
    }
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));