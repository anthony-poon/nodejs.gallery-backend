const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
        underscored: true
    }
});

const User = require("./user")(sequelize);
const GalleryItem = require("./gallery-item")(sequelize);

User.hasMany(GalleryItem);
GalleryItem.belongsTo(User);

module.exports = {
    User,
    GalleryItem,
    sequelize
}