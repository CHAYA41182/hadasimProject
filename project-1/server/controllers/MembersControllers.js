const MemberTable = require('../models/MemberTable');

const getMembers = async (req, res) => {
    try {
        const members = await MemberTable.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMemberByTz = async (req, res) => {
    try {
        const member = await MemberTable.findOne({ tz: req.params.tz });
        res.json(member);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

