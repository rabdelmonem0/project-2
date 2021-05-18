const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");

// const path = require("path");
const sequelize = require("./config/connection");
const routes = require("./routes");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// app.engine("handlebars", exphbs({ layoutsDir: __dirname + '/views/layouts', }));
app.engine("handlebars", exphbs({ defaultLayout: "main", extname: "handlebars" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(routes);

//console.log(sequelize)

// sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
// });
