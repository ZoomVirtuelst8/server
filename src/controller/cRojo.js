const { Rojo, Quincena } = require("../db.js");

const postRojo = async (rojo) => {
  try {
    const rojos = [];
    for (const i of rojo) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const r = await Rojo.create({
          rojo: i.rojo,
          userId: i.id,
        });
        if (r) {
          await r.setQ_rojo(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
      }
    }
    return rojos;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getAllRojo = async () => {
  try {
    const allRojo = await Rojo.findAll();
    return allRojo;
  } catch (error) {
    throw new Error("No se encontraron registros " + error.message);
  }
};

module.exports = {
  postRojo,
  getAllRojo,
};
