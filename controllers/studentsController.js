const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json')


// - Read Route : all students
controller.get('/', (request,response) => {
    // returns json instead of res.end
    response.json(studentData)
})

// - Show Route : single student 
controller.get('/:id', (request,response) => {

    try{

    const studentId = request.params.id

    if(/[0-9]/.test(studentId)){
        response.send('Student Id must be a number')
        return 
    }

    const singleStudent = studentData.students.find(student => {
        return student.id === studentId
    }) 
    console.log(singleStudent)

    if(singleStudent){

        response.json(singleStudent)

    }else{
        response.send('Student Not Found')
    }
} catch (err){
    response.status(500).send('An error has occurred')
}
})



// send the controller back to app.js
module.exports = controller;