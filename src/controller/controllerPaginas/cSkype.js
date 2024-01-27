const { Skype, UserName, Quincena } = require("../../db.js");

const psk = async (cosk) => {
  try {
    const rcosk = [];
    for (const i of cosk) {
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
      const [r, c] = await Skype.findOrCreate({
        where: {
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        await r.setCorte_skype(userNameId);
        await r.setQ_skype(quincena);
        rcosk.push(r);
      }
    } catch (error) {
      console.error("Error en una iteración del bucle:", error);
      // Continuar con la próxima iteración
    }
    }
    rcosk.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcosk;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gsk = async () => {
  try {
    const cosk = await Skype.findAll();
    cosk.sort((a, b) => a.userName.localeCompare(b.userName));
    return cosk;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  psk,
  gsk,
};
