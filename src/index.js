const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create({
  extname: 'hbs',
});

const app = express();
const port = 5500;
//================================================================
const route = require('./routes');
const db = require('./config/db');
//================================================================
// http logger
// app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//================================================================

// route init
route(app);
// connect to db

//================================================================

app.listen(port, () => {
  db.connect();
  console.log(`App listening at http://localhost:${port}`);
});
