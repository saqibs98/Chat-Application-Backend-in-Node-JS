const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Messages.belongsTo(models.Users, {
        foreignKey: "senderID",
        targetKey: "id",
      });
      models.Messages.belongsTo(models.Users, {
        foreignKey: "recieverID",
        targetKey: "id",
      });
    }
  }
  Messages.init(
    {
      content: DataTypes.STRING,
      status: DataTypes.STRING,
      senderID: DataTypes.INTEGER,
      recieverID: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
      modifiedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Messages",
    }
  );
  return Messages;
};
