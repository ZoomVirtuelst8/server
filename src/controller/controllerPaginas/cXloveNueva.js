const { XloveNueva, UserName, Quincena } = require("../../db.js");

const pxln = async (coxln) => {
  try {
    const rcoxln = [];
    for (const i of coxln) {
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
        const r = await XloveNueva.create({
          userName: i.user,
          fecha: i.fecha,
          euros: i.euros,
          mensual: false,
        });
        if (r) {

          await r.setCorte_xloveNueva(userNameId);
          await r.setQ_xloveNueva(quincena);
          rcoxln.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoxln.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoxln;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gxln = async () => {
  try {
    const coxln = await XloveNueva.findAll();
    coxln.sort((a, b) => a.userName.localeCompare(b.userName));
    return coxln;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pxln,
  gxln,
};
