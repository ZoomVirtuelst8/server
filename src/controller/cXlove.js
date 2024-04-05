const { Xlove, UserName, Quincena } = require("../db.js");

const pxl = async (coxl) => {
  try {
    const rcoxl = [];
    for (const i of coxl) {
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
        const r = await Xlove.create({
          userName: i.user,
          euros: i.euros,
          mensual: false,
        });

        if (r) {
          await r.setCorte_xlove(userNameId);
          await r.setQ_xlove(quincena);
          rcoxl.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoxl.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoxl;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gxl = async () => {
  try {
    const coxl = await Xlove.findAll();
    coxl.sort((a, b) => a.userName.localeCompare(b.userName));
    return coxl;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pxl,
  gxl,
};
