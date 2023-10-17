//Post Favoritos, No permite repetir nombre de categorias, indistintamente se escriban Mayus. y Minus.
const { Favorite } = require("../../db");
const cliId = require("../../utils/cliId");
const prodID = require("../../utils/prodId");

const postFavorites = async ({ nameClient, nameProd }) => {
  if (!nameProd || !nameClient) throw Error("Faltan datos");

  const nameLowerCaseProd = nameProd.toLowerCase();
  const nameLowerCaseClient = nameClient.toLowerCase();
  const clientId = await cliId(nameClient);
  const productId = await prodID(nameProd);

  const nameFav = nameLowerCaseProd+nameLowerCaseClient;

  const checkExistFavorite = await Favorite.findAll({
    where: {
      name: nameFav,
    },
  });
  if (checkExistFavorite.length > 0) throw Error("Ya existe el favorito");

  const newFavorite = await Favorite.create({
    clientId,
    productId,
    name: nameFav,
  });
  return newFavorite;
};

module.exports = postFavorites;
