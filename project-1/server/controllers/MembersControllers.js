const MemberService = require('../service/MemberService');

const getMembers = async (req, res) => {
    try {
        const members = await MemberService.getMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMember = async (req, res) => {
    try {
        const member = await MemberService.getMember(req.params.id);
        if (member.message) {
            res.status(404).json(member);
        } else {
            res.json(member);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createMember = async (req, res) => {
    try {
        const member = await MemberService.createMember(req.body);
        if (member.message) {
            res.status(400).json(member);
        } else {
            res.json(member);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateMember = async (req, res) => {
    try {
        const { firstName, lastName, tz, address, dateBirth, phone, mobilePhone, coronaDetails } = req.body;
        const { id } = req.params;
        const { city, street, number } = address;
        const { positiveTestDate, recoveryDate, vaccinations } = coronaDetails;
        const newVaccinations = vaccinations.map(vaccination => {
            const { manufacturer, date } = vaccination;
            return { manufacturer, date };
        });
        const data = { firstName, lastName, tz, address: { city, street, number }, dateBirth, phone, mobilePhone, coronaDetails: { positiveTestDate, recoveryDate, vaccinations: newVaccinations } };

        const member = await MemberService.updateMember(id, data);
        if (member.message) {
            res.status(400).json(member);
        } else {
            res.json(member);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteMember = async (req, res) => {
    try {
        const member = await MemberService.deleteMember(req.params.id);
        if (member.message) {
            res.status(404).json(member);
        } else {
            res.json(member);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const uploadImage = async (req, res) => {
    try {
        const id = req.params.id;
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        MemberService.uploadImage(id, req.file);

        res.json({ message: 'file uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember, uploadImage };