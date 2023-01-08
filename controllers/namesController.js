const express = require('express');
const { request, response } = require('../app');

const repeatNTimesWithSpace = require('../utils/stringUtils');
const controller = express.Router();



controller.get('/:name/:times', (request, response) =>{
    try{
        // get name 
        const name = request.params.name

        // get times 
        const times = request.params.times

        // get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times)

        // send string responce of result 
        response.send(repeatedNames)

    }catch (err){
        res.send('There was an error')
    }
})

// send the controller back to app.js
module.exports = controller;