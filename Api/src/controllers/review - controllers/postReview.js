//Post un Review
const { conn } = require("../../db");
const { Review, Client, Product } = conn.models; 
//const cliId = require("../../utils/cliId");
//const prodId = require("../../utils/prodId");

const postReview = async ({ clientId, productId, description, rating }) => {
  
  //const clientId = await cliId(nameClient);
  //const productId = await prodId(nameProd);
  const clientExist = await Client.findByPk(clientId);
  const productExist = await Product.findByPk(productId);

  if ( !clientId || !productId || !description || !rating ) throw Error("Faltan datos");
  
  const checkExistReview = await Review.findAll({
    where: {
        clientId: clientExist.clientId,
        productId: productExist.productId,
    },
  });
  if (checkExistReview.length > 0) throw Error("Ya existe la Review");

  const newReview = await Review.create({
        clientId: clientExist.clientId,
        productId: productExist.productId,
        description,
        rating,
  });
  return newReview;
};


module.exports = postReview;