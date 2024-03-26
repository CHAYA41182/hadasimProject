const Member = require('../models/Member');

const getMembers = async () => {
    return await Member.find().lean();
}

const getMember = async (id) => {
    return await Member.findById(id).lean();
}

const createMember = async (memberData) => {
    const member = new Member(memberData);
    return await member.save();
}

const updateMember = async (id, memberData) => {
    return await Member.findByIdAndUpdate(id, memberData, { new: true });
}

const deleteMember = async (id) => {
    return await Member.findByIdAndDelete(id);
}

const uploadImage = async (id, imagePath) => {
    return await Member.findByIdAndUpdate(id, { imageUrl: imagePath }, { new: true });
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember, uploadImage };