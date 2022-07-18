const express = require('express');
const path = require('path');

const app = express();

const data = express.static(path.join(__dirname, './public'));

app.use(data);

app.listen(3000, () => {

});
