const express = require('express')
const app = express()
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
app.use(express.urlencoded({extended:true}));

const HotelSchema = new Schema({
    Name:{
        type:String,
        trim:true,
        required:true,
    },
    Location:{
        type:String,
        trim:true,
        required:true,
    },
    Picture:{
        data:Buffer,
        contentType:String
    },
    About:{
        type:String,
        trim:true,
        required:true,
    },
    PropertyIcon:{
        type:String,
        trim:true,
        required:true,
    },
    RoomFIcon:{
        type:String,
        trim:true,
        required:true,
    },
    RoomTIcon:{
        type:String,
        trim:true,
        required:true,
    },
    Dates:{
        type:String,
        trim:true,
        required:true,
    }
},{timestamp:true});

const Hotel= mongoose.model('Hotel',HotelSchema);
module.exports=Hotel;