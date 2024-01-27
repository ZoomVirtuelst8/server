const { Moneda, Quincena } = require("../../db.js");

const postMoneda = async (moneda) => {
  try {
    const { descripcion, dolar, euro, libra, quincena } = moneda;
    const quince = await Quincena.findByPk(quincena);
    const nMoneda = await Moneda.create({
      descripcion,
      dolar,
      euro,
      libra,
    });
    await nMoneda.setMonedas(quince);
    return nMoneda;
  } catch (error) {
    throw new Error("No fue posible guardar las monedas");
  }
};

const getAllMoneda = async () => {
  try {
    const monedas = await Moneda.findAll();
    return monedas;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

module.exports = {
  postMoneda,
  getAllMoneda,
};
