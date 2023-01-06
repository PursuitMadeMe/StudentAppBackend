// import code for express
const express = require('express');

// initialize app 
const app = express();

// Route to studentsController data
const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController');


// tells app to use  - request to (localhost:3003/students ) use the studentsController data  
app.use('/students', studentsController)
app.use('/names', namesController)


// Route to home(root) page - app can get request on different ROUTES
app.get('/', (req,res) => {
res.send('Hello World!')
})


// export app
module.exports = app;