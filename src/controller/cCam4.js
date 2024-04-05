const { Cam4, UserName, Quincena } = require("../db.js");

const pca = async (coca) => {
  try {
    const rcoca = [];
    for (const i of coca) {
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
        const [r, c] = await Cam4.findOrCreate({
          where: {
            userName: i.user,
            dolares: i.dolares,
            mensual: false,
          },
        });
        if (c) {
          await r.setCorte_cam4(userNameId);
          await r.setQ_cam4(quincena);
          rcoca.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoca.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoca;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gca = async () => {
  try {
    const coca = await Cam4.findAll();
    coca.sort((a, b) => a.userName.localeCompare(b.userName));
    return coca;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pca,
  gca,
};
