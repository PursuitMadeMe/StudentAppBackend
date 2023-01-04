const express = require('express');
const { response } = require('../app');

const controller = express.Router();

const studentData = require('../studentData.json')

controller.get('/', (req,res) => {
    // returns json instead of res.end
    res.json(studentData)
})

// - Show Route : wild card student 
controller.get('/:id', (req,res) => {

    try{

    
    const studentId = req.params.id

    if(/[0-9]/.test(studentId)){
        res.send('Student Id must be a number')
        return 
    }

    const singleStudent = studentData.students.find(student => {
        return student.id === studentId
    }) 
    console.log(singleStudent)

    if(singleStudent){

        res.json(singleStudent)

    }else{
        res.send('Student Not Found')
    }
} catch (err){
    res.status(500).send('An error has occurred')
}
})



// send the controller back to app.js
module.exports = controller;