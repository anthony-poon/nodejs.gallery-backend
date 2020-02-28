module.exports = (sequelize, DataType) => {
    const GalleryImage = sequelize.define("galleryImage", {
        fileName: {
            type: DataType.STRING(2047),
        }
    });

    GalleryImage.associate = models => {
        GalleryImage.belongsTo(models.GalleryItem)
    };

    return GalleryImage;
};
