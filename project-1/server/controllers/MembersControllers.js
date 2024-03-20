const Member = require('../models/Member');

const getMembers = async (req, res) => {
    try {
        const members = await Member.find().lean();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id).lean();
        if (member) {
            res.json(member);
        } else {
            res.status(404).json({ message: 'Member not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createMember = async (req, res) => {
    const { firstName, lastName, tz, email, mobilePhone, coronaDetails } = req.body;
    const { vaccinations, positiveTestDate, recoveryDate } = coronaDetails;
    vaccinations.map(vaccination => {
        const { date, manufacturer } = vaccination;
        return { date, manufacturer };
    });
    const member = new Member({
        firstName,
        lastName,
        tz,
        email,
        mobilePhone,
        coronaDetails: {
            vaccinations,
            positiveTestDate,
            recoveryDate
        }
    });
    try {
        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateMember = async (req, res) => {
    const { firstName, lastName, tz, email, mobilePhone, coronaDetails } = req.body;
    const { vaccinations, positiveTestDate, recoveryDate } = coronaDetails;
    vaccinations.map(vaccination => {
        const { date, manufacturer } = vaccination;
        return { date, manufacturer };
    });
    try {
        const member = await Member.findById(req.params.id);
        if (member) {
            member.firstName = firstName;
            member.lastName = lastName;
            member.tz = tz;
            member.email = email;
            member.mobilePhone = mobilePhone;
            member.coronaDetails = {
                vaccinations,
                positiveTestDate,
                recoveryDate
            };
            const updatedMember = await member.save();
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: 'Member not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (member) {
            await member.remove();
            res.json({ message: 'Member removed' });
        } else {
            res.status(404).json({ message: 'Member not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };