const newsRouter = require('./news');
const siteRouter = require('./site');
const partsRouter = require('./parts');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/parts', partsRouter);
  app.use('/', siteRouter);
}

module.exports = route;
