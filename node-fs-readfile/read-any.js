const fs = require('fs');

const text = process.argv[2];

fs.readFile(text, 'utf8', (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});
