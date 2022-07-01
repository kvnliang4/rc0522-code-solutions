const express = require('./node_modules/express');

const app = express();

app.use((req, res) => {
  // console.log(req.method);
  res.send('testing');
});

app.listen(3000, () => {
  // console.log('Listening on port 3000');
});
