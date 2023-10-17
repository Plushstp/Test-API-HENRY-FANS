//Get All Reviews
const { Product, Review, Client } = require("../../db");

const getReviews = async () => {
  const allReview = await Review.findAll({
    include: [
      { model: Client, attributes: ["name"] },
      { model: Product, attributes: ["title"] }
    ]
  });

  return allReview;
 
};

module.exports = getReviews;