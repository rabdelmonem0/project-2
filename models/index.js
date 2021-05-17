const User = require('./User');
const Post = require('./Post');
const Tag = require('./Tag');

User.hasMany(Post, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    forgeinKey: 'user_id'
})

Tag.belongsTo(Post, { through: 'Post_Tags'})
Post.belongsToMany(Tag, {through: 'Post_Tags'})

module.exports = { User, Post };