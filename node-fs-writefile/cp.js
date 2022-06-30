const fs = require('fs');

const fileNameCopied = process.argv[2];

const fileNameCreated = process.argv[3];

fs.readFile(fileNameCopied, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(fileNameCreated, data, err => {
    if (err) throw err;
  });
});
