const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    tz: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    email: {
        type: String,
        required: true
    },

    coronaDetiles: {  

        isImmune1: {
            type: Boolean,
            default: false,
            required: true

        },

        isImmune2: {
            type: Boolean,
            default: false,
            required: true
        },
    
        isRecovered: {
            type: Boolean,
            default: false,
            required: true
        },
    
        isSerology: {
            type: Boolean,
            default: false,
        },
    
        DateOfIllness: {
            type: Date,
            required: false
        },
    
        DateOfRecovery: {
            type: Date,
            required: false
        },
        // תאריך חיסון
        DateOfVaccine1: {
            type: Date,
            required: false
        },

        DateOfVaccine2: {
            type: Date,
            required: false
        },
    
        CurrentStatus: {
            type: String,
            enum: ['Ill', 'Recovered', 'Immune'],
            required: true
        },
    }
});

module.exports = mongoose.model('Member', memberSchema);