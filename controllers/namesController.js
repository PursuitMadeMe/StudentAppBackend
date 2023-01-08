const express = require('express');
const controller = express.Router();

const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('../utils/stringUtils');
// const capitalizeFirstLetter = require('../utils/stringUtils');


controller.get('/capitalizeName/:name/', (request, response) => {
    try{
        // get name 
        const name = request.params.name
        console.log(name)

        // get result of capitalizeFirstLetter with params name 
        const capitalizedName = capitalizeFirstLetter(name)

        // send string responce of result 
        response.send(capitalizedName)

    }catch (err){
        res.send('There was an error')
    }
})

controller.get('/:name/:times', (request, response) =>{
    try{
        // get name 
        const name = request.params.name

        // get times 
        const times = request.params.times

        // get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times)

        // send string responce of result with parmas name and time 
        response.send(repeatedNames)

    }catch (err){
        response.send('There was an error')
    }
})

// send the controller back to app.js
module.exports = controller;