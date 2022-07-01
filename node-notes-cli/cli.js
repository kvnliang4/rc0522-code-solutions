const fs = require('fs');
const json = require('./data.json');
const command = process.argv[2];
const input = process.argv[3];
const revision = process.argv[4];

if (command === 'read') {
  for (var x in json.notes) {
    console.log(`${x}: ${json.notes[x]}`);
  }
}

if (command === 'create') {
  json.notes[json.nextId] = input;
  json.nextId++;
  fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
  });
}

if (command === 'update') {
  for (x in json.notes) {
    if (x === input) {
      json.notes[x] = revision;
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        if (err) throw err;
      });
    }
  }
}

if (command === 'delete') {
  for (x in json.notes) {
    if (x === input) {
      delete json.notes[x];
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        if (err) throw err;
      });
    }
  }
}
