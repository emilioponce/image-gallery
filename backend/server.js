import express from 'express';
import path from 'path';

// webpack & config for dev environment purpose
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

// routes
import index from './routes/index';
import api from './routes/api';

const app = express();

if (process.env.NODE_ENV === 'development') {

  const compiler = webpack(webpackConfig);

  // middleware to ease develop
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));

  // middleware for automatic reloading
  app.use(require('webpack-hot-middleware')(compiler));

}

if(process.env.NODE_ENV !== 'test') {
  // server up
  app.listen(3000, '0.0.0.0', (err) => {
    if(err) {
      console.error(err);
    } else {
      console.info('Listening at http://localhost:3000');
    }
  });
}

// public directory for static content
app.use(express.static(path.join(__dirname, '/../public')));

// Enabling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// @TODO depends on environment
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
