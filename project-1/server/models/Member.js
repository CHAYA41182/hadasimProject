const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    tz: {
        type: String,
        required: true,
        length: 9,
        unique: true,
        validate: {
            validator: function (v) {
                // check if the string contains non-digit characters
                return !isNaN(v);
            },
            message: props => `${props.value} is not a valid TZ!`
        }
    },
    address: {
        type: {
            city: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 50
            },
            street: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 50
            },
            number: {
                type: Number,
                required: true,
                min: 1
            }
        },
        required: true
    },
    dateBirth: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                // return false if the date is in the future
                return v <= new Date();
            },
            message: props => `${props.value} is a future date`
        }
    },
    phone: {
        type: String,
        minlength: 9,
        maxlength: 10,
        validate: {
            validator: function (v) {
                // return false if the string contains non-digit characters
                return !isNaN(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    mobilePhone: {
        type: String,
        length: 10,
        validate: {
            validator: function (v) {
                // return false if the string contains non-digit characters
                return !isNaN(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    coronaDetails: {
        vaccinations: {
            type: [{
                date: {
                    type: Date,
                    validate: {
                        validator: function (v) {
                            // check if the date is not in the future
                            return v <= new Date();
                        },
                        message: props => `${props.value} is a future date!`
                    }
                },
                manufacturer: String
            }],
            validate: {
                validator: function (v) {
                    // return false if the array contains more than 4 elements
                    return v.length <= 4;
                },
                message: `maximum 4 vaccinations`
            }

        },
        positiveTestDate: {
            type: Date,
            validate: {
                validator: function (v) {
                    // check if the date is not in the future
                    return v <= new Date();
                },
                message: props => `${props.value} is a future date!`
            }
        },
        recoveryDate: {
            type: Date,
            validate: {
                validator: function (v) {
                    // check if the date is not in the future
                    return v <= new Date();
                },
                message: props => `${props.value} is a future date!`
            }
        }
    },
    imageUrl: String
});

module.exports = mongoose.model('Member', memberSchema);
