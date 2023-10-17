//aqui van las rutas get/post/put/delete correspondientes
const { Router } = require("express");
const salesRoutes = Router();

const getSales = require("../controllers/sales - controllers/getSales");
const postSale = require("../controllers/sales - controllers/postSale");

salesRoutes.get("/", async (req, res) => {
  try {
    const allSales = await getSales();
    return res.status(200).json(allSales);
  } catch (error) {
    res.status(400).json({ message: "No hay venta para mostrar" });
  }
});

salesRoutes.post("/", async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    const salePost = await postSale(response);
    
    res.status(201).json(salePost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = salesRoutes;