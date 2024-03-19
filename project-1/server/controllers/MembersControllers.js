const MemberTable = require('../models/MemberTable');
const isValidTz = require('../services/isValidTz');
const isValidEmail = require('../services/isValidEmail');

const getMembers = async (req, res) => {
    try {
        const members = await MemberTable.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMemberByTz = async (req, res) => {
    try {
        const member = await MemberTable.findOne({ tz: req.params.tz });
        res.json(member);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const createMember = async (req, res) => {
    const { tz, firstName, lastName, dateBirth, gender, email, coronaDetiles } = req.body;
    // validation
    if (!tz || !firstName || !lastName || !dateBirth || !gender) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // validate tz
    
    if (!isValidTz(tz)) {
        return res.status(400).json({ message: 'Invalid TZ' });
    }
    // validate dateBirth
    if (isNaN(Date.parse(dateBirth)) || new Date(dateBirth) > new Date()) {
        return res.status(400).json({ message: 'Invalid date' });
    }
    // validate email
    if (email && !isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email' });
    }



        
        
    }


    

