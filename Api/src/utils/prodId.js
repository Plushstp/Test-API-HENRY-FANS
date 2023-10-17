const { Product } = require("../db");

const prodId = async (productName) => {
  try {
    const productNameLowerCase = productName.toLowerCase();
    const product = await Product.findOne({
      where: {
        title: productNameLowerCase,
      },
    });

    if (product) {
      return product.productId;
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    throw new Error("Error al buscar el producto: " + error.message);
  }
};

module.exports = prodId;