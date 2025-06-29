module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Blog', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  });
};
