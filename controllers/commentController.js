const { Comment, User } = require('../models');

exports.createComment = async (req, res) => {
  try {
    const { content, blogId } = req.body;
    const comment = await Comment.create({ content, blogId, userId: req.user.id });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { blogId: req.params.blogId }, include: User });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
