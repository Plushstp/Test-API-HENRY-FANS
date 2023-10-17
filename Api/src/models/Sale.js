const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Sale",
    {
      saleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      clientId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      deliveryaddress: {
        type: DataTypes.TEXT,
      },
      orderdate: {
        type: DataTypes.DATEONLY,
      },
      orderstatus: {
        type: DataTypes.ENUM("pending", "delivered", "canceled"),
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
