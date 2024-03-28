const MemberRepository = require('../repository/MemberRepository');
const { validCreateMember, validUpdateMember } = require('../validations/ValidMember');

const getMembers = async () => {
    return await MemberRepository.getMembers();
}

const getMember = async (id) => {
    const member = await MemberRepository.getMember(id);
    if (member) {
        return member;
    } else {
        return { message: 'Member not found' };
    }
}

const createMember = async (memberData) => {
    const { error } = validCreateMember(memberData)
    if (error) return { message: error.details[0].message }
    try {
        return await MemberRepository.createMember(memberData);
    } catch (err) {
        return { message: err.message };
    }
}

const updateMember = async (id, memberData) => {
    const { error } = validUpdateMember(memberData)
    if (error) return { message: error.details[0].message }
    try {
        const updatedMember = await MemberRepository.updateMember(id, memberData);
        if (!updatedMember) {
            return { message: "Member not found" }
        }
        return updatedMember;
    } catch (err) {
        return { message: err.message };
    }
}

const deleteMember = async (id) => {
    try {
        const deletedMember = await MemberRepository.deleteMember(id)
        if (deletedMember) {
            return deletedMember
        }
        return { message: "Member not found" }
    }
    catch (err) {
        return { message: err.message };
    }
}

const uploadImage = async (id, file) => {
    const baseUrl = process.env.BASE_URL || 'http://localhost:7001';
    const imagePath = `${baseUrl}/uploads/memberImages/${file.filename}`;
    const member = await MemberRepository.uploadImage(id, imagePath);
    return imagePath;
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember, uploadImage };