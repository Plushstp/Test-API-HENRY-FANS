const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Favorite', {
    favoriteId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    clientId:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    productId:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
},{freezeTableName: true,timestamps:false})}