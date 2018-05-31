const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

/** MongoDB Connection */
const MONGO_URL = process.env.MONGO_URL;
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL)
        .then(res => console.log('# MongoDB connected'))
        .catch(err => console.log('# Error connecting MongoDB'));
const app = next({ dev })
const handle = app.getRequestHandler()

/** Controllers  */

const testController = require('./controllers/testController');

app.prepare()
    .then(() => {

        const server = express();

        server.get('/test', testController.getIndex);

        server.get('*', (req, res)=> {
            return handle(req, res);
        })

        server.listen(port, (err) => {
            if(err) throw err;
            console.log(`> Ready on post ${port}`)
        })
    })
    .catch((ex)=> {
        console.error(ext.satck);
        process.exit(1);
    })