
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');//connection to mysql server
const session = require('express-session');//cookies and session management
const SequelizeStore = require('connect-session-sequelize')(session.Store);// cookies/session storage to mysql
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
//set app and /startserver 
const app = express();
const PORT = process.env.PORT || 3001;
//set up cookies and session connect
const sess = {
    secret: 'Super Secret secret super',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
//app.use(session(sess));
app.engine('handlebars', hbs.engine); //tell express start handlebars eng
app.set('view engine', 'handlebars'); //sets handlebars as view engine

//middleware
app.use(express.json()); // expect incoming json
app.use(express.urlencoded({extended: true})); //look for nested data
app.use(express.static(path.join(__dirname, 'public')));//make public folder accessible 

//starts routes
app.use(routes);

//turn on server connect to db
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

//routes will start models - models create table layouts