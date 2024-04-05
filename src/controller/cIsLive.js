const { IsLive, UserName, Quincena } = require("../db.js");

const pil = async (coil) => {
  try {
    const rcoil = [];
    for (const i of coil) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userNameId = await UserName.findOne({
          where: {
            userName: i.codigo,
          },
        });
        const [r, c] = await IsLive.findOrCreate({
          where: {
            codigo: i.codigo,
            euros: i.euros,
            mensual: true,
          },
        });
        if (c) {
          await r.setCorte_isLive(userNameId);
          await r.setQ_isLive(quincena);
          rcoil.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoil.sort((a, b) => {
      return a.codigo.localeCompare(b.codigo);
    });
    return rcoil;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gil = async () => {
  try {
    const coil = await IsLive.findAll();
    coil.sort((a, b) => a.codigo.localeCompare(b.codigo));
    return coil;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pil,
  gil,
};
