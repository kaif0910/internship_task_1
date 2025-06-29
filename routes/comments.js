const express = require('express');
const router = express.Router();
const { createComment, getComments } = require('../controllers/commentController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, createComment);
router.get('/:blogId', getComments);

module.exports = router;
