
const express = require('express');
const app = express();
const morgan = require('morgan');
const readingRouter = require('./routes/readingRoutes')
const hexagramRouter = require('./routes/hexagramRoutes')

const baseUrlReading = '/api/v1/readings';
const baseUrlHexagram= '/api/v1/hexagrams';

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

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// MOUNT ROUTES
// app.use(baseUrlReading, readingRouter);
app.use(baseUrlHexagram, hexagramRouter);

module.exports = app