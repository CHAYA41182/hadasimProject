const MemberController = require('../controllers/MemberController');
const express = require('express');
const router = express.Router();

router.get('/', MemberController.getMembers);
router.get('/:id', MemberController.getMember);
router.post('/', MemberController.createMember);
router.put('/:id', MemberController.updateMember);
router.delete('/:id', MemberController.deleteMember);

module.exports = router;
