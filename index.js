const isProd = process.env.NODE_ENV === 'production';
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const bodyParser = require('body-parser');
const app = express();
const compiler = webpack(config);
const database = require('./lib/database');
const router = require('./lib/router');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (isProd) {
    app.use('/static', express.static(config.output.path));
} else {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/api', router);

app.get('*', (req, res) => res.sendFile(`${config.output.path}/index.html`));

database
  .init()
  .then(() => console.log('db connected')) //eslint-disable-line
  .catch((err) => console.log(err)); //eslint-disable-line

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err); //eslint-disable-line
        return;
    }

    console.log(`Listening on ${process.env.PORT}`); //eslint-disable-line
});
