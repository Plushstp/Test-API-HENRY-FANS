//Get All Carts
const { Product, Cart } = require("../../db");

const getCart = async () => {
  const allCart = await Cart.findAll({
    include: [
      {
        model: Product,
        attributes: ["title"],
      },
    ],
  });
  
  return allCart;
};

module.exports = getCart;