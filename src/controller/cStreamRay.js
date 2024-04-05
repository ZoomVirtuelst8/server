const { StreamRay, UserName, Quincena } = require("../db.js");

const postStreamRay = async (streamRay) => {
  try {
    const rstreamRay = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of streamRay) {
      try {
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const r = await StreamRay.create({
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        });
        if (r) {
          await r.setCorte_streamRay(userNameId);
          await r.setQ_streamRay(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rstreamRay.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rstreamRay;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  postStreamRay,
};
