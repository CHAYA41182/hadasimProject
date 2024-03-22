import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../../Services/volidationMember';
import { FieldArray } from 'formik';

import './MemberForm.css';

const defaultInitialValues = {
    firstName: '',
    lastName: '',
    tz: '',
    address: {
        city: '',
        street: '',
        number: ''
    },
    dateBirth: '',
    coronaDetails: {
        vaccinations: [],
        positiveTestDate: '',
        recoveryDate: ''
    }
};

const MemberForm = ({ initialValues, handleSubmit }) => {
    return (
        <div className="member-form-container">
            <Formik
                initialValues={initialValues || defaultInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValidating, status }) => (
                    <Form className="form">
                        <div className="personal-details">
                            <h2>פרטים אישיים</h2>
                            <div className="form-group">
                                <label htmlFor="firstName">שם פרטי</label>
                                <Field name="firstName" type="text" className="form-control" />
                                <ErrorMessage name="firstName" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">שם משפחה</label>
                                <Field name="lastName" type="text" className="form-control" />
                                <ErrorMessage name="lastName" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tz">תעודת זהות</label>
                                <Field name="tz" type="text" className="form-control" />
                                <ErrorMessage name="tz" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address.city">עיר</label>
                                <Field name="address.city" type="text" className="form-control" />
                                <ErrorMessage name="address.city" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address.street">רחוב</label>
                                <Field name="address.street" type="text" className="form-control" />
                                <ErrorMessage name="address.street" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address.number">מספר</label>
                                <Field name="address.number" type="number" className="form-control" />
                                <ErrorMessage name="address.number" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateBirth">תאריך לידה</label>
                                <Field name="dateBirth" type="date" className="form-control" />
                                <ErrorMessage name="dateBirth" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">טלפון</label>
                                <Field name="Phone" type="text" className="form-control" />
                                <ErrorMessage name="Phone" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobilePhone">טלפון נייד</label>
                                <Field name="mobilePhone" type="text" className="form-control" />
                                <ErrorMessage name="mobilePhone" component="div" className="error" />
                            </div>
                        </div>
                        <div className="corona-details">
                            <h2>פרטי קורונה</h2>
                            <div className="form-group">
                                <label htmlFor="coronaDetails.positiveTestDate">תאריך בדיקה חיובית</label>
                                <Field name="coronaDetails.positiveTestDate" type="date" className="form-control" />
                                <ErrorMessage name="coronaDetails.positiveTestDate" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coronaDetails.recoveryDate">תאריך החלמה</label>
                                <Field name="coronaDetails.recoveryDate" type="date" className="form-control" />
                                <ErrorMessage name="coronaDetails.recoveryDate" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label>חיסונים</label>
                                <FieldArray name="coronaDetails.vaccinations">
                                    {({ push, remove, form }) => (
                                        <div>
                                            {form.values.coronaDetails && form.values.coronaDetails.vaccinations.map((vaccination, index) => (
                                                <div key={index} className="vaccination-item">
                                                    <h4>חיסון {index + 1}:</h4>
                                                    <div className="form-group">
                                                        <label>תאריך</label>
                                                        <Field name={`coronaDetails.vaccinations[${index}].date`} type="date" className="form-control" />
                                                        <ErrorMessage name={`coronaDetails.vaccinations.${index}.date`} component="div" className="error" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>יצרן</label>
                                                        <Field name={`coronaDetails.vaccinations[${index}].manufacturer`} type="text" className="form-control" />
                                                    </div>

                                                </div>
                                            ))}
                                            <button type="button" onClick={() => { if (form.values.coronaDetails.vaccinations.length <= 3) push({ date: '', manufacturer: '' }) }}>הוסף חיסון</button>
                                            <button type="button" onClick={() => remove(form.values.coronaDetails.vaccinations.length - 1)}>הסר חיסון </button>
                                        </div>
                                    )}
                                </FieldArray>


                            </div>

                        </div>
                        <button type="submit" disabled={isSubmitting || isValidating} className="btn btn-primary">שלח</button>
                        {status && <div className="general-error">{status}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MemberForm;
