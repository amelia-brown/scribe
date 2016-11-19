const express = require('express');
const app = express();
const port = 1337;
const path = require('path');

app.use('/lib', express.static(path.join(__dirname, '..', 'lib/')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('server listening on port ', port);
})

module.exports = app;
