const MemberController = require('../controllers/MembersControllers');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/UploadsMiddleware');

router.get('/', MemberController.getMembers);
router.get('/:id', MemberController.getMember);
router.post('/', MemberController.createMember);
router.put('/:id', MemberController.updateMember);
router.delete('/:id', MemberController.deleteMember);
router.post('/uploadImage/:id', upload.single('image'), MemberController.uploadImage);

module.exports = router;