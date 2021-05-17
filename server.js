const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')

const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./routes');

const hbs = exphbs.create({})

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

app.use(routes); 

//console.log(sequelize)

// sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
// });