const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Cart', {
    cartId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    productId:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    cant:{
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    unitprice: {
        type : DataTypes.INTEGER,
        allowNull:false,
    },
  },{freezeTableName: true,timestamps:false})}