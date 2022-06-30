const fs = require('fs');

const text = process.argv[2];

const readText = fs.readFileSync(text, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

console.log(readText);
