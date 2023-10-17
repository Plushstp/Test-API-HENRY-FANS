const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Review', {
    reviewId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    clientId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    description:{
        type : DataTypes.TEXT,
        allowNull:false,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate:{
        min: 1,
        max: 5,
      },
      allowNull:false,
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },{freezeTableName: true, timestamps:true})}