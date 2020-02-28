const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
        underscored: true
    }
});

const User = require("./user")(sequelize, Sequelize);
const GalleryItem = require("./gallery-item")(sequelize, Sequelize);
const GalleryImage = require("./gallery-image")(sequelize, Sequelize);
const models = {
    User,
    GalleryItem,
    GalleryImage,
    sequelize
};

User.associate(models);
GalleryItem.associate(models);
GalleryImage.associate(models);


module.exports = models;