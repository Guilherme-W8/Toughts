import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import FileStore from 'session-file-store';
import flash from 'express-flash';
import dbConnect from './db/dbConnect.js';

const fileStore = FileStore(session);
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

dbConnect
    .sync(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    });