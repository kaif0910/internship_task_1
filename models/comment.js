module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Comment', {
    content: DataTypes.TEXT,
    blogId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });
};
