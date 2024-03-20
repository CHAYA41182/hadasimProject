import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'שם פרטי חייב להכיל לפחות 2 תווים')
    .max(50, 'שם פרטי לא יכול להכיל יותר מ-50 תווים')
    .required('שם פרטי הוא שדה חובה'),
  lastName: Yup.string()
    .min(2, 'שם משפחה חייב להכיל לפחות 2 תווים')
    .max(50, 'שם משפחה לא יכול להכיל יותר מ-50 תווים')
    .required('שם משפחה הוא שדה חובה'),
  tz: Yup.string()
    .length(9, 'תעודת זהות חייבת להיות בדיוק 9 ספרות')
    .matches(/^[0-9]+$/, 'תעודת זהות חייבת להכיל ספרות בלבד')
    .required('תעודת זהות היא שדה חובה'),
  address: Yup.object({
    city: Yup.string()
      .min(2, 'עיר חייב להכיל לפחות 2 תווים')
      .max(50, 'עיר לא יכול להכיל יותר מ-50 תווים')
      .required('עיר הוא שדה חובה'),
    street: Yup.string()
      .min(2, 'רחוב חייב להכיל לפחות 2 תווים')
      .max(50, 'רחוב לא יכול להכיל יותר מ-50 תווים')
      .required('רחוב הוא שדה חובה'),
    number: Yup.number()
      .min(1, 'מספר בית חייב להיות לפחות 1')
      .required('מספר בית הוא שדה חובה'),
  }).required('כתובת היא שדה חובה'),
  dateBirth: Yup.date()
    .max(new Date(), 'תאריך הלידה לא יכול להיות בעתיד')
    .required('תאריך הלידה הוא שדה חובה'),
  Phone: Yup.string() 
    .min(9, 'מספר הטלפון חייב להכיל לפחות 9 ספרות')
    .max(10, 'מספר הטלפון לא יכול להכיל יותר מ-10 ספרות')
    .matches(/^[0-9]+$/, 'מספר הטלפון חייב להכיל ספרות בלבד'),
    
  mobilePhone: Yup.string()
    .length(10, 'מספר הטלפון הנייד חייב להיות בדיוק 10 ספרות')
    .matches(/^[0-9]+$/, 'מספר הטלפון הנייד חייב להכיל ספרות בלבד'),
  coronaDetails: Yup.object({
    vaccinations: Yup.array()
      .max(3, 'לא ניתן להזין יותר מ-3 חיסונים')
      .of(
        Yup.object({
          date: Yup.date()
            .max(new Date(), 'תאריך החיסון לא יכול להיות בעתיד')
            .required('תאריך החיסון הוא שדה חובה'),
          manufacturer: Yup.string(),
        })
      ),
      positiveTestDate: Yup.date().max(new Date(), 'תאריך הבדיקה החיובית לא יכול להיות בעתיד').max(Yup.ref('recoveryDate'), 'תאריך הבדיקה החיובית חייב להיות לפני תאריך ההחלמה'),
      recoveryDate: Yup.date().max(new Date(), 'תאריך ההחלמה לא יכול להיות בעתיד'),
    }),
  });

export default validationSchema;