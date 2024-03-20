const Joi = require('joi');

exports.validCreateMember = (bodyData) => {
    let memberSchema = Joi.object({
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        tz: Joi.string().length(9).pattern(/^[0-9]+$/).required().messages({
            'string.base': `TZ must be a string`,
            'string.length': `TZ must be exactly 9 digits`,
            'string.pattern.base': `TZ must contain only digits`
        }),
        address: Joi.object({
            city: Joi.string().min(2).max(50).required(),
            street: Joi.string().min(2).max(50).required(),
            number: Joi.number().min(1).required()
        }).required(),
        dateBirth: Joi.date().max('now').required().messages({
            'date.max': `Date of birth cannot be in the future`
        }),
        Phone: Joi.string().min(9).max(10).pattern(/^[0-9]+$/).allow('').messages({
            'string.base': `Phone number must be a string`,
            'string.min': `Phone number must be at least 9 digits`,
            'string.max': `Phone number cannot be more than 10 digits`,
            'string.pattern.base': `Phone number must contain only digits`
        }),
        mobilePhone: Joi.string().length(10).pattern(/^[0-9]+$/).allow('').messages({
            'string.base': `Mobile phone number must be a string`,
            'string.length': `Mobile phone number must be exactly 10 digits`,
            'string.pattern.base': `Mobile phone number must contain only digits`
        }),
        coronaDetails: Joi.object({
            vaccinations: Joi.array().max(4).items(
                Joi.object({
                    date: Joi.date().max('now').required().messages({
                        'date.max': `Vaccination date cannot be in the future`
                    }),
                    manufacturer: Joi.string().allow('') // Not required
                })
            ),
            positiveTestDate: Joi.date().max('now').allow('').messages({ 
                'date.max': `Positive test date cannot be in the future`
            }),
            recoveryDate: Joi.date().max('now').allow('').messages({
                'date.max': `Recovery date cannot be in the future`
            })
        })
    });
    return memberSchema.validate(bodyData);
}

exports.validUpdateMember = (bodyData) => {
    let memberSchema = Joi.object({
        firstName: Joi.string().min(2).max(50),
        lastName: Joi.string().min(2).max(50),
        tz: Joi.string().length(9).pattern(/^[0-9]+$/).messages({
            'string.base': `TZ must be a string`,
            'string.length': `TZ must be exactly 9 digits`,
            'string.pattern.base': `TZ must contain only digits`
        }),
        address: Joi.object({
            city: Joi.string().min(2).max(50),
            street: Joi.string().min(2).max(50),
            number: Joi.number().min(1)
        }),
        dateBirth: Joi.date().max('now').messages({
            'date.max': `Date of birth cannot be in the future`
        }),
        Phone: Joi.string().min(9).max(10).pattern(/^[0-9]+$/).allow('').messages({
            'string.base': `Phone number must be a string`,
            'string.min': `Phone number must be at least 9 digits`,
            'string.max': `Phone number cannot be more than 10 digits`,
            'string.pattern.base': `Phone number must contain only digits`
        }),
        mobilePhone: Joi.string().length(10).pattern(/^[0-9]+$/).allow('').messages({
            'string.base': `Mobile phone number must be a string`,
            'string.length': `Mobile phone number must be exactly 10 digits`,
            'string.pattern.base': `Mobile phone number must contain only digits`
        }),
        coronaDetails: Joi.object({
            vaccinations: Joi.array().max(4).items(
                Joi.object({
                    date: Joi.date().max('now').messages({
                        'date.max': `Vaccination date cannot be in the future`
                    }),
                    manufacturer: Joi.string().allow('')
                })
            ),
            positiveTestDate: Joi.date().max('now').messages({
                'date.max': `Positive test date cannot be in the future`
            }),
            recoveryDate: Joi.date().max('now').messages({
                'date.max': `Recovery date cannot be in the future`
            })
        })
    }).min(1); // At least one field required for update
    return memberSchema.validate(bodyData);
}
