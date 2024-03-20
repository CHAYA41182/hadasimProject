const Member = require('../models/Member');
const {validCreateMember,validUpdateMember} = require('../validation/MemberValidation')

const getMembers = async () => {
    const members = await Member.find().lean();
    return members;
}

const getMember = async (id) => {
    const member = await Member.findById(req.params.id).lean();
    if (member) {
        return member;
    } else {
        return { message: 'Member not found' };
    }
}

const createMember = async (MemberData) => {
    const {error} = validCreateMember(MemberData)
    if(error) return {message:error.details[0].message}
    const member = new Member(MemberData);
    try {
        const newMember = await member.save();
        return newMember;
    } catch (err) {
        return { message: err.message };
    }
}

const updateMember = async (id,MemberData) => {
    const {error} = validUpdateMember(MemberData)
    if(error) return {message:error.details[0].message}
    try {
        const updatedMember = await Member.findByIdAndUpdate(id,MemberData,{new:true})
        return updatedMember;
    } catch (err) {
        return { message: err.message };
    }
}

const deleteMember = async (id) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(id)
        if(deletedMember){
            return deletedMember
        }
        return {message:"Member not found"}
    }
    catch (err) {
        return { message: err.message };
    }
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };






