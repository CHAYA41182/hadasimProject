const MemberService = require('../service/MemberService');

const getMembers = async (req, res) => {
    const members = await MemberService.getMembers();
    res.json(members);
}

const getMember = async (req, res) => {
    const member = await MemberService.getMember(req.params.id);
    res.json(member);
}

const createMember = async (req, res) => {
    const member = await MemberService.createMember(req.body);
    res.json(member);
}

const updateMember = async (req, res) => {
    const member = await MemberService.updateMember(req.params.id,req.body);
    res.json(member);
}

const deleteMember = async (req, res) => {
    const member = await MemberService.deleteMember(req.params.id);
    res.json(member);
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };