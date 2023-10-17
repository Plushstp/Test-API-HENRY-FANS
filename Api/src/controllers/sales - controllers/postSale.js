//Post Products
const { conn } = require("../../db")
const { Sale, Client, Cart } = conn.models;
const cliId = require("../../utils/cliId");
const prodId = require("../../utils/prodId");

const postSale = async ({
    deliveryaddress,
    status,
    description,
    primaryimage,
    categoryName,
}) => {
  const deliveryaddressLowerCase = deliveryaddress.toLowerCase();
  const descriptionLowerCase = description.toLowerCase();
  const categoryId = await categoryID(categoryName);

  if (!title || !price || !description || !primaryimage || !categoryName)
    throw Error("Faltan datos");

  const checkExistProduct = await Product.findAll({
    where: {
      title: titleLowerCase,
    },
  });
  if (checkExistProduct.length > 0) throw Error("Ya existe el producto");

  const newProduct = await Product.create({
    title: titleLowerCase,
    price,
    description: descriptionLowerCase,
    primaryimage,
    categoryId,
  });

  return newProduct;
};

module.exports = postSale;
