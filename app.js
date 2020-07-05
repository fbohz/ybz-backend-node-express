
const express = require('express');
const app = express();
const morgan = require('morgan');
const readingRouter = require('./routes/readingRoutes')

const baseUrlReading = '/api/v1/readings';

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// Data from body is added to the object (req.body)
app.use(express.json());
//serve static files from public folder access as e.g. /overview.html.
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log('hi from YBZ middleware🧙🏾‍♂️');
  next();
});

app.use((req, res, next) => {
  // current time of request e.g.
  req.requestTime = new Date().toISOString();
  next();
});

// MOUNT ROUTES
app.use(baseUrlReading, readingRouter);

module.exports = app