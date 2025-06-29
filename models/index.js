const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const User = require('./user')(sequelize, DataTypes);
const Blog = require('./blog')(sequelize, DataTypes);
const Comment = require('./comment')(sequelize, DataTypes);

User.hasMany(Blog);
Blog.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

module.exports = { sequelize, User, Blog, Comment };
