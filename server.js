const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
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