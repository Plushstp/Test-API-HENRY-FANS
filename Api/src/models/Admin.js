const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Admin', {
    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name:{
        type : DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type : DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type : DataTypes.STRING,
        allowNull:false,
    },
 },{freezeTableName: true,timestamps:false})}