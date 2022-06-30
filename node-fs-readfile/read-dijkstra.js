const fs = require('fs');

const readText = fs.readFileSync('dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

console.log(readText);
