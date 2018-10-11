import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();

app.disable('x-powered-by');

// Use Helmet for safe headers https://www.npmjs.com/package/helmet
app.use(
  helmet({
    hsts: false,
  })
);

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(routes);

export default app;
