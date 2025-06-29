const { Blog, User } = require('../models');

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.create({ title, content, userId: req.user.id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ include: User });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
