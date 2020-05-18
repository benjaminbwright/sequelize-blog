'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    published: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};