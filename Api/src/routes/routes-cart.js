//aqui van las rutas get/post/put/delete correspondientes
const { Router } = require("express");
const cartsRoutes = Router();

const getCart = require("../controllers/cart - controllers/getCart");
const postCart = require("../controllers/cart - controllers/postCart");

cartsRoutes.get("/", async (req, res) => {
  try {
    const allCarts = await getCart();
    return res.status(200).json(allCarts);
  } catch (error) {
    res.status(400).json({ message: "No hay carritos para mostrar" });
  }
});

cartsRoutes.post("/", async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    const cartPost = await postCart(response);
    
    res.status(201).json(cartPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = cartsRoutes;