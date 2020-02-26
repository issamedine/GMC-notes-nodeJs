const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "Your notes..";
};

const addNotes = function(title, body) {
  const notes = loadNotes();

  const duplicatNotes = notes.filter(function(note) {
    return note.title === title;
  });
  if (duplicatNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken !");
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes"));

  notes.forEach(note => {
    console.log(note.title);
  });
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes
};
