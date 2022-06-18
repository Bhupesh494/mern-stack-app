require('dotenv').config();

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'jai maa serra vaali' });
});

app.listen(process.env.PORT, () => {
  return console.log('Listening on port ', process.env.PORT);
});
