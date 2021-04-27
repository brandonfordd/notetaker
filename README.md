# 11 Express.js: Note Taker

![Badge for GitHub](https://img.shields.io/github/languages/top/brandonfordd/readme_generator?style=flat&logo=appveyor)

## Table of Contents
* [Description](#description)
* [Acceptance](#acceptance)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Description

The assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
## Installation
Clone the repository to your local development environment.
```
git clone https://github.com/brandonfordd/notetaker.git
```
Navigate to the developer-profile-generator folder using the command prompt.

Run npm install to install all dependencies. To use the application locally, run node server.js in your CLI, 
and then open http://localhost:3000 in your preferred browser. The Note Taker app is live on 
[Heroku](https://intense-retreat-13384.herokuapp.com/) for you to use as well.
## Usage 
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Contributing
```
brandonfordd
```
## Tests
There are no test for this application

## Questions?
![Developer Profile Picture](https://avatars.githubusercontent.com/u/78278104?v=4) 

For any questions, please contact me with the information below:

GitHub: [@brandonfordd](https://api.github.com/users/brandonfordd)

Email: brandonford617@yahoo.com
  