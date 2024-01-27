const { Mondo, UserName, Quincena } = require("../../db.js");

const postMondo = async (mondo) => {
  try {
    const rMondo = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of mondo) {
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
        const r = await Mondo.create({
          userName: i.user,
          euros: i.euros,
          mensual: false,
        });
        if (r) {
          await r.setCorte_mondo(userNameId);
          await r.setQ_mondo(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rMondo.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rMondo;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  postMondo,
};
