const express = require('express');
// const { create } = require('express-handlebars');
// const session = require('express-session');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

start();

async function start() {
    const app = express();
    expressConfig(app);
    // app.engine('.hbs', create({ extname: '.hbs' }).engine);
    // app.set('view engine', '.hbs');
    // app.use('/static', express.static('static'));
    // app.use(session({
    //     secret: 'secret',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: { secure: 'auto' }
    // }));
    // app.use(express.urlencoded({extended: true}));
    await databaseConfig(app);
    routesConfig(app);

    app.get('/', (req, res) => res.render('home', { layout: false }));
    app.listen(3000, () => 'Server running on port 3000.');
}
