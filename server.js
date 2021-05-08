
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/api/userRoutes');

const hbs = exphbs.create({})


const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes); 

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))

