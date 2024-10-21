import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import FileStore from 'session-file-store';
import flash from 'express-flash';
import path from 'path';
import os from 'os';
import dbConnect from './db/dbConnect.js';

// Models
import Tought from './models/Tought.js';
import User from './models/User.js';

const fileStore = FileStore(session);
const app = express();

// Template engine e pasta estatica
app.use(express.static('public'));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// JSON e leitura do Body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Session Middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new fileStore({
            logFn: function() {},
            path: path.join(os.tmpdir(), 'sessions')
        }),

        cookie: {
            secure: false,
            maxAge: 360000, 
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
);

// Flash messages
app.use(flash());

// Colocar session para response
app.use((request, response, next) => {
    if(request.session.userId){
        response.locals.session = request.session;
    }

    next();
});

dbConnect
    .sync(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    });