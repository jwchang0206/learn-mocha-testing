'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  res.status(201).json({
    status: 'success',
    userId: req.body.userId
  });
});

app.put('/user/:id', (req, res) => {
  res.json({
    status: 'updated',
    userId: req.params.id,
    data: req.body.data
  });
});

app.delete('/user/:id', (req, res) => {
  res.json({
    status: 'deleted',
    userId: req.params.id
  });
});

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;