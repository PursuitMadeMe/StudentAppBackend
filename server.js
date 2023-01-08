const app = require('./app');

require('dotenv').config()

const PORT = process.env.PORT || 3003


// - turns on the server : to listen on PORT 3003 => message when server starts up
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
