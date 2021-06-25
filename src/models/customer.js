const express = require('express');

const mongoose = require('mongoose');  
//importing validator to validate the required data coming from post request
var uniqueValidator = require('mongoose-unique-validator')

//Schema Defination

const customerSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
    trim:true,
},
email: {
    type: String,
    required: true,
    //if email is duplicate it will give error as email id already present
    unique: [true, "email id already present"]
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
dob:{
    type:Date,
    required:true,
    trim:true
},
country:{
    type:String,
    required:true,
    trim:true
}
})
customerSchema.plugin(uniqueValidator)

//creating collection in mongodb{customerData}

const customerData=new mongoose.model("customerData",customerSchema)

module.exports= customerData;
