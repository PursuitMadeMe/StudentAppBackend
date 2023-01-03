// import code for express
const express = require('express');

// initialize app 
const app = express();

// Route to home(root) page - app can get request on different ROUTES
app.get('/', (req,res) => {
res.send('Hello World!')
})


// export app
module.exports = app;