const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({

    urlhaus_reference: {
        type: String,
        required: true
    },
    url: {

        type : String,
        required : false

    },
    url_status: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    date_added:{

        type : Date,
        required : true

    },
    threat: {
        type: String,
        required: true
    },
    blacklists : {

        spamhaus_dbl : {type : String},
        surbl : {type : String}

    },
    reporter : {

        type : String,
        required : true
    },
    larted : {

        type : Boolean,
        required : true

    },
    tags : {

        type : Array,
        required : true

    }

})

module.exports = mongoose.model('Url',urlSchema)