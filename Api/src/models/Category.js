const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Category', {
    categoryId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name:{
        type : DataTypes.STRING,
        allowNull:false
    },
    thumbnail:{
        type : DataTypes.TEXT,
    }
  },{freezeTableName: true, timestamps:false})}