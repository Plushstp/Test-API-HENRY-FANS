//Post Cart
const  { conn } = require("../../db")
const { Cart, Product } = conn.models;
const prodId = require("../../utils/prodId")

const postCart = async ({
  cant,
  productId,
}) => {


  const findProd = await Product.findByPk(productId);
  const priceProd = await Product.findByPk(productId).price;

  if (!cant)
    throw Error("Faltan datos");

  /*const checkExistCart = await Cart.findAll({
    where: {
      title: titleLowerCase,
    },
  });
  if (checkExistProduct.length > 0) throw Error("Ya existe el producto");*/

  const newCart = await Cart.create({
    productId: findProd.productId,
    cant,
    unitprice: priceProd,
  });

  return newCart;
};

module.exports = postCart;