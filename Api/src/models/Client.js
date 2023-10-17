const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Client', {
    clientId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type : DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'The value is not an Email'
            },
            len: [5, 50],
            notNull: {
                msg: 'The value cannot be null'
            },
            notEmpty: true
        }
    },
    billingaddress:{
        type : DataTypes.TEXT,
    },
    country:{
        type : DataTypes.ENUM(
            "Argentina",
            "Bolivia",
            "Brasil",
            "Chile",
            "Colombia",
            "Costa Rica",
            "Cuba",
            "Ecuador",
            "El Salvador",
            "Guatemala",
            "Haití",
            "Honduras",
            "México",
            "Nicaragua",
            "Panamá",
            "Paraguay",
            "Perú",
            "República Dominicana",
            "Uruguay",
            "Venezuela",
        ),
        allowNull: false,
    },
    state:{
        type : DataTypes.STRING,
    },
    mobilenumber:{
        type : DataTypes.BIGINT,
    },
    banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
  },{freezeTableName: true,timestamps:false})}