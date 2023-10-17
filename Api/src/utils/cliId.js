const { Client } = require("../db");

const cliId = async (nameClient) => {
  try {
    const clientNameLowerCase = nameClient.toLowerCase();
    const client = await Client.findOne({
      where: {
        name: clientNameLowerCase,
      },
    });

    if (client) {
      return client.clientId;
    } else {
      throw new Error("Cliente no encontrado");
    }
  } catch (error) {
    throw new Error("Error al buscar el cliente: " + error.message);
  }
};

module.exports = cliId;