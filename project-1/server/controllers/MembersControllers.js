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
    const member = await MemberService.updateMember(req.params.id,req.body);
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

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };