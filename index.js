const express = require('express');
const hbs = require('express-handlebars').create({
  extname: '.hbs'
});

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const defaultController = require('./controllers/defaultController');

const port = 3000;

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));

app.use(homeController);
app.use('/catalog', catalogController);
// attach other controllers
app.all('*', defaultController);

app.listen(port, () => console.log(`Server listening on port ${port}`));