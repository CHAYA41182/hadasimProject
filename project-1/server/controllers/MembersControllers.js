const MemberTable = require('../models/MemberTable');

const getMembers = async (req, res) => {
    try {
        const members = await MemberTable.find().lean();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

