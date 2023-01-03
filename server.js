const app = require('./app');


// - turns on the server : to listen on PORT 3003 => message when server starts up
app.listen(3003, () => console.log('Listening on 3003'))