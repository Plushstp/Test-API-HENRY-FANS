// conexion a la base de datos
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
//const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_EXTERNAL } = process.env;

const sequelize = new Sequelize(
  //DB_EXTERNAL,
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryfans`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
const { Admin, Category, Client, Favorite, Product, Review, Sale, Cart } = sequelize.models;

// Aca vendrian las relaciones
// Option.belongsToMany(Product, { through: "Produc_Color" });
// Product.belongsToMany(Option, { through: "Produc_Color" });
// Sale.belongsToMany(Product, {through: "Sale_Product"});
// Product.belongsToMany(Sale, {through: "Sale_Product"});

Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

Client.hasMany(Sale, { foreingnKey: "clientId" });
Sale.belongsTo(Sale, { foreingnKey: "clientId" });

Client.hasMany(Review, {as:"clientReview", foreingnKey: "clientId" });
Review.belongsTo(Client, {as:"clientReview", foreingnKey: "clientId" });

Product.hasMany(Review, {as: "productReview", foreingnKey: "productId" });
Review.belongsTo(Product, {as: "productReview", foreingnKey: "productId" });

Client.hasMany(Favorite, { foreingnKey: "clientId" });
Favorite.belongsTo(Client, { foreingnKey: "clientId" });

Product.hasMany(Favorite, { foreingnKey: "productId" });
Favorite.belongsTo(Product, { foreingnKey: "productId" });

Sale.belongsToMany(Cart, { through: "sale_cart" });
Cart.belongsToMany(Sale, { through: "sale_cart" });

Product.hasMany(Cart, { foreignKey: "productId" });
Cart.belongsTo(Product, { foreingnKey: "productId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}; // conexion a la base de datos
