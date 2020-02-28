module.exports = (sequelize, DataType) => {
    const GalleryItem = sequelize.define("galleryItem", {
        header: {
            type: DataType.STRING,
        },
        content: {
            type: DataType.STRING(2047),
        },
        fileName: {
            type: DataType.STRING(2047),
        }
    });

    GalleryItem.associate = models => {
        GalleryItem.user = GalleryItem.belongsTo(models.User)
        GalleryItem.hasMany(models.GalleryImage);
    };

    return GalleryItem;
};
