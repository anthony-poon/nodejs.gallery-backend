module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
        username: {
            type: DataType.STRING,
            allowNull: false
        }
    });

    User.associate = models => {
        User.hasMany(models.GalleryItem, {onDelete: "cascade"});
    };
    return User;
};
