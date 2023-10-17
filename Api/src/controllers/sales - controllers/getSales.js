//Get All Sales
const { Client, Sale, Saledetail, Product } = require("../../db");

const getSales= async () => {
  const allSales = await Sale.findAll({
    include: [
      { model: Client, attributes: ["name"] },
      { model: Product, attributes: ["title"] },
      { model: Saledetail, attributes: ["cant" , "unitprice"] }
    ]
  });

  return allSales;
 
};

module.exports = getSales;