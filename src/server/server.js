const express = require('express');
import webpack from 'webpack';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(webpackDevMiddelware(webpack(webpackConfig)));

app.use(require('./routes/index'));
app.use('/api/posts',require('./routes/posts'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


module.exports = app;