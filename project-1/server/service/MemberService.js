const Member = require('../models/Member');
const { validCreateMember, validUpdateMember } = require('../validations/ValidMember')

const getMembers = async () => {
    const members = await Member.find().lean();
    return members;
}

const getMember = async (id) => {
    const member = await Member.findById(id).lean();
    if (member) {
        return member;
    } else {
        return { message: 'Member not found' };
    }
}

const createMember = async (MemberData) => {
    const { error } = validCreateMember(MemberData)
    if (error) return { message: error.details[0].message }
    const member = new Member(MemberData);
    try {
        const newMember = await member.save();
        return newMember;
    } catch (err) {
        return { message: err.message };
    }
}

const updateMember = async (id, MemberData) => {
    const { error } = validUpdateMember(MemberData)
    if (error) return { message: error.details[0].message }

    try {
        const updatedMember = await Member.findById(id);
        if (!updatedMember) {
            return { message: "Member not found" }
        }
        if (MemberData.firstName) updatedMember.firstName = MemberData.firstName;
        if (MemberData.lastName) updatedMember.lastName = MemberData.lastName;
        if (MemberData.tz) updatedMember.tz = MemberData.tz;
        if (MemberData.phone) updatedMember.phone = MemberData.phone;
        if (MemberData.mobilePhone) updatedMember.mobilePhone = MemberData.mobilePhone;
        if (MemberData.dateBirth) updatedMember.dateBirth = MemberData.dateBirth;
        if (MemberData.address) {
            if (MemberData.address.city) updatedMember.address.city = MemberData.address.city;
            if (MemberData.address.street) updatedMember.address.street = MemberData.address.street;
            if (MemberData.address.number) updatedMember.address.number = MemberData.address.number;
        }
        if (MemberData.coronaDetails) {
            if (MemberData.coronaDetails.positiveTestDate) updatedMember.coronaDetails.positiveTestDate = MemberData.coronaDetails.positiveTestDate;
            if (MemberData.coronaDetails.recoveryDate) updatedMember.coronaDetails.recoveryDate = MemberData.coronaDetails.recoveryDate;
            if (MemberData.coronaDetails.vaccinations) updatedMember.coronaDetails.vaccinations = MemberData.coronaDetails.vaccinations;
        }
        
        await updatedMember.save();

        return updatedMember;
    } catch (err) {
        return { message: err.message };
    }
}

const deleteMember = async (id) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(id)
        if (deletedMember) {
            return deletedMember
        }
        return { message: "Member not found" }
    }
    catch (err) {
        return { message: err.message };
    }
}

const uploadImage = async (id,file) => {
    const baseUrl = process.env.BASE_URL || 'http://localhost:7001';
    const imagePath = `${baseUrl}/uploads/memberImages/${file.filename}`;
    const member = await Member.findById(id);
    member.imageUrl = imagePath;
    await member.save();
    return {message: 'file uploaded successfully'};
}

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember, uploadImage };