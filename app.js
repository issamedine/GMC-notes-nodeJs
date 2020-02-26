const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "adding a note",
  builder: {
    title: {
      describe: "note title",
      demandeOption: true, //required enter title in argument
      type: "string"
    },
    body: {
      describe: "note body",
      demandeOption: true, //required enter title in argument
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "read",
  describe: "reading a note",
  handler: function() {
    console.log("reading a note please.");
  }
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  }
});

yargs.parse(); //console.log(yargs.argv)

// test add
// node app.js add --title="shopping list" -> add a note please.shopping list
