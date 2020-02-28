const Sequelize = require("sequelize");
const Model = Sequelize.Model;
class GalleryItem extends Model {}

module.exports = (sequelize) => {
    GalleryItem.init({
        header: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.STRING(2047),
        },
        fileName: {
            type: Sequelize.STRING(2047),
        }
    }, {
        sequelize,
        modelName: 'gallery_item'
    });
    return GalleryItem;
};
