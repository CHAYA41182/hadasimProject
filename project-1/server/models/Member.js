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
    Phone: {
        type: String,
        required: false,
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
        required: false,
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
        positiveTestDate: Date,
        recoveryDate: Date
    }

});


module.exports = mongoose.model('Member', memberSchema);

/** 
 *  example of a member object:
  {
      "firstName": "ישראל",
        "lastName": "ישראלי",
        "tz": "123456789",
        "address": {
            "city": "Tel Aviv",
            "street": "Ben Yehuda
            "number": 10
        },
        "dateBirth": "1980-01-01",
        "Phone": "03-1234567",
        "mobilePhone": "050-1234567",
        "coronaDetails": {
            "vaccinations": [
                {
                    "date": "2021-01-01",
                    "manufacturer": "fizer"
                },
                {
                    "date": "2021-02-01",   
                    "manufacturer": "Moderna"
                }
            ],
            "positiveTestDate": "2021-03-01",
            "recoveryDate": "2021-03-15"
        }
    }
*/