const mongoose = require('mongoose')
const express=require("express");


const userSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    salary : {
        type : Number
    },
    department : {
        type : String
    },
    lastCompany : {
        type : String
    },
    lastSalary : {
        type : Number
    },
    overaallExp : {
        type : Number
    },
    contactInfo : {
        type : Number
    },
    yearGrad : {
        type : Number
    },
    gradStream : {
        type : String
    },

})

module.exports = mongoose.model("User", userSchema)


        // "firstName": "John",
        // "lastName": "Doe",
        // "salary": "25000",
        // "department": "HR",
        // "lastCompany": "X",
        // "lastSalary": "10000",
        // "overallExp": "2",
        // "contactInfo": "1234567890",
        // "yearGrad": "2016",
        // "gradStream": "CSE"
