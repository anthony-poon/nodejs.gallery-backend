const Sequelize = require("sequelize");
const Model = Sequelize.Model;
class User extends Model {}

module.exports = (sequelize) => {
    User.init({
        username: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'user'
    });
    return User;
};
