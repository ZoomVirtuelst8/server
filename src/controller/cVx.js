const { Vx, UserName, Quincena } = require("../db.js");

const pvx = async (covx) => {
  try {
    const rcovx = [];
    for (const i of covx) {
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
        const r = await Vx.create({
          userName: i.user,
          euros: i.euros,
          mensual: false,
        });
        if (r) {
          await r.setCorte_vx(userNameId);
          await r.setQ_vx(quincena);
          rcovx.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcovx.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcovx;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gvx = async () => {
  try {
    const covx = await Vx.findAll();
    covx.sort((a, b) => a.userName.localeCompare(b.userName));
    return covx;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pvx,
  gvx,
};
