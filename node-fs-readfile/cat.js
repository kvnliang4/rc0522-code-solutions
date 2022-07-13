const fs = require('fs');

for (let index = 2; index < process.argv.length; index++) {
  fs.readFile(process.argv[index], 'utf8', (err, data) => {
    if (err) {
      return;
    }
    console.log(data);
  });
}
