const express = require('express');
const router = express.Router();
const { createBlog, getBlogs } = require('../controllers/blogController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, createBlog);
router.get('/', getBlogs);

module.exports = router;
