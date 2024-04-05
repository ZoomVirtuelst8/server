const { TripleSiete, UserName, Quincena } = require("../db.js");

const postTripeSiete = async (tripleSiete) => {
  try {
    const rsiete = [];
    for (const i of tripleSiete) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const r = await TripleSiete.create({
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        });
        if (r) {
          await r.setCorte_triplesiete(userNameId);
          await r.setQ_triplesiete(quincena);
        }
      } catch (error) {
        throw new Error("Error al guardar los registros: " + error.message);
      }
    }
    rsiete.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rsiete;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getTripleSiete = async () => {
  try {
    const siete = await TripleSiete.findAll();
    siete.sort((a, b) => a.userName.localeCompare(b.userName));
    return siete;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  postTripeSiete,
  getTripleSiete,
};
