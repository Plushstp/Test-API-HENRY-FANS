//Post Client
const { Client } = require("../../db");

const postClients = async ({
  name,
  email,
  billingaddress,
  country,
  state,
  mobilenumber,
}) => {
  const nameLowerCase = name.toLowerCase();
  const emailLowerCase = email.toLowerCase();

  if (
    !name ||
    !email ||
    !billingaddress ||
    !country ||
    !state ||
    !mobilenumber
  )
    throw Error("Faltan datos");

  const checkExistClient = await Client.findAll({
    where: {
      name: nameLowerCase,
    },
  });
  if (checkExistClient.length > 0) throw Error("Ya existe el cliente");

  const newClient = await Client.create({
    name: nameLowerCase,
    email: emailLowerCase,
    billingaddress,
    country,
    state,
    mobilenumber,
  });

  return newClient;
};

module.exports = postClients;
