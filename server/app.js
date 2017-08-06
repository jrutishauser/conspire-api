import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/conspiracy', () => {
    console.log('mongo connected...');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send({url: `${req.originalUrl} not found...`})
})

app.use('/api', routes);

// routes(app);


export default app;