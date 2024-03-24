const Chance = require('chance');
const chance = new Chance();
const Member = require('../models/Member');




async function seedDatabase() {
    const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
const hebrewFirstNames = ['אביגיל', 'בנימין', 'גבריאל', 'דניאל', 'הדס', 'אברהם', 'שרה', 'רחל', 'לאה', 'יעקב', 'יצחק', 'רות', 'נעמי', 'מרים', 'יוסף', 'משה', 'דוד', 'שלמה', 'אסתר', 'מרדכי'];
const hebrewLastNames = ['כהן', 'לוי', 'מזרחי', 'שרון', 'פרץ', 'רוזנברג', 'שוורץ', 'גולדברג', 'פישמן', 'קפלן', 'גרינברג', 'שטיינברג', 'בלומנפלד', 'סגל', 'פלדמן', 'קליין', 'וינברג', 'גרוסמן', 'שפירא', 'פרידמן'];
const hebrewCities = ['תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'נתניה', 'ראשון לציון', 'פתח תקווה', 'אשדוד', 'אשקלון', 'חולון', 'בני ברק', 'רמת גן', 'בת ים', 'רחובות', 'הרצליה', 'חדרה', 'נצרת', 'רעננה', 'בית שאן', 'צפת'];
const hebrewStreets = ['רחוב הנביאים', 'רחוב המלך גורג', 'רחוב דיזנגוף', 'רחוב אלנבי', 'רחוב רוטשילד', 'רחוב יפו', 'רחוב הרצל', 'רחוב בן גוריון', 'רחוב חיים עוזר', 'רחוב שאול המלך', 'רחוב סוקולוב', 'רחוב רמב"ם', 'רחוב רמב"ן', 'רחוב רש"י', 'רחוב רבי עקיבא', 'רחוב רבי מאיר', 'רחוב רבי יהודה הנשיא', 'רחוב רבי יוחנן בן זכאי', 'רחוב רבי ישמעאל', 'רחוב רבי עזרא'];


    for (let i = 0; i < 100; i++) {


        const member = new Member({
            firstName: chance.pickone(hebrewFirstNames),
            lastName: chance.pickone(hebrewLastNames),
            tz: chance.natural({ min: 100000000, max: 999999999 }).toString(),
            address: {
                city: chance.pickone(hebrewCities),
                street: chance.pickone(hebrewStreets),
                number: chance.natural({ min: 1, max: 100 }),
            },
            dateBirth: chance.date({ year: chance.year({ min: 1930, max: new Date().getFullYear() - 1 }) }),
            phone: chance.phone({ formatted: false }),
            mobilePhone: chance.phone({ formatted: false }),
            coronaDetails: {
                positiveTestDate: chance.date({ min: oneYearAgo, max: new Date() }),
                recoveryDate: chance.date({ min: oneYearAgo, max: new Date() }),
                vaccinations: Array.from({ length: chance.natural({ min: 0, max: 4 }) }, () => ({
                    date: chance.date({ min: oneYearAgo, max: new Date() }),
                    manufacturer: chance.company(),
                })),
            },
        });

        try {
            await member.save();
        } catch (err) {
            console.log("error saving member ", err);
        }
    }

    console.log('Database seeded!');
}

module.exports = seedDatabase;