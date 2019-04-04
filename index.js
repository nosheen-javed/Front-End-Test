'use strict';

const express = require('express');
const model = require('./resources/model.json');
const app = express();

app.get('/model', (req, res) => {
  res.set('Content-Type', 'application/json').send(model);
});

app.listen(3000, () => console.log('OWLR front-end test server running on port 3000. Try http://localhost:3000/model'));