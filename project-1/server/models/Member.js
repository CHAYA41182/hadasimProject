const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
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

        isImmune: {
            type: Boolean,
            default: false
        },
    
        isRecovered: {
            type: Boolean,
            default: false
        },
    
        isSerology: {
            type: Boolean,
            default: false
        },
    
        DateOfIllness: {
            type: Date,
            required: true
        },
    
        DateOfRecovery: {
            type: Date,
            required: true
        },
    
        CurrentStatus: {
            type: String,
            enum: ['Ill', 'Recovered', 'Immune'],
            required: true
        },
    }
});

module.exports = mongoose.model('Member', memberSchema);