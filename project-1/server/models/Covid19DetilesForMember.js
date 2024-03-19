const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const covid19DetilesForMemberSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Member'
    },

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


);