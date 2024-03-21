const MemberService = require('../service/MemberService');

const getMembers = async (req, res) => {
    const members = await MemberService.getMembers();
    res.json(members);
}

const getMember = async (req, res) => {
    const member = await MemberService.getMember(req.params.id);
    if (member.message) {
        res.status(404).json(member);
    } else {
        res.json(member);
    }
}

const createMember = async (req, res) => {
    const member = await MemberService.createMember(req.body);
    if (member.message) {
        res.status(400).json(member);
    } else {
        res.json(member);
    }
}

const updateMember = async (req, res) => {
    const { firstName, lastName, tz, address, dateBirth, phone, mobilePhone, coronaDetails} = req.body;
    const {id} = req.params;
    const {city, street, number} = address;
    const {positiveTestDate, recoveryDate, vaccinations} = coronaDetails;
    const newVaccinations = vaccinations.map(vaccination => {
        const {manufacturer, date} = vaccination;
        return {manufacturer, date};
    });
    const data = {firstName, lastName, tz, address: {city, street, number}, dateBirth, phone, mobilePhone, coronaDetails: {positiveTestDate, recoveryDate, vaccinations: newVaccinations}};

    const member = await MemberService.updateMember(id, data);
    if (member.message) {
        res.status(400).json(member);
    } else {
        res.json(member);
    }
}

const deleteMember = async (req, res) => {
    const member = await MemberService.deleteMember(req.params.id);
    if (member.message) {
        res.status(404).json(member);
    } else {
        res.json(member);
    }
}

const uploadImage = async (req, res) => {
    const id = req.params.id;
    if (!req.file) {
        return res.status(400).json({message: 'No file uploaded'});
    }
    MemberService.uploadImage(id, req.file);

    res.json({message: 'file uploaded successfully'});
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember , uploadImage};