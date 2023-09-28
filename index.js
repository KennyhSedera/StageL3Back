const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const { sequelize } = require('./models/index');
const PORT = 1142;

app.set('views', path.join(__dirname, 'views'));
var Option = {
    credentials: true,
    origin: '*'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(Option));
app.use(morgan('dev'))
app.use(route);
app.use('/Images', express.static('./Images'))

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur running sur le port: http://localhost:${PORT}`);
    })
})