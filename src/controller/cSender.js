const { Sender, UserName, Quincena } = require("../db.js");

const pse = async (cose) => {
  try {
    const rcose = [];
    for (const i of cose) {
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
        const [r, c] = await Sender.findOrCreate({
          where: {
            userName: i.user,
            fecha: i.fecha,
            coins: i.coins,
            euros: i.euros,
            mensual: true,
          },
        });
        if (c) {
          await r.setCorte_sender(userNameId);
          await r.setQ_sender(quincena);
          rcose.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcose.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcose;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gse = async () => {
  try {
    const cose = await Sender.findAll();
    cose.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return cose;
  } catch (error) {
    throw new Error("Error al buscar los registros. " + error.message);
  }
};

module.exports = {
  pse,
  gse,
};
